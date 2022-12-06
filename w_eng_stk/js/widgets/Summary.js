$(document).ready(function () {

    $("#SummaryByMonthCSVExport").jqxButton({height: 30, template: "success" });
    $("#btLoad").jqxButton({height: 30, template: "success" });
    $("#btLoad").click(function() {
      var vEmp = $("#Emp_Login").val();

      if(vEmp != ""){
        $("#Emp_Login").val('');
        gridSummaryByMonth(vEmp);
      }
      else
      {
        $("#Emp_Login").focus();
      }

    });

    $("#gridSummaryByMonth").jqxGrid({
                width: 630,
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
                  { text: 'Item CD', datafield: 'I_ITEM_CD', width: 120, align: 'center', cellsalign: 'center'},
                  { text: 'IN Qty', datafield: 'IN_I_QTY', width: 120, align: 'center', cellsalign: 'Right', aggregates: ['sum']},
                  { text: 'OUT Qty', datafield: 'OUT_I_QTY', width: 120, align: 'center', cellsalign: 'Right', aggregates: ['sum']},
                  { text: 'Total', datafield: 'I_Total', width: 120, align: 'center', cellsalign: 'Right', aggregates: ['sum']},
                  { text: 'Date Update', datafield: 'I_UPDATE_DATE', filtertype: 'checkedlist', width: 150, align: 'center', cellsalign: 'center'}
                ]
            });
            gridSummaryByMonth();

            $("#SummaryByMonthCSVExport").click(function () {
               $("#gridSummaryByMonth").jqxGrid('exportdata', 'csv', 'SummaryByMonth');
           });
});

function gridSummaryByMonth(pEmp) {
          var act = 'STBL_STK_BY_MONTH';
          var url = "main.class.php?action="+ act +"&Emp=" + pEmp;

          var source =
          {
              datatype: "json",
              datafields: [
                  { name: 'I_ITEM_CD', type: 'string' },
                  { name: 'IN_I_QTY', type: 'number' },
                  { name: 'OUT_I_QTY', type: 'number' },
                  { name: 'I_Total', type: 'number' },
                  { name: 'I_UPDATE_DATE', type: 'string' }
              ],
              url: url,
              root: 'data'
          };
          var dataAdapter = new $.jqx.dataAdapter(source);
           $("#gridSummaryByMonth").jqxGrid({source: dataAdapter});
}
