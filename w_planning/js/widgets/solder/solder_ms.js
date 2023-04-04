$(document).ready(function () {


      $("#gridSolderMaster").jqxGrid(
      {
        width: '100%',
        height: 683,
        altrows: true,
        sortable: true,
        showstatusbar: true,
        statusbarheight: 25,
        showaggregates: true,
        showfilterrow: true,
        filterable: true,
        theme: "darkblue",
        pageable: true,
        pagesize: 20,
        selectionmode: 'multiplerowsextended',
        columns: [
          { text: 'Customer', datafield: 'CustomerName', width: 120, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
          { text: 'Item CD', datafield: 'ItemCD', width: 120, align: 'center', cellsalign: 'center'},
          { text: 'Model', datafield: 'Model', minwidth: 180, align: 'center', cellsalign: 'center', aggregates: ['count']},
          { text: 'WIP Process', datafield: 'WIPProcess', width: 120, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
          { text: 'Solder Item', datafield: 'SolderItemCD', width: 100, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
          { text: 'Solder Name', datafield: 'SolderItemName', width: 250, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
          { text: 'Usage', datafield: 'Usage', width: 100, align: 'center', cellsalign: 'center'},
          { text: 'Date', datafield: 'Date_Update', width: 150, align: 'center', cellsalign: 'center'},
          { text: 'edit', datafield: 'edit', width: 50, columntype: 'button', cellsrenderer: function () {
                   return "Edit";
                }, buttonclick: function (row) {
                   // open the popup window when the user clicks a button.
                   editrow = row;
                   // get the clicked row's data and initialize the input fields.
                   var dataRecord = $("#gridSolderMaster").jqxGrid('getrowdata', editrow);
                   let vID = dataRecord.ID;
                   let vCustomer = dataRecord.CustomerName;
                   let vItemCD = dataRecord.ItemCD;
                   let vModel = dataRecord.Model;
                   let vWIPProcess = dataRecord.WIPProcess;
                   let vSolderItemCD = dataRecord.SolderItemCD;
                   let vSolderItemName = dataRecord.SolderItemName;
                   let vUsage = dataRecord.Usage;

                   if(vID != '')
                   {
                     $("#pSolderID").val(vID);
                     $("#pCustomer").val(vCustomer);
                     $("#pItemCD").val(vItemCD);
                     $("#pModel").val(vModel);
                     $("#pWIPProcess").val(vWIPProcess);
                     $("#pSolderItem").val(vSolderItemCD);
                     $("#pSolderName").val(vSolderItemName);
                     $("#pUsage").val(vUsage);

                     $("#SolderWindowHeader").html("Update Solder");
                     $('#wSolderMS').jqxWindow('open');
                   }
              }
            },
            { text: 'delete', datafield: 'delete', width: 50, columntype: 'button', cellsrenderer: function () {
                     return "Delete";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridSolderMaster").jqxGrid('getrowdata', editrow);
                     let vID = dataRecord.ID;
                     let vItemCD = dataRecord.ItemCD;
                     var r = confirm("Do you want to delete No.: "+ vItemCD + "?");
                     if (r == true) {
                       STBL_DEL_SOLDER_MS(vID);
                     }
                }
              }
          ]
      });
      STBL_SEC_SOLDER_MS();
      $("#csvSolderMasterExport").click(function () {
                $("#gridSolderMaster").jqxGrid('exportdata', 'csv', 'MasterSolder');
            });

      $("#pCustomer").jqxInput({ width: '100%', height: 25});
      $("#pItemCD").jqxInput({ width: '100%', height: 25});
      $("#pModel").jqxInput({ width: '100%', height: 25});
      //$("#pType").jqxInput({ width: '100%', height: 25});
      $("#pWIPProcess").jqxInput({ width: '100%', height: 25});

      var vSolderList = SolderList();
      $("#pSolderItem").jqxInput({source: vSolderList, width: '100%', height: 25, displayMember: "SolderItemCD", valueMember: "SolderItemName"});
      $("#pSolderItem").on('select', function (event) {
                    if (event.args) {
                        var item = event.args.item;
                        if (item) {

                            $("#pSolderName").val(item.value);
                        }
                    }
                });


      $("#pSolderName").jqxInput({ width: '100%', height: 25});
      $("#pUsage").jqxInput({ width: '100%', height: 25});

      $("#wSolderMS").jqxWindow({
              width: 550,
              height: 530,
              resizable: false,
              autoOpen: false,
              showCollapseButton: true,
              cancelButton: $("#vAddPlanClose"),
              isModal: true,
              modalOpacity: 0.3
          });
      $("#vbtAddSolder").click(function () {
            $("#SolderWindowHeader").html("Add Solder");
            clearSolderFrom();
            $('#wSolderMS').jqxWindow('open');
        });
      $("#vAddSolderClose").click(function () {
            $('#wSolderMS').jqxWindow('close');
            clearSolderFrom();
        });
      $("#vbtReload").click(function () {
            STBL_SEC_SOLDER_MS();
        });
      $("#vAddSolderSave").click(function () {
            var vType = $("#SolderWindowHeader").html();
            if(vType == 'Add Solder')
            {
                STBL_INC_SOLDER_MS();
            }
            else if(vType == 'Update Solder')
            {
                STBL_UPD_SOLDER_MS();
            }
        });
});

function clearSolderFrom(){
  $("#pSolderID").val('');
  $("#pCustomer").val('');
  $("#pItemCD").val('');
  $("#pModel").val('');
  $("#pWIPProcess").val('');
  $("#pSolderItem").val('');
  $("#pSolderName").val('');
  $("#pUsage").val('');
}

function STBL_SEC_SOLDER_MS() {
            var pDate = '';
            var act = 'STBL_SEC_SOLDER_MS';
            var url = "main.class.php?action="+act;
            var pData = {
                Date : pDate
            };
            var source =
            {
                datatype: "json",
                url: url,
                type : 'POST',
                data : pData,
                root: 'data',
                datafields: [
                    { name: 'ID', type: 'string' },
                    { name: 'CustomerName', type: 'string' },
                    { name: 'ItemCD', type: 'string' },
                    { name: 'Model', type: 'string' },
                    { name: 'WIPProcess', type: 'string' },
                    { name: 'SolderItemCD', type: 'string' },
                    { name: 'SolderItemName', type: 'string' },
                    { name: 'Usage', type: 'string' },
                    { name: 'Date_Update', type: 'string' }
                ]
            };
            var gridPlan = new $.jqx.dataAdapter(source);
             $("#gridSolderMaster").jqxGrid({source: gridPlan});
  }

  function STBL_UPD_SOLDER_MS() {

           var pSolderID    = $("#pSolderID").val();
           var pCustomer    = $("#pCustomer").val();
           var pItemCD      = $("#pItemCD").val();
           var pModel       = $("#pModel").val();
           var pWIPProcess  = $("#pWIPProcess").val();
           var pSolderItem  = $("#pSolderItem").val();
           var pSolderName  = $("#pSolderName").val();
           var pUsage       = $("#pUsage").val();

           var act = 'STBL_UPD_SOLDER_MS';
           var url = "main.class.php?action="+ act;
           var pData = {
               ID : pSolderID,
               CustomerName : pCustomer,
               ItemCD : pItemCD,
               Model : pModel,
               WIPProcess : pWIPProcess,
               SolderItemCD : pSolderItem,
               SolderItemName : pSolderName,
               Usage : pUsage
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
                           STBL_SEC_SOLDER_MS();
                           ShowNoti(vResult,"success");
                           clearSolderFrom();
                           $("#wSolderMS").jqxWindow('close');
                       }
                       else
                       {
                           ShowNoti(vResult,"warning");
                       }
                     },
                     error: function(xhr, status, error){
                       console.log(error);
                         alert("Error");
                      }
           });
  }

  function STBL_INC_SOLDER_MS() {

           var pSolderID    = $("#pSolderID").val();
           var pCustomer    = $("#pCustomer").val();
           var pItemCD      = $("#pItemCD").val();
           var pModel       = $("#pModel").val();
           var pWIPProcess  = $("#pWIPProcess").val();
           var pSolderItem  = $("#pSolderItem").val();
           var pSolderName  = $("#pSolderName").val();
           var pUsage       = $("#pUsage").val();

           var act = 'STBL_INC_SOLDER_MS';
           var url = "main.class.php?action="+ act;
           var pData = {
               CustomerName : pCustomer,
               ItemCD : pItemCD,
               Model : pModel,
               WIPProcess : pWIPProcess,
               SolderItemCD : pSolderItem,
               SolderItemName : pSolderName,
               Usage : pUsage
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
                           STBL_SEC_SOLDER_MS();
                           ShowNoti(vResult,"success");
                           clearSolderFrom();
                           $("#wSolderMS").jqxWindow('close');
                       }
                       else
                       {
                           ShowNoti(vResult,"warning");
                       }
                     },
                     error: function(xhr, status, error){
                       console.log(error);
                         alert("Error");
                      }
           });
  }

  function STBL_DEL_SOLDER_MS(ID) {

           var pSolderID    = ID;

           var act = 'STBL_DEL_SOLDER_MS';
           var url = "main.class.php?action="+ act;
           var pData = {
               ID : pSolderID,
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
                           STBL_SEC_SOLDER_MS();
                           ShowNoti(vResult,"success");
                           clearSolderFrom();
                           $("#wSolderMS").jqxWindow('close');
                       }
                       else
                       {
                           ShowNoti(vResult,"warning");
                       }
                     },
                     error: function(xhr, status, error){
                       console.log(error);
                         alert("Error");
                      }
           });
  }

function SolderList()
{
  var pDate = '';
  var act = 'STBL_SOLDER_LIST';
  var url = "main.class.php?action="+act;
  var pData = {
      ID : ''
  };
  var source =
  {
      datatype: "json",
      url: url,
      type : 'POST',
      data : pData,
      root: 'data',
      datafields: [
          { name: 'SolderItemCD', type: 'string' },
          { name: 'SolderItemName', type: 'string' }
      ]
  };
  var solderList = new $.jqx.dataAdapter(source);
  return solderList;
}
