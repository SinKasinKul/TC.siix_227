$(document).ready(function () {

      $("#vPG_Model").jqxInput({placeHolder: 'Model', height: 25, width: '100%', minLength: 1,theme: "darkblue"});
      $("#vPG_Group").jqxInput({placeHolder: 'Group', height: 25, width: '100%', minLength: 1,theme: "darkblue"});
      $("#pModel").jqxInput({placeHolder: 'Model', height: 25, width: '50%', minLength: 1,theme: "darkblue"});
      $("#gridPCBGroup").jqxGrid(
      {
        width: '100%',
        height: 543,
        altrows: true,
        sortable: true,
        showstatusbar: true,
        statusbarheight: 25,
        showaggregates: true,
        showfilterrow: false,
        filterable: true,
        theme: "darkblue",
        selectionmode: 'multiplerowsextended',
        columns: [
          { text: '#', datafield: 'ID', width: 40, align: 'center', cellsalign: 'center'},
          { text: 'Model', datafield: 'Model', minwidth: 180, align: 'center', cellsalign: 'center'},
          { text: 'Group', datafield: 'GroupModel', width: 180, align: 'center'},
          { text: 'edit', datafield: 'edit', width: 50, columntype: 'button', cellsrenderer: function () {
                   return "Edit";
                }, buttonclick: function (row) {
                   // open the popup window when the user clicks a button.
                   editrow = row;
                   // get the clicked row's data and initialize the input fields.
                   var dataRecord = $("#gridPCBGroup").jqxGrid('getrowdata', editrow);
                   let vID = dataRecord.ID;
                   let vModel = dataRecord.Model;
                   let vGroupModel = dataRecord.GroupModel;

                   if(vID != '')
                   {
                     $("#vPG_Model").val(vModel);
                     $("#vPG_Group").val(vGroupModel);
                     $("#vPG_ID").val(vID);

                     $("#vWDPcbGroup").html("Edit");
                     $("#windowPcbGroup").jqxWindow('open');
                   }
              }
            },
            { text: 'delete', datafield: 'delete', width: 50, columntype: 'button', cellsrenderer: function () {
                     return "Delete";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridPCBGroup").jqxGrid('getrowdata', editrow);
                     let vID = dataRecord.ID;
                     var r = confirm("Do you want to delete No.: "+ vID + "?");
                     if (r == true) {
                       STBL_MODEL_GROUP_DEL(vID);
                     }
                }
              }
          ]
      });
      STBL_MODEL_GROUP_SEC();

      $("#vbtLoad").click(function () {
          STBL_MODEL_GROUP_SEC();
        });

      $("#vbtAddGroup").click(function( event ) {
          $("#vWDPcbGroup").html("Add");
          $("#windowPcbGroup").jqxWindow('open');
      });

        /*---------Update Status POP UP------------*/
          $("#windowPcbGroup").jqxWindow({
                  width: 600,
                  height: 225,
                  resizable: false,
                  autoOpen: false,
                  showCollapseButton: true,
                  isModal: true,
                  modalOpacity: 0.3
              });
        /*-------------------------------------------*/
        $('#windowPcbGroup').on('close', function (event) {
            clearMGRCHALFrom();
        });

        $("#vPG_Save").click(function () {
            var vType = $("#vWDPcbGroup").html();
            if(vType == 'Add')
            {
                STBL_MODEL_GROUP_INS();
            }
            else
            {
                STBL_MODEL_GROUP_UPD();
            }
          });

        $("#vPG_Cancel").click(function () {
            clearPGFrom();
            $("#windowPcbGroup").jqxWindow('close');
          });
});

function clearPGFrom(){
  $("#vPG_Model").val('');
  $("#vPG_Group").val('');
  $("#vPG_ID").val('');
}

function STBL_MODEL_GROUP_SEC() {

            var vModel = $("#pModel").val();
            var act = 'STBL_MODEL_GROUP_SEC';
            var url = "main.class.php?action="+act;
            var pData = {
                Model : vModel
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
                    { name: 'Model', type: 'string' },
                    { name: 'GroupModel', type: 'string' },
                    { name: 'Date_Update', type: 'string' }
                ]
            };
            var gridPCBGroup = new $.jqx.dataAdapter(source);
             $("#gridPCBGroup").jqxGrid({source: gridPCBGroup});
  }

  function STBL_MODEL_GROUP_INS() {

           var pModel = $("#vPG_Model").val();
           var pGroupModel = $("#vPG_Group").val();

           var act = 'STBL_MODEL_GROUP_INS';
           var url = "main.class.php?action="+ act;
           var pData = {
               Model : pModel,
               GroupModel : pGroupModel
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
                           STBL_MODEL_GROUP_SEC();
                           ShowNoti(vResult,"success");
                           clearPGFrom();
                           $("#windowPcbGroup").jqxWindow('close');
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

  function STBL_MODEL_GROUP_UPD() {

           var pModel = $("#vPG_Model").val();
           var pGroupModel = $("#vPG_Group").val();
           var pID = $("#vPG_ID").val();

           var act = 'STBL_MODEL_GROUP_UPD';
           var url = "main.class.php?action="+ act;
           var pData = {
               Model : pModel,
               GroupModel : pGroupModel,
               ID : pID
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
                           STBL_MODEL_GROUP_SEC();
                           ShowNoti(vResult,"success");
                           clearPGFrom();
                           $("#windowPcbGroup").jqxWindow('close');
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

  function STBL_MODEL_GROUP_DEL(pID) {

           var pID = pID;

           var act = 'STBL_MODEL_GROUP_DEL';
           var url = "main.class.php?action="+ act;
           var pData = {
               ID : pID
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
                           STBL_MODEL_GROUP_SEC();
                           ShowNoti(vResult,"success");
                           clearPGFrom();
                           $("#windowPcbGroup").jqxWindow('close');
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
