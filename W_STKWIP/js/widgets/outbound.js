$(document).ready(function () {

  var vUserID;
  var vChkBatch;

  $('#tabletest tr').children('td, th').css('background-color','#FFFFFF');
  $('#vStatus').html("-");
  $('#vEmp').focus();
  $("#vEmp").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vEmp").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vEmp').jqxInput({disabled: true });
      var user = $("#vEmp").val();
      CheckUser(user);
    }
  });

  $("#vSapQr").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vSapQr").keypress(function( event ) {
    if ( event.which == 13 ) {
      //$('#vSapQr').jqxInput({disabled: true });
      var Q = $("#vSapQr").val();
      ReadTag(Q);
    }
  });
  $("#vLot").jqxInput({ height: 25, width: 100, minLength: 1});

  chkUserID();
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
                 var User = data.data[0];
                 if(!User){
                   $('#vEmp').val("");
                   $('#vEmp').focus();
                   $('#vEmp').jqxInput({disabled: false });
                 }
                 else{
                   MainUserChk = User.STAFF_NAME;
                   MainUserID = User.STAFF_CODE;
                   //MainShift = User.SHIFT_NAME;
                   //MainShiftID = User.SHIFT_ID;
                   $("#vEmp").val(MainUserChk);
                   vUserID = MainUserID;
                   chkUserID();
                   $("#vSapQr").focus();
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

function chkUserID() {
  if (typeof vUserID == 'undefined'){
    $("#vSapQr").jqxInput({disabled: true });
    $("#vLot").jqxInput({disabled: true });
  }
  else {
    $("#vSapQr").jqxInput({disabled: false });
  }
};

var ReadTag = function(Q){

  var tagRead = Q;
  var tagReadArr = tagRead.split('-');
  var vTracking = tagReadArr[0];
  var vLotNo = tagReadArr[1];

  var vChkQR = tagReadArr.length;

  if(vChkQR == 2){
    $("#vSapQr").val(vTracking);
    $("#vLot").val(vLotNo);
    $("#vSapQr").jqxInput({disabled: true });
    InsertOutBound();
    //$("#vQty").jqxInput({disabled: false });
    //$("#vQty").focus();
  }
  else{
    $("#vSapQr").jqxInput({disabled: false });
    $("#vSapQr").val("");
    $("#vSapQr").focus();

    $('#vStatus').html("QR Not Match!!!");
    $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
  }
};

function CheckBatchOnHand (Batch) {
   var act = 'CheckBatchOnHand';
   var Result;
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Batch=" + Batch,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];
                 Result = Data.Result;
                 $("#vBatchSts").html(Result);
                 console.log( "Result99 :" + Result);
              }
             },
             error: function functionName() {
               console.log("ajax error");
               $("#vBatchSts").val("0");
             }
   });
}

var InsertOutBound = function() {
  var vTracking = $("#vSapQr").val();
  var vLot = $("#vLot").val();
  var vEmp = $("#vEmp").val();

   var act = 'insertOutBound';
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Tracking=" + vTracking
             + "&Lot=" + vLot
             + "&Emp=" + vEmp,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];
                 var Result = Data.Result;
                 var RSts = Data.RSts;

                if(RSts == '0'){
                  $('#vSapQr').jqxInput({disabled: false });
                  $("#vSapQr").val("");
                  $("#vSapQr").focus();

                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                }
                else if(RSts == '9'){
                  $('#vSapQr').jqxInput({disabled: true });
                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                }
                else{
                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#08ca0e');

                  $("#vSapQr").val("");
                  $("#vLot").val("");
                  $('#vSapQr').jqxInput({disabled: false });
                  $("#vSapQr").focus();
                }
              }
             },
             error: function functionName() {
               $('#vSapQr').jqxInput({disabled: false });
               $("#vSapQr").val("");
               $("#vSapQr").focus();
             }

   });
}
