$(document).ready(function () {

  $('#BOM_Master_Tabs').jqxTabs({ width: '99.90%', position: 'top', theme: 'energyblue'});
  $('#CurDate').html(NowDate);

  var dataAdapterItemFG = gridItemMaster('','FG');
  $("#pI_ITEM_CD_FG").jqxComboBox({ selectedIndex: -1,
                                    source: dataAdapterItemFG,
                                    displayMember: "I_ITEM_CD",
                                    valueMember: "I_ITEM_DESC",
                                    dropDownHeight:200,
                                    width: 150,
                                    height: 25,
                                    theme: 'energyblue'
                                  });
  $('#pI_ITEM_CD_FG').on('select', function (event)
  {
      var args = event.args;
      if (args) {
          // index represents the item's index.
          var index = args.index;
          var item = args.item;
          // get item's label and value.
          if(item != null){
            var label = item.label;
            var value = item.value;
            var type = args.type; // keyboard, mouse or null depending on how the item was selected.
          }
      }
      $('#I_FG_DESC').html(value);
      $('#vI_ITEM_CD_FG').val(label);
  });

  var dataAdapterItemMat = gridItemMaster('','Material');
  $("#pI_ITEM_CD_MAT").jqxComboBox({ selectedIndex: -1,
                                     source: dataAdapterItemMat,
                                     displayMember: "I_ITEM_CD",
                                     valueMember: "I_ITEM_DESC",
                                     dropDownHeight:200,
                                     width: 150,
                                     height: 25,
                                     theme: 'energyblue'
                                   });
   $('#pI_ITEM_CD_MAT').on('select', function (event)
   {
       var args = event.args;
       if (args) {
           // index represents the item's index.
           var index = args.index;
           var item = args.item;
           // get item's label and value.
           if(item != null){
             var label = item.label;
             var value = item.value;
             var type = args.type; // keyboard, mouse or null depending on how the item was selected.
           }
       }
       $('#I_MAT_DESC').html(value);
       $('#vI_ITEM_CD_MAT').val(label);
   });
   $('#pI_ITEM_CD_MAT').keypress(function(event){
       var keycode = (event.keyCode ? event.keyCode : event.which);
       if(keycode == '13'){
         if (args) {
             // index represents the item's index.
             var index = args.index;
             var item = args.item;
             // get item's label and value.
             var label = item.label;
             var value = item.value;
             var type = args.type; // keyboard, mouse or null depending on how the item was selected.
         }
         $('#I_MAT_DESC').html(value);
       }
   });

  $("#pI_TRAY_USAGE").jqxInput({height: 25, width: 120, minLength: 1, rtl: true, theme: 'energyblue'});
  $('#pI_TRAY_USAGE').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
          var vUsage =   $('#pI_TRAY_USAGE').val();
          var vCalUsage = 1 / parseInt(vUsage);

          $('#pI_TRAY_USAGE').val(vCalUsage.toFixed(6));
      }
  });
  $("#pI_TRAY_SUPPORT").jqxInput({height: 25, width: 120, minLength: 1, rtl: true, theme: 'energyblue'});
  $("#pI_BOX_USAGE").jqxInput({height: 25, width: 120, minLength: 1, rtl: true, theme: 'energyblue'});
  $('#pI_BOX_USAGE').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
          var vUsage =   $('#pI_BOX_USAGE').val();
          var vCalUsage = 1 / parseInt(vUsage);

          $('#pI_BOX_USAGE').val(vCalUsage.toFixed(6));
      }
  });

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

  $("#ItemLoad").click(function() {
      gridBomMaster('');
  });

  $("#Save").click(function() {
      STBL_BOM_MASTER_INS();
  });
  $("#Clear").click(function() {
      clareData();
  });

  $("#gridBomMaster").jqxGrid({
              width: 925,
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
                { text: 'FG Code', datafield: 'I_ITEM_CD_FG', width: 150, align: 'center', cellsalign: 'center'},
                { text: 'Mat Code', datafield: 'I_ITEM_CD_MAT', minwidth: 150, align: 'center', cellsalign: 'center'},
                { text: 'Tray Usage', datafield: 'I_TRAY_USAGE', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'Tray Support', datafield: 'I_TRAY_SUPPORT', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'Box Usage', datafield: 'I_BOX_USAGE', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'ACTIVE', datafield: 'I_ACTIVE', width: 80, align: 'center', cellsalign: 'center'},
                { text: 'Date Update', datafield: 'I_DATE_UPDATE', width: 120, align: 'center', cellsalign: 'center'},
                { text: 'Edit', datafield: 'Edit', columntype: 'button', width: 50, align: 'center', cellsrenderer: function () {
                   return "Edit";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     var offset = $("#gridBomMaster").offset();
                     //$("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60 } });
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridBomMaster").jqxGrid('getrowdata', editrow);

                     $("#pBOMID").val(dataRecord.ID);
                     $("#pI_ITEM_CD_FG").val(dataRecord.I_ITEM_CD_FG);
                     $('#pI_ITEM_CD_MAT').val(dataRecord.I_ITEM_CD_MAT);
                     $("#vI_ITEM_CD_FG").val(dataRecord.I_ITEM_CD_FG);
                     $('#vI_ITEM_CD_MAT').val(dataRecord.I_ITEM_CD_MAT);
                     $('#pI_TRAY_USAGE').val(dataRecord.I_TRAY_USAGE);
                     $('#pI_TRAY_SUPPORT').val(dataRecord.I_TRAY_SUPPORT);
                     $('#pI_BOX_USAGE').val(dataRecord.I_BOX_USAGE);
                     $('#pI_ACTIVE').val(dataRecord.I_ACTIVE);
                     $('#I_FG_DESC').html('');
                     $('#I_MAT_DESC').html('');
                 }
                },
                { text: 'Delete', datafield: 'Delete', columntype: 'button', width: 50, align: 'center', cellsrenderer: function () {
                   return "Delete";
                  }, buttonclick: function (row) {
                     deleterow = row;
                     var offset = $("#gridBomMaster").offset();
                     var dataRecord = $("#gridBomMaster").jqxGrid('getrowdata', deleterow);

                     var vpI_ITEM_CD_MAT =  dataRecord.I_ITEM_CD_MAT;
                     var r = confirm("Delete Item Code "+ vpI_ITEM_CD_MAT + " ?");
                       if (r == true) {
                           STBL_BOM_MASTER_DEL(dataRecord.ID);
                       }
                 }
                }
              ]
          });

          gridBomMaster('');
});

function gridBomMaster(pItem) {
            var act = 'STBL_BOM_MASTER';
            var url = "main.class.php?action="+act
            +"&I_ITEM_CD_FG="+pItem;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'ID', type: 'string' },
                    { name: 'I_ITEM_CD_FG', type: 'string' },
                    { name: 'I_ITEM_CD_MAT', type: 'string' },
                    { name: 'I_TRAY_USAGE', type: 'number' },
                    { name: 'I_TRAY_SUPPORT', type: 'number' },
                    { name: 'I_BOX_USAGE', type: 'number' },
                    { name: 'I_ACTIVE', type: 'string' },
                    { name: 'I_DATE_UPDATE', type: 'string' }
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridBomMaster").jqxGrid({source: dataAdapter});
  }

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
                    { name: 'I_MOQ', type: 'number' },
                    { name: 'I_SPQ', type: 'number' },
                    { name: 'I_MAX_STK', type: 'number' },
                    { name: 'I_ACTIVE', type: 'string' },
                    { name: 'I_DATE_UPDATE', type: 'string' }
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
            return dataAdapter;
  }

  var STBL_BOM_MASTER_INS = function(){

      var act = 'STBL_BOM_MASTER_INS';
      var pID = $("#pBOMID").val();
      var pI_ITEM_CD_FG = $('#vI_ITEM_CD_FG').val();
      var pI_ITEM_CD_MAT = $('#vI_ITEM_CD_MAT').val();
      var pI_TRAY_USAGE = $('#pI_TRAY_USAGE').val();
      var pI_TRAY_SUPPORT = $('#pI_TRAY_SUPPORT').val();
      var pI_BOX_USAGE = $('#pI_BOX_USAGE').val();
      var pI_ACTIVE = $('#pI_ACTIVE').val();

      var pData = {
        ID : pID
       ,I_ITEM_CD_FG : pI_ITEM_CD_FG
       ,I_ITEM_CD_MAT : pI_ITEM_CD_MAT
       ,I_TRAY_USAGE : pI_TRAY_USAGE
       ,I_TRAY_SUPPORT : pI_TRAY_SUPPORT
       ,I_BOX_USAGE : pI_BOX_USAGE
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
                          gridBomMaster('');
                        }
                    },
                    error : function (data) {
                        alert( "Posting failed." );
                    }
                  });

  }
  var STBL_BOM_MASTER_DEL = function(pId){

      var act = 'STBL_BOM_MASTER_DEL';
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
                          gridBomMaster('');
                        }
                    },
                    error : function (data) {
                        alert( "Posting failed." );
                    }
                  });
  }

  function clareData() {
    $("#pBOMID").val("");
    $('#vI_ITEM_CD_FG').val("");
    $('#vI_ITEM_CD_MAT').val("");
    $("#pI_ITEM_CD_FG").jqxComboBox({ selectedIndex: -1});
    $("#pI_ITEM_CD_MAT").jqxComboBox({ selectedIndex: -1});
    $('#pI_TRAY_USAGE').val("");
    $('#pI_TRAY_SUPPORT').val("");
    $('#pI_BOX_USAGE').val("");
    $('#pI_ACTIVE').jqxComboBox({ selectedIndex: 0});
    $('#I_FG_DESC').html("");
    $('#I_MAT_DESC').html("");

  }
