$(document).ready(function () {

  var MainModel;
  var MainModelItem;
  var MainSeiban;
  var MainUserChk;
  var MainUserID;
  var MainShift;
  var MainShiftID;
  var MainTotalQty = 0;

  var today = new Date().getHours();
  if (today >= 7 && today <= 15) {
     MainShift = "A";
     MainShiftID = "1";
  } else if (today >= 15 && today <= 23) {
    MainShift = "B";
    MainShiftID = "2";
  } else if (today >= 23 && today <= 7) {
    MainShift = "c";
    MainShiftID = "3";
  }

  $("#User").jqxInput({placeHolder: "Enter a User", height: 30, width: 250, minLength: 1});

  $("#UserChk").jqxInput({ height: 30, width: 100, minLength: 1});
  $("#Shift").jqxInput({ height: 30, width: 50, minLength: 1});
  $("#LotNo").jqxInput({ height: 30, width: 100, minLength: 1});
  $("#LotNo").click(function () {
    enterProgram();
  });
  $("#LotNo").keypress(function( event ) {
    if ( event.which == 13 ) {
      GenLotDate();
      $("#ScanQty").focus();
    }
  });


  $("#ScanQty").jqxInput({ height: 30, width: 50, minLength: 1});
  $("#ScanQty").keypress(function( event ) {
    if ( event.which == 13 ) {
      $("#SaveLot").focus();
    }
  });
  $("#PCMC").jqxInput({ height: 30, width: 150, minLength: 1});

  $("#ScanWR").jqxInput({ height: 30, width: 150, minLength: 1});
  $('#ScanWR').jqxInput({disabled: true });
  $("#ScanWR").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#ScanWR').jqxInput({disabled: true });
      var BC = $("#ScanWR").val();
      ReadQrcode(BC);
    }
  });

  $("#ScanQRcode").jqxInput({ height: 30, width: 250, minLength: 1});
  $('#ScanQRcode').jqxInput({disabled: true });
  $("#ScanQRcode").click(function () {
    $('#ScanWR').jqxInput({disabled: true });
  });
  $("#ScanQRcode").keypress(function( event ) {
    if ( event.which == 13 ) {
      var BC = $( this ).val();
      ReadQrcodeParts(BC);
    }
  });
  var sourceTypeSeiban = ["","2","4","6","8","10"];
  $("#TypeSeiban").jqxDropDownList({autoOpen: false, source: sourceTypeSeiban, selectedIndex: 0, width: '50', autoDropDownHeight: true});
  $('#TypeSeiban').jqxDropDownList({disabled: true });
  $('#TypeSeiban').on('select', function (event){
        var args = event.args;
        $('#TypeSeiban').jqxDropDownList({disabled: true });
        $('#ScanWR').jqxInput({disabled: false });
    });

  $("#gridWRCtrlScan").jqxGrid(
          {
              width: 505,
              height: 343,
              altrows: true,
              sortable: true,
              showstatusbar: true,
              statusbarheight: 25,
              showaggregates: true,
              theme: "darkblue",
              selectionmode: 'multiplerowsextended',
              columns: [
                {
                      text: '#', sortable: false, filterable: false, editable: false,
                      groupable: false, draggable: false, resizable: false,
                      datafield: '', columntype: 'number', width: 20,
                      cellsrenderer: function (row, column, value) {
                          return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                      }
                },
                { text: 'Model', datafield: 'Model', width: 240, align: 'center', cellsalign: 'center', aggregates: ['count']},
                { text: 'Seiban', datafield: 'SEIBAN_CD', width: 90, align: 'center', cellsalign: 'center'},
                { text: 'Lot No.', datafield: 'LOT', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'Qty', datafield: 'QTY', width: 50, align: 'center', cellsalign: 'right'}
              ]
          });


          $('#SaveLot').click(function() {

              var Lot = $("#LotNo").val();
              if( Lot === ''){

                $("#LotNo").focus();

              }else{

                $("#ScanWR").focus();
                $('#ScanWR').jqxInput({disabled: false });
                $('#UserChk').jqxInput({disabled: true });
                $('#Shift').jqxInput({disabled: true });
                $('#LotNo').jqxInput({disabled: true });
                $('#ScanQty').jqxInput({disabled: true });
                $('#PCMC').jqxInput({disabled: true });
                $('#ScanQRcode').jqxInput({disabled: false });
                $('#TypeSeiban').jqxDropDownList({disabled: false });

                gridWRCtrlScan(Lot);
                gridQRcodeSMTB(Lot);
                ShowCountSeiban();
                ShowCountBar();
              }

              $('#TotalSeibanPCB').html('0');
              $('#TotalQty').html('0');
              $('#CountOK').html('0');
              $('#AlertMsg').html('-');

          });
          $('#EditLot').click(function() {
              $("#LotNo").focus();
              $('#ScanWR').jqxInput({disabled: false });
              $('#UserChk').jqxInput({disabled: false });
              $('#Shift').jqxInput({disabled: false });
              $('#LotNo').jqxInput({disabled: false });
              $('#ScanQty').jqxInput({disabled: false });
              $('#PCMC').jqxInput({disabled: false });
              $('#ScanQRcode').jqxInput({disabled: true });
              $('#TypeSeiban').jqxDropDownList({disabled: false });
          });
          $('#EditLotQty').click(function() {
              $('#ScanWR').jqxInput({disabled: false });
              $('#ScanQty').jqxInput({disabled: false });
              $('#TypeSeiban').jqxDropDownList({disabled: false });
          });


});

function gridWRCtrlScan(LotNo) {
            var LotNo = LotNo;
            var act = 'jsonWRCtrl';
            var url = "smtb.class.php?action="+act+"&LOT="+LotNo;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'Model', type: 'string' },
                    { name: 'SEIBAN_CD', type: 'string' },
                    { name: 'LOT', type: 'string' },
                    { name: 'QTY', type: 'number' }
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridWRCtrlScan").jqxGrid({source: dataAdapter});
  }

  var ReadQrcode = function(Q){
    var res = [];
    res[0] = Q.substring(0, 3);
    res[1] = Q.substring(3, 12);
    res[2] = Q.substring(13, 37);
    res[3] = Q.substring(38, 60);
    res[4] = Q.substring(61, 76);
    res[5] = Q.substring(76, 100);
    res[6] = Q.substring(101, 125);
    res[7] = Q.substring(126, 130);
    res[8] = Q.substring(130, 141);
    res[9] = Q.substring(142, 166);
    res[10] = Q.substring(167, 190);
    res[11] = Q.substring(191, 205);

    var i;

    MainModelItem = res[5];
    MainSeiban = res[3];

      var act = 'InsWRCtrl';
      var Lot = $("#LotNo").val();
      var MC = $('#PCMC').val();
      var ScanQty = $('#ScanQty').val();
      var TypeSeiban = $('#TypeSeiban').val();
      var C_SEIBAN;

        if(MainModelItem !='' && MainSeiban !=''){
          $.ajax({
                    type: "GET",
                    url: "smtb.class.php",
                    dataType: "json",
                    data: "action=" + act
                    + "&SHIFT_ID=" + MainShiftID
                    + "&LOT=" + Lot
                    + "&EMP=" + MainUserID
                    + "&SEIBAN_CD=" + MainSeiban.trim()
                    + "&ITEMCODE=" + MainModelItem.trim()
                    + "&CLIENT=" + MC
                    + "&Qty=" + ScanQty,
                    success: function(data) {
                      if (data.response == 'success') {
                        $("#ScanWR").val("");
                        $("#ScanWR").focus();

                        var result = data.data[0].result;
                        C_SEIBAN = data.data[0].C_SEIBAN;
                        var TOTAL_QTY = data.data[0].TOTAL_QTY;
                        $('#TotalSeibanPCB').html(C_SEIBAN);
                        $('#TotalQty').html(TOTAL_QTY);

                        if(C_SEIBAN == TypeSeiban){
                          $('#ScanWR').jqxInput({disabled: true });
                          $("#ScanQRcode").focus();
                        }
                      }
                    }
          });
          gridWRCtrlScan(Lot);
          $('#ScanWR').jqxInput({disabled: false });
        }else{
          $('#ScanWR').jqxInput({disabled: false });
        }
  }

  var ShowCountSeiban = function(){

      var act = 'jsonCountSeiban';
      var Lot = $("#LotNo").val();
      var C_SEIBAN;
      var TypeSeiban;

          $.ajax({
                    type: "GET",
                    url: "smtb.class.php",
                    dataType: "json",
                    data: "action=" + act
                    + "&LOT=" + Lot,
                    success: function(data) {
                      if (data.response == 'success') {
                        var result = data.data[0].result;
                        C_SEIBAN = data.data[0].C_SEIBAN;
                        var TOTAL_QTY = data.data[0].TOTAL_QTY;
                        MainTotalQty = TOTAL_QTY;
                        $('#TotalSeibanPCB').html(C_SEIBAN);
                        $('#TotalQty').html(TOTAL_QTY);
                        $('#TypeSeiban').val(C_SEIBAN);

                        TypeSeiban = $('#TypeSeiban').val();
                        if(C_SEIBAN == TypeSeiban){
                          $('#ScanWR').jqxInput({disabled: true });
                          $("#ScanQRcode").focus();
                        }
                      }
                    }
          });

  }

  var ShowCountBar = function(){

      var act = 'jsonCountBar';
      var Lot = $("#LotNo").val();

          $.ajax({
                    type: "GET",
                    url: "smtb.class.php",
                    dataType: "json",
                    data: "action=" + act
                    + "&LOT=" + Lot,
                    success: function(data) {
                      if (data.response == 'success') {
                        var OK = data.data[0].OK;
                        $('#CountOK').html(OK);

                        var TotalQty = $('#TotalQty').val();
                        if(OK >= MainTotalQty){
                          $('#ScanQRcode').jqxInput({disabled: true });
                          $("#AlertMsg").css('color', 'green');
                          $("#AlertMsg").html('Scan Barcode Finish!!!');
                        }/*else{
                          $("#AlertMsg").html('-');
                        }*/
                      }
                    }
          });

  }

  var GenLotDate = function() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    var Year = y;
    Year=Year.toString().substr(-2);
    var Lot = $("#LotNo").val();

    if(m.length = 1){
       m = "0"+m;
    }else{
       m = m
    }

    $("#LotNo").val(Lot+'-'+ Year + m + d);

  }
