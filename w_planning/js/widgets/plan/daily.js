$(document).ready(function () {

  var vListLine = vLineList();
  $("#pLine").jqxComboBox({ selectedIndex: -1, source: vListLine, displayMember: "Line", valueMember: "Line", width: "100", height: 25,theme: "darkblue"});

  $("#vPlanDate").jqxDateTimeInput({
        width: '125px',
        height: '25px',
        allowNullDate: true,
        //editMode: 'full',
        formatString: 'yyyy-MM-dd',
        showFooter: true,
        value: null,
        theme: "darkblue"
        //yearCutoff: 1926
    });

    $("#vbtReload").click(function () {
          PLAN_SEC();
      });

  var vPlanstatus = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
      if (value == 'Finish') {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #28b463;"><B>' + value + '</B></span>';
      }
      else if (value == 'Plan Start') {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #c0392b;"><B>' + value + '</B></span>';
      }
      else if (value == 'Kitting Start') {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #8e44ad;"><B>' + value + '</B></span>';
      }
      else if (value == 'Kitting Done') {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #3498db;"><B>' + value + '</B></span>';
      }
      else {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #FF7F50;"><B>' + value + '</B></span>';
      }
  }

  var vPlanDiffStatus = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
      if (value < 0) {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #c0392b;"><B>' + value + '</B></span>';
      }
      else {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #FF7F50;"><B>' + value + '</B></span>';
      }
  }

  var vGroupStatus = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
      if (value == 'On') {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #28b463;"><B>' + value + '</B></span>';
      }
      else {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #c0392b;"><B>' + value + '</B></span>';
      }
  }

  $("#gridPlan").jqxGrid({
      width: "100%",
      height: 735,
      altrows: true,
      filterable: true,
      sortable: true,
      showstatusbar: true,
      statusbarheight: 25,
      showaggregates: true,
      theme: theme,
      pageable: true,
      pagesize: 20,
      groupable: true,
      pagesizeoptions: ['20', '50', '100', '500', '1000'],
      selectionmode: 'multiplerowsextended',
      columns: [
        { text: 'Status', datafield: 'STATUS', width: 100, align: 'center', cellsrenderer: vPlanstatus, filtertype: 'checkedlist', pinned: true},
        { text: '#Line', datafield: 'SMT_line', width: 80, align: 'center', cellsalign: 'center', filtertype: 'checkedlist', pinned: true},
        { text: 'Priority', datafield: 'Priority', width: 100, align: 'center', cellsalign: 'left', filtertype: 'checkedlist'},
        { text: 'Delivery Date', datafield: 'Delivery_date', width: 100, align: 'center', cellsalign: 'center', cellsformat: 'd'},
        { text: 'Side', datafield: 'Side', width: 60, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
        { text: 'Project', datafield: 'Project', width: 80, align: 'center', cellsalign: 'center'},
        { text: 'PCB SAP Code', datafield: 'PCB_SAP_Code', width: 100, align: 'center', cellsalign: 'center'},
        //{ text: 'Type', datafield: 'Type', width: 100, align: 'center', cellsalign: 'center'},
        { text: 'FG SAP Code', datafield: 'FG_SAP_Code', width: 100, align: 'center', cellsalign: 'center'},
        { text: 'Model', datafield: 'Model', width: 200, align: 'center', cellsalign: 'center'},
        { text: 'Group', datafield: 'ModelGroup', minwidth: 50, align: 'center', cellsalign: 'center', filtertype: 'checkedlist', cellsrenderer: vGroupStatus},
        { text: 'Tracking', datafield: 'Tracking', width: 100, align: 'center', cellsalign: 'center', aggregates: ['count'], pinned: true},
        { text: 'Lot', datafield: 'Lot', width: 100, align: 'center', cellsalign: 'center', cellsFormat: 'd0', aggregates: ['sum']},
        { text: 'Plans', datafield: 'Plans', width: 100, align: 'center', cellsalign: 'center', cellsFormat: 'd0', aggregates: ['sum']},
        { text: 'Actual', datafield: 'Actual', width: 100, align: 'center', cellsalign: 'center', cellsFormat: 'd0', aggregates: ['sum']},
        { text: 'Start Date', datafield: 'PLAN_Start_Date', width: 160, columngroup: 'Plan', align: 'center', cellsalign: 'center'},
        { text: 'End Date', datafield: 'PLAN_End_Date', width: 160, columngroup: 'Plan', align: 'center', cellsalign: 'center'},
        { text: 'Unit/Hrs', datafield: 'Unit_Hrs', width: 100, align: 'center', cellsalign: 'center'},
        { text: 'Plan Kitting', datafield: 'Schedule_Kitting_part', width: 100, align: 'center', cellsalign: 'center'},
        { text: 'Start Date', datafield: 'WH_Start_Date', width: 160, columngroup: 'Warehouse', align: 'center', cellsalign: 'center'},
        { text: 'End Date', datafield: 'WH_End_Date', width: 160, columngroup: 'Warehouse', align: 'center', cellsalign: 'center'},
        { text: 'Start Date', datafield: 'Pro_Start_Date', width: 160, columngroup: 'Production', align: 'center', cellsalign: 'center'},
        { text: 'End Date', datafield: 'Pro_End_Date', width: 160, columngroup: 'Production', align: 'center', cellsalign: 'center'},
        { text: 'WH', datafield: 'DiffWHPlanStart', width: 60, columngroup: 'Diff', align: 'center', cellsalign: 'center', cellsrenderer: vPlanDiffStatus},
        { text: 'Prod', datafield: 'DiffPDPlanStart', width: 60, columngroup: 'Diff', align: 'center', cellsalign: 'center', cellsrenderer: vPlanDiffStatus}
      ],
          columngroups: [
              { text: 'Plan', align: 'center', name: 'Plan' },
              { text: 'Warehouse', align: 'center', name: 'Warehouse' },
              { text: 'Production', align: 'center', name: 'Production' },
              { text: 'Diff Plan (min.)', align: 'center', name: 'Diff' }
      ]
  });
  PLAN_SEC();
});

function vLineList() {
      var act = 'STBL_PLAN_LINE';
      var url = "main.class.php?action="+ act;
      // prepare the data
      var source =
      {
          datatype: "json",
          datafields: [
              { name: 'ID' },
              { name: 'Type' },
              { name: 'Line' },
              { name: 'Date_Update' }
          ],
          url: url,
          async: true
      };
      var dataAdapter = new $.jqx.dataAdapter(source);
      return dataAdapter;
}

function PLAN_SEC() {
            var pDate = $("#vPlanDate").val();
            var pLine = $("#pLine").val();
            var act = 'PLAN_SEC_DAILY_DATE';
            var url = "main.class.php?action="+act;
            var pData = {
                Date : pDate,
                Line : pLine
            };
            var source =
            {
                datatype: "json",
                url: url,
                type : 'POST',
                data : pData,
                root: 'data',
                datafields: [
                    { name: 'ID', type: 'string' },
                    { name: 'STATUS', type: 'string' },
                    { name: 'SMT_line', type: 'string' },
                    { name: 'Priority', type: 'string' },
                    { name: 'Delivery_date', type: 'date' },
                    { name: 'Side', type: 'string' },
                    { name: 'Project', type: 'string' },
                    { name: 'PCB_SAP_Code', type: 'string' },
                    { name: 'Type', type: 'string' },
                    { name: 'FG_SAP_Code', type: 'string' },
                    { name: 'Model', type: 'string' },
                    { name: 'ModelGroup', type: 'string' },
                    { name: 'Tracking', type: 'string' },
                    { name: 'Lot', type: 'number' },
                    { name: 'Plans', type: 'number' },
                    { name: 'Actual', type: 'number' },
                    { name: 'PLAN_Start_Date', type: 'string' },
                    { name: 'PLAN_End_Date', type: 'string' },
                    { name: 'Unit_Hrs', type: 'string' },
                    { name: 'Schedule_Kitting_part', type: 'string' },
                    { name: 'WH_Start_Date', type: 'string' },
                    { name: 'WH_End_Date', type: 'string' },
                    { name: 'Pro_Start_Date', type: 'string' },
                    { name: 'Pro_End_Date', type: 'string' },
                    { name: 'DiffWHPlanStart', type: 'string' },
                    { name: 'DiffPDPlanStart', type: 'string' }
                ]
            };
            var gridPlan = new $.jqx.dataAdapter(source);
             $("#gridPlan").jqxGrid({source: gridPlan});
             //MAIN_PLAN_SEC_CHART();
  }
