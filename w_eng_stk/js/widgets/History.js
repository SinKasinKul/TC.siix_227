$(document).ready(function () {

    $("#btHis").jqxButton({height: 30, template: "primary" });
    $("#HisCSVExport").jqxButton({height: 30, template: "success" });
    $("#btHis").click(function() {
      var vItem = $("#HIS_Item_CD").val();

      if(vItem != ""){
        gridHisStock(vItem);
      }
      else
      {
        $("#btHis").focus();
      }

    });

    var CHK_QTY = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
      if(value > 0){
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;"><B>' + value + '</B></span>';
          }else {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;"><B>' + value + '</B></span>';
          }
    }

    $("#gridHisStock").jqxGrid({
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
                  { text: 'Item CD', datafield: 'I_ITEM_CD', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'Item DESC', datafield: 'I_ITEM_DESC', minwidth: 150, align: 'center'},
                  { text: 'IN Qty', datafield: 'IN_I_QTY', width: 80, align: 'center', cellsalign: 'Right', cellsrenderer: CHK_QTY, aggregates: ['sum']},
                  { text: 'OUT Qty', datafield: 'OUT_I_QTY', width: 80, align: 'center', cellsalign: 'Right', cellsrenderer: CHK_QTY, aggregates: ['sum']},
                  { text: 'PO No.', datafield: 'I_REF_PO', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'INV No.', datafield: 'I_REF_INV', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'Req No.', datafield: 'I_REF_REQ', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'PIC', datafield: 'I_EMP', width: 80, align: 'center', cellsalign: 'center'},
                  { text: 'Date Update', datafield: 'I_UPDATE_DATE', width: 150, align: 'center', cellsalign: 'center'}
                ]
            });
            gridHisStock();

            $("#HIS_Item_CD").jqxInput({height: 30, width: 100, minLength: 1, theme: 'energyblue'});
            $("#HIS_Item_DESC").jqxComboBox({height: 30, selectedIndex: 0, displayMember: "I_ITEM_DESC", valueMember: "I_ITEM_CD", width: 300, height: 25,dropDownHeight:'250px', theme: 'energyblue'});
            $('#HIS_Item_DESC').on('select', function (event)
            {
                var args = event.args;
                if (args && args.item != -1) {
                    // index represents the item's index.
                    var index = args.index;
                    var item = args.item;
                    // get item's label and value.
                    if(item != null)
                    {
                      var label = item.label;
                      var value = item.value;
                      var type = args.type; // keyboard, mouse or null depending on how the item was selected.
                      $("#HIS_Item_CD").val(value);
                    }
                    else{
                      $("#HIS_Item_CD").val("");
                    }
                }
            });
            $('#HIS_Item_DESC').click(function functionName() {
              gridItemlist();
            });

            $("#HisCSVExport").click(function () {
               $("#gridHisStock").jqxGrid('exportdata', 'csv', 'HistoryData');
           });
});

function gridHisStock(pI_ITEM_CD) {
          var act = 'STBL_HIS_ITEM';
          var url = "main.class.php?action="+ act +"&I_ITEM_CD=" + pI_ITEM_CD;

          var source =
          {
              datatype: "json",
              datafields: [
                  { name: 'I_ITEM_CD', type: 'string' },
                  { name: 'I_ITEM_DESC', type: 'string' },
                  { name: 'IN_I_QTY', type: 'number' },
                  { name: 'OUT_I_QTY', type: 'number' },
                  { name: 'I_EMP', type: 'string' },
                  { name: 'I_REF_PO', type: 'string' },
                  { name: 'I_REF_INV', type: 'string' },
                  { name: 'I_REF_REQ', type: 'string' },
                  { name: 'I_UPDATE_DATE', type: 'string' }
              ],
              url: url,
              root: 'data'
          };
          var dataAdapter = new $.jqx.dataAdapter(source);
           $("#gridHisStock").jqxGrid({source: dataAdapter});
           clareDataSTKHIS();
}

function clareDataSTKHIS() {
  $("#HIS_Item_CD").val("");
  $("#HIS_Item_DESC").val("");
  $("#HIS_Item_DESC").jqxComboBox({selectedIndex: -1 });
}
