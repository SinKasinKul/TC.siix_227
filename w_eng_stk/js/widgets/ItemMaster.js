$(document).ready(function () {
    var dataAdapterType;
    $("#pI_Item_CD").jqxInput({height: 30, width: 120, minLength: 1, theme: 'energyblue'});
    $("#pI_Item_DESC").jqxInput({height: 30, width: 300, minLength: 1, theme: 'energyblue'});
    $("#pI_USE_PRE_MONTH").jqxNumberInput({height: 30, width: 80 , min: 0, theme: 'energyblue', decimalDigits: 0,digits:3});
    $("#pI_LEAD_TIME_DAY").jqxNumberInput({height: 30, width: 80 , min: 0, theme: 'energyblue', decimalDigits: 0,digits:3});
    $("#pI_SAFETY_STK").jqxNumberInput({height: 30, width: 80 , min: 0, theme: 'energyblue', decimalDigits: 0,digits:4});
    $("#pI_SAFETY_STK").keypress(function( event ) {
      if ( event.which == 13 ) {
        var vLEAD_TIME_DAY = $('#pI_LEAD_TIME_DAY').val();
        var vpI_USE_PRE_MONTH = $('#pI_USE_PRE_MONTH').val();
        var vSAFETY_STK = Math.ceil((vLEAD_TIME_DAY/30) * vpI_USE_PRE_MONTH);
        //alert(vSAFETY_STK);
        $('#pI_SAFETY_STK').val(vSAFETY_STK);
      }
    });
    $("#pI_EMP").jqxInput({height: 30, width: 80, minLength: 1, theme: 'energyblue',disabled:true});

    $("#pI_TYPE").jqxComboBox({ selectedIndex: 0, displayMember: "I_TYPE", valueMember: "I_TYPE",autoDropDownHeight:true, width: 100, height: 25, theme: 'energyblue'});

    $("#SaveItem").click(function() { STBL_ITEM_MASTER_MS(); });
    $("#ClearItem").click(function() { clareDataItem(); });

    $("#gridItemMaster").jqxGrid({
                width: 1075,
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
                  { text: 'Item CD', datafield: 'I_ITEM_CD', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'Item DESC', datafield: 'I_ITEM_DESC', minwidth: 150, align: 'center'},
                  { text: 'Use/Month', datafield: 'I_USE_PRE_MONTH', width: 80, align: 'center', cellsalign: 'center'},
                  { text: 'Lead Time', datafield: 'I_LEAD_TIME_DAY', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'Safety STK', datafield: 'I_SAFETY_STK', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'Type', datafield: 'I_TYPE', width: 80, align: 'center', cellsalign: 'center'},
                  { text: 'Emp', datafield: 'I_EMP', width: 80, align: 'center', cellsalign: 'center'},
                  { text: 'Date', datafield: 'I_UPDATE_DATE', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'Edit', datafield: 'Edit', columntype: 'button', width: 50, align: 'center', cellsrenderer: function () {
                     return "Edit";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       var offset = $("#gridItemMaster").offset();
                       //$("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60 } });
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridItemMaster").jqxGrid('getrowdata', editrow);

                       $("#pI_ITEM_ID").val(dataRecord.ID);
                       $('#pI_Item_CD').val(dataRecord.I_ITEM_CD);
                       $('#pI_Item_DESC').val(dataRecord.I_ITEM_DESC);
                       $('#pI_USE_PRE_MONTH').val(dataRecord.I_USE_PRE_MONTH);
                       $('#pI_LEAD_TIME_DAY').val(dataRecord.I_LEAD_TIME_DAY);
                       $('#pI_SAFETY_STK').val(dataRecord.I_SAFETY_STK);
                       $('#pI_TYPE').val(dataRecord.I_TYPE);
                       $('#pI_EMP').val(dataRecord.I_EMP);
                   }
                  },
                  { text: 'Delete', datafield: 'Delete', columntype: 'button', width: 50, align: 'center', cellsrenderer: function () {
                     return "Delete";
                    }, buttonclick: function (row) {
                       deleterow = row;
                       var offset = $("#gridItemMaster").offset();
                       var dataRecord = $("#gridItemMaster").jqxGrid('getrowdata', deleterow);
                       $("#pI_ITEM_ID").val(dataRecord.ID);
                       var vI_Item_CD =  dataRecord.I_ITEM_CD;
                       var r = confirm("Delete Item CD "+ vI_Item_CD + " ?");
                         if (r == true) {
                             STBL_ITEM_MASTER_DEL(dataRecord.ID);
                         }
                   }
                  }
                ]
            });
            gridItemMaster('','');
            gridTypeMasters('','');
});
function gridTypeMasters(pID,pType) {
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
          var dataAdapterType = new $.jqx.dataAdapter(source);
          $("#pI_TYPE").jqxComboBox({source: dataAdapterType});
}
function gridItemMaster(pI_ITEM_CD,pI_ITEM_DESC) {
          var act = 'STBL_ITEM_MS_GET';
          var url = "main.class.php?action="+act
          +"&I_ITEM_ID="
          +"&I_ITEM_CD=" + pI_ITEM_CD
          +"&I_ITEM_DESCE=" + pI_ITEM_DESC
          +"&I_USE_PRE_MONTH="
          +"&I_LEAD_TIME_DAY="
          +"&I_SAFETY_STK="
          +"&I_TYPE="
          +"&I_EMP="
          +"&Actions=SELECT";

          var source =
          {
              datatype: "json",
              datafields: [
                  { name: 'ID', type: 'string' },
                  { name: 'I_ITEM_CD', type: 'string' },
                  { name: 'I_ITEM_DESC', type: 'string' },
                  { name: 'I_USE_PRE_MONTH', type: 'number' },
                  { name: 'I_LEAD_TIME_DAY', type: 'number' },
                  { name: 'I_SAFETY_STK', type: 'number' },
                  { name: 'I_TYPE', type: 'number' },
                  { name: 'I_EMP', type: 'string' },
                  { name: 'I_UPDATE_DATE', type: 'string' }
              ],
              url: url,
              root: 'data'
          };
          var dataAdapter = new $.jqx.dataAdapter(source);
           $("#gridItemMaster").jqxGrid({source: dataAdapter});
}

var STBL_ITEM_MASTER_MS = function(){

    var act = 'STBL_ITEM_MS_POST';
    var pI_ITEM_ID = $("#pI_ITEM_ID").val();
    var pI_Item_CD = $('#pI_Item_CD').val();
    var pI_Item_DESC = $('#pI_Item_DESC').val();
    var pI_USE_PRE_MONTH = $('#pI_USE_PRE_MONTH').val();
    var pI_LEAD_TIME_DAY = $('#pI_LEAD_TIME_DAY').val();
    var pI_SAFETY_STK = $('#pI_SAFETY_STK').val();
    var pI_TYPE = $('#pI_TYPE').val();
    var pI_EMP = $('#pI_EMP').val();
    var pActions = pI_ITEM_ID == '' ? 'INSERT' : 'UPDATE';

    var pData = {
      I_ITEM_ID : pI_ITEM_ID
     ,I_ITEM_CD : pI_Item_CD
     ,I_ITEM_DESC : pI_Item_DESC
     ,I_USE_PRE_MONTH : pI_USE_PRE_MONTH
     ,I_LEAD_TIME_DAY : pI_LEAD_TIME_DAY
     ,I_SAFETY_STK : pI_SAFETY_STK
     ,I_TYPE : pI_TYPE
     ,I_EMP : pI_EMP
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
                        clareDataItem();
                      }
                      notificationAlert(vRSts, vResult);
                      gridItemMaster('','');
                    }
                },
                error : function (data) {
                    alert( "Posting failed." );
                }
              });
}

var STBL_ITEM_MASTER_DEL = function(vID){

    var act = 'STBL_ITEM_MS_POST';
    var pI_ID = vID;
    var pActions = 'DELETE';

    var pData = {
      I_ITEM_ID : pI_ID
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
                          clareDataItem();
                        }
                        notificationAlert(vRSts, vResult);
                        gridItemMaster('','');
                      }
                  },
                  error : function (data) {
                      alert( "Posting failed." );
                  }
                });

}
function clareDataItem() {
  $("#pI_ITEM_ID").val("");
  $('#pI_Item_CD').val("");
  $('#pI_Item_DESC').val("");
  $('#pI_USE_PRE_MONTH').val("");
  $('#pI_LEAD_TIME_DAY').val("");
  $('#pI_SAFETY_STK').val("");
  $('#pI_TYPE').val("");
}
