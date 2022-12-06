$(document).ready(function () {


  $("#reloadStatus").jqxButton({ template: "success" });
  $('#reloadStatus').on('click', function () {
      gridOnHandNew();
      gridOnHandInProcess();
  });

  $("#gridOnHandNew").jqxGrid(
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
              theme: "darkblue",
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

  $("#gridOnHandInProcess").jqxGrid(
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
      gridOnHandNew();
      gridOnHandInProcess();
});


function gridOnHandNew() {
            var act = 'jsonOnHandStatus';
            var url = "main.class.php?action="+act+"&Status=1";

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
             $("#gridOnHandNew").jqxGrid({source: dataAdapter});
  }

function gridOnHandInProcess() {
            var act = 'jsonOnHandStatus';
            var url = "main.class.php?action="+act+"&Status=";

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
             $("#gridOnHandInProcess").jqxGrid({source: dataAdapter});
  }
