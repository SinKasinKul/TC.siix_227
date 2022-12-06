$(document).ready(function () {
  $('#Forecast_Tabs').jqxTabs({ width: '99.90%', position: 'top', theme: 'energyblue'});

  var dataAdapterItemFG = gridItemMaster('','FG');
  $("#pI_ITEM_CD_FG").jqxComboBox({ selectedIndex: -1,
                                    source: dataAdapterItemFG,
                                    placeHolder: "Select Item",
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
  $("#pI_QTY").jqxInput({height: 25, width: 120, minLength: 1, rtl: true, theme: 'energyblue'});
  $("#pI_ITEM_CD_FG").jqxComboBox({ selectedIndex: -1,
                                    source: dataAdapterItemFG,
                                    displayMember: "I_ITEM_CD",
                                    valueMember: "I_ITEM_DESC",
                                    dropDownHeight:200,
                                    width: 150,
                                    height: 25,
                                    theme: 'energyblue'
                                  });
   var DeliDateSource = vYYYYMM();
   $("#pI_DELIVERY_DATE").jqxDropDownList({ source: DeliDateSource, placeHolder: "Select Item", width: 120, height: 25, theme: 'energyblue'});

  $("#gridForeCastMaster").jqxGrid({
              width: 725,
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
                { text: 'FG DESC', datafield: 'I_ITEM_DESC', minwidth: 250, align: 'center', cellsalign: 'center'},
                { text: 'Qty', datafield: 'I_QTY', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'Forecast Date', datafield: 'I_FORECAST_DATE', width: 100, align: 'center', cellsalign: 'center'},
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
                     $('#I_FG_DESC').html(dataRecord.I_ITEM_DESC);
                     $('#pI_QTY').val(dataRecord.I_QTY);
                     $('#pI_DELIVERY_DATE').val(dataRecord.pI_DELIVERY_DATE);
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
          vYYYYMM();
});

var vYYYYMM = function () {
    var d = new Date();
    var m = d.getMonth();
    var y = d.getFullYear();
    var aYYYYY = [];
    for(i=y ; i < y+2; i++){
      if(i==y){
        for(j=m+1; j <= 12; j++){
          var mm = j;
          var vm = mm.toString().length == '1' ? '0'+mm : mm;
          aYYYYY.push(i +''+ vm);
        }
      }
      else{
        for(j=1; j <= 12; j++){
          var mm = j.toString().length == '1' ? '0'+j : j;
          aYYYYY.push(i +''+ mm);
        }
      }

    }
    return aYYYYY;
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
