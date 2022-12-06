$(document).ready(function () {
    $("#pI_TYPE_NAME").jqxInput({height: 30, width: 120, minLength: 1, theme: 'energyblue'});

    $("#SaveType").click(function() { STBL_TYPE_MASTER_MS(); });
    $("#ClearType").click(function() { clareData(); });

    $("#gridTypeMaster").jqxGrid({
                width: 415,
                height: 543,
                altrows: true,
                sortable: true,
                filterable: true,
                showfilterrow: false,
                showstatusbar: true,
                statusbarheight: 25,
                showaggregates: true,
                theme: "darkblue",
                selectionmode: 'multiplerowsextended',
                columns: [
                  { text: 'Type ID', datafield: 'ID', width: 70, align: 'center', cellsalign: 'center'},
                  { text: 'Type Name', datafield: 'I_TYPE', minwidth: 100, align: 'center', cellsalign: 'center'},
                  { text: 'Date Update', datafield: 'I_UPDATE_DATE', width: 120, align: 'center', cellsalign: 'center'},
                  { text: 'Edit', datafield: 'Edit', columntype: 'button', width: 50, align: 'center', cellsrenderer: function () {
                     return "Edit";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       var offset = $("#gridTypeMaster").offset();
                       //$("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60 } });
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridTypeMaster").jqxGrid('getrowdata', editrow);

                       $("#pI_TYPE_ID").val(dataRecord.ID);
                       $('#pI_TYPE_NAME').val(dataRecord.I_TYPE);
                   }
                  },
                  { text: 'Delete', datafield: 'Delete', columntype: 'button', width: 50, align: 'center', cellsrenderer: function () {
                     return "Delete";
                    }, buttonclick: function (row) {
                       deleterow = row;
                       var offset = $("#gridTypeMaster").offset();
                       var dataRecord = $("#gridTypeMaster").jqxGrid('getrowdata', deleterow);
                       $("#pI_TYPE_ID").val(dataRecord.ID);
                       var vpI_TYPE =  dataRecord.I_TYPE;
                       var r = confirm("Delete Type "+ vpI_TYPE + " ?");
                         if (r == true) {
                             STBL_TYPE_MASTER_DEL(dataRecord.ID);
                         }
                   }
                  }
                ]
            });
            gridTypeMaster('','');
});
function gridTypeMaster(pID,pType) {
          var act = 'STBL_TYPE_MS_GET';
          var url = "main.class.php?action="+act
          +"&I_TYPE_ID="+pID
          +"&I_TYPE="+pType
          +"&Actions=SELECT";

          var source =
          {
              datatype: "json",
              datafields: [
                  { name: 'ID', type: 'string' },
                  { name: 'I_TYPE', type: 'string' },
                  { name: 'I_UPDATE_DATE', type: 'string' }
              ],
              url: url,
              root: 'data'
          };
          var dataAdapter = new $.jqx.dataAdapter(source);
           $("#gridTypeMaster").jqxGrid({source: dataAdapter});
}
var STBL_TYPE_MASTER_MS = function(){

    var act = 'STBL_TYPE_MS_POST';
    var pI_ID = $("#pI_TYPE_ID").val();
    var pI_TYPE = $('#pI_TYPE_NAME').val();
    var pActions = pI_ID == '' ? 'INSERT' : 'UPDATE';

    var pData = {
      I_TYPE_ID : pI_ID
     ,I_TYPE : pI_TYPE
     ,Actions : pActions
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
                      if (vRSts == '1'){
                        clareData();
                      }
                      notificationAlert(vRSts, vResult);
                      gridTypeMaster('','');
                      gridTypeMasters('','');
                    }
                },
                error : function (data) {
                    alert( "Posting failed." );
                }
              });

}
var STBL_TYPE_MASTER_DEL = function(vID){

    var act = 'STBL_TYPE_MS_POST';
    var pI_ID = vID;
    var pI_TYPE = $('#pI_TYPE_NAME').val();
    var pActions = 'DELETE';

    var pData = {
      I_TYPE_ID : pI_ID
     ,I_TYPE : pI_TYPE
     ,Actions : pActions
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
                        if (vRSts == '1'){
                          clareData();
                        }
                        notificationAlert(vRSts, vResult);
                        gridTypeMaster('','');
                        gridTypeMasters('','');
                      }
                  },
                  error : function (data) {
                      alert( "Posting failed." );
                  }
                });

}
function clareData() {
  $("#pI_TYPE_NAME").val("");
  $('#pI_TYPE_ID').val("");
}
