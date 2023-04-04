$(document).ready(function () {

  $("#gridSolderDetail").jqxGrid(
  {
    width: '60%',
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
      { text: 'Item Code', datafield: 'SolderItemCD', width: 120, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
      { text: 'Item Name', datafield: 'SolderItemName', minwidth: 120, align: 'center', cellsalign: 'center'},
      { text: 'Type', datafield: 'Type', width: 120, align: 'center', cellsalign: 'center', aggregates: ['count']},
      { text: 'Maker', datafield: 'Maker', width: 120, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
      { text: 'Date', datafield: 'Date_Update', width: 150, align: 'center', cellsalign: 'center'},
      { text: 'edit', datafield: 'edit', width: 50, columntype: 'button', cellsrenderer: function () {
               return "Edit";
            }, buttonclick: function (row) {
               // open the popup window when the user clicks a button.
               editrow = row;
               // get the clicked row's data and initialize the input fields.
               var dataRecord = $("#gridSolderDetail").jqxGrid('getrowdata', editrow);
               let vID = dataRecord.ID;
               let vCustomer = dataRecord.Customer;
               let vItemCD = dataRecord.ItemCD;
               let vModel = dataRecord.Model;
               let vWIPProcess = dataRecord.WIPProcess;
               let vSolderItemCD = dataRecord.SolderItemCD;
               let vSolderItemName = dataRecord.SolderItemName;
               let vUsage = dataRecord.Usage;

               if(vID != '')
               {
                 //$("#vPG_Model").val(vModel);
                 //$("#vPG_Group").val(vGroupModel);
                 //$("#vPG_ID").val(vID);

                 //$("#vWDPcbGroup").html("Edit");
                 //$("#windowPcbGroup").jqxWindow('open');
               }
          }
        },
        { text: 'delete', datafield: 'delete', width: 50, columntype: 'button', cellsrenderer: function () {
                 return "Delete";
              }, buttonclick: function (row) {
                 // open the popup window when the user clicks a button.
                 editrow = row;
                 // get the clicked row's data and initialize the input fields.
                 var dataRecord = $("#gridSolderDetail").jqxGrid('getrowdata', editrow);
                 let vID = dataRecord.ID;
                 let vItemCD = dataRecord.ItemCD;
                 var r = confirm("Do you want to delete No.: "+ vItemCD + "?");
                 if (r == true) {
                   //STBL_MODEL_GROUP_DEL(vID);
                 }
            }
          }
      ]
  });
  STBL_SEC_SOLDER();

});


function STBL_SEC_SOLDER() {
            var pName = '';
            var act = 'STBL_SEC_SOLDER';
            var url = "main.class.php?action="+act;
            var pData = {
                Name : pName
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
                    { name: 'SolderItemCD', type: 'string' },
                    { name: 'SolderItemName', type: 'string' },
                    { name: 'Type', type: 'string' },
                    { name: 'Maker', type: 'string' },
                    { name: 'Date_Update', type: 'string' }
                ]
            };
            var gridPlan = new $.jqx.dataAdapter(source);
             $("#gridSolderDetail").jqxGrid({source: gridPlan});
  }
