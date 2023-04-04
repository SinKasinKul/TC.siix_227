$(document).ready(function () {

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
              { text: 'Status', datafield: 'STATUS', width: 100, align: 'center', cellsrenderer: vPlanstatus, filtertype: 'checkedlist'},
              //{ text: '#Line', datafield: 'SMT_line', width: 80, align: 'center', cellsalign: 'center'},
              { text: 'Priority', datafield: 'Priority', width: 100, align: 'center', cellsalign: 'left', filtertype: 'checkedlist'},
              { text: 'Delivery Date', datafield: 'Delivery_date', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Plan Kitting', datafield: 'Schedule_Kitting_part', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Side', datafield: 'Side', width: 60, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Project', datafield: 'Project', width: 80, align: 'center', cellsalign: 'center'},
              //{ text: 'PCB SAP Code', datafield: 'PCB_SAP_Code', width: 100, align: 'center', cellsalign: 'center'},
              //{ text: 'Type', datafield: 'Type', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'FG SAP Code', datafield: 'FG_SAP_Code', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Model', datafield: 'Model', minwidth: 200, align: 'center', cellsalign: 'center'},
              { text: 'Tracking', datafield: 'Tracking', width: 100, align: 'center', cellsalign: 'center', aggregates: ['count']},
              { text: 'Lot', datafield: 'Lot', width: 60, align: 'center', cellsalign: 'center', cellsFormat: 'd0'},
              { text: 'Plans', datafield: 'Plans', width: 60, align: 'center', cellsalign: 'center', cellsFormat: 'd0'},
              //{ text: 'Start Date', datafield: 'WH_Start_Date', width: 160, columngroup: 'Warehouse', align: 'center', cellsalign: 'center'},
              //{ text: 'End Date', datafield: 'WH_End_Date', width: 160, columngroup: 'Warehouse', align: 'center', cellsalign: 'center'},
              //{ text: 'Unit/Hrs', datafield: 'Unit_Hrs', width: 100, align: 'center', cellsalign: 'center'},
              //{ text: 'Start Date', datafield: 'WH_Start_Date', width: 160, columngroup: 'Warehouse', align: 'center', cellsalign: 'center'},
              //{ text: 'End Date', datafield: 'WH_End_Date', width: 160, columngroup: 'Warehouse', align: 'center', cellsalign: 'center'},
              //{ text: 'Start Date', datafield: 'Pro_Start_Date', width: 160, columngroup: 'Production', align: 'center', cellsalign: 'center'},
              //{ text: 'End Date', datafield: 'Pro_End_Date', width: 160, columngroup: 'Production', align: 'center', cellsalign: 'center'},
            ],
                columngroups: [
                    { text: 'Warehouse', align: 'center', name: 'Warehouse' }
            ]
        });
        PLAN_SEC();

        $("#vbtReload").click(function () {
              PLAN_SEC_DATE();
              MAIN_PLAN_SEC_TOTAL_STATUS();
          });


        $("#startDate").jqxDateTimeInput({width: '100px', height: '25px', formatString: 'yyyy-MM-dd'});
        $("#endDate").jqxDateTimeInput({width: '100px', height: '25px', formatString: 'yyyy-MM-dd'});
});

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function PLAN_SEC() {
            var pDate = '';
            var act = 'MAIN_PLAN_SEC_OVERTRACKING';
            var url = "main.class.php?action="+act;
            var pData = {
                Date : pDate
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
                    { name: 'Delivery_date', type: 'string' },
                    { name: 'Side', type: 'string' },
                    { name: 'Project', type: 'string' },
                    { name: 'PCB_SAP_Code', type: 'string' },
                    { name: 'Type', type: 'string' },
                    { name: 'FG_SAP_Code', type: 'string' },
                    { name: 'Model', type: 'string' },
                    { name: 'Tracking', type: 'string' },
                    { name: 'Lot', type: 'string' },
                    { name: 'Plans', type: 'string' },
                    { name: 'PLAN_Start_Date', type: 'string' },
                    { name: 'PLAN_End_Date', type: 'string' },
                    { name: 'Unit_Hrs', type: 'string' },
                    { name: 'Schedule_Kitting_part', type: 'string' },
                    { name: 'WH_Start_Date', type: 'string' },
                    { name: 'WH_End_Date', type: 'string' },
                    { name: 'Pro_Start_Date', type: 'string' },
                    { name: 'Pro_End_Date', type: 'string' }
                ]
            };
            var gridPlan = new $.jqx.dataAdapter(source);
             $("#gridPlan").jqxGrid({source: gridPlan});
  }

function PLAN_SEC_DATE() {
            var pStartDate = $("#startDate").val();
            var pEndDate = $("#endDate").val();
            var pDate = '';
            var act = 'MAIN_PLAN_SEC_OVERTRACKING_DATE';
            var url = "main.class.php?action="+act;
            var pData = {
                startDate : pStartDate,
                endDate : pEndDate
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
                    { name: 'Delivery_date', type: 'string' },
                    { name: 'Side', type: 'string' },
                    { name: 'Project', type: 'string' },
                    { name: 'PCB_SAP_Code', type: 'string' },
                    { name: 'Type', type: 'string' },
                    { name: 'FG_SAP_Code', type: 'string' },
                    { name: 'Model', type: 'string' },
                    { name: 'Tracking', type: 'string' },
                    { name: 'Lot', type: 'string' },
                    { name: 'Plans', type: 'string' },
                    { name: 'PLAN_Start_Date', type: 'string' },
                    { name: 'PLAN_End_Date', type: 'string' },
                    { name: 'Unit_Hrs', type: 'string' },
                    { name: 'Schedule_Kitting_part', type: 'string' },
                    { name: 'WH_Start_Date', type: 'string' },
                    { name: 'WH_End_Date', type: 'string' },
                    { name: 'Pro_Start_Date', type: 'string' },
                    { name: 'Pro_End_Date', type: 'string' }
                ]
            };
            var gridPlan = new $.jqx.dataAdapter(source);
             $("#gridPlan").jqxGrid({source: gridPlan});
  }
