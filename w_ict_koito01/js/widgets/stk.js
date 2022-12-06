$(document).ready(function () {

  $("#refresh").jqxButton({ template: "danger", width: 60, height: 25 });
  $('#refresh').on('click', function() {
      chartSTKmain();
  });
  $("#refresh_CLS").jqxButton({ template: "danger", width: 60, height: 25 });
  $('#refresh_CLS').on('click', function() {
      gridSTKCLS();
  });

  var sts = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
          if(value < 0){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;"><B>' + value.format(2,3) + '</B></span>';
          }else  if(value > 0){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #0000ff;"><B>' + value.format(2,3) + '</B></span>';
          }else if(value == 0){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;"><B>' + value.format(2,3) + '</B></span>';
          }
        }
  var per = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
          if(value < 0){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;"><B>' + value.format(2,3) + '%</B></span>';
          }else  if(value < 50){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;"><B>' + value.format(2,3) + '%</B></span>';
          }else  if(value > 50 && value < 100){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff6600;"><B>' + value.format(2,3) + '%</B></span>';
          }else  if(value == 100){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;"><B>' + value.format(2,3) + '%</B></span>';
          }else  if(value > 100){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #0000ff;"><B>' + value.format(2,3) + '%</B></span>';
          }
        }
  var per_diff = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {

          if(value > 0){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #0000ff;"><B>' + value.format(2,3) + '%</B></span>';
          }else  if(value == 0){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;"><B>' + value.format(2,3) + '%</B></span>';
          }else  if(value < -50 && value >= -100){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;"><B>' + value.format(2,3) + '%</B></span>';
          }else if(value > -100){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff6600;"><B>' + value.format(2,3) + '%</B></span>';
          }

        }

  $("#gridSTKmain").jqxGrid({
        width: 790,
        autoheight: true,
        columnsresize: true,
        altrows: true,
        sortable: true,
        showaggregates: true,
        showstatusbar: true,
        statusbarheight: 50,
        theme: "darkblue",
        columns: [
            { text: 'LOCATION', datafield: 'I_STOCK_LOCATION', width: 80, align:'center', cellsalign: 'center'},
            { text: 'Logical', datafield: 'LOGICAL', width: 140, align:'center', cellsalign: 'right', cellsformat: 'F0', aggregates: ['sum']},
            { text: 'Actual', datafield: 'ACTUAL', width: 140, align:'center', cellsalign: 'right', cellsformat: 'F0', aggregates: ['sum']},
            { text: 'Variance Qty', datafield: 'DIFFQTY', width: 120, align:'center', cellsalign: 'right', cellsformat: 'F0', cellsrenderer: sts, aggregates: ['sum']},
            { text: 'Variance Amt', datafield: 'DIFFAMT', width: 150, align:'center', cellsalign: 'right', cellsformat: 'F2', cellsrenderer: sts, aggregates: ['sum']},
            { text: 'Progress(%)', datafield: 'PER_PROGEADE', width: 80, align:'center', cellsalign: 'right', cellsrenderer: per},
            { text: 'Variance(%)', datafield: 'PER_DIFF', width: 80, align:'center', cellsalign: 'right', cellsrenderer: per_diff}
        ]
    });
    $("#Export_STKmain").jqxButton();
    $("#Export_STKmain").click(function () {
        /*var MainWipFg = $("#gridSTKmain").jqxGrid('exportdata', 'html');
        var newWindow = window.open('', '', 'width=800, height=500'),
        document = newWindow.document.open(),
        pageContent =
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<meta charset="utf-8" />\n' +
            '<title>jQWidgets Grid</title>\n' +
            '</head>\n' +
            '<body>\n' + '<table><tr valign="top" align="center"><td>Stock taking over viwe (Prones V.11).' + MainWipFg+ '</td></tr></table>' + '\n</body>\n</html>';
        document.write(pageContent);
        document.close();
        newWindow;*/
        $("#gridSTKmain").jqxGrid('exportdata', 'csv', 'Export_Data');
    });

  $("#gridSTKCLS").jqxGrid({
        width: 790,
        autoheight: true,
        columnsresize: true,
        altrows: true,
        sortable: true,
        showaggregates: true,
        showstatusbar: true,
        statusbarheight: 50,
        theme: "darkblue",
        columns: [
            { text: 'Class', datafield: 'CLS_DETAIL', width: 80, align:'center', cellsalign: 'center'},
            { text: 'Logical', datafield: 'LOGICAL', width: 140, align:'center', cellsalign: 'right', cellsformat: 'F0', aggregates: ['sum']},
            { text: 'Actual', datafield: 'ACTUAL', width: 140, align:'center', cellsalign: 'right', cellsformat: 'F0', aggregates: ['sum']},
            { text: 'Variance Qty', datafield: 'DIFFQTY', width: 120, align:'center', cellsalign: 'right', cellsformat: 'F0', cellsrenderer: sts, aggregates: ['sum']},
            { text: 'Variance Amt', datafield: 'DIFFAMT', width: 150, align:'center', cellsalign: 'right', cellsformat: 'F2', cellsrenderer: sts, aggregates: ['sum']},
            { text: 'Progress(%)', datafield: 'PER_PROGEADE', width: 80, align:'center', cellsalign: 'right', cellsrenderer: per},
            { text: 'Variance(%)', datafield: 'PER_DIFF', width: 80, align:'center', cellsalign: 'right', cellsrenderer: per_diff}
        ]
    });
    $("#Export_STKCLS").jqxButton();
    $("#Export_STKCLS").click(function () {
        /*var MainWipFg = $("#gridSTKCLS").jqxGrid('exportdata', 'html');
        var newWindow = window.open('', '', 'width=800, height=500'),
        document = newWindow.document.open(),
        pageContent =
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<meta charset="utf-8" />\n' +
            '<title>jQWidgets Grid</title>\n' +
            '</head>\n' +
            '<body>\n' + '<table><tr valign="top" align="center"><td>Stock taking by Class Item (Prones V.11).' + MainWipFg+ '</td></tr></table>' + '\n</body>\n</html>';
        document.write(pageContent);
        document.close();
        newWindow;*/
        $("#gridSTKCLS").jqxGrid('exportdata', 'csv', 'Export_Data');
    });

    $("#gridSTKmain").on('rowselect', function(event) {
              var Location = event.args.row.I_STOCK_LOCATION_ORG;
              var Location_d = event.args.row.I_STOCK_LOCATION;
              $('#vLocat').html(Location_d);
              gridSTKDetail(Location);
        });

    $("#gridSTKDetail").jqxGrid({
          width: 1340,
          height: 845,
          columnsresize: true,
          altrows: true,
          sortable: true,
          filterable: true,
          showaggregates: true,
          showstatusbar: true,
          statusbarheight: 50,
          pageable: true,
          pagesize: 25,
          pagesizeoptions: ['500', '200', '100', '25'],
          theme: "darkblue",
          selectionmode: 'multiplerowsextended',
          columns: [
              { text: 'Class', datafield: 'CLS_DETAIL', width: 80, align:'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Project', datafield: 'PROJECT', width: 70, align:'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Item CD', datafield: 'I_ITEM_CD', width: 120, align:'center', cellsalign: 'center'},
              { text: 'Item DESC', datafield: 'I_ITEM_DESC', width: 120, align:'center'},
              { text: 'Model', datafield: 'I_MODEL', width: 120, align:'center', filtertype: 'checkedlist'},
              { text: 'Location', datafield: 'I_STOCK_LOCATION_DETAIL', width: 120, align:'center', cellsalign: 'center'},
              { text: 'Logical', datafield: 'LOGICAL', width: 120, align:'center', cellsalign: 'right', cellsformat: 'F0', aggregates: ['sum']},
              { text: 'Actual', datafield: 'ACTUAL', width: 120, align:'center', cellsalign: 'right', cellsformat: 'F0', aggregates: ['sum']},
              { text: 'Variance Qty', datafield: 'DIFFQTY', width: 120, align:'center', cellsalign: 'right', cellsformat: 'F0', cellsrenderer: sts, aggregates: ['sum']},
              { text: 'Variance Amt', datafield: 'DIFFAMT', width: 150, align:'center', cellsalign: 'right', cellsformat: 'F2', cellsrenderer: sts, aggregates: ['sum']},
              { text: 'Price', datafield: 'I_UP', width: 120, align:'center', cellsalign: 'right', cellsformat: 'F6'},
              { text: 'Status', datafield: 'STS_DIFF', width: 80, align:'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Seiban', datafield: 'I_SEIBAN', width: 80, align:'center', cellsalign: 'center'}
          ]
      });
      $("#Export_STKDetail").jqxButton();
      $("#Export_STKDetail").click(function () {
          /*var MainSTKDetail = $("#gridSTKDetail").jqxGrid('exportdata', 'html');
          var newWindow = window.open('', '', 'width=800, height=500'),
          document = newWindow.document.open(),
          pageContent =
              '<!DOCTYPE html>\n' +
              '<html>\n' +
              '<head>\n' +
              '<meta charset="utf-8" />\n' +
              '<title>jQWidgets Grid</title>\n' +
              '</head>\n' +
              '<body>\n' + '<table><tr valign="top" align="center"><td>Stock taking Detail (Prones V.11).' + MainSTKDetail + '</td></tr></table>' + '\n</body>\n</html>';
          document.write(pageContent);
          document.close();
          newWindow;*/
          $("#gridSTKDetail").jqxGrid('exportdata', 'csv', 'Export_Data');
      });

    chartSTKmain();
    gridSTKCLS();
});

function chartSTKmain() {
  let act = 'jsonSTK';
  let url = "stk.class.php?action="+act;

  var source =
  {
      datatype: "json",
      datafields: [
          { name: 'I_STOCK_LOCATION', type: 'string' },
          { name: 'I_STOCK_LOCATION_ORG', type: 'string' },
          { name: 'LOGICAL', type: 'number' },
          { name: 'ACTUAL', type: 'number' },
          { name: 'DIFFQTY', type: 'number' },
          { name: 'DIFFAMT', type: 'number' },
          { name: 'PER_PROGEADE', type: 'number' },
          { name: 'PER_DIFF', type: 'number' }
      ],
      url: url
  };
  var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });

  var chartSTKmain = {
      title: "Stock taking over viwe",
      description: "Progress Percent Stock taking",
      showLegend: true,
      enableAnimations: true,
      padding: { left: 5, top: 5, right: 5, bottom: 5 },
      titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
      source: dataAdapter,
      xAxis:
          {
              dataField: 'I_STOCK_LOCATION',
              displayText: 'Location',
              unitInterval: 1,
                    textRotationAngle: -75,
                    formatFunction: function (value, itemIndex, serie, group) {
                        return value;
                    },
                    valuesOnTicks: false
          },
      colorScheme: 'scheme02',
      seriesGroups:
          [
              {
                  type: 'stackedcolumn',
                  valueAxis:
                  {
                    title: { text: 'Percent stocktaking' },
                    formatFunction: function (value) {
                                return value + '%';
                            },
                    //maxValue: 120,
                    minValue: -10,
                    unitInterval: 10

                  },
                  series: [{ dataField: 'PER_PROGEADE',
                             displayText: 'Percent',
                             opacity: 0.7,
                             labels: {
                                 visible: true,
                                 verticalAlignment: 'top',
                                 offset: { x: 0, y: -20 }
                             },
                              formatFunction: function (value) {
                                  return value.format(0,3) + '%';
                              }
                           }
                      ]
              }
          ]
  };

  var chartSTKmainDiff = {
      title: "Stock taking Variance status",
      description: "Variance Percent Stock taking",
      showLegend: true,
      enableAnimations: true,
      padding: { left: 5, top: 5, right: 5, bottom: 5 },
      titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
      source: dataAdapter,
      xAxis:
          {
              dataField: 'I_STOCK_LOCATION',
              displayText: 'Location',
              unitInterval: 1,
                    textRotationAngle: -75,
                    formatFunction: function (value, itemIndex, serie, group) {
                        return value;
                    },
                    valuesOnTicks: false
          },
      colorScheme: 'scheme03',
      seriesGroups:
          [
              {
                  type: 'stackedcolumn',
                  valueAxis:
                  {
                    title: { text: 'Percent stocktaking Variance' },
                    formatFunction: function (value) {
                                return value + '%';
                            },
                    //maxValue: 120,
                    //minValue: -10,
                    unitInterval: 10

                  },
                  series: [{ dataField: 'PER_DIFF',
                             displayText: 'Percent Variance',
                             opacity: 0.7,
                             labels: {
                                 visible: true,
                                 verticalAlignment: 'top',
                                 offset: { x: 0, y: -20 }
                             },
                              formatFunction: function (value) {
                                  return value.format(0,3) + '%';
                              }
                           }
                      ]
              }
          ]
  };
  // setup the chart
  $('#chartSTKmain').jqxChart(chartSTKmain);
  $('#chartSTKmainDiff').jqxChart(chartSTKmainDiff);
  var adapter = new $.jqx.dataAdapter(source);
  $("#gridSTKmain").jqxGrid({ source: adapter });
}

var gridSTKDetail = function(locat) {
  let l = locat;
  let act = 'jsonSTKDetail';
  let url = "stk.class.php?action="+act+"&Location="+l;

  var source =
  {
      datatype: "json",
      datafields: [
          { name: 'CLS', type: 'string' },
          { name: 'CLS_DETAIL', type: 'string' },
          { name: 'PROJECT', type: 'string' },
          { name: 'I_ITEM_CD', type: 'string' },
          { name: 'I_ITEM_DESC', type: 'string' },
          { name: 'I_MODEL', type: 'string' },
          { name: 'I_STOCK_LOCATION', type: 'string' },
          { name: 'I_STOCK_LOCATION_DETAIL', type: 'string' },
          { name: 'LOGICAL', type: 'number' },
          { name: 'ACTUAL', type: 'number' },
          { name: 'DIFFQTY', type: 'number' },
          { name: 'I_UP', type: 'number' },
          { name: 'DIFFAMT', type: 'number' },
          { name: 'STS_DIFF', type: 'string' },
          { name: 'I_SEIBAN', type: 'string' }
      ],
      url: url
  };
  var dataAdapter = new $.jqx.dataAdapter(source);
   $("#gridSTKDetail").jqxGrid({source: dataAdapter});
}

var gridSTKCLS = function() {

  let act = 'jsonSTKCLS';
  let url = "stk.class.php?action="+act;

  var source =
  {
    datatype: "json",
    datafields: [
        { name: 'CLS', type: 'string' },
        { name: 'CLS_DETAIL', type: 'string' },
        { name: 'LOGICAL', type: 'number' },
        { name: 'ACTUAL', type: 'number' },
        { name: 'DIFFQTY', type: 'number' },
        { name: 'DIFFAMT', type: 'number' },
        { name: 'PER_PROGEADE', type: 'number' },
        { name: 'PER_DIFF', type: 'number' }
    ],
    url: url
  };
  var dataAdapter = new $.jqx.dataAdapter(source);
   $("#gridSTKCLS").jqxGrid({source: dataAdapter});
}
