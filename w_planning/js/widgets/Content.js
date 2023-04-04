$(document).ready(function () {

    displayMonth();
    MAIN_PLAN_SEC_TOTAL_STATUS();
});

function displayMonth()
{
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    hours = x.getHours( ) % 12;
    hours = hours ? hours : 12;
    var x1= monthNames[x.getMonth()] + "-" + x.getFullYear();

    document.getElementById('vMonthPPC').innerHTML = x1;
    document.getElementById('vMonthWH').innerHTML = x1;
    document.getElementById('vMonthProd').innerHTML = x1;
    document.getElementById('vMonthDone').innerHTML = x1;
}

function MAIN_PLAN_SEC_TOTAL_STATUS() {

         var act = 'MAIN_PLAN_SEC_TOTAL_STATUS';
         var url = "main.class.php?action="+ act;
         var pData = {
             Date : ''
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vPlans = 0;
                     var vPlanStart = 0;
                     var vPlanDone = 0;
                     var vKitStart = 0;
                     var vKitDone = 0;
                     var vProdStart = 0;
                     var vTarget = 0;
                     vPlans = data.data[0].Plans;
                     vPlanStart = data.data[0].PlanStart;
                     vPlanDone = data.data[0].Finish;
                     vKitStart = data.data[0].KittingStart;
                     vKitDone = data.data[0].KittingDone;
                     vProdStart = data.data[0].ProdStart;

                     vTarget = ((vPlans - (vPlans - vPlanDone))/vPlans) * 100;

                     $("#vMonthlyPlan").html(vPlans);
                     $("#vMonthlyStart").html(vPlans - vPlanDone);
                     $("#vMonthlyDonet").html(vPlanDone);

                     $("#vMonthlyKit").html(vPlanStart);
                     $("#vMonthlyKitStart").html(vKitStart);
                     $("#vMonthlyKitDonet").html(vKitDone);

                     $("#vMonthlyProd").html(vKitDone);
                     $("#vMonthlyProdStart").html(vProdStart);
                     $("#vMonthlyProdDonet").html(vPlanDone);

                     $("#vMonthlyProdTarget").html(vTarget.toFixed(2));

                     MAIN_PLAN_SEC_TOTAL_STATUS_PIE();
                     MAIN_WH_SEC_TOTAL_STATUS_PIE();
                     MAIN_PROD_SEC_TOTAL_STATUS_PIE();
                     MAIN_PERCENT_SEC_TOTAL_STATUS_PIE();

                   },
                   error: function(xhr, status, error){
                      //console.log(error);
                       alert("Error");
                    }
         });
}

function MAIN_PLAN_SEC_TOTAL_STATUS_PIE() {
  var act = 'MAIN_PLAN_SEC_TOTAL_STATUS_PIE';
  var url = "main.class.php?action="+ act;

  var source =
              {
                  datatype: "json",
                  datafields: [
                      { name: 'Plans' },
                      { name: 'STATUS' }
                  ],
                  url: url
              };
              var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });
              // prepare jqxChart settings
              var settings = {
                  title: "",
                  description: "",
                  enableAnimations: true,
                  showLegend: false,
                  showBorderLine: true,
                  legendPosition: { left: 520, top: 140, width: 100, height: 100 },
                  padding: { left: 5, top: 5, right: 5, bottom: 5 },
                  titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                  source: dataAdapter,
                  colorScheme: 'scheme02',
                  backgroundColor: '#eeeeee',
                  seriesGroups:
                      [
                          {
                              type: 'pie',
                              showLabels: true,
                              series:
                                  [
                                      {
                                          dataField: 'Plans',
                                          displayText: 'STATUS',
                                          labelRadius: 80,
                                          initialAngle: 15,
                                          radius: 60,
                                          centerOffset: 0,
                                          formatSettings: { sufix: ' Tracking', decimalPlaces: 0 }
                                      }
                                  ]
                          }
                      ]
              };
              // setup the chart
              $('#piePlan').jqxChart(settings);
}

function MAIN_WH_SEC_TOTAL_STATUS_PIE() {
  var act = 'MAIN_WH_SEC_TOTAL_STATUS_PIE';
  var url = "main.class.php?action="+ act;

  var source =
              {
                  datatype: "json",
                  datafields: [
                      { name: 'Plans' },
                      { name: 'STATUS' }
                  ],
                  url: url
              };
              var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });
              // prepare jqxChart settings
              var settings = {
                  title: "",
                  description: "",
                  enableAnimations: true,
                  showLegend: false,
                  showBorderLine: true,
                  legendPosition: { left: 520, top: 140, width: 100, height: 100 },
                  padding: { left: 5, top: 5, right: 5, bottom: 5 },
                  titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                  source: dataAdapter,
                  colorScheme: 'scheme02',
                  backgroundColor: '#eeeeee',
                  seriesGroups:
                      [
                          {
                              type: 'pie',
                              showLabels: true,
                              series:
                                  [
                                      {
                                          dataField: 'Plans',
                                          displayText: 'STATUS',
                                          labelRadius: 80,
                                          initialAngle: 15,
                                          radius: 60,
                                          centerOffset: 0,
                                          formatSettings: { sufix: ' Tracking', decimalPlaces: 0 }
                                      }
                                  ]
                          }
                      ]
              };
              // setup the chart
              $('#pieKitting').jqxChart(settings);
}

function MAIN_PROD_SEC_TOTAL_STATUS_PIE() {
  var act = 'MAIN_PROD_SEC_TOTAL_STATUS_PIE';
  var url = "main.class.php?action="+ act;

  var source =
              {
                  datatype: "json",
                  datafields: [
                      { name: 'Plans' },
                      { name: 'STATUS' }
                  ],
                  url: url
              };
              var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });
              // prepare jqxChart settings
              var settings = {
                  title: "",
                  description: "",
                  enableAnimations: true,
                  showLegend: false,
                  showBorderLine: true,
                  legendPosition: { left: 520, top: 140, width: 100, height: 100 },
                  padding: { left: 5, top: 5, right: 5, bottom: 5 },
                  titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                  source: dataAdapter,
                  colorScheme: 'scheme02',
                  backgroundColor: '#eeeeee',
                  seriesGroups:
                      [
                          {
                              type: 'pie',
                              showLabels: true,
                              series:
                                  [
                                      {
                                          dataField: 'Plans',
                                          displayText: 'STATUS',
                                          labelRadius: 80,
                                          initialAngle: 15,
                                          radius: 60,
                                          centerOffset: 0,
                                          formatSettings: { sufix: ' Tracking', decimalPlaces: 0 }
                                      }
                                  ]
                          }
                      ]
              };
              // setup the chart
              $('#pieProd').jqxChart(settings);
}

function MAIN_PERCENT_SEC_TOTAL_STATUS_PIE() {

            var vFinish = $("#vMonthlyProdTarget").html();
            var vTarget = 100 - vFinish;
            var dataStatCounter =
                      [
                          { Status : 'Finish', Percent: vFinish },
                          { Status: 'Plans', Percent: vTarget }
                      ];

              var source = dataStatCounter;
              var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });
              // prepare jqxChart settings
              var settings = {
                  title: "",
                  description: "",
                  enableAnimations: true,
                  showLegend: false,
                  showBorderLine: true,
                  legendPosition: { left: 520, top: 140, width: 100, height: 100 },
                  padding: { left: 5, top: 5, right: 5, bottom: 5 },
                  titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                  source: dataAdapter,
                  colorScheme: 'scheme02',
                  backgroundColor: '#eeeeee',
                  seriesGroups:
                      [
                          {
                              type: 'pie',
                              showLabels: true,
                              series:
                                  [
                                      {
                                          dataField: 'Percent',
                                          displayText: 'Status',
                                          labelRadius: 80,
                                          initialAngle: 15,
                                          radius: 60,
                                          centerOffset: 0,
                                          formatSettings: { sufix: '%', decimalPlaces: 2 }
                                      }
                                  ]
                          }
                      ]
              };
              // setup the chart
              $('#piePercent').jqxChart(settings);
              //$('#piePercent').jqxChart({backgroundColor: 'Gray'});
}
