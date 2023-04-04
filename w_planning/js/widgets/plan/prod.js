$(document).ready(function () {

      $("#vPA_Actual").jqxInput({placeHolder: 'Actual Qty', height: 25, width: '100%', minLength: 1,theme: "darkblue"});

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

      var vGroupStatus = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
          if (value == 'ON') {
              return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #28b463;"><B>' + value + '</B></span>';
          }
          else {
              return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #c0392b;"><B>' + value + '</B></span>';
          }
      }

      $("#pISUTracking").jqxInput({ width: 180, height: 25});
      $("#pRemark").jqxInput({ width: '100%', height: 25});

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
              { text: 'Start', datafield: 'Start', width: 50, align: 'center', columntype: 'button', pinned: true, cellsrenderer: function () {
                       return "Start";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridPlan").jqxGrid('getrowdata', editrow);
                       var ID = dataRecord.ID;
                       $("#vPA_ID").val(ID);
                       var Tracking = dataRecord.Tracking;
                       if(ID != ''){
                         var r = confirm("Do you want to start production "+ Tracking + " ?");
                           if (r == true) {
                               MAIN_PROD_UPD('Start');
                           }
                       }
                 }
               },
               { text: 'End', datafield: 'End', width: 50, align: 'center', columntype: 'button', pinned: true, cellsrenderer: function () {
                        return "End";
                     }, buttonclick: function (row) {
                        // open the popup window when the user clicks a button.
                        editrow = row;
                        // get the clicked row's data and initialize the input fields.
                        var dataRecord = $("#gridPlan").jqxGrid('getrowdata', editrow);
                        var ID = dataRecord.ID;
                        $("#vPA_ID").val(ID);
                        var Tracking = dataRecord.Tracking;
                        if(ID != ''){
                          $("#vWDProdActul").html("Edit");
                          $("#windowProdActul").jqxWindow('open');
                          //var r = confirm("Do you want to finish kitting "+ Tracking + " ?");
                            /*if (r == true) {
                                MAIN_PROD_UPD('End', ID);
                            }*/
                        }
                  }
                },
              { text: 'Status', datafield: 'STATUS', width: 100, align: 'center', cellsalign: 'center', cellsrenderer: vPlanstatus, filtertype: 'checkedlist', pinned: true},
              { text: '#Line', datafield: 'SMT_line', width: 80, align: 'center', cellsalign: 'center', filtertype: 'checkedlist', pinned: true},
              { text: 'Priority', datafield: 'Priority', width: 100, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Delivery Date', datafield: 'Delivery_date', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Side', datafield: 'Side', width: 60, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Project', datafield: 'Project', width: 80, align: 'center', cellsalign: 'center'},
              //{ text: 'PCB SAP Code', datafield: 'PCB_SAP_Code', width: 100, align: 'center', cellsalign: 'center'},
              //{ text: 'Type', datafield: 'Type', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'FG SAP Code', datafield: 'FG_SAP_Code', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Model', datafield: 'Model', minwidth: 200, align: 'center', cellsalign: 'center'},
              { text: 'Tracking', datafield: 'Tracking', width: 100, align: 'center', cellsalign: 'center', aggregates: ['count'], pinned: true},
              { text: 'Lot', datafield: 'Lot', width: 60, align: 'center', cellsalign: 'center', cellsFormat: 'd0'},
              { text: 'Plans', datafield: 'Plans', width: 60, align: 'center', cellsalign: 'center', cellsFormat: 'd0'},
              { text: 'Start Date', datafield: 'Pro_Start_Date', width: 160, columngroup: 'Production', align: 'center', cellsalign: 'center'},
              { text: 'End Date', datafield: 'Pro_End_Date', width: 160, columngroup: 'Production', align: 'center', cellsalign: 'center'},
              //{ text: 'Unit/Hrs', datafield: 'Unit_Hrs', width: 100, align: 'center', cellsalign: 'center'},
              //{ text: 'Start Date', datafield: 'WH_Start_Date', width: 160, columngroup: 'Warehouse', align: 'center', cellsalign: 'center'},
              //{ text: 'End Date', datafield: 'WH_End_Date', width: 160, columngroup: 'Warehouse', align: 'center', cellsalign: 'center'},
              //{ text: 'Start Date', datafield: 'Pro_Start_Date', width: 160, columngroup: 'Production', align: 'center', cellsalign: 'center'},
              //{ text: 'End Date', datafield: 'Pro_End_Date', width: 160, columngroup: 'Production', align: 'center', cellsalign: 'center'},
            ],
                columngroups: [
                    { text: 'Production', align: 'center', name: 'Production' }
            ],
            groups: ['#Line']
        });
        PLAN_SEC();
        $("#gridPlan").on('rowselect', function (event) {
              var Tracking = event.args.row.Tracking;
              STBL_REMARK_SEC(Tracking);
              $("#vsTracking").html(Tracking);
          });

        $("#vbtReload").click(function () {
              PLAN_SEC();
              MAIN_PLAN_SEC_TOTAL_STATUS();
          });

          var x = new Date();
          var vM = x.getMonth();
          var vY = x.getFullYear();

          var settingsChartPlan = {
              title: "Chart Production Plans",
              description: "",
              enableAnimations: true,
              showLegend: true,
              padding: { left: 5, top: 5, right: 5, bottom: 5 },
              titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
              backgroundColor: '#eeeeee',
              xAxis:
                  {
                      dataField: 'DAYS',
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
                  //minValue: 0,
                  //maxValue: 120,
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
                                  //{ dataField: 'KittingStart', displayText: 'Kitting Start' },
                                  { dataField: 'KittingDone', displayText: 'Kitting Done' },
                                  { dataField: 'ProdStart', displayText: 'Production Start' },
                                  { dataField: 'Finish', displayText: 'Finish' }
                              ]
                      }
                  ]
          };
          // setup the chart
          MAIN_PROD_SEC_CHART();
          $('#chartPlansMonth').jqxChart(settingsChartPlan);

        /*---------Update Status POP UP------------*/
          $("#windowProdActul").jqxWindow({
                  width: 600,
                  height: 135,
                  resizable: false,
                  autoOpen: false,
                  showCollapseButton: true,
                  isModal: true,
                  modalOpacity: 0.3
              });
        /*-------------------------------------------*/
        $('#windowProdActul').on('close', function (event) {
            clearProdActulFrom();
        });

        $("#vPA_Save").click(function () {
            var vType = $("#vWDPcbGroup").html();
            MAIN_PROD_UPD('End');
            $("#windowProdActul").jqxWindow('close');
          });

        $("#vPA_Cancel").click(function () {
            clearProdActulFrom();
            $("#windowProdActul").jqxWindow('close');
          });

        $("#vAddPlanIssue").jqxWindow({
                  width: 700,
                  height: 230,
                  resizable: false,
                  autoOpen: false,
                  showCollapseButton: true,
                  cancelButton: $("#vAddPlanIssueClose"),
                  isModal: true,
                  modalOpacity: 0.3
              });
        $("#btvAddPlanIssue").click(function () {
                $("#PlanIssueWindowHeader").html("Add Remark");
                clearData();
                var vTracking = $("#vsTracking").html();
                $("#pISUTracking").val(vTracking);
                $('#vAddPlanIssue').jqxWindow('open');
            });
        $("#vAddPlanIssueClose").click(function () {
                $('#vAddPlanIssue').jqxWindow('close');
                clearData();
            });
        $("#vAddPlanIssueSave").click(function () {
                var vType = $("#PlanIssueWindowHeader").html();
                if(vType == 'Add Remark')
                {
                    STBL_REMARK_INS();
                }
                else if(vType == 'Edit Remark')
                {
                    STBL_REMARK_UPD();
                }
            });

        $("#gridIssue").jqxGrid({
                      width: "100%",
                      height: 335,
                      altrows: true,
                      filterable: true,
                      sortable: true,
                      showstatusbar: true,
                      statusbarheight: 25,
                      showaggregates: true,
                      theme: theme,
                      pageable: true,
                      pagesize: 20,
                      //groupable: true,
                      //pagesizeoptions: ['20', '50', '100', '500', '1000'],
                      selectionmode: 'multiplerowsextended',
                      columns: [
                        { text: 'Tracking', datafield: 'Tracking', width: 100, align: 'center', cellsalign: 'center', aggregates: ['count'], filtertype: 'checkedlist'},
                        { text: 'Remark', datafield: 'Remark', minwidth: 250, align: 'center', cellsalign: 'center'},
                        { text: 'Employee', datafield: 'User_Update', width: 100, align: 'center', cellsalign: 'center'},
                        { text: 'Date', datafield: 'Date_Update', width: 100, align: 'center', cellsalign: 'center', cellsformat: 'd'},
                        { text: 'Edit', datafield: 'Edit', width: 50, align: 'center', columntype: 'button', cellsrenderer: function () {
                                 return "Edit";
                              }, buttonclick: function (row) {
                                 // open the popup window when the user clicks a button.
                                 editrow = row;
                                 // get the clicked row's data and initialize the input fields.
                                 var dataRecord = $("#gridIssue").jqxGrid('getrowdata', editrow);

                                 $("#PlanIssueWindowHeader").html("Edit Remark");
                                 var vID = dataRecord.ID;
                                 var vTracking = dataRecord.Tracking;
                                 var vRemark = dataRecord.Remark;

                                 $("#pPlanIssueID").val(vID);
                                 $("#pISUTracking").val(vTracking);
                                 $("#pRemark").val(vRemark);

                                 $('#vAddPlanIssue').jqxWindow('open');

                          }
                        },
                        { text: 'Delete', datafield: 'Delete', width: 50, columntype: 'button', cellsrenderer: function () {
                                 return "Delete";
                              }, buttonclick: function (row) {
                                 // open the popup window when the user clicks a button.
                                 editrow = row;
                                 // get the clicked row's data and initialize the input fields.
                                 var dataRecord = $("#gridIssue").jqxGrid('getrowdata', editrow);
                                 var ID = dataRecord.ID;
                                 $("#pPlanIssueID").val(ID);
                                 var Tracking = dataRecord.Tracking;
                                 if(ID != ''){
                                   var r = confirm("Do you want to delete "+ Tracking + " ?");
                                     if (r == true) {
                                         STBL_REMARK_DEL(ID);
                                     }
                                 }
                                 //EDER_DEL(ID);
                          }
                        }
                      ]
                  });
});

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function clearProdActulFrom(){
  $("#vPA_Actual").val("");
  $("#vPA_ID").val("");
}

function MAIN_PROD_UPD(vType) {

         var pUserName = $("#UserName").html();
         var pID = $("#vPA_ID").val();
         var pActual = $("#vPA_Actual").val();
         var act = 'MAIN_PROD_UPD';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pID,
             Actual : pActual,
             Type : vType,
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
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error");
                    }
         });
}

function PLAN_SEC() {
            var pDate = '';
            var act = 'PLAN_SEC_PROD';
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
                    { name: 'ModelGroup', type: 'string' },
                    { name: 'Tracking', type: 'string' },
                    { name: 'Lot', type: 'nuumber' },
                    { name: 'Plans', type: 'number' },
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
             $("#gridPlan").jqxGrid({source: gridPlan,groups: ['SMT_line']});
             MAIN_PROD_SEC_CHART();
  }

function MAIN_PROD_SEC_CHART() {
            var pDate = '';
            var act = 'MAIN_PROD_SEC_CHART';
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
                  { name: 'DATES', type: 'string' },
                  { name: 'DAYS', type: 'string' },
                  { name: 'PlanStart', type: 'string' },
                  { name: 'KittingStart', type: 'string' },
                  { name: 'KittingDone', type: 'string' },
                  { name: 'ProdStart', type: 'string' },
                  { name: 'Finish', type: 'string' }
                ]
            };
            var ChartPlan = new $.jqx.dataAdapter(source);
            $('#chartPlansMonth').jqxChart({source: ChartPlan});
  }

function STBL_REMARK_SEC(pTracking) {
            var act = 'STBL_REMARK_SEC';
            var url = "main.class.php?action="+act;
            var pData = {
                Tracking : pTracking
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
                    { name: 'Tracking', type: 'string' },
                    { name: 'Remark', type: 'string' },
                    { name: 'User_Update', type: 'string' },
                    { name: 'Date_Update', type: 'date' }
                ]
            };
            var gridIssue = new $.jqx.dataAdapter(source);
             $("#gridIssue").jqxGrid({source: gridIssue});
  }

function STBL_REMARK_INS() {

        var pISUTracking = $("#pISUTracking").val();
        var pRemark = $("#pRemark").val();
        var pUserName = $("#UserName").html();

         var act = 'STBL_REMARK_INS';

         var url = "main.class.php?action="+ act;
         var pData = {
             Tracking : pISUTracking,
             Remark : pRemark,
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
                     STBL_REMARK_SEC(pISUTracking);
                     clearData();
                     $('#vAddPlanIssue').jqxWindow('close');
                   },
                   error: function(xhr, status, error){
                       alert("Error");
                    }
         });
}

function STBL_REMARK_UPD() {

        var pID = $("#pPlanIssueID").val();
        var pISUTracking = $("#pISUTracking").val();
        var pRemark = $("#pRemark").val();
        var pUserName = $("#UserName").html();

         var act = 'STBL_REMARK_UPD';

         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pID,
             Tracking : pISUTracking,
             Remark : pRemark,
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
                     STBL_REMARK_SEC(pISUTracking);
                     clearData();
                     $('#vAddPlanIssue').jqxWindow('close');
                   },
                   error: function(xhr, status, error){
                       alert("Error");
                    }
         });
}

function STBL_REMARK_DEL(pID) {

         var pISUTracking = $("#vsTracking").html();
         var act = 'STBL_REMARK_DEL';
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
                     STBL_REMARK_SEC(pISUTracking);
                     clearData();
                   },
                   error: function(xhr, status, error){
                       alert("Error");
                    }
         });
}

function clearData() {

  $("#pPlanIssueID").val('');
  $("#pISUTracking").val('');
  $("#pRemark").val('');

}
