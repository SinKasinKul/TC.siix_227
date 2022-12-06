$(document).ready(function () {
    $('#PO_Master_Tabs').jqxTabs({ width: '99.90%', position: 'top', theme: 'energyblue'});
    $('#CurDate').html(NowDate);

    $("#gridPOMAster").jqxGrid({
                width: 1180,
                height: 343,
                altrows: true,
                sortable: true,
                filterable: true,
                showstatusbar: true,
                statusbarheight: 25,
                showaggregates: true,
                theme: "darkblue",
                selectionmode: 'multiplerowsextended',
                columns: [
                  { text: 'PO No', datafield: 'I_PO_NO', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'PO Date', datafield: 'I_PO_DATE', width: 120, align: 'center', cellsalign: 'center'},
                  { text: 'Item Code', datafield: 'I_ITEM_CD', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'Item DESC', datafield: 'I_ITEM_DESC', width: 150, align: 'center', cellsalign: 'center'},
                  { text: 'Qty', datafield: 'I_QTY', width: 80, align: 'center', cellsalign: 'center'},
                  { text: 'Unit Price', datafield: 'I_AMT', width: 80, align: 'center', cellsalign: 'center'},
                  { text: 'Total AMT', datafield: 'I_TOTAL_AMT', width: 80, align: 'center', cellsalign: 'center'},
                  { text: 'Unit', datafield: 'I_UNIT', width: 80, align: 'center', cellsalign: 'center'},
                  { text: 'Supplier ID', datafield: 'I_VENDER_ID', width: 120, align: 'center', cellsalign: 'center'},
                  { text: 'Supplier Name', datafield: 'I_VENDER_NAME', width: 150, align: 'center', cellsalign: 'center'},
                  { text: 'Date Update', datafield: 'I_DATE_UPDATE', width: 120, align: 'center', cellsalign: 'center'},
                ]
            });

            gridPOMAster('');
});

function gridPOMAster(pPODate) {
            var PO_Date = pPODate;
            var act = 'STBL_GET_DATA_PO';
            var url = "main.class.php?action="+act
            +"&PO_Date="+PO_Date;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'I_PO_NO', type: 'string' },
                    { name: 'I_PO_DATE', type: 'string' },
                    { name: 'I_ITEM_CD', type: 'string' },
                    { name: 'I_ITEM_DESC', type: 'string' },
                    { name: 'I_QTY', type: 'number' },
                    { name: 'I_AMT', type: 'number' },
                    { name: 'I_TOTAL_AMT', type: 'number' },
                    { name: 'I_UNIT', type: 'number' },
                    { name: 'I_VENDER_ID', type: 'string' },
                    { name: 'I_VENDER_NAME', type: 'string' },
                    { name: 'I_VENDER_ADD1', type: 'string' },
                    { name: 'I_VENDER_ADD2', type: 'string' },
                    { name: 'I_DATE_UPDATE', type: 'string' },
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridPOMAster").jqxGrid({source: dataAdapter});
  }
