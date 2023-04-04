$(document).ready(function () {


  var vStatusRTOT = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
      if (value == '1') {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #2b8e31;"><B>' + 'Y' + '</B></span>';
      }
      else {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #ff0000;"><B>' + 'N' + '</B></span>';
      }
  }

  var vStatusRTOTTeam = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
      if (value != '0') {
          return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #ff0000;"><B>' + value + '</B></span>';
      }
  }

  var cellclass = function (row, columnfield, value) { return 'blue'; };
  var cellclassI = function (row, columnfield, value) { return 'yellow'; };

  $("#vRtotDate").jqxDateTimeInput({
        width: '125px',
        height: '25px',
        allowNullDate: true,
        //editMode: 'full',
        formatString: 'yyyyMM',
        showFooter: true,
        value: null,
        theme: "darkblue"
        //yearCutoff: 1926
    });

  $("#gridRTOT").jqxGrid({
        width: "100%",
        height: 635,
        altrows: true,
        filterable: true,
        sortable: true,
        showstatusbar: true,
        statusbarheight: 25,
        showaggregates: true,
        theme: theme,
        showaggregates: true,
        //pageable: true,
        //pagesize: 20,
        groupable: true,
        //pagesizeoptions: ['20', '50', '100', '500', '1000'],
        selectionmode: 'multiplerowsextended',
        columns: [
          { text: 'Emp ID', datafield: 'EmployeeID', width: 60, align: 'center', pinned: true },
          { text: 'Employee Name', datafield: 'EmpName', width: 160, align: 'center', pinned: true, aggregates: ['count'] },
          { text: 'Position', datafield: 'EmpPosition', width: 160, align: 'center', cellsalign: 'center', pinned: true },
          { text: 'Team', datafield: 'Team', width: 180, align: 'center', cellsalign: 'center', filtertype: 'checkedlist', pinned: true },
          { text: 'RT', datafield: 'DAY1_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day1', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY1_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day1', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY2_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day2'},
          { text: 'OT', datafield: 'DAY2_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day2'},
          { text: 'RT', datafield: 'DAY3_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day3', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY3_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day3', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY4_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day4'},
          { text: 'OT', datafield: 'DAY4_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day4'},
          { text: 'RT', datafield: 'DAY5_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day5', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY5_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day5', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY6_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day6'},
          { text: 'OT', datafield: 'DAY6_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day6'},
          { text: 'RT', datafield: 'DAY7_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day7', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY7_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day7', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY8_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day8'},
          { text: 'OT', datafield: 'DAY8_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day8'},
          { text: 'RT', datafield: 'DAY9_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day9', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY9_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day9', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY10_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day10'},
          { text: 'OT', datafield: 'DAY10_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day10'},
          { text: 'RT', datafield: 'DAY11_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day11', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY11_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day11', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY12_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day12'},
          { text: 'OT', datafield: 'DAY12_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day12'},
          { text: 'RT', datafield: 'DAY13_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day13', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY13_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day13', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY14_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day14'},
          { text: 'OT', datafield: 'DAY14_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day14'},
          { text: 'RT', datafield: 'DAY15_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day15', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY15_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day15', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY16_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day16'},
          { text: 'OT', datafield: 'DAY16_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day16'},
          { text: 'RT', datafield: 'DAY17_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day17', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY17_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day17', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY18_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day18'},
          { text: 'OT', datafield: 'DAY18_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day18'},
          { text: 'RT', datafield: 'DAY19_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day19', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY19_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day19', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY20_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day20'},
          { text: 'OT', datafield: 'DAY20_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day20'},
          { text: 'RT', datafield: 'DAY21_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day21', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY21_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day21', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY22_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day22'},
          { text: 'OT', datafield: 'DAY22_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day22'},
          { text: 'RT', datafield: 'DAY23_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day23', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY23_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day23', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY24_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day24'},
          { text: 'OT', datafield: 'DAY24_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day24'},
          { text: 'RT', datafield: 'DAY25_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day25', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY25_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day25', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY26_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day26'},
          { text: 'OT', datafield: 'DAY26_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day26'},
          { text: 'RT', datafield: 'DAY27_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day27', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY27_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day27', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY28_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day28'},
          { text: 'OT', datafield: 'DAY28_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day28'},
          { text: 'RT', datafield: 'DAY29_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day29', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY29_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day29', cellclassname: cellclassI},
          { text: 'RT', datafield: 'DAY30_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day30'},
          { text: 'OT', datafield: 'DAY30_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day30'},
          { text: 'RT', datafield: 'DAY31_RT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day31', cellclassname: cellclassI},
          { text: 'OT', datafield: 'DAY31_OT', width: 30, align: 'center', cellsalign: 'center', cellsrenderer: vStatusRTOT, columngroup: 'Day31', cellclassname: cellclassI},
          { text: 'Edit', datafield: 'Edit', width: 50, columntype: 'button', cellsrenderer: function () {
                   return "Edit";
                }, buttonclick: function (row) {
                   // open the popup window when the user clicks a button.
                   editrow = row;
                   // get the clicked row's data and initialize the input fields.
                   var dataRecord = $("#gridRTOT").jqxGrid('getrowdata', editrow);

                   $("#vEMPtype").html('Edit');
                   $("#vEMP_DEPT").val('QA');
                   $("#vEMP_EmployeeID").val(dataRecord.EmployeeID);
                   $("#vEMP_EmployeeID").jqxInput({disabled: true});

                   let vEmpName = dataRecord.EmpName;
                   const aEmpName = vEmpName.split(" ");

                   $("#vEMP_Name").val(aEmpName[0]);
                   $("#vEMP_LastName").val(aEmpName[1]);

                   $("#vEMP_Position").val(dataRecord.EmpPosition);
                   $("#vEMP_Team").val(dataRecord.Team);

                   $("#windowEmployee").jqxWindow('open');
            }
          },
          { text: 'Delete', datafield: 'Delete', width: 50, align: 'center', columntype: 'button', cellsrenderer: function () {
                   return "Out";
                }, buttonclick: function (row) {
                   // open the popup window when the user clicks a button.
                   editrow = row;
                   // get the clicked row's data and initialize the input fields.
                   var dataRecord = $("#gridRTOT").jqxGrid('getrowdata', editrow);
                   var vEmpID = dataRecord.EmployeeID;
                   var vEmpName = dataRecord.EmpName;
                   if(vEmpID != ''){
                     var r = confirm("Do you want to delete employee "+ vEmpName + " ?");
                       if (r == true) {
                           STBL_EMP_UPD_OUT(vEmpID);
                       }
                   }
             }
           }
        ],
            columngroups: [
                { text: '1', align: 'center', name: 'Day1' },
                { text: '2', align: 'center', name: 'Day2' },
                { text: '3', align: 'center', name: 'Day3' },
                { text: '4', align: 'center', name: 'Day4' },
                { text: '5', align: 'center', name: 'Day5' },
                { text: '6', align: 'center', name: 'Day6' },
                { text: '7', align: 'center', name: 'Day7' },
                { text: '8', align: 'center', name: 'Day8' },
                { text: '9', align: 'center', name: 'Day9' },
                { text: '10', align: 'center', name: 'Day10' },
                { text: '11', align: 'center', name: 'Day11' },
                { text: '12', align: 'center', name: 'Day12' },
                { text: '13', align: 'center', name: 'Day13' },
                { text: '14', align: 'center', name: 'Day14' },
                { text: '15', align: 'center', name: 'Day15' },
                { text: '16', align: 'center', name: 'Day16' },
                { text: '17', align: 'center', name: 'Day17' },
                { text: '18', align: 'center', name: 'Day18' },
                { text: '19', align: 'center', name: 'Day19' },
                { text: '20', align: 'center', name: 'Day20' },
                { text: '21', align: 'center', name: 'Day21' },
                { text: '22', align: 'center', name: 'Day22' },
                { text: '23', align: 'center', name: 'Day23' },
                { text: '24', align: 'center', name: 'Day24' },
                { text: '25', align: 'center', name: 'Day25' },
                { text: '26', align: 'center', name: 'Day26' },
                { text: '27', align: 'center', name: 'Day27' },
                { text: '28', align: 'center', name: 'Day28' },
                { text: '29', align: 'center', name: 'Day29' },
                { text: '30', align: 'center', name: 'Day30' },
                { text: '31', align: 'center', name: 'Day31' },
        ]
    });
    STBL_RTOT_EMP_BY_MONTH();

    $("#gridRTOT").on("bindingcomplete", function (event) {
        var rowCount = $("#gridRTOT").jqxGrid('getrows').length;

        var x = new Date();
        var vD = x.getDate();
        var vDayRT = 'DAY' + vD + '_RT';

        var vCountRT = 0;
        for(let i=0; i<rowCount; i++){

          var vRT = $("#gridRTOT").jqxGrid('getrows')[i][vDayRT];
          if(vRT == 1)
            vCountRT += 1;
        }

        $('#vTotalEmp').html(rowCount);
        $('#vComplteRT').html(vCountRT);
        $('#vWaitRT').html(rowCount - vCountRT);
    });

  $("#vbtExport").click(function () {
      $("#gridRTOT").jqxGrid('exportdata', 'csv', 'EmpployeeData');
  });

  $("#gridRTOTTeam").jqxGrid({
        width: "100%",
        height: 335,
        altrows: true,
        filterable: true,
        sortable: true,
        showstatusbar: true,
        statusbarheight: 25,
        showaggregates: true,
        theme: theme,
        //pageable: true,
        //pagesize: 20,
        //groupable: true,
        //pagesizeoptions: ['20', '50', '100', '500', '1000'],
        //selectionmode: 'multiplerowsextended',
        columns: [
          { text: 'Team', datafield: 'EmpTeam', width: 180, align: 'center', cellsalign: 'center', filtertype: 'checkedlist', pinned: true },
          { text: 'RT', datafield: 'Day1_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day1', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day1_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day1_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day1', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day1_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day1_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day1', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day1_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day2_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day2'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day2_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day2_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day2'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day2_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day2_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day2', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day2_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day3_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day3', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day3_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day3_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day3', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day3_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day3_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day3', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day3_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day4_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day4'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day4_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day4_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day4'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day4_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day4_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day4', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day4_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day5_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day5', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day5_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day5_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day5', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day5_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day5_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day5', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day5_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day6_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day6'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day6_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day6_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day6'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day6_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day6_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day6', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day6_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day7_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day7', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day7_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day7_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day7', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day7_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day7_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day7', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day7_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day8_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day8'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day8_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day8_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day8'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day8_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day8_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day8', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day8_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day9_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day9', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day9_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day9_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day9', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day9_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day9_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day9', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day9_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day10_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day10'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day10_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day10_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day10'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day10_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day10_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day10', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day10_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day11_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day11', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day11_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day11_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day11', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day11_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day11_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day11', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day11_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day12_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day12'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day12_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day12_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day12'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day12_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day12_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day12', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day12_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day13_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day13', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day13_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day13_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day13', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day13_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day13_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day13', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day13_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day14_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day14'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day14_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day14_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day14'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day14_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day14_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day14', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day14_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day15_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day15', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day15_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day15_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day15', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day15_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day15_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day15', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day15_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day16_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day16'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day16_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day16_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day16'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day16_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day16_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day16', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day16_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day17_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day17', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day17_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day17_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day17', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day17_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day17_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day17', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day17_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day18_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day18'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day18_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day18_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day18'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day18_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day18_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day18', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day18_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day19_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day19', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day19_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day19_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day19', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day19_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day19_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day19', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day19_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day20_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day20'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day20_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day20_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day20'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day20_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day20_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day20', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day20_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day21_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day21', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day21_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day21_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day21', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day21_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day21_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day21', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day21_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day22_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day22'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day22_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day22_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day22'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day22_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day22_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day22', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day22_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day23_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day23', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day23_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day23_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day23', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day23_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day23_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day23', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day23_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day24_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day24'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day24_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day24_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day24'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day24_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day24_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day24', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day24_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day25_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day25', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day25_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day25_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day25', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day25_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day25_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day25', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day25_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day26_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day26'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day26_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day26_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day26'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day26_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day26_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day26', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day26_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day27_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day27', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day27_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day27_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day27', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day27_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day27_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day27', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day27_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day28_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day28'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day28_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day28_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day28'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day28_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day28_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day28', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day28_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day29_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day29', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day29_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day29_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day29', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day29_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day29_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day29', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day29_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day30_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day30'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day30_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day30_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day30'
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day30_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day30_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day30', cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day30_NotOT']; return aggregatedValue + total;}}]},
          { text: 'RT', datafield: 'Day31_RT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day31', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day31_RT']; return aggregatedValue + total;}}]},
          { text: 'OT', datafield: 'Day31_OT', width: 40, align: 'center', cellsalign: 'center', columngroup: 'Day31', cellclassname: cellclass
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day31_OT']; return aggregatedValue + total;}}]},
          { text: 'nOT', datafield: 'Day31_NotOT', width: 35, align: 'center', cellsalign: 'center', columngroup: 'Day31', cellclassname: cellclass, cellsrenderer: vStatusRTOTTeam
            , aggregates: [{'':function (aggregatedValue, currentValue, column, record) { var total = record['Day31_NotOT']; return aggregatedValue + total;}}]}
       ],
            columngroups: [
                { text: '1', align: 'center', name: 'Day1' },
                { text: '2', align: 'center', name: 'Day2' },
                { text: '3', align: 'center', name: 'Day3' },
                { text: '4', align: 'center', name: 'Day4' },
                { text: '5', align: 'center', name: 'Day5' },
                { text: '6', align: 'center', name: 'Day6' },
                { text: '7', align: 'center', name: 'Day7' },
                { text: '8', align: 'center', name: 'Day8' },
                { text: '9', align: 'center', name: 'Day9' },
                { text: '10', align: 'center', name: 'Day10' },
                { text: '11', align: 'center', name: 'Day11' },
                { text: '12', align: 'center', name: 'Day12' },
                { text: '13', align: 'center', name: 'Day13' },
                { text: '14', align: 'center', name: 'Day14' },
                { text: '15', align: 'center', name: 'Day15' },
                { text: '16', align: 'center', name: 'Day16' },
                { text: '17', align: 'center', name: 'Day17' },
                { text: '18', align: 'center', name: 'Day18' },
                { text: '19', align: 'center', name: 'Day19' },
                { text: '20', align: 'center', name: 'Day20' },
                { text: '21', align: 'center', name: 'Day21' },
                { text: '22', align: 'center', name: 'Day22' },
                { text: '23', align: 'center', name: 'Day23' },
                { text: '24', align: 'center', name: 'Day24' },
                { text: '25', align: 'center', name: 'Day25' },
                { text: '26', align: 'center', name: 'Day26' },
                { text: '27', align: 'center', name: 'Day27' },
                { text: '28', align: 'center', name: 'Day28' },
                { text: '29', align: 'center', name: 'Day29' },
                { text: '30', align: 'center', name: 'Day30' },
                { text: '31', align: 'center', name: 'Day31' },
        ]
    });
    STBL_RTOT_EMP_SUMMARY_BY_TEAM();
  $("#vbtExportOTTeam").click(function () {
      $("#gridRTOTTeam").jqxGrid('exportdata', 'csv', 'TeamData');
  });

    var x = new Date();
    var vM = x.getMonth();
    var vY = x.getFullYear();

    var settingsChartRtot = {
        title: "Chart RT+OT QA",
        description: "",
        enableAnimations: true,
        showLegend: true,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        backgroundColor: '#eeeeee',
        xAxis:
            {
                dataField: 'Days',
                displayText: 'Day',
                type: 'text',
                baseUnit: 'day',
                valuesOnTicks: true,
                minValue: '01',
                maxValue: daysInMonth(vM,vY),
                unitInterval: 1,
                axisSize: 'auto',
                tickMarks: {
                    visible: true,
                    interval: 1,
                    color: '#BCBCBC'
                },
                gridLines: {
                    visible: true,
                    interval: 1,
                    color: '#BCBCBC'
                }
            },
        valueAxis:
        {
            //unitInterval: 10,
            minValue: 0.5,
            //maxValue: 120,
            logarithmicScale: true,
            logarithmicScaleBase: 2,
            title: { text: 'Tracking in plans' },
            labels: { horizontalAlignment: 'right' },
            tickMarks: { color: '#BCBCBC' }
        },
        colorScheme: 'scheme02',
        seriesGroups:
            [
                {
                    type: 'column',
                    columnsGapPercent: 20,
                    seriesGapPercent: 0,
                    series: [
                            { dataField: 'RT', displayText: 'RT' },
                            { dataField: 'OT', displayText: 'OT' },
                            { dataField: 'NotOT', displayText: 'No OT' }
                            //{ dataField: 'ProdStart', displayText: 'Production Start' },
                            //{ dataField: 'Finish', displayText: 'Finish' }
                        ]
                }
            ]
    };
    STBL_RTOT_EMP_SUMMARY_BY_MONTH_CHART();
    $('#chartRTOT').jqxChart(settingsChartRtot);

    $("#vbtReload").click(function () {
          STBL_RTOT_EMP_BY_MONTH();
          STBL_RTOT_EMP_SUMMARY_BY_TEAM();
          STBL_RTOT_EMP_SUMMARY_BY_MONTH_CHART();
      });

    $("#vbtAddEmp").click(function () {
          $("#vEMPtype").html('Add');
          clearFormEmp();
          $("#windowEmployee").jqxWindow('open');
      });

      /*---------Update Status POP UP------------*/
        $("#windowEmployee").jqxWindow({
                width: 400,
                height: 425,
                resizable: false,
                autoOpen: false,
                showCollapseButton: true,
                isModal: true,
                modalOpacity: 0.3
            });
      /*-------------------------------------------*/
      $('#windowEmployee').on('close', function (event) {
          clearFormEmp();
      });

      $("#vEMP_Save").click(function () {
          var vType = $("#vEMPtype").html();

          if(vType == 'Add')
          {
            STBL_EMP_INS();
          }
          else if(vType == 'Edit')
          {
            STBL_EMP_UPD();
          }
          else {
            clearFormEmp();
            $("#windowEmployee").jqxWindow('close');
          }
        });

      $("#vEMP_Cancel").click(function () {
          clearFormEmp();
          $("#windowEmployee").jqxWindow('close');
        });

      var vEMPTeamdataAdapter = STBL_LIST_GROUP('QA');
      $("#vEMP_Team").jqxDropDownList({ source: vEMPTeamdataAdapter, placeHolder: "Select Group", displayMember: "Team", valueMember: "Team", autoDropDownHeight: true, width: '200px',theme: "darkblue"});
      $("#vEMP_DEPT").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
      $("#vEMP_EmployeeID").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
      $("#vEMP_Name").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
      $("#vEMP_LastName").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
      $("#vEMP_Position").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
});

function clearFormEmp() {
  $("#vEMP_DEPT").val('QA');
  $("#vEMP_EmployeeID").val('');
  $("#vEMP_Name").val('');
  $("#vEMP_LastName").val('');
  $("#vEMP_Position").val('');
  $("#vEMP_Team").val('');
  $("#vEMP_EmployeeID").jqxInput({disabled: false});
}

function daysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function STBL_LIST_GROUP(vDEPT) {
              var act = 'STBL_LIST_GROUP';
              var url = "main.class.php?action="+act;
              var pData = {
                  Department : vDEPT
              };
              // prepare the data
              var source =
              {
                  datatype: "json",
                  datafields: [
                      { name: 'Team' }
                  ],
                  url: url,
                  data : pData,
                  type : 'POST',
                  async: true
              };
              var dataAdapter = new $.jqx.dataAdapter(source);
              return dataAdapter;
              //$("#vEMP_Team").jqxDropDownList({source: dataAdapter});
};

function STBL_RTOT_EMP_BY_MONTH() {
            var pDate = $('#vRtotDate').val();
            var pDepartment = 'QA';
            var act = 'STBL_RTOT_EMP_BY_MONTH';
            var url = "main.class.php?action="+act;
            var pData = {
                Date : pDate,
                Department : pDepartment
            };
            var source =
            {
                datatype: "json",
                url: url,
                type : 'POST',
                data : pData,
                root: 'data',
                datafields: [
                    { name: 'EmployeeID', type: 'string' },
                    { name: 'EmpName', type: 'string' },
                    { name: 'EmpPosition', type: 'string' },
                    { name: 'Team', type: 'string' },
                    { name: 'DAY1_RT', type: 'string' },
                    { name: 'DAY1_OT', type: 'string' },
                    { name: 'DAY2_RT', type: 'string' },
                    { name: 'DAY2_OT', type: 'string' },
                    { name: 'DAY3_RT', type: 'string' },
                    { name: 'DAY3_OT', type: 'string' },
                    { name: 'DAY4_RT', type: 'string' },
                    { name: 'DAY4_OT', type: 'string' },
                    { name: 'DAY5_RT', type: 'string' },
                    { name: 'DAY5_OT', type: 'string' },
                    { name: 'DAY6_RT', type: 'string' },
                    { name: 'DAY6_OT', type: 'string' },
                    { name: 'DAY7_RT', type: 'string' },
                    { name: 'DAY7_OT', type: 'string' },
                    { name: 'DAY8_RT', type: 'string' },
                    { name: 'DAY8_OT', type: 'string' },
                    { name: 'DAY9_RT', type: 'string' },
                    { name: 'DAY9_OT', type: 'string' },
                    { name: 'DAY10_RT', type: 'string' },
                    { name: 'DAY10_OT', type: 'string' },
                    { name: 'DAY11_RT', type: 'string' },
                    { name: 'DAY11_OT', type: 'string' },
                    { name: 'DAY12_RT', type: 'string' },
                    { name: 'DAY12_OT', type: 'string' },
                    { name: 'DAY13_RT', type: 'string' },
                    { name: 'DAY13_OT', type: 'string' },
                    { name: 'DAY14_RT', type: 'string' },
                    { name: 'DAY14_OT', type: 'string' },
                    { name: 'DAY15_RT', type: 'string' },
                    { name: 'DAY15_OT', type: 'string' },
                    { name: 'DAY16_RT', type: 'string' },
                    { name: 'DAY16_OT', type: 'string' },
                    { name: 'DAY17_RT', type: 'string' },
                    { name: 'DAY17_OT', type: 'string' },
                    { name: 'DAY18_RT', type: 'string' },
                    { name: 'DAY18_OT', type: 'string' },
                    { name: 'DAY19_RT', type: 'string' },
                    { name: 'DAY19_OT', type: 'string' },
                    { name: 'DAY20_RT', type: 'string' },
                    { name: 'DAY20_OT', type: 'string' },
                    { name: 'DAY21_RT', type: 'string' },
                    { name: 'DAY21_OT', type: 'string' },
                    { name: 'DAY22_RT', type: 'string' },
                    { name: 'DAY22_OT', type: 'string' },
                    { name: 'DAY23_RT', type: 'string' },
                    { name: 'DAY23_OT', type: 'string' },
                    { name: 'DAY24_RT', type: 'string' },
                    { name: 'DAY24_OT', type: 'string' },
                    { name: 'DAY25_RT', type: 'string' },
                    { name: 'DAY25_OT', type: 'string' },
                    { name: 'DAY26_RT', type: 'string' },
                    { name: 'DAY26_OT', type: 'string' },
                    { name: 'DAY27_RT', type: 'string' },
                    { name: 'DAY27_OT', type: 'string' },
                    { name: 'DAY28_RT', type: 'string' },
                    { name: 'DAY28_OT', type: 'string' },
                    { name: 'DAY29_RT', type: 'string' },
                    { name: 'DAY29_OT', type: 'string' },
                    { name: 'DAY30_RT', type: 'string' },
                    { name: 'DAY30_OT', type: 'string' },
                    { name: 'DAY31_RT', type: 'string' },
                    { name: 'DAY31_OT', type: 'string' }
                ]
            };
            var gridPlan = new $.jqx.dataAdapter(source);
             $("#gridRTOT").jqxGrid({source: gridPlan});
  }

function STBL_RTOT_EMP_SUMMARY_BY_TEAM() {
            var pDate = $('#vRtotDate').val();;
            var pDepartment = 'QA';
            var act = 'STBL_RTOT_EMP_SUMMARY_BY_TEAM';
            var url = "main.class.php?action="+act;
            var pData = {
                Date : pDate,
                Department : pDepartment
            };
            var source =
            {
                datatype: "json",
                url: url,
                type : 'POST',
                data : pData,
                root: 'data',
                datafields: [
                    { name: 'Department', type: 'string' },
                    { name: 'EmpTeam', type: 'string' },
                    { name: 'Day1_RT', type: 'string' },
                    { name: 'Day1_OT', type: 'string' },
                    { name: 'Day1_NotOT', type: 'string' },
                    { name: 'Day2_RT', type: 'string' },
                    { name: 'Day2_OT', type: 'string' },
                    { name: 'Day2_NotOT', type: 'string' },
                    { name: 'Day3_RT', type: 'string' },
                    { name: 'Day3_OT', type: 'string' },
                    { name: 'Day3_NotOT', type: 'string' },
                    { name: 'Day4_RT', type: 'string' },
                    { name: 'Day4_OT', type: 'string' },
                    { name: 'Day4_NotOT', type: 'string' },
                    { name: 'Day5_RT', type: 'string' },
                    { name: 'Day5_OT', type: 'string' },
                    { name: 'Day5_NotOT', type: 'string' },
                    { name: 'Day6_RT', type: 'string' },
                    { name: 'Day6_OT', type: 'string' },
                    { name: 'Day6_NotOT', type: 'string' },
                    { name: 'Day7_RT', type: 'string' },
                    { name: 'Day7_OT', type: 'string' },
                    { name: 'Day7_NotOT', type: 'string' },
                    { name: 'Day8_RT', type: 'string' },
                    { name: 'Day8_OT', type: 'string' },
                    { name: 'Day8_NotOT', type: 'string' },
                    { name: 'Day9_RT', type: 'string' },
                    { name: 'Day9_OT', type: 'string' },
                    { name: 'Day9_NotOT', type: 'string' },
                    { name: 'Day10_RT', type: 'string' },
                    { name: 'Day10_OT', type: 'string' },
                    { name: 'Day10_NotOT', type: 'string' },
                    { name: 'Day11_RT', type: 'string' },
                    { name: 'Day11_OT', type: 'string' },
                    { name: 'Day11_NotOT', type: 'string' },
                    { name: 'Day12_RT', type: 'string' },
                    { name: 'Day12_OT', type: 'string' },
                    { name: 'Day12_NotOT', type: 'string' },
                    { name: 'Day13_RT', type: 'string' },
                    { name: 'Day13_OT', type: 'string' },
                    { name: 'Day13_NotOT', type: 'string' },
                    { name: 'Day14_RT', type: 'string' },
                    { name: 'Day14_OT', type: 'string' },
                    { name: 'Day14_NotOT', type: 'string' },
                    { name: 'Day15_RT', type: 'string' },
                    { name: 'Day15_OT', type: 'string' },
                    { name: 'Day15_NotOT', type: 'string' },
                    { name: 'Day16_RT', type: 'string' },
                    { name: 'Day16_OT', type: 'string' },
                    { name: 'Day16_NotOT', type: 'string' },
                    { name: 'Day17_RT', type: 'string' },
                    { name: 'Day17_OT', type: 'string' },
                    { name: 'Day17_NotOT', type: 'string' },
                    { name: 'Day18_RT', type: 'string' },
                    { name: 'Day18_OT', type: 'string' },
                    { name: 'Day18_NotOT', type: 'string' },
                    { name: 'Day19_RT', type: 'string' },
                    { name: 'Day19_OT', type: 'string' },
                    { name: 'Day19_NotOT', type: 'string' },
                    { name: 'Day20_RT', type: 'string' },
                    { name: 'Day20_OT', type: 'string' },
                    { name: 'Day20_NotOT', type: 'string' },
                    { name: 'Day21_RT', type: 'string' },
                    { name: 'Day21_OT', type: 'string' },
                    { name: 'Day21_NotOT', type: 'string' },
                    { name: 'Day22_RT', type: 'string' },
                    { name: 'Day22_OT', type: 'string' },
                    { name: 'Day22_NotOT', type: 'string' },
                    { name: 'Day23_RT', type: 'string' },
                    { name: 'Day23_OT', type: 'string' },
                    { name: 'Day23_NotOT', type: 'string' },
                    { name: 'Day24_RT', type: 'string' },
                    { name: 'Day24_OT', type: 'string' },
                    { name: 'Day24_NotOT', type: 'string' },
                    { name: 'Day25_RT', type: 'string' },
                    { name: 'Day25_OT', type: 'string' },
                    { name: 'Day25_NotOT', type: 'string' },
                    { name: 'Day26_RT', type: 'string' },
                    { name: 'Day26_OT', type: 'string' },
                    { name: 'Day26_NotOT', type: 'string' },
                    { name: 'Day27_RT', type: 'string' },
                    { name: 'Day27_OT', type: 'string' },
                    { name: 'Day27_NotOT', type: 'string' },
                    { name: 'Day28_RT', type: 'string' },
                    { name: 'Day28_OT', type: 'string' },
                    { name: 'Day28_NotOT', type: 'string' },
                    { name: 'Day29_RT', type: 'string' },
                    { name: 'Day29_OT', type: 'string' },
                    { name: 'Day29_NotOT', type: 'string' },
                    { name: 'Day30_RT', type: 'string' },
                    { name: 'Day30_OT', type: 'string' },
                    { name: 'Day30_NotOT', type: 'string' },
                    { name: 'Day31_RT', type: 'string' },
                    { name: 'Day31_OT', type: 'string' },
                    { name: 'Day31_NotOT', type: 'string' }
                ]
            };
            var gridPlan = new $.jqx.dataAdapter(source);
             $("#gridRTOTTeam").jqxGrid({source: gridPlan});
  }

function STBL_RTOT_EMP_SUMMARY_BY_MONTH_CHART() {
            var pDate = $('#vRtotDate').val();;
            var pDepartment = 'QA';
            var act = 'STBL_RTOT_EMP_SUMMARY_BY_MONTH';
            var url = "main.class.php?action="+act;
            var pData = {
                Date : pDate,
                Department : pDepartment
            };
            var source =
            {
                datatype: "json",
                url: url,
                type : 'POST',
                data : pData,
                root: 'data',
                datafields: [
                  { name: 'Department', type: 'string' },
                  { name: 'Days', type: 'string' },
                  { name: 'RT', type: 'string' },
                  { name: 'OT', type: 'string' },
                  { name: 'NotOT', type: 'string' }
                ]
            };
            var ChartPlan = new $.jqx.dataAdapter(source);
            $('#chartRTOT').jqxChart({source: ChartPlan});
  }

function STBL_EMP_INS() {
        var vEMP_DEPT = $("#vEMP_DEPT").val();
        var vEMP_EmployeeID = $("#vEMP_EmployeeID").val();
        var vEMP_Name = $("#vEMP_Name").val();
        var vEMP_LastName = $("#vEMP_LastName").val();
        var vEMP_Position = $("#vEMP_Position").val();
        var vEMP_Team = $("#vEMP_Team").val();

         var act = 'STBL_EMP_INS';
         var url = "main.class.php?action="+ act;
         var pData = {
             EmpDept : vEMP_DEPT,
             EmployeeID : vEMP_EmployeeID,
             EmpName : vEMP_Name,
             EmpSurName : vEMP_LastName,
             EmpPosition : vEMP_Position,
             EmpTeam : vEMP_Team
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "success"){
                         STBL_RTOT_EMP_BY_MONTH();
                         STBL_RTOT_EMP_SUMMARY_BY_TEAM();
                         STBL_RTOT_EMP_SUMMARY_BY_MONTH_CHART();
                         alert(vResult);
                         $("#windowEmployee").jqxWindow('close');
                     }
                     else
                     {
                         alert(vResult);
                     }
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error");
                    }
         });
}

function STBL_EMP_UPD() {
        var vEMP_DEPT = $("#vEMP_DEPT").val();
        var vEMP_EmployeeID = $("#vEMP_EmployeeID").val();
        var vEMP_Name = $("#vEMP_Name").val();
        var vEMP_LastName = $("#vEMP_LastName").val();
        var vEMP_Position = $("#vEMP_Position").val();
        var vEMP_Team = $("#vEMP_Team").val();

         var act = 'STBL_EMP_UPD';
         var url = "main.class.php?action="+ act;
         var pData = {
             EmpDept : vEMP_DEPT,
             EmployeeID : vEMP_EmployeeID,
             EmpName : vEMP_Name,
             EmpSurName : vEMP_LastName,
             EmpPosition : vEMP_Position,
             EmpTeam : vEMP_Team
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "success"){
                         STBL_RTOT_EMP_BY_MONTH();
                         STBL_RTOT_EMP_SUMMARY_BY_TEAM();
                         STBL_RTOT_EMP_SUMMARY_BY_MONTH_CHART();
                         alert(vResult);
                         $("#windowEmployee").jqxWindow('close');
                     }
                     else
                     {
                         alert(vResult);
                     }
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error");
                    }
         });
}

function STBL_EMP_UPD_OUT(pEmpID) {

         var act = 'STBL_EMP_UPD_OUT';
         var url = "main.class.php?action="+ act;
         var pData = {
             EmployeeID : pEmpID
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "success"){
                         STBL_RTOT_EMP_BY_MONTH();
                         STBL_RTOT_EMP_SUMMARY_BY_TEAM();
                         STBL_RTOT_EMP_SUMMARY_BY_MONTH_CHART();
                         alert(vResult);
                         //clearFormEmp();
                     }
                     else
                     {
                         alert(vResult);
                     }
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error");
                    }
         });
}
