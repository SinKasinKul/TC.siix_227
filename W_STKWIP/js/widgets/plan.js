$(document).ready(function () {
  $("#reloadPlan").jqxButton({ template: "success" });
  $('#reloadPlan').on('click', function () {
      gridPlan();
  });
  $("#ExportPlan").jqxButton();
  $("#ExportPlan").click(function () {
                  $("#gridPlan").jqxGrid('exportdata', 'csv', 'Plan_WIP_Export');
              });

  $("#gridPlan").jqxGrid(
          {
              width: 550,
              height: 543,
              altrows: true,
              sortable: true,
              showstatusbar: true,
              statusbarheight: 25,
              showaggregates: true,
              //showfilterrow: true,
              filterable: true,
              theme: "orange",
              selectionmode: 'multiplerowsextended',
              columns: [
                {
                      text: '#', sortable: false, filterable: false, editable: false,
                      groupable: false, draggable: false, resizable: false, align: 'center',
                      datafield: '', columntype: 'number', width: 30,
                      cellsrenderer: function (row, column, value) {
                          return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                      }
                },
                { text: 'Customer', datafield: 'WBS', width: 120, align: 'center', cellsalign: 'center'},
                { text: 'Plans', datafield: 'PLAN', width: 100, align: 'center', cellsalign: 'right',cellsformat: 'F0', aggregates: ['sum']},
                { text: 'WIP Stock', datafield: 'OnHandStock', width: 100, align: 'center', cellsalign: 'right',cellsformat: 'F0', aggregates: ['sum']},
                { text: '%', datafield: 'CalPLAN', width: 60, align: 'center', cellsalign: 'right',cellsformat: 'F2'},
                { text: 'Update Plan', datafield: 'Update Plan', minwidth: 120, columntype: 'button', align: 'center', cellsrenderer: function () {
                   return "Plan";
                }
                , buttonclick: function (row) {
                       editrow = row;
                       var offset = $("#gridPlan").offset();
                       var dataRecord = $("#gridPlan").jqxGrid('getrowdata', editrow);
                       var WBS = dataRecord.WBS;
                       $('#WIP_CUS').html(WBS);
                       $('#wPlan').jqxWindow('open');
                       $('#WIP_QTY').focus();
                   }
                }
              ]
          });
    $("#gridOnHandTotal").on("rowselect", function (event){
      var ITEMCD = event.args.row.ITEMCD;
      //$('#vItemCD').val(ITEMCD);
      //gridOnHandDetail(ITEMCD);
    });
  gridPlan();

  $("#wPlan").jqxWindow({
          width: 400,
          height: 180,
          resizable: false,
          isModal: false,
          autoOpen: false,
          showCollapseButton: true,
          cancelButton: $("#vCancel"),
          isModal: true,
          modalOpacity: 0.3
      });
  $("#vCancel").click(function () {
      //clareDataSTKOUT();
      $('#wPlan').jqxWindow('close');
  });
  $("#vSave").jqxButton({ template: "success" });
  $("#vCancel").jqxButton({ template: "danger" });

  $("#vSave").click(function () {
      //clareDataSTKOUT();
      let vCus = $('#WIP_CUS').html();
      let vQty = $('#WIP_QTY').val();
      STBL_UPD_PLAN(vCus,vQty);
  });
});

function gridPlan() {
            var act = 'STBL_PLAN_WITH_WIP';
            var url = "main.class.php?action="+act;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'WBS', type: 'string' },
                    { name: 'PLAN', type: 'number' },
                    { name: 'OnHandStock', type: 'number' },
                    { name: 'CalPLAN', type: 'string' }
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridPlan").jqxGrid({source: dataAdapter});
  }

  function STBL_UPD_PLAN(WBS,QTY) {

           var act = 'STBL_UPD_PLAN';
           var url = "main.class.php?action="+ act;
           var pData = {
               WBS : WBS,
               Qty : QTY
           };

           $.ajax({
                     type: "POST",
                     url: url,
                     dataType: "json",
                     data: pData,
                     success: function(e) {
                       var data = e;
                       var vResult = data.data[0].Result;

                       if(vResult == "Success"){
                           gridPlan();
                           $('#WIP_CUS').html('');
                           $('#WIP_QTY').val('');
                           $("#wPlan").jqxWindow('close');
                           alert(vResult);
                       }
                       else
                       {
                           alert(vResult);
                       }
                     },
                     error: function(xhr, status, error){
                       console.log(error);
                       $("#wPlan").jqxWindow('close');
                      alert("Error");
                      }
           });
  }
