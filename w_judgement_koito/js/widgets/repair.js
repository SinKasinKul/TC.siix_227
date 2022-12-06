$(document).ready(function () {

  var MainStepControl;
  var MainModel;
  var MainModelItem;
  var MainSeiban;
  var MainUserChk;
  var MainUserID;
  var MainSeniorChk;
  var MainSeniorID;
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
  $("#User").jqxInput({placeHolder: "Enter a User", height: 30, width: 250, minLength: 1});
  $("#WRctrl").jqxInput({placeHolder: "WIP Control Sheet", height: 30, width: 250, minLength: 1});
  $("#WRctrl").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#WRctrl').jqxInput({disabled: true });
      var BC = $("#WRctrl").val();
      CheckUser();
      ReadQrcode(BC);
    }
  });

  //inputText
  $("#UserChk").jqxInput({ height: 30, width: 150, minLength: 1});
  $("#seniorChk").jqxInput({ height: 30, width: 150, minLength: 1});
  $("#seniorChk").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#seniorChk').jqxInput({disabled: true });
      CheckSeniorUser();
    }
  });
  $("#Shift").jqxInput({ height: 30, width: 50, minLength: 1});
  $("#PCMC").jqxInput({ height: 30, width: 150, minLength: 1});
  $("#BarcodeScan").jqxInput({ height: 30, width: 400, minLength: 1});
  $("#BarcodeScan").keypress(function( event ) {
    var vBar = $("#BarcodeScan").val();
    if ( event.which == 13 ) {
      $('#BarcodeScan').jqxInput({disabled: true });
      if (vBar != ''){
        gridBarcodeScan(vBar);
      }else{
        $('#BarcodeScan').jqxInput({disabled: false });
        $("#BarcodeScan").focus();
      }
    }
  });
  $('#BarcodeScan').focus(function() {
      var vUser = $("#UserChk").val();
      if(vUser == ''){
        enterProgram();
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
              width: 820,
              height: 343,
              altrows: true,
              sortable: true,
              showstatusbar: true,
              statusbarheight: 25,
              showaggregates: true,
              theme: "darkblue",
              columnsresize: true,
              selectionmode: 'multiplerowsextended',
              columns: [
                { text: 'Model', datafield: 'ITEMDESC', minwidth: 230, align: 'center', cellsalign: 'center'},
                { text: 'Barcode', datafield: 'Barcode', width: 200, align: 'center', cellsalign: 'center', aggregates: ['count']},
                { text: 'Process', datafield: 'StepName', width: 100, align: 'center', cellsalign: 'center'},
                { text: 'STATUS', datafield: 'STATE_DESC', width: 100, align: 'center', cellsalign: 'center', cellsrenderer: Status},
                { text: 'TIME', datafield: 'DATE_UPDATE', width: 170, align: 'center', cellsalign: 'center'}/*,
                { text: 'SHIFT', datafield: 'SHIFT', width: 80, align: 'center', cellsalign: 'center'}*/
              ]
          });

          $('#ReOK').click(function() {
              var User = $('#seniorChk').val();
              var vBar = $("#BarcodeScan").val();
              if(User != '' && vBar != ''){
                insertBarcode("OK");
              }else{
                alert("For Senior Only Or Entry Barcode");
              }
          });
          $('#ReConfirmNG').click(function() {
            var User = $('#seniorChk').val();
            var vBar = $("#BarcodeScan").val();
            if(User != '' && vBar != ''){
              insertBarcode("Confirm NG");
            }else{
              alert("For Senior Only Or Entry Barcode");
            }
          });

          $('#ReNG').click(function() {
            var vBar = $("#BarcodeScan").val();
            if(vBar != ''){
              insertBarcode("NG");
            }else{
              alert("Please entry Barcode!!!");
            }
          });
          $('#ExitApp').click(function() {
            location.reload();
          });

          $('#ReRefresh').click(function() {
            $('#BarcodeScan').val("");
            $('#LotNo').val("");
            $("#BarcodeScan").val('');
            $('#BarcodeScan').jqxInput({disabled: false });
            $('#seniorChk').jqxInput({disabled: false });
            $("#seniorChk").val('');
          });
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
                    { name: 'DATE_UPDATE', type: 'string' }
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridBarcodeScan").jqxGrid({source: dataAdapter});
  }

  var ReadQrcode = function(Q){

    var lenQ = Q.length;

    if(parseInt(lenQ,10) > 15 )
    {
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
    }
    else{
      var res = [];
      res[0] = Q.substring(0, 10);
      MainSeiban = res[0];
      MainModelItem = "";
    }
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

                        gridBarcodeScan(Barcode);

                      }
                    }
          });
  }

  var CheckSeniorUser = function() {
     var act = 'ChkUser';
     var User = $('#seniorChk').val();
     $.ajax({
               type: "GET",
               url: "main.class.php",
               dataType: "json",
               data: "action=" + act
               + "&User=" + User,
               success: function(data) {
                 if (data.response == 'success') {
                   var User = data.data[0];
                   MainSeniorChk = User.STAFF_NAME;
                   MainSeniorID = User.STAFF_CODE;

                   /*if(typeof data === "undefined" ){
                     $("#seniorChk").val('');
                     $("#UserChk").val('');
                     $('#seniorChk').jqxInput({disabled: false });
                   }else{*/
                     $("#seniorChk").val(MainSeniorChk);
                     $("#UserChk").val(MainSeniorChk);
                     $('#seniorChk').jqxInput({disabled: true });
                   //}

                 }else{
                   $('#SeniorUser').val("");
                   $('#SeniorUser').focus();
                 }
               }

     });
   }
