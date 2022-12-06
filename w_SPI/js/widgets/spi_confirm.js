$(document).ready(function () {
  $("#Notification").jqxNotification();

  setInterval(function () {gridSPIWaitConfirm();}, 10000);
$("#gridSPIWaitConfirm").jqxGrid(
        {
            width: '100%',
            height: 373,
            altrows: true,
            sortable: true,
            columnsresize: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            theme: "darkblue",
            selectionmode: 'multiplerowsextended',
            columns: [
              { text: 'Model', datafield: 'Model', width: 180, align: 'center', cellsalign: 'center'},
              { text: 'Barcode', datafield: 'Barcode', minwidth: 150, align: 'center', cellsalign: 'center', aggregates: ['count']},
              { text: 'STATUS', datafield: 'STATE_DESC', width: 120, align: 'center', cellsalign: 'center'},
              { text: 'Manager', datafield: 'EMP', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Date', datafield: 'DATE_UPDATE', width: 150, align: 'center', cellsalign: 'center'},
              { text: 'Confirm', datafield: 'Confirm', width: 80, columntype: 'button', align: 'center', cellsrenderer: function () {
                 return "Confirm";
              }
              , buttonclick: function (row) {
                     editrow = row;
                     var offset = $("#gridSPIWaitConfirm").offset();
                     var dataRecord = $("#gridSPIWaitConfirm").jqxGrid('getrowdata', editrow);
                     var vBarcode = dataRecord.Barcode;
                     var vUser = $("#UserName").html();
                     var result = confirm("DO you want to confirm Barcode " + vBarcode + "?");
                        if (result) {
                          STBL_CONFIRM_XRAY_STATUS(vBarcode,'1','OK',vUser);
                        }
                        else
                        {
                          STBL_CONFIRM_XRAY_STATUS(vBarcode,'0','NG',vUser);
                        }
                 }
              }
            ]
        });
        gridSPIWaitConfirm();

        $("#gridSPIWaitConfirm").on("rowselect", function (event){
          var Barcode = event.args.row.Barcode;
          $('#vBarcode').html(Barcode);
          gridSPIDetail(Barcode);
        });

$("#gridSPIDetail").jqxGrid(
        {
            width: '100%',
            height: 473,
            altrows: true,
            sortable: true,
            columnsresize: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            theme: "darkblue",
            selectionmode: 'multiplerowsextended',
            columns: [
              { text: 'PadNo', datafield: 'PadNo', width: 80, align: 'center', cellsalign: 'center', aggregates: ['count']},
              { text: 'ComponentID', datafield: 'ComponentID', width: 120, align: 'center', cellsalign: 'center'},
              { text: 'PadResult', datafield: 'PadResult', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'PositionX', datafield: 'PositionX', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'PositionY', datafield: 'PositionY', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'OffsetX', datafield: 'OffsetX', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'OffsetY', datafield: 'OffsetY', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Area', datafield: 'Area', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'AreaUpper', datafield: 'AreaUpper', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'AreaLower', datafield: 'AreaLower', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Volume', datafield: 'Volume', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'VolumeUpper', datafield: 'VolumeUpper', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'VolumeLower', datafield: 'VolumeLower', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Height', datafield: 'Height', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'HeightUpper', datafield: 'HeightUpper', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'HeightLower', datafield: 'HeightLower', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'BridgeHeight', datafield: 'BridgeHeight', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'BridgeDistance', datafield: 'BridgeDistance', width: 120, align: 'center', cellsalign: 'center'},
              { text: 'InspectionDateTime', datafield: 'InspectionDateTime', width: 150, align: 'center', cellsalign: 'center'}
            ]
        });
});


function gridSPIWaitConfirm() {
            var act = 'STBL_XRAY_STATUS';
            var url = "main.class.php?action="+act;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'Model', type: 'string' },
                    { name: 'Barcode', type: 'string' },
                    { name: 'STATE', type: 'string' },
                    { name: 'STATE_DESC', type: 'string' },
                    { name: 'EMP', type: 'string' },
                    { name: 'DATE_UPDATE', type: 'string' }

                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridSPIWaitConfirm").jqxGrid({source: dataAdapter});
  }

  function gridSPIDetail(Serial) {
              var act = 'MAIN_SEC_SPI_DETAIL';
              var url = "main.class.php?action="+act+"&Serial="+Serial;

              var source =
              {
                  datatype: "json",
                  datafields: [
                      { name: 'PadNo', type: 'string' },
                      { name: 'ComponentID', type: 'string' },
                      { name: 'PadResult', type: 'string' },
                      { name: 'PositionX', type: 'string' },
                      { name: 'PositionY', type: 'string' },
                      { name: 'OffsetX', type: 'string' },
                      { name: 'OffsetY', type: 'string' },
                      { name: 'Area', type: 'string' },
                      { name: 'AreaUpper', type: 'string' },
                      { name: 'AreaLower', type: 'string' },
                      { name: 'Volume', type: 'string' },
                      { name: 'VolumeUpper', type: 'string' },
                      { name: 'VolumeLower', type: 'string' },
                      { name: 'Height', type: 'string' },
                      { name: 'HeightUpper', type: 'string' },
                      { name: 'HeightLower', type: 'string' },
                      { name: 'BridgeHeight', type: 'string' },
                      { name: 'BridgeDistance', type: 'string' },
                      { name: 'InspectionDateTime', type: 'string' }

                  ],
                  url: url,
                  root: 'data'
              };
              var dataAdapter = new $.jqx.dataAdapter(source);
               $("#gridSPIDetail").jqxGrid({source: dataAdapter});
    }

function STBL_CONFIRM_XRAY_STATUS(Serial,S1,S2,Emp) {
  var act = 'STBL_CONFIRM_XRAY_STATUS';
  var url = "main.class.php?action="+ act;
  var pData = {
      Serial : Serial,
      Status : S1,
      StatusDESC : S2,
      Emp : Emp
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
                  gridSPIWaitConfirm();
                  ShowNoti(vResult,"success");
              }
              else
              {
                  ShowNoti(vResult,"warning");
              }

              $('#gridSPIDetail').jqxGrid('clear');
            },
            error: function(xhr, status, error){
              console.log(error);
                alert("Error");
             }
  });
}

function ShowNoti(Msg,Type) {
  $("#MessageNoti").html(Msg);
  $("#Notification").jqxNotification({template: Type});
  $("#Notification").jqxNotification("open");
}
