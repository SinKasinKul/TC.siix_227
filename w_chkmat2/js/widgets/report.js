$(document).ready(function () {
  $("#btHis").jqxButton({height: 30, template: "primary" });
  $("#HisCSVExport").jqxButton({height: 30, template: "success" });
  $("#btHis").click(function() {
    var vLine = $("#REP_Line").val();
    var vItem = $("#REP_Item_CD").val();
    var vITrack = $("#REP_Tracking").val();

      gridHisRep(vLine,vItem,vITrack);

  });

  $("#REP_Item_CD").jqxInput({height: 30, width: 100, minLength: 1, theme: 'energyblue'});
  $("#REP_Tracking").jqxInput({height: 30, width: 100, minLength: 1, theme: 'energyblue'});
  $("#REP_Line").jqxComboBox({height: 30, selectedIndex: 0, displayMember: "LINE", valueMember: "LINE", width: 150, height: 30,dropDownHeight:'250px', theme: 'energyblue'});
  $('#REP_Line').click(function functionName() {
    MClist();
  });

  $("#HisCSVExport").click(function () {
     $("#gridHisRep").jqxGrid('exportdata', 'csv', 'HistoryData');
 });

 $("#gridHisRep").jqxGrid({
             width: 1075,
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
               { text: '#Lines', datafield: 'Lines', width: 100, align: 'center', cellsalign: 'center'},
               { text: 'Machine', datafield: 'Machine', width: 100, filtertype: 'checkedlist', align: 'center'},
               { text: 'Tables', datafield: 'TABLES', width: 100, align: 'center', cellsalign: 'center', aggregates: ['sum']},
               { text: 'Item', datafield: 'ITEMCD', width: 100, align: 'center', cellsalign: 'center', filtertype: 'checkedlist' , aggregates: ['sum']},
               { text: 'Qty', datafield: 'QTY', width: 80, align: 'center', cellsalign: 'center'},
               { text: 'Batch', datafield: 'BATCH_CURRENT', width: 100, align: 'center', cellsalign: 'center'},
               { text: 'Batch Replace', datafield: 'BATCH_REPLACE', width: 100, align: 'center', cellsalign: 'center'},
               { text: 'Tracking', datafield: 'SEIBAN', width: 100, align: 'center', cellsalign: 'center'},
               { text: 'PIC', datafield: 'STAFF_NAME', width: 110, align: 'center', cellsalign: 'center'},
               { text: 'Date Update', datafield: 'DATE_UPDATE', minwidth: 150, align: 'center', cellsalign: 'center'}
             ]
         });
         MClist();
});

function MClist() {
          var act = 'STBL_RELP_MC_LIST';
          var url = "main.class.php?action="+act;

          var source =
          {
              datatype: "json",
              datafields: [
                  { name: 'LINE', type: 'string' }
              ],
              url: url,
              root: 'data'
          };
          var dataAdapter = new $.jqx.dataAdapter(source);
          $("#REP_Line").jqxComboBox({source: dataAdapter});
}

function gridHisRep(Line,Item,Seiban) {
          var act = 'STBL_REP_HIS_MAT';
          var url = "main.class.php?action="+act
          +"&Line=" + Line
          +"&Item=" + Item
          +"&SEIBAN=" + Seiban;

          var source =
          {
              datatype: "json",
              datafields: [
                  { name: 'Lines', type: 'string' },
                  { name: 'Machine', type: 'string' },
                  { name: 'TABLES', type: 'string' },
                  { name: 'ITEMCD', type: 'string' },
                  { name: 'QTY', type: 'number' },
                  { name: 'BATCH_CURRENT', type: 'string' },
                  { name: 'BATCH_REPLACE', type: 'string' },
                  { name: 'STAFF_NAME', type: 'string' },
                  { name: 'SEIBAN', type: 'string' },
                  { name: 'YYYYMM', type: 'string' },
                  { name: 'DATE_UPDATE', type: 'string' }
              ],
              url: url,
              root: 'data'
          };
          var dataAdapter = new $.jqx.dataAdapter(source);
          $("#gridHisRep").jqxGrid({source: dataAdapter});
}
