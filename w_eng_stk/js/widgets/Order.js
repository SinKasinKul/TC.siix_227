$(document).ready(function () {

$("#gridOrderStock").jqxGrid({
            width: 1045,
            height: 543,
            altrows: true,
            sortable: true,
            filterable: true,
            showfilterrow: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            theme: "darkblue",
            selectionmode: 'multiplerowsextended',
            columns: [
              { text: 'No.', datafield: 'ID', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Item CD', datafield: 'I_ITEM_CD', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Item DESC', datafield: 'I_ITEM_DESC', minwidth: 150, align: 'center'},
              { text: 'Ref.PR', datafield: 'I_PR_ref', width: 80, align: 'center', cellsalign: 'center'},
              { text: 'Ref.PO', datafield: 'I_PO_ref', width: 80, align: 'center', cellsalign: 'center'},
              { text: 'Status', datafield: 'I_Status', width: 120, align: 'center', cellsalign: 'center'},
              { text: 'PIC', datafield: 'I_EMP', width: 80, align: 'center', cellsalign: 'center'},
              { text: 'Date Update', datafield: 'I_UPDATE_DATE', width: 150, align: 'center', cellsalign: 'center'},
              { text: 'Update', datafield: 'Update', columntype: 'button', width: 80, align: 'center', cellsrenderer: function () {
                 return "Update";
                }, buttonclick: function (row) {
                   // open the popup window when the user clicks a button.
                   editrow = row;
                   var offset = $("#gridOrderStock").offset();
                   //$("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60 } });
                   // get the clicked row's data and initialize the input fields.
                   var dataRecord = $("#gridOrderStock").jqxGrid('getrowdata', editrow);

                   $("#STK_Orderr_ID").val(dataRecord.ID);

                   $('#wConfirmOrder').jqxWindow('open');
               }
              },,
              { text: 'Delete', datafield: 'Delete', columntype: 'button', width: 50, align: 'center', cellsrenderer: function () {
                 return "Delete";
                }, buttonclick: function (row) {
                   deleterow = row;
                   var offset = $("#gridOrderStock").offset();
                   var dataRecord = $("#gridOrderStock").jqxGrid('getrowdata', deleterow);

                   var vI_ID =  dataRecord.ID;
                   var vI_ITEM_CD =  dataRecord.I_ITEM_CD;
                   var pI_EMP = $('#pI_EMP').val();
                   var r = confirm("Delete Order Item "+ vI_ITEM_CD + " ?");
                     if (r == true) {
                         STBL_ORDER_LIST_DEL(dataRecord.ID);
                     }
               }
              }
            ]
        });
        gridOrderStock();

        $("#wConfirmOrder").jqxWindow({
                width: 400,
                height: 200,
                resizable: false,
                isModal: false,
                autoOpen: false,
                showCollapseButton: true,
                cancelButton: $("#CancelConfirmOrder"),
                isModal: true,
                modalOpacity: 0.3
            });
        $("#CancelConfirmOrder").click(function () {
            //clareDataSTKIN();
            $('#wConfirmOrder').jqxWindow('close');
        });

        $("#SaveConfirmOrder").click(function () {
            STBL_ORDER_LIST_UPD();
        });

        $("#vOrderReLoad").click(function() { gridOrderStock(); });
        $("#vOrderReLoad").jqxButton({ template: "primary" });
});


function gridOrderStock() {
          var act = 'STBL_ORDER_LIST';
          var url = "main.class.php?action=" + act;

          var source =
          {
              datatype: "json",
              datafields: [
                  { name: 'ID', type: 'number' },
                  { name: 'I_ITEM_CD', type: 'string' },
                  { name: 'I_ITEM_DESC', type: 'string' },
                  { name: 'I_PR_ref', type: 'string' },
                  { name: 'I_PO_ref', type: 'string' },
                  { name: 'I_Status', type: 'string' },
                  { name: 'I_EMP', type: 'string' },
                  { name: 'I_UPDATE_DATE', type: 'string' }
              ],
              url: url,
              root: 'data'
          };
          var dataAdapter = new $.jqx.dataAdapter(source);
           $("#gridOrderStock").jqxGrid({source: dataAdapter});
}

var STBL_ORDER_LIST_DEL = function(vID){

    var act = 'STBL_ORDER_LIST_DEL';
    var pID = vID;

    var pData = {
      ID : pID
    };

        $.ajax({
                type: "POST",
                url: "main.class.php?action="+ act,
                dataType: "json",
                data: pData,
                success: function(data) {
                  if(data.data[0]){
                      var vdata = data.data[0];
                      var vRSts = vdata.RSts;
                      var vResult = vdata.Result;

                      notificationAlert(vRSts, vResult);
                      gridOrderStock();
                    }
                },
                error : function (data) {
                    alert( "Posting failed." );
                }
              });
}

var STBL_ORDER_LIST_UPD = function(){

    var act = 'STBL_ORDER_LIST_UPD';
    var pID =  $("#STK_Orderr_ID").val();
    var pRefPR = $("#STK_REF_PR").val();
    var pRefPO = $("#STK_REF_PO").val();
    var pEmp = $('#pI_EMP').val();

    var pData = {
      ID : pID
      ,RefPR : pRefPR
      ,RefPO : pRefPO
      ,Emp : pEmp
    };

        $.ajax({
                type: "POST",
                url: "main.class.php?action="+ act,
                dataType: "json",
                data: pData,
                success: function(data) {
                  if(data.data[0]){
                      var vdata = data.data[0];
                      var vRSts = vdata.RSts;
                      var vResult = vdata.Result;

                      notificationAlert(vRSts, vResult);
                      $('#wConfirmOrder').jqxWindow('close');
                      gridOrderStock();
                    }
                },
                error : function (data) {
                    $('#wConfirmOrder').jqxWindow('close');
                    alert( "Posting failed." );
                }
              });
}
