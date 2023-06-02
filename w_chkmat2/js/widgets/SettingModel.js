$(document).ready(function () {

  //inputText
var vItemNoCurr;
var vItemNoRepl;
var vBatchCurr;
var vBatchRepl;
var vUserID;
var vLine;
var vTable;
var MainUserChk;
var MainUserID;

    $('#tableMain tr').children('td, th').css('background-color','#FFFFFF');
    $('#vStatus').html("Tag SAP");

    $('#vEmp').focus();
    $("#vEmp").jqxInput({ height: 20, width: 100, minLength: 1});
    $("#vEmp").keypress(function( event ) {
      if ( event.which == 13 ) {
        $('#vEmp').jqxInput({disabled: true });

        var user = $("#vEmp").val();
        CheckUser(user);
      }
    });
    $("#vTracking").jqxInput({ height: 20, width: 100, minLength: 1});
    $("#vTracking").keypress(function( event ) {
      if ( event.which == 13 ) {
        $('#vTracking').jqxInput({disabled: true });
        var vTracking = $('#vTracking').val();

        var vTrackArr = vTracking.split('-');
        var vSeiban = vTrackArr[0]

        if(vTrackArr.length == 2 && vSeiban.length == 10){

          $('#vStatus').html(vSeiban);
          $('#tableMain tr').children('td, th').css('background-color','#08ca0e');

          $('#vTracking').val(vSeiban);

          $('#vMachine').jqxInput({disabled: false });
          $('#vMachine').focus();
        }
        else{
          $('#vStatus').html('Seiban not found.');
          $('#tableMain tr').children('td, th').css('background-color','#ff0a0a');

          $('#vTracking').jqxInput({disabled: false });
          $('#vTracking').val("");
          $('#vTracking').focus();
        }


      }
    });
    $("#vMachine").jqxInput({ height: 20, width: 100, minLength: 1});
    $("#vMachine").keypress(function( event ) {
      if ( event.which == 13 ) {
        $('#vMachine').jqxInput({disabled: true });
        var vQrMachine = $('#vMachine').val();
        CheckMachine(vQrMachine);
      }
    });

    $("#vSapQrCurrent").jqxInput({ height: 20, width: 100, minLength: 1});

    $("#vSapQrCurrent").keypress(function( event ) {
      if ( event.which == 13 ) {
        $('#vSapQrCurrent').jqxInput({disabled: true });

        var Q = $("#vSapQrCurrent").val();
        ReadTagCurrent(Q);
      }
    });
});

var CheckUser = function(user) {
   var act = 'ChkUser';
   var User = user;
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&User=" + User,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];

                 if(!Data){
                   $('#vEmp').val("");
                   $('#vEmp').focus();
                   $('#vEmp').jqxInput({disabled: false });
                 }
                 else{
                   MainUserChk = Data.STAFF_NAME;
                   MainUserID = Data.STAFF_CODE;
                   //MainShift = User.SHIFT_NAME;
                   //MainShiftID = User.SHIFT_ID;
                   $("#vEmp").val(MainUserChk);
                   vUserID = MainUserID;

                   $('#vTracking').jqxInput({disabled: false });
                   $('#vTracking').focus();
                 }

               }else{
                 $('#vEmp').val("");
                 $('#vEmp').focus();
                 $('#vEmp').jqxInput({disabled: false });
               }
             },
             error: function functionName() {
               $('#vEmp').val("");
               $('#vEmp').focus();
               $('#vEmp').jqxInput({disabled: false });
             }

   });
}

function CheckMachine(Q){
  //console.log(Q);
  var tag = Q;
  var tagRead;
  tagRead = tag;
  if (/\s/.test(Q)) {
      tagRead = tag.split(' ').join('_');
  }else{
      tagRead = tag;
  }

  var tagReadArr = tagRead.split('_');
  var tagReadLen = tagReadArr.length;

  if (tagReadLen == 3 && tagRead.substring(0,3) != "[)>"){
    var vLineNo = tagReadArr[0] +'_'+ tagReadArr[1];
    var vTableNo = tagReadArr[2];
  }
  else if (tagReadLen == 2 && tagRead.substring(0,3) != "[)>"){
    var vLineNo = tagReadArr[0] +'_'+ tagReadArr[1];
    var vTableNo = tagReadArr[1];
  }
  else{
    $('#vStatus').html('Not found Machine');
    $('#tableMain tr').children('td, th').css('background-color','#ff0a0a');

    $('#vMachine').jqxInput({disabled: false });
    $('#vMachine').val("");
    $('#vMachine').focus();
  }


  var vChekQrMachine = tagReadArr.length;
  if (tagReadLen >= 2){
    vLine = vLineNo;
    vTable = vTableNo;
    var vSeiban = $('#vTracking').val();
    STBL_REP_INS_SEIBAN(tagReadArr[0],vSeiban,MainUserID);
  }
  else{
    $('#vStatus').html('Not found Machine');
    $('#tableMain tr').children('td, th').css('background-color','#ff0a0a');

    $('#vMachine').jqxInput({disabled: false });
    $('#vMachine').val("");
    $('#vMachine').focus();
  }
}

function STBL_REP_INS_SEIBAN(Line,Seiban,Emp) {
   var act = 'STBL_REP_INS_SEIBAN';
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Line=" + Line
             + "&SEIBAN=" + Seiban
             + "&Emp=" + Emp,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];

                 if(Data){
                   var vRSts = Data.RSts;
                   var vResult = Data.Result;

                   if (vRSts == '1'){
                     $("#vSapQrCurrent").jqxInput({disabled: false });
                     $("#vSapQrCurrent").focus();

                     $('#vStatus').html(vLine);
                     $('#vMachine').val(vLine);
                     $('#tableMain tr').children('td, th').css('background-color','#08ca0e');
                   }

                 }
                 else{
                   $('#vStatus').html('Not found Machine');
                   $('#tableMain tr').children('td, th').css('background-color','#ff0a0a');

                   $('#vMachine').jqxInput({disabled: false });
                   $('#vMachine').val("");
                   $('#vMachine').focus();
                 }

               }else{
                 $('#vStatus').html('Not found Machine');
                 $('#tableMain tr').children('td, th').css('background-color','#ff0a0a');

                 $('#vMachine').jqxInput({disabled: false });
                 $('#vMachine').val("");
                 $('#vMachine').focus();
               }
             }
   });
}

/*function ReadTagCurrent(Q){
  //console.log(Q);
  var tagRead = Q;
  var tagReadArr = tagRead.split('@');
  var vBatchNo = tagReadArr[2];
  var vItemNo = tagReadArr[3];
  var vQty = tagReadArr[4];

  var vLentagReadArr = tagReadArr.length;
  if(vLentagReadArr == 7)
  {
    vItemNoCurr = vItemNo;
    vBatchCurr = vBatchNo;

    $('#vSapQrCurrent').val(vBatchCurr);
    $("#vStatus").html(vItemNoCurr);
    $('#tableMain tr').children('td, th').css('background-color','#08ca0e');

    insReplSMT(vLine,vTable,vItemNoCurr,vQty,vBatchCurr,"",vUserID);
    //countReplSMT(vLine,vTable,vItemNoCurr);
  }
  else
  {
    $('#vStatus').html('QR Not Match');
    $('#tableMain tr').children('td, th').css('background-color','#ff0a0a');
    $('#vSapQrCurrent').jqxInput({disabled: false });
    $('#vSapQrCurrent').val("");
    $('#vSapQrCurrent').focus();
  }

}*/

function ReadTagCurrent(Q){
  //console.log(Q);
  var tagRead = Q;
  var tagReadArr = tagRead.split('@');
  var parsedData = GetDetailQRcode(Q);
  //console.log(parsedData);
  vItemNoCurr = parsedData["Itemcode"];
  vBatchCurr = parsedData["PackageID"];
  var vQty = parsedData["Qty"];

  if(tagReadArr[1] == "SIIX20" || tagReadArr[1] == "06")
  {

    $('#vSapQrCurrent').val(vBatchCurr);
    $("#vStatus").html(vItemNoCurr);
    $('#tableMain tr').children('td, th').css('background-color','#08ca0e');

    insReplSMT(vLine,vTable,vItemNoCurr,vQty,vBatchCurr,"",vUserID);
  }
  else
  {
    $('#vStatus').html('QR Not Match');
    $('#tableMain tr').children('td, th').css('background-color','#ff0a0a');
    $('#vSapQrCurrent').jqxInput({disabled: false });
    $('#vSapQrCurrent').val("");
    $('#vSapQrCurrent').focus();
  }
}

function GetDetailQRcode(Q){
  var tagReadArr = Q.split('@');
  var parsedData = {};
  var element = "";
  if(tagReadArr[1] == "06"){
    for(var i = 0;i < tagReadArr.length; i++){
      element = tagReadArr[i];
      if (element.substring(0,1) == "V") {
        parsedData["Vender"] = element.substring(1);
      }else if (element.substring(0,1) == "P") {
        parsedData["Itemcode"] = element.substring(1);
      }else if (element.substring(0,1) == "Q") {
        parsedData["Qty"] = element.substring(1);
      }else if (element.substring(0,1) == "S") {
        parsedData["PackageID"] = element.substring(1);
      }else if (element.substring(0,2) == "1T") {
        parsedData["MakerLot"] = element.substring(2);
      }else if (element.substring(0,2) == "1P") {
        parsedData["ItemDESC"] = element.substring(2);
      }
    }
    $("#vStatus").html(parsedData["Vender"]);
  }else if(tagReadArr[1] == "SIIX20"){
    parsedData["Itemcode"] = tagReadArr[3];
    parsedData["PackageID"] = tagReadArr[2];
    parsedData["Qty"] = tagReadArr[4];
  }
  return parsedData;
}

function countReplSMT(Line,Tables,Item) {
   var act = 'countReplSMT';
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Line=" + Line
             + "&Tables=" + Tables
             + "&ItemCD=" + Item,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];

                 if(!Data){
                   $("#vCount").html("-");
                 }
                 else{
                   var CountItem = Data.CountItem;
                   $("#vCount").html(CountItem);
                 }

               }else{
                 $("#vCount").html("-");
               }
             }
   });
}

function insReplSMT(Line,Tables,Item,Qty,BatchCurr,BatchRepl,Emp) {
    var act = 'insReplSMT';
    var url = "main.class.php";
    $.ajax({
              type: "GET",
              url: url,
              dataType: "json",
              data: "action=" + act
              + "&Line=" + Line
              + "&Tables=" + Tables
              + "&ItemCD=" + Item
              + "&Qty=" + Qty
              + "&BatchCurr=" + BatchCurr
              + "&BatchRepl=" + BatchRepl
              + "&Emp=" + Emp,
              success: function(data) {
                if (data.response == 'success') {
                  var Data = data.data[0];


                  if(!Data)
                  {
                    $('#vStatus').html('SQL Error');
                    $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');

                    $('#vSapQrCurrent').jqxInput({disabled: false });
                    $('#vSapQrCurrent').focus();
                    //$("#vSapQrCurrent").jqxInput({disabled: true });
                    $('#vSapQrCurrent').focus();

                    //$("#vMachine").jqxInput({disabled: false });
                    //$("#vMachine").val("");
                  //  $("#vMachine").focus();
                  }
                  else
                  {
                    var Result = Data.Result;
                    var RSts = Data.RSts;

                    if (RSts == '1')
                    {
                      $('#vStatus').html(Result);
                      $('#tabletest tr').children('td, th').css('background-color','#08ca0e');

                      $('#vSapQrCurrent').jqxInput({disabled: false });
                      $('#vSapQrCurrent').focus();
                      $('#vSapQrCurrent').val("");
                      //$("#vSapQrCurrent").jqxInput({disabled: true });
                      $('#vSapQrCurrent').focus();

                      //$("#vMachine").jqxInput({disabled: false });
                      //$("#vMachine").val("");
                    //  $("#vMachine").focus();
                      countReplSMT(Line,Tables,Item);
                    }else {

                      $('#vStatus').html(Result);
                      $('#tableMain tr').children('td, th').css('background-color','#ff0a0a');

                      //$('#vSapQrReplace').jqxInput({disabled: true });
                      //$('#vSapQrReplace').val("");
                      $("#vSapQrCurrent").jqxInput({disabled: true });
                      $('#vSapQrCurrent').val("");

                      $("#vMachine").jqxInput({disabled: false });
                      $("#vMachine").val("");
                      $("#vMachine").focus();
                    }
                  }
                }
              }
            });
  }
