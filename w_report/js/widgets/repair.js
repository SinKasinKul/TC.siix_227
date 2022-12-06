$(document).ready(function () {

  var MainStepControl;
  var MainModel;
  var MainModelItem;
  var MainSeiban;
  var MainUserChk;
  var MainUserID;
  var MainShift;
  var MainShiftID;
  var MainTotalQty = 0;
  //MainStepControl = 'SMTA';

  var today = new Date().getHours();
  if (today >= 7 && today <= 15) {
     MainShift = "A";
     MainShiftID = "1";
  } else if (today >= 15 && today <= 23) {
    MainShift = "B";
    MainShiftID = "2";
  } else if (today = 23) {
    MainShift = "c";
    MainShiftID = "3";
  } else if (today >= 23 && today <= 7) {
    MainShift = "c";
    MainShiftID = "3";
  }

   //Popup
  //$("#User").jqxInput({placeHolder: "Enter a User", height: 30, width: 250, minLength: 1});
  //$("#WRctrl").jqxInput({placeHolder: "W/R", height: 30, width: 250, minLength: 1});
  /*$("#WRctrl").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#WRctrl').jqxInput({disabled: true });
      var BC = $("#WRctrl").val();
      CheckUser();
      ReadQrcode(BC);
    }
  });*/

  //inputText
  //$("#UserChk").jqxInput({ height: 30, width: 100, minLength: 1});
  //$("#Shift").jqxInput({ height: 30, width: 50, minLength: 1});
  /*$("#LotNo").jqxInput({ height: 30, width: 150, minLength: 1});
  $("#LotNo").click(function () {
    enterProgram();
  });
  $("#LotNo").keypress(function( event ) {
    if ( event.which == 13 ) {
      ShowLotQty();
      $("#ScanQty").focus();
      //ShowLotSTD();
    }
  });*/


  /*$("#ScanQty").jqxInput({ height: 30, width: 50, minLength: 1});
  $("#ScanQty").keypress(function( event ) {
    if ( event.which == 13 ) {
      $("#SaveLot").focus();
    }
  });*/
  //$("#PCMC").jqxInput({ height: 30, width: 150, minLength: 1});

  $("#BarcodeScan").jqxInput({ height: 30, width: 400, minLength: 1});
  $("#BarcodeScan").keypress(function( event ) {
    var vBar = $("#BarcodeScan").val();
    if ( event.which == 13 ) {
      //$('#BarcodeScan').jqxInput({disabled: true });
      if (vBar != ''){
        gridBarcodeScan(vBar);
        //insertBarcode();
      }else{
        $('#BarcodeScan').jqxInput({disabled: false });
        $("#BarcodeScan").focus();
      }
    }
  });

  var Status = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
          if(value == 'OK' || value == 'FC'){
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;"><B>' + value + '</B></span>';
              }else {
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;"><B>' + value + '</B></span>';
              }
        }

  $("#gridBarcodeScan").jqxGrid(
          {
              width: 1450,
              height: 473,
              altrows: true,
              sortable: true,
              showstatusbar: true,
              statusbarheight: 25,
              showaggregates: true,
              theme: "darkblue",
              selectionmode: 'multiplerowsextended',
              columns: [
                { text: 'Model', datafield: 'ITEMDESC', width: 270, align: 'center', cellsalign: 'center'},
                { text: 'Barcode', datafield: 'Barcode', minwidth: 200, align: 'center', cellsalign: 'center', aggregates: ['count']},
                { text: 'Process', datafield: 'StepName', width: 80, align: 'center', cellsalign: 'center'},
                { text: 'STATUS', datafield: 'STATE_DESC', width: 80, align: 'center', cellsalign: 'center', cellsrenderer: Status},
                { text: 'TIME', datafield: 'DATE_UPDATE', width: 170, align: 'center', cellsalign: 'center'},
                { text: 'Tracking', datafield: 'SEIBAN_CD', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'Model', datafield: 'Model', width: 150, align: 'center', cellsalign: 'center'},
                { text: 'Lot', datafield: 'LOT', width: 150, align: 'center', cellsalign: 'center'},
                { text: 'Machine', datafield: 'MC', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'Operator', datafield: 'EMP', width: 100, align: 'center', cellsalign: 'center'}/*,
                { text: 'SHIFT', datafield: 'SHIFT', width: 80, align: 'center', cellsalign: 'center'}*/
              ]
          });

          /*$('#ReOK').click(function() {
              insertBarcode("OK");
          });
          $('#ReDamage').click(function() {
              insertBarcode("Damage");
          });
          $('#ReScrap').click(function() {
              insertBarcode("Scrap");
          });
          $('#ExitApp').click(function() {
            location.reload();
          });*/

          /*$('#SaveLot').click(function() {

              var Process= $("#Process").val();
              alert(Process)
              var Lot = $("#LotNo").val();
              var SB = $('#SeibanMainH').val();
              if( Lot === ''){

                $("#LotNo").focus();

              }else{

                $("#BarcodeScan").focus();
                $('#UserChk').jqxInput({disabled: true });
                $('#Shift').jqxInput({disabled: true });
                $('#LotNo').jqxInput({disabled: true });
                $('#ScanQty').jqxInput({disabled: true });

                ShowCountBar();
                CreateLot();
                gridBarcodeScan(Lot,SB);
              }

              $('#TotalSeibanPCB').html('0');
              $('#TotalQty').html('0');
              $('#CountOK').html('0');
              $('#AlertMsg').html('-');

          });

          $('#EditLot').click(function() {
              $('#LotNo').jqxInput({disabled: false });
              $("#LotNo").focus();
              $('#UserChk').jqxInput({disabled: false });
              $('#Shift').jqxInput({disabled: false });
              $('#ScanQty').jqxInput({disabled: false });
          });*/


});

function gridBarcodeScan(BC) {
            var Barcode = BC;
            var act = 'JsonMainGrid';
            var url = "main.class.php?action="+act
            +"&Barcode="+Barcode;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'ITEMDESC', type: 'string' },
                    { name: 'Barcode', type: 'string' },
                    { name: 'StepName', type: 'string' },
                    { name: 'STATE_DESC', type: 'string' },
                    { name: 'SHIFT', type: 'string' },
                    { name: 'DATE_UPDATE', type: 'string' },
                    { name: 'SEIBAN_CD', type: 'string' },
                    { name: 'Model', type: 'string' },
                    { name: 'LOT', type: 'string' },
                    { name: 'EMP', type: 'string' },
                    { name: 'MC', type: 'string' }

                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridBarcodeScan").jqxGrid({source: dataAdapter});
             $("#BarcodeScan").val('');
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

    var act = 'ChkModel';

          $.ajax({
                    type: "GET",
                    url: "main.class.php",
                    dataType: "json",
                    data: "action=" + act
                    + "&Seiban=" + MainSeiban.trim()
                    + "&ItemCode=" + MainModelItem.trim(),
                    success: function(data) {
                      if (data.response == 'success') {
                        $("#ScanWR").val("");
                        $("#ScanWR").focus();

                        var result = data.data[0].result;
                        var SEIBAN = data.data[0].SEIBAN_CD;
                        var ITEMDESC = data.data[0].ITEMDESC;
                        MainModel = ITEMDESC;
                        MainSeiban = SEIBAN;
                        $('#ModelMain').html(ITEMDESC);
                        $('#SeibanMain').html(MainSeiban);
                        $('#SeibanMainH').val(MainSeiban);
                        $('#ModelMainH').val(ITEMDESC);
                      }
                    }
          });
  }

  var ShowCountBar = function(){

      var act = 'jsonShowCount';
      var Lot = $("#LotNo").val();
      var Seiban =$('#SeibanMainH').val();

          $.ajax({
                    type: "GET",
                    url: "main.class.php",
                    dataType: "json",
                    data: "action=" + act
                    + "&seiban=" + Seiban
                    + "&lot=" + Lot
                    +"&Model="+MainModel,
                    success: function(data) {
                      if (data.response == 'success') {
                        var OK = data.data[0].STATUS_OK;
                        var NG = data.data[0].STATUS_NG;
                        var ND = data.data[0].STATUS_ND;
                        var MIX = data.data[0].STATUS_MIX;
                        $('#CountOK').html(OK);
                        $('#CountNG').html(NG);
                        $('#CountND').html(ND);
                        $('#CountMIX').html(MIX);
                      }

                      var ScanQty = $("#ScanQty").val();
                      if (OK == ScanQty){
                        $('#BarcodeScan').jqxInput({disabled: true });
                        $("#AlertMsg").css('color', 'green');
                        var result = 'Scan Completed!!!';
                        $("#AlertMsg").html(result);
                      }else{
                        $('#BarcodeScan').jqxInput({disabled: false });
                        /*var result = '-';
                        $("#AlertMsg").html(result);*/
                      }
                    }
          });

  }

  var ShowLotQty = function(){

      var act = 'jsonLotQty';
      var Lot = $("#LotNo").val();
      var Model =$('#ModelMainH').val();
          $.ajax({
                    type: "GET",
                    url: "main.class.php",
                    dataType: "json",
                    data: "action=" + act
                    + "&Model=" + Model
                    + "&lot=" + Lot,
                    success: function(data) {
                      if (data.response == 'success') {
                        var Qty = 0;
                        Qty = data.data[0].qty;
                      }
                      if (Qty >0){
                        $('#ScanQty').val(Qty);
                        $('#ScanQty').jqxInput({disabled: true });
                        //$('#SaveLot').focus();
                      }else{
                        $('#ScanQty').jqxInput({disabled: false });
                      }
                    }
          });
  }

  var ShowLotSTD = function(){

      var act = 'jsonLotSTD';
      var Lot = $("#LotNo").val();
      var Model =$('#ModelMainH').val();
          $.ajax({
                    type: "GET",
                    url: "main.class.php",
                    dataType: "json",
                    data: "action=" + act
                    + "&Model=" + Model
                    + "&lot=" + Lot,
                    success: function(data) {
                      if (data.response == 'success') {
                        var Qty = 0;
                        Qty = data.data[0].STD;
                      }
                      if (Qty >0){
                        $('#ScanQty').val(Qty);
                        $('#ScanQty').jqxInput({disabled: true });
                        $('#SaveLot').focus();
                      }else{
                        $('#ScanQty').jqxInput({disabled: false });
                      }
                    }
          });
  }

  var CreateLot = function(){

      var act     = 'checkInsertLot';
      var Lot     = $("#LotNo").val();
      var Model   = $('#ModelMainH').val();
      var ShipID  = MainShiftID;
      var Emp     = MainUserID
      var Qty     = $('#ScanQty').val();
      var Seiban     = $('#SeibanMainH').val();
          $.ajax({
                    type: "GET",
                    url: "main.class.php",
                    dataType: "json",
                    data: "action=" + act
                    + "&Model=" + Model
                    + "&lot=" + Lot
                    + "&ShipID=" + ShipID
                    + "&Emp=" + Emp
                    + "&Qty=" + Qty
                    + "&Seiban=" + Seiban,
                    success: function(data) {
                      if (data.response == 'success') {
                        var result = data.data[0].result;
                        ShowLotQty();
                      }
                    }
          });
  }

  var insertBarcode = function(Sts){

      var act     = 'checkInsertBarcode';
      var Barcode = $('#BarcodeScan').val();
      var Model   = $('#ModelMainH').val();
      var ShipID  = MainShiftID;
      var Shift   = MainShift;
      var Seiban  = MainSeiban
      var Client  = $('#PCMC').val();
      var Emp     = MainUserID;
      var Status  = Sts;
          $.ajax({
                    type: "GET",
                    url: "main.class.php",
                    dataType: "json",
                    data: "action=" + act
                    + "&Barcode=" + Barcode
                    + "&Model=" + Model
                    + "&Status=" + Status
                    + "&ShipID=" + ShipID
                    + "&Shift=" + Shift
                    + "&Emp=" + Emp
                    + "&Seiban=" + Seiban
                    + "&Client=" + Client,
                    success: function(data) {
                      if (data.response == 'success') {
                        $("#BarcodeScan").val('');
                        $('#BarcodeScan').jqxInput({disabled: false });
                        $("#BarcodeScan").focus();

                        /*ShowCountBar();
                        var result = data.data[0].result;
                        if(result == 'Success'){

                          $("#AlertMsg").css('color', 'green');
                          $("#AlertMsg").html(result);

                        }else{

                          $("#AlertMsg").css('color', 'red');
                          $("#AlertMsg").html(result);
                          alert(result);

                        }*/
                        gridBarcodeScan(Barcode);

                      }
                    }
          });
  }
