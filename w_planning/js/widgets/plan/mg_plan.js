$(document).ready(function () {

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
        $("#vShowLine").html('ALL');
        STBL_PLAN_MANAGE();
        PLAN_SEC();
    });

  $("#vbtCal").click(function () {
        //$('#vWaitWindonw').jqxWindow('open');
        var vLine = vLineList();
        console.log(vLine);
        let a = vLine.length;
        console.log(a);

        /*for(i=0;i<a;i++){

          STBL_AUTO_CAL_DATE_ALL(sLine[i]);
          console.log(sLine[i]);

        }*/

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
          { text: 'Edit', datafield: 'Edit', width: 50, align: 'center', columntype: 'button', pinned: true, cellsrenderer: function () {
                   return "Edit";
                }, buttonclick: function (row) {
                   // open the popup window when the user clicks a button.
                   editrow = row;
                   // get the clicked row's data and initialize the input fields.
                   var dataRecord = $("#gridPlan").jqxGrid('getrowdata', editrow);
                   $("#pPlanID").val(dataRecord.ID);
                   $("#pLine").val(dataRecord.SMT_line);
                   $("#pPriority").val(dataRecord.Priority);
                   $('#pDeliDate').val(dataRecord.Delivery_date);
                   $("#pSide").val(dataRecord.Side);
                   $("#pProject").val(dataRecord.Project);
                   $("#pPCBCode").val(dataRecord.PCB_SAP_Code);

                   $("#pType").val(dataRecord.Type);
                   $("#pFGCode").val(dataRecord.FG_SAP_Code);
                   $("#pTracking").val(dataRecord.Tracking);
                   $("#pModel").val(dataRecord.Model);
                   $("#pLot").val(dataRecord.Lot);

                   $("#pPlanQty").val(dataRecord.Plans);
                   $("#pPlanStartDate").val(dataRecord.PLAN_Start_Date);
                   $("#pPlanEndDate").val(dataRecord.PLAN_End_Date);

                   $("#pUnitHrs").val(dataRecord.Unit_Hrs);
                   $("#pScheduleKit").val(dataRecord.Schedule_Kitting_part);

                   $("#PlanWindowHeader").html("Update Plan");
                   $('#vAddPlan').jqxWindow('open');
            }
          },
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
          { text: 'Lot', datafield: 'Lot', width: 60, align: 'center', cellsalign: 'center', cellsFormat: 'd0'},
          { text: 'Plans', datafield: 'Plans', width: 60, align: 'center', cellsalign: 'center', cellsFormat: 'd0'},
          { text: 'Actual', datafield: 'Actual', width: 60, align: 'center', cellsalign: 'center', cellsFormat: 'd0'},
          { text: 'Start Date', datafield: 'PLAN_Start_Date', width: 160, columngroup: 'Plan', align: 'center', cellsalign: 'center'},
          { text: 'End Date', datafield: 'PLAN_End_Date', width: 160, columngroup: 'Plan', align: 'center', cellsalign: 'center'},
          { text: 'Unit/Hrs', datafield: 'Unit_Hrs', width: 100, align: 'center', cellsalign: 'center'},
          { text: 'Plan Kitting', datafield: 'Schedule_Kitting_part', width: 100, align: 'center', cellsalign: 'center'},
          { text: 'Start Date', datafield: 'WH_Start_Date', width: 160, columngroup: 'Warehouse', align: 'center', cellsalign: 'center'},
          { text: 'End Date', datafield: 'WH_End_Date', width: 160, columngroup: 'Warehouse', align: 'center', cellsalign: 'center'},
          { text: 'Start Date', datafield: 'Pro_Start_Date', width: 160, columngroup: 'Production', align: 'center', cellsalign: 'center'},
          { text: 'End Date', datafield: 'Pro_End_Date', width: 160, columngroup: 'Production', align: 'center', cellsalign: 'center'},
          { text: 'WH', datafield: 'DiffWHPlanStart', width: 60, columngroup: 'Diff', align: 'center', cellsalign: 'center', cellsrenderer: vPlanDiffStatus},
          { text: 'Prod', datafield: 'DiffPDPlanStart', width: 60, columngroup: 'Diff', align: 'center', cellsalign: 'center', cellsrenderer: vPlanDiffStatus},
          { text: 'Delete', datafield: 'Delete', width: 50, columntype: 'button', cellsrenderer: function () {
                   return "Delete";
                }, buttonclick: function (row) {
                   // open the popup window when the user clicks a button.
                   editrow = row;
                   // get the clicked row's data and initialize the input fields.
                   var dataRecord = $("#gridPlan").jqxGrid('getrowdata', editrow);
                   var ID = dataRecord.ID;
                   $("#pPlanID").val(ID);
                   var Tracking = dataRecord.Tracking;
                   if(ID != ''){
                     var r = confirm("Do you want to delete "+ Tracking + " ?");
                       if (r == true) {
                           PLAN_DEL(ID);
                       }
                   }
                   //EDER_DEL(ID);
            }
          }
        ],
            columngroups: [
                { text: 'Plan', align: 'center', name: 'Plan' },
                { text: 'Warehouse', align: 'center', name: 'Warehouse' },
                { text: 'Production', align: 'center', name: 'Production' },
                { text: 'Diff Plan (min.)', align: 'center', name: 'Diff' }
        ]
    });
    $('#gridPlan').on('rowselect', function (event)
    {
        // event arguments.
        var args = event.args;
        // row's bound index.
        var rowBoundIndex = args.rowindex;
        // row's data. The row's data object or null(when all rows are being selected or unselected with a single action). If you have a datafield called "firstName", to access the row's firstName, use var firstName = rowData.firstName;
        var rowData = args.row;
        $("#vShowLine").html(rowData.SMT_line);
        console.log(rowData.SMT_line);
    });
    PLAN_SEC();

  //var vLine = ('Line-1','Line-2');
  var x = new Date();
  var vM = x.getMonth();
  var vY = x.getFullYear();
  var settingsChartPlan = {
      title: "Chart Plans",
      description: "",
      enableAnimations: true,
      showLegend: true,
      padding: { left: 5, top: 5, right: 5, bottom: 5 },
      titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
      backgroundColor: '#eeeeee',
      xAxis:
          {
              dataField: 'SMT_line',
              displayText: 'Line',
              showGridLines: true,
              labels: {
                  angle: -90,
                  rotationPoint: 'topright',
                  offset: { x: 0, y: -25 }
              }
          },
      valueAxis:
      {
          //unitInterval: 10,
          //minValue: 0,
          //maxValue: 100,
          logarithmicScale: true,
          logarithmicScaleBase: 2,
          title: { text: 'Tracking in plans' },
          labels: { horizontalAlignment: 'right' },
          tickMarks: { color: '#BCBCBC' }
      },
      colorScheme: 'scheme06',
      seriesGroups:
          [
              {
                  type: 'stackedcolumn',
                  columnsGapPercent: 50,
                  seriesGapPercent: 0,
                  series: [
                            { dataField: 'PlanStart', displayText: 'Plan Start' },
                            { dataField: 'KittingStart', displayText: 'Kitting Start' },
                            { dataField: 'KittingDone', displayText: 'Kitting Done' },
                            { dataField: 'ProdStart', displayText: 'Production Start' },
                            { dataField: 'Finish', displayText: 'Finish' }
                      ]
              }
          ]
  };
  // setup the chart
  STBL_PLAN_MANAGE();
  $('#chartManagePlans').jqxChart(settingsChartPlan);

  $("#pPriority").jqxInput({ width: 180, height: 25});
  let sourceSide = ["WSM","A-1","A-2","B-1","B-2","A+B"];
  $("#pSide").jqxDropDownList({ source: sourceSide, placeHolder: "Side",width: 180, autoDropDownHeight: true});
  $("#pProject").jqxInput({ width: 180, height: 25});
  $("#pPCBCode").jqxInput({ width: 180, height: 25});
  $("#pType").jqxInput({ width: 180, height: 25});
  $("#pFGCode").jqxInput({ width: 180, height: 25});
  $("#pTracking").jqxInput({ width: 180, height: 25});
  $("#pModel").jqxInput({ width: 180, height: 25});
  $("#pLot").jqxInput({ width: 180, height: 25});
  $("#pPlanQty").jqxInput({ width: 180, height: 25});
  $("#pUnitHrs").jqxInput({ width: 180, height: 25});

  //$("#pISUTracking").jqxInput({ width: 180, height: 25});
  //$("#pRemark").jqxInput({ width: '100%', height: 25});

  $("#pPlanStartDate").jqxDateTimeInput({
       width: '180px',
       height: '25px',
       allowNullDate: true,
       //editMode: 'full',
       formatString: 'yyyy-MM-dd HH:mm:ss',
       showFooter: true,
       value: null
       //yearCutoff: 1926
   });
  $("#pPlanEndDate").jqxDateTimeInput({
       width: '180px',
       height: '25px',
       allowNullDate: true,
       //editMode: 'full',
       formatString: 'yyyy-MM-dd HH:mm:ss',
       showFooter: true,
       value: null
       //yearCutoff: 1926
   });
  $("#pDeliDate").jqxDateTimeInput({
      width: '100px',
      height: '25px',
      allowNullDate: true,
      //editMode: 'full',
      formatString: 'yyyy-MM-dd',
      showFooter: true,
      value: null
      //yearCutoff: 1926
  });
  $("#pScheduleKit").jqxDateTimeInput({
      width: '100px',
      height: '25px',
      allowNullDate: true,
      //editMode: 'full',
      formatString: 'yyyy-MM-dd',
      showFooter: true,
      value: null
      //yearCutoff: 1926
  });
 /*---------Update Status POP UP------------*/
  $("#vAddPlan").jqxWindow({
          width: 700,
          height: 530,
          resizable: false,
          autoOpen: false,
          showCollapseButton: true,
          cancelButton: $("#vAddPlanClose"),
          isModal: true,
          modalOpacity: 0.3
      });

  $("#vAddPlanClose").click(function () {
        $('#vAddPlan').jqxWindow('close');
        clearData();
    });
  $("#vAddPlanSave").click(function () {
        var vType = $("#PlanWindowHeader").html();
        if(vType == 'Add Plan')
        {
            PLAN_INS('INS');
        }
        else if(vType == 'Update Plan')
        {
            PLAN_INS('UPD');
        }
    });

    $("#vWaitWindonw").jqxWindow({
            width: 300,
            height: 150,
            resizable: false,
            autoOpen: false,
            showCollapseButton: true,
            //cancelButton: $("#vAddPlanClose"),
            isModal: true,
            modalOpacity: 0.3
        });
});

function daysInMonth (month, year) {
    console.log(new Date(year, month, 0).getDate());
    return new Date(year, month, 0).getDate();
}

function vLineList() {
      var act = 'STBL_LIST_LINE';
      var url = "main.class.php?action="+ act;
      // prepare the data
      var pData = {};
      let vLine = [];
      let sLine = [];
      let vL = "";
      $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                data: pData,
                success: function(e) {
                  var data = e;
                  var vResult = data.data;
                  let c = vResult.length;

                  for(i=0;i<c;i++){
                    let vStatus = vResult[i].Line + " Updateing...";
                    $("#vShowLine").html(vStatus);
                    STBL_AUTO_CAL_DATE_ALL(vResult[i].Line);
                  }
                },
                error: function(xhr, status, error){
                    vLine = [];
                    console.log(error);
                    alert("Error");
                 }
      });
console.log(vL);
      return vLine;
}

function PLAN_INS(vType) {

        var pPlanID = $("#pPlanID").val();
        var pSMT_line = $("#pLine").val();
        var pPriority = $("#pPriority").val();
        var pDeliDate = $("#pDeliDate").val();
        var pSide = $("#pSide").val();
        var pProject = $("#pProject").val();
        var pPCBCode = $("#pPCBCode").val();
        var pType = $("#pType").val();
        var pFGCode = $("#pFGCode").val();
        var pTracking = $("#pTracking").val();
        var pModel = $("#pModel").val();
        var pTracking = $("#pTracking").val();
        var pModel = $("#pModel").val();
        var pLot = $("#pLot").val();
        var pPlanQty = $("#pPlanQty").val();
        var pPlanStartDate = $("#pPlanStartDate").val();
        var pPlanEndDate = $("#pPlanEndDate").val();
        var pUnitHrs = $("#pUnitHrs").val();
        var pScheduleKit = $("#pScheduleKit").val();
        var pUserName = $("#UserName").html();

         var act = '';

         if(vType == 'INS')
         {
           act = 'PLAN_INS';
         }
         else if(vType == 'UPD')
         {
           act = 'PLAN_UPD';
         }

         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pPlanID,
             SMT_line : pSMT_line,
             Priority : pPriority,
             Delivery_date : pDeliDate,
             Side : pSide,
             Project : pProject,
             PCB_SAP_Code : pPCBCode,
             Type : pType,
             FG_SAP_Code : pFGCode,
             Model : pModel,
             Tracking : pTracking,
             Lot : pLot,
             Plans : pPlanQty,
             PLAN_Start_Date : pPlanStartDate,
             PLAN_End_Date : pPlanEndDate,

             Unit_Hrs : pUnitHrs,
             Schedule_Kitting_part : pScheduleKit,
             WH_Start_Date : '',
             WH_End_Date : '',
             Pro_Start_Date : '',
             Pro_End_Date : '',
             UserName : pUserName
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "Success"){
                         ShowNoti(vResult,"success");
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                     PLAN_SEC();
                     MAIN_PLAN_SEC_TOTAL_STATUS();
                     clearData();
                     $('#vAddPlan').jqxWindow('close');
                   },
                   error: function(xhr, status, error){
                       console.log(error);
                       $('#vAddPlan').jqxWindow('close');
                       alert("Error");
                    }
         });
}

function PLAN_DEL(ID) {

        var pID = ID;

         var act = 'PLAN_DEL';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pID
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "Success"){
                         ShowNoti(vResult,"success");
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                     clearData();
                     PLAN_SEC();
                     STBL_PLAN_MANAGE();
                   },
                   error: function(xhr, status, error){
                      //console.log(error);
                       alert("Error");
                    }
         });
}

function STBL_AUTO_CAL_DATE_ALL(vLine) {

        //var pID = ID;
       var act = 'STBL_AUTO_CAL_DATE_ALL';
       var url = "main.class.php?action="+ act;
       var pData = { Line : vLine};

       $.ajax({
                 type: "POST",
                 url: url,
                 dataType: "json",
                 data: pData,
                 success: function(e) {
                   var data = e;
                   var vResult = data.data[0].Result;

                   let vStatusII = vLine + " Done";
                   let vStatusIII = vLine + " error";
                   //$("#vShowLine").html(vStatus);
                   if(vResult == "Success"){
                       ShowNoti(vLine + ": " + vResult,"success");
                       $("#vShowLine").html(vStatusII);
                   }
                   else
                   {
                       ShowNoti(vLine + ": " + vResult,"warning");
                       $("#vShowLine").html(vStatusIII);
                   }
                 },
                 error: function(xhr, status, error){
                    //console.log(error);
                     alert(vLine + ":: Error");
                  }
       });
}

function PLAN_SEC() {

            var pDate = $("#vPlanDate").val();
            var pLine = $("#vShowLine").html();
            var act = 'PLAN_SEC';
            var url = "main.class.php?action="+act;
            var pData = {
                Date : pDate
                ,Line : pLine
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
             STBL_PLAN_MANAGE();
  }

function STBL_PLAN_MANAGE() {
            var pDate = $("#vPlanDate").val();
            var act = 'STBL_PLAN_MANAGE';
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
                  { name: 'SMT_line', type: 'string' },
                  { name: 'Tracking', type: 'string' },
                  { name: 'PlanStart', type: 'string' },
                  { name: 'KittingStart', type: 'string' },
                  { name: 'KittingDone', type: 'string' },
                  { name: 'ProdStart', type: 'string' },
                  { name: 'Finish', type: 'string' },
                  { name: 'TOTAL_TIME', type: 'number' }
                ]
            };
            var ChartPlan = new $.jqx.dataAdapter(source);
            $('#chartManagePlans').jqxChart({source: ChartPlan});
  }

  function clearData() {

      $("#pPlanID").val('');
      //$("#pLine").val('');
      $("#pPriority").val('');
      $('#pDeliDate').val('');
      $("#pSide").val('');
      $("#pProject").val('');
      $("#pPCBCode").val('');

      $("#pType").val('');
      $("#pFGCode").val('');
      $("#pTracking").val('');
      $("#pModel").val('');
      $("#pLot").val('');

      $("#pPlanQty").val('');
      $("#pPlanStartDate").val('');
      $("#pPlanEndDate").val('');
      $("#pUnitHrs").val('');
      $("#pScheduleKit").val('');

      //$("#pPlanIssueID").val('');
      //$("#pISUTracking").val('');
      //$("#pRemark").val('');

      $("#pLine").jqxComboBox({ selectedIndex: -1 });

    }
