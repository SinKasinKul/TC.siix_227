$(document).ready(function () {
  var ttimer = setInterval(function () {
              gridOnHandTotal();
          }, 1000 * 300);
$('#Main').jqxTabs({ width: '99.90%', position: 'top', theme: 'energyblue'});
$("#reload").jqxButton({ template: "success" });
$('#reload').on('click', function () {
    gridOnHandTotal();
});

$("#vHistory").jqxButton({ template: "primary" });
$('#vHistory').on('click', function () {
    var ItemCD = $('#vItemCD').val();
    gridOnHandHis(ItemCD)
});

$("#vItemCD").jqxInput({ height: 25, width: 100, minLength: 1});
$("#ExportTotal").jqxButton();
$("#ExportTotal").click(function () {
                $("#gridOnHandTotal").jqxGrid('exportdata', 'csv', 'Stock_WIP_Export');
            });
var CHK_QTY = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        if(value > 0){
              return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;"><B>' + value + '</B></span>';
            }else {
              return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;"><B>' + value + '</B></span>';
            }
      }

$("#gridOnHandTotal").jqxGrid(
        {
            width: 570,
            height: 543,
            altrows: true,
            sortable: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            showfilterrow: true,
            filterable: true,
            theme: "orange",
            selectionmode: 'multiplerowsextended',
            columns: [
              {
                    text: '#', sortable: false, filterable: false, editable: false,
                    groupable: false, draggable: false, resizable: false,
                    datafield: '', columntype: 'number', width: 30,
                    cellsrenderer: function (row, column, value) {
                        return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                    }
              },
              { text: 'Cus', datafield: 'CUS', width: 90, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Item Code', datafield: 'ITEMCD', width: 100, align: 'center', cellsalign: 'center', aggregates: ['count']},
              { text: 'Model', datafield: 'ITEMDESC', minwidth: 120, align: 'center', cellsalign: 'center'},
              { text: 'Lot', datafield: 'Total_Reels', width: 80, align: 'center', cellsalign: 'right',cellsformat: 'F0', aggregates: ['sum']},
              { text: 'Total Qty', datafield: 'Total_Qty', width: 90, align: 'center', cellsalign: 'right',cellsformat: 'F0', aggregates: ['sum']}
            ]
        });
  $("#gridOnHandTotal").on("rowselect", function (event){
    var ITEMCD = event.args.row.ITEMCD;
    $('#vItemCD').val(ITEMCD);
    gridOnHandDetail(ITEMCD);
  });
gridOnHandTotal();

$("#gridOnHandDetail").jqxGrid(
        {
            width: 1025,
            height: 543,
            altrows: true,
            sortable: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            showfilterrow: true,
            filterable: true,
            theme: "darkblue",
            selectionmode: 'multiplerowsextended',
            columns: [
              {
                    text: '#', sortable: false, filterable: false, editable: false,
                    groupable: false, draggable: false, resizable: false,
                    datafield: '', columntype: 'number', width: 50,
                    cellsrenderer: function (row, column, value) {
                        return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                    }
              },
              { text: 'Tracking', datafield: 'SEIBAN', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Item Code', datafield: 'ITEMCD', width: 90, align: 'center', cellsalign: 'center', aggregates: ['count']},
              { text: 'Model', datafield: 'ITEMDESC', minwidth: 120, align: 'center', cellsalign: 'center', aggregates: ['count']},
              { text: 'Lot No.', datafield: 'BATCH', width: 90, align: 'center', cellsalign: 'center'},
              { text: 'Qty', datafield: 'QTY', width: 80, align: 'center', cellsalign: 'right',cellsformat: 'F0'},
              //{ text: 'Cart', datafield: 'CART', width: 100, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Location', datafield: 'LOCATION', width: 100, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Date', datafield: 'DATE_UPDATE', width: 150, align: 'center', cellsalign: 'center'},
              { text: 'Shelf Life', datafield: 'SHELFLIFE', width: 90, align: 'center', cellsalign: 'center'}
              /*{ text: 'Take Out', datafield: 'Take Out', width: 80, columntype: 'button', align: 'center', cellsrenderer: function () {
                 return "Take Out";
              }
              , buttonclick: function (row) {
                     editrow = row;
                     var offset = $("#gridOnHandDetail").offset();
                     var dataRecord = $("#gridOnHandDetail").jqxGrid('getrowdata', editrow);
                     var vBatch = dataRecord.BATCH;
		                 var vITEMCD = dataRecord.ITEMCD;
		                 var vQTY = dataRecord.QTY;
		                 var vLOCATION = dataRecord.LOCATION;
		                 var vSEIBAN = dataRecord.SEIBAN;
                     var result = confirm("DO you want to delete item " + vITEMCD + "?");
                        if (result) {
                                InsOutBoundSeiban(vITEMCD,vBatch,vQTY,vLOCATION,vSEIBAN);
                        				//alert(vResults);
                        				gridOnHandDetail(vITEMCD);
                        				//gridOnHandTotal();
                        }
                 }
              }*/
            ]
        });
  $("#gridOnHandHis").jqxGrid(
          {
              width: 1125,
              height: 543,
              altrows: true,
              sortable: true,
              showfilterrow: true,
              filterable: true,
              showstatusbar: true,
              statusbarheight: 25,
              showaggregates: true,
              theme: "darkblue",
              selectionmode: 'multiplerowsextended',
              columns: [
                {
                      text: '#', sortable: false, filterable: false, editable: false,
                      groupable: false, draggable: false, resizable: false,
                      datafield: '', columntype: 'number', width: 50,
                      cellsrenderer: function (row, column, value) {
                          return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                      }
                },
                { text: 'Tracking', datafield: 'SEIBAN', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'Item Code', datafield: 'ITEMCD', width: 90, align: 'center', cellsalign: 'center', aggregates: ['count']},
                { text: 'Model', datafield: 'ITEMDESC', minwidth: 100, align: 'center', cellsalign: 'center'},
                { text: 'Lot No.', datafield: 'BATCH', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'IN Qty', datafield: 'IN_QTY', width: 90, align: 'center', cellsalign: 'right', cellsrenderer: CHK_QTY,cellsformat: 'F0', aggregates: ['sum']},
                { text: 'OUT Qty', datafield: 'OUT_QTY', width: 90, align: 'center', cellsalign: 'right', cellsrenderer: CHK_QTY,cellsformat: 'F0', aggregates: ['sum']},
                //{ text: 'Cart', datafield: 'CART', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'Location', datafield: 'LOCATION', width: 100, filtertype: 'checkedlist', align: 'center', cellsalign: 'center'},
                { text: 'Operator', datafield: 'STAFF_NAME', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'Date', datafield: 'DATE_UPDATE', width: 150, align: 'center', cellsalign: 'center'}
              ]
          });
  $("#csvExportHis").click(function () {
      $("#gridOnHandHis").jqxGrid('exportdata', 'csv', 'gridOnHandHis');
  });
});

function gridOnHandTotal() {
            var act = 'jsonOnHandTotal';
            var url = "main.class.php?action="+act;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'CUS', type: 'string' },
                    { name: 'ITEMCD', type: 'string' },
                    { name: 'ITEMDESC', type: 'string' },
                    { name: 'Total_Reels', type: 'string' },
                    { name: 'Total_Qty', type: 'number' }
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridOnHandTotal").jqxGrid({source: dataAdapter});
  }

function gridOnHandDetail(ItemCD) {
            var act = 'jsonOnHandDetail';
            var url = "main.class.php?action="+act+"&ItemCD="+ItemCD;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'ID', type: 'string' },
                    { name: 'SEIBAN', type: 'string' },
                    { name: 'ITEMCD', type: 'string' },
                    { name: 'ITEMDESC', type: 'string' },
                    { name: 'BATCH', type: 'string' },
                    { name: 'QTY', type: 'number' },
                    { name: 'CART', type: 'string' },
                    { name: 'LOCATION', type: 'string' },
                    { name: 'DATE_UPDATE', type: 'string' },
                    { name: 'SHELFLIFE', type: 'string' }
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridOnHandDetail").jqxGrid({source: dataAdapter});
  }

function gridOnHandHis(ItemCD) {
            var act = 'jsonOnHandHis';
            var url = "main.class.php?action="+act+"&ItemCD="+ItemCD;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'SEIBAN', type: 'string' },
                    { name: 'ITEMCD', type: 'string' },
                    { name: 'ITEMDESC', type: 'string' },
                    { name: 'BATCH', type: 'string' },
                    { name: 'IN_QTY', type: 'number' },
                    { name: 'OUT_QTY', type: 'number' },
                    { name: 'CART', type: 'string' },
                    { name: 'LOCATION', type: 'string' },
                    { name: 'STAFF_NAME', type: 'string' },
                    { name: 'DATE_UPDATE', type: 'string' },
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridOnHandHis").jqxGrid({source: dataAdapter});
  }

function InsOutBoundSeiban(Item,Batch,Qty,Location,Seiban) {
   var act = 'InsOutBound';
   var Result;
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&ItemCd=" + Item
             + "&Batch=" + Batch
             + "&Qty=" + Qty
             + "&Location=" + Location
             + "&Emp=" + "System"
             + "&Seiban=" + Seiban,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];
                 Result = Data.Result;
                 var RSts = Data.RSts;

                  return Result;
              }
             },
             error: function functionName() {
               return "Can not do process.";
             }

   });
}
