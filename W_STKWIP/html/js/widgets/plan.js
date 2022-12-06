$(document).ready(function () {
  $("#reloadPlan").jqxButton({ template: "success" });
  $('#reloadPlan').on('click', function () {
      gridPlan();
  });

  $("#gridPlan").jqxGrid(
          {
              width: 470,
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
                { text: 'Item Code', datafield: 'ITEMCD', width: 120, align: 'center', cellsalign: 'center', aggregates: ['count']},
                { text: 'Reels', datafield: 'Total_Reels', width: 80, align: 'center', cellsalign: 'right',cellsformat: 'F2', aggregates: ['sum']},
                { text: 'Total Qty', datafield: 'Total_Qty', minwidth: 120, align: 'center', cellsalign: 'right',cellsformat: 'F2', aggregates: ['sum']}
              ]
          });
    $("#gridOnHandTotal").on("rowselect", function (event){
      var ITEMCD = event.args.row.ITEMCD;
      $('#vItemCD').val(ITEMCD);
      //gridOnHandDetail(ITEMCD);
    });
  gridPlan();
});

function gridPlan() {
            var act = 'jsonOnHandTotal';
            var url = "main.class.php?action="+act;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'ITEMCD', type: 'string' },
                    { name: 'Total_Reels', type: 'string' },
                    { name: 'Total_Qty', type: 'number' }
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridOnHandTotal").jqxGrid({source: dataAdapter});
  }
