$(document).ready(function () {
  $('#Item_Master_Tabs').jqxTabs({ width: '99.90%', position: 'top', theme: 'energyblue'});
  $('#CurDate').html(NowDate);

  $("#pI_ITEM_CD").jqxInput({height: 30, width: 120, minLength: 1, theme: 'energyblue'});
  $("#pI_ITEM_DESC").jqxInput({height: 30, width: 250, minLength: 1, theme: 'energyblue'});
  $("#pI_ITEM_MODEL").jqxInput({height: 30, width: 250, minLength: 1, theme: 'energyblue'});

  var dataType = "data/Type.txt";
  var sourceType =
                {
                    datatype: "json",
                    datafields: [
                        { name: 'TypeID' },
                        { name: 'TypeName' }
                    ],
                    url: dataType,
                    async: false
                };
  var dataAdapterType = new $.jqx.dataAdapter(sourceType);
  $("#pI_TYPE").jqxComboBox({ selectedIndex: 0, source: dataAdapterType, displayMember: "TypeName", valueMember: "TypeName",autoDropDownHeight:true, width: 100, height: 25, theme: 'energyblue'});
  $('#pI_TYPE').on('select', function (event)
  {
        var args = event.args;
        if (args) {
            // index represents the item's index.
            var index = args.index;
            var item = args.item;
            // get item's label and value.
            var label = item.label;
            console.log(label);
            var value = item.value;
            var type = args.type; // keyboard, mouse or null depending on how the item was selected.
        }

        ChkType(label);
  });
  $("#pI_MOQ").jqxInput({height: 25, width: 80, minLength: 1, disabled:true, theme: 'energyblue'});
  $("#pI_SPQ").jqxInput({height: 25, width: 80, minLength: 1, disabled:true, theme: 'energyblue'});
  $("#pI_MAX_STK").jqxInput({height: 25, width: 80, minLength: 1, disabled:true, theme: 'energyblue'});

  var dataActive = "data/Active.txt";
  var sourceActive =
                {
                    datatype: "json",
                    datafields: [
                        { name: 'ActiveID' },
                        { name: 'ActiveName' }
                    ],
                    url: dataActive,
                    async: false
                };
  var dataAdapterActive = new $.jqx.dataAdapter(sourceActive);
  $("#pI_ACTIVE").jqxComboBox({ selectedIndex: 0, source: dataAdapterActive, displayMember: "ActiveName", valueMember: "ActiveName",autoDropDownHeight:true, width: 100, height: 25, theme: 'energyblue'});

ChkType($("#pI_TYPE").val());

  $("#ItemLoad").click(function() {
      gridItemMaster('','');
  });

  $("#Save").click(function() {
      STBL_ITEM_MASTER_INS();
  });
  $("#Clear").click(function() {
      clareData();
  });

  $("#gridItemMaster").jqxGrid({
              width: 1180,
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
                { text: 'ItemCD', datafield: 'I_ITEM_CD', width: 150, align: 'center', cellsalign: 'center'},
                { text: 'Description', datafield: 'I_ITEM_DESC', width: 250, align: 'center', cellsalign: 'center'},
                { text: 'Model', datafield: 'I_ITEM_MODEL', minwidth: 100, align: 'center', cellsalign: 'center'},
                { text: 'Type', datafield: 'I_TYPE', width: 80, align: 'center', cellsalign: 'center'},
                { text: 'MOQ', datafield: 'I_MOQ', width: 80, align: 'center', cellsalign: 'center'},
                { text: 'SPQ', datafield: 'I_SPQ', width: 80, align: 'center', cellsalign: 'center'},
                { text: 'Max STK', datafield: 'I_MAX_STK', width: 80, align: 'center', cellsalign: 'center'},
                { text: 'ACTIVE', datafield: 'I_ACTIVE', width: 80, align: 'center', cellsalign: 'center'},
                { text: 'Date Update', datafield: 'I_DATE_UPDATE', width: 120, align: 'center', cellsalign: 'center'},
                { text: 'Edit', datafield: 'Edit', columntype: 'button', width: 50, align: 'center', cellsrenderer: function () {
                   return "Edit";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     var offset = $("#gridItemMaster").offset();
                     //$("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60 } });
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridItemMaster").jqxGrid('getrowdata', editrow);

                     $("#pI_ITEM_CD").val(dataRecord.I_ITEM_CD);
                     $('#pI_ITEM_DESC').val(dataRecord.I_ITEM_DESC);
                     $('#pI_ITEM_MODEL').val(dataRecord.I_ITEM_MODEL);
                     $('#pI_TYPE').val(dataRecord.I_TYPE);
                     $('#pI_MOQ').val(dataRecord.I_MOQ);
                     $('#pI_SPQ').val(dataRecord.I_SPQ);
                     $('#pI_MAX_STK').val(dataRecord.I_MAX_STK);
                     $('#pI_ACTIVE').val(dataRecord.I_ACTIVE);
                 }
                },
                { text: 'Delete', datafield: 'Delete', columntype: 'button', width: 50, align: 'center', cellsrenderer: function () {
                   return "Delete";
                  }, buttonclick: function (row) {
                     deleterow = row;
                     var offset = $("#gridItemMaster").offset();
                     var dataRecord = $("#gridItemMaster").jqxGrid('getrowdata', deleterow);
                     $("#pI_ITEM_CD").val(dataRecord.ID);
                     var vI_ITEM_CD =  dataRecord.I_ITEM_CD;
                     var r = confirm("Delete Item Code "+ vI_ITEM_CD + " ?");
                       if (r == true) {
                           STBL_ITEM_MASTER_DEL(dataRecord.ID);
                       }
                 }
                }
              ]
          });

          gridItemMaster('','');
});
function gridItemMaster(pItem,pType) {
          var act = 'STBL_ITEM_MASTER';
          var url = "main.class.php?action="+act
          +"&I_ITEM_ID="+pItem
          +"&I_TYPE="+pType;

          var source =
          {
              datatype: "json",
              datafields: [
                  { name: 'ID', type: 'string' },
                  { name: 'I_ITEM_CD', type: 'string' },
                  { name: 'I_ITEM_DESC', type: 'string' },
                  { name: 'I_ITEM_MODEL', type: 'string' },
                  { name: 'I_TYPE', type: 'string' },
                  { name: 'I_MOQ', type: 'string' },
                  { name: 'I_SPQ', type: 'string' },
                  { name: 'I_MAX_STK', type: 'string' },
                  { name: 'I_ACTIVE', type: 'string' },
                  { name: 'I_DATE_UPDATE', type: 'string' }
              ],
              url: url,
              root: 'data'
          };
          var dataAdapter = new $.jqx.dataAdapter(source);
           $("#gridItemMaster").jqxGrid({source: dataAdapter});
}

  var STBL_ITEM_MASTER_INS = function(){

      var act = 'STBL_ITEM_MASTER_INS';
      var pI_ITEM_CD = $("#pI_ITEM_CD").val();
      var pI_ITEM_DESC = $('#pI_ITEM_DESC').val();
      var pI_ITEM_MODEL = $('#pI_ITEM_MODEL').val();
      var pI_TYPE = $('#pI_TYPE').val();
      var pI_MOQ = $('#pI_MOQ').val();
      var pI_SPQ = $('#pI_SPQ').val();
      var pI_MAX_STK = $('#pI_MAX_STK').val();
      var pI_ACTIVE = $('#pI_ACTIVE').val();

      var pData = {
        I_ITEM_CD : pI_ITEM_CD
       ,I_ITEM_DESC : pI_ITEM_DESC
       ,I_ITEM_MODEL : pI_ITEM_MODEL
       ,I_TYPE : pI_TYPE
       ,I_MOQ : pI_MOQ
       ,I_SPQ : pI_SPQ
       ,I_MAX_STK : pI_MAX_STK
       ,I_ACTIVE : pI_ACTIVE
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
                          gridItemMaster('','');
                        }
                    },
                    error : function (data) {
                        alert( "Posting failed." );
                    }
                  });

  }
  var STBL_ITEM_MASTER_DEL = function(pId){

      var act = 'STBL_ITEM_MASTER_DEL';
      var pI_ITEM_ID = pId;

      var pData = { ITEM_ID : pI_ITEM_ID };

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
                          gridItemMaster('','');
                        }
                    },
                    error : function (data) {
                        alert( "Posting failed." );
                    }
                  });

  }

  function ChkType(vType) {
    if(vType === 'FG'){
      $("#pI_MOQ").jqxInput({disabled:true, theme: 'energyblue'});
      $("#pI_SPQ").jqxInput({disabled:true, theme: 'energyblue'});
      $("#pI_MAX_STK").jqxInput({disabled:true, theme: 'energyblue'});
    }else{
      $("#pI_MOQ").jqxInput({disabled:false, theme: 'energyblue'});
      $("#pI_SPQ").jqxInput({disabled:false, theme: 'energyblue'});
      $("#pI_MAX_STK").jqxInput({disabled:false, theme: 'energyblue'});
    }
  }

  function clareData() {
    $("#pI_ITEM_CD").val("");
    $('#pI_ITEM_DESC').val("");
    $('#pI_ITEM_MODEL').val("");
    $("#pI_TYPE").jqxComboBox({ selectedIndex: 0});
    $('#pI_STD_TRAY').val("");
    $('#pI_STD_BOX').val("");
    $('#pI_MOQ').val("");
    $('#pI_SPQ').val("");
    $('#pI_MAX_STK').val("");
    $('#pI_ACTIVE').jqxComboBox({ selectedIndex: 0});
  }
