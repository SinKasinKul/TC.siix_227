$(document).ready(function () {

  var vUserID;
  var vLocation;
  var vChkBatch;

  $('#tabletest tr').children('td, th').css('background-color','#FFFFFF');
  $('#vStatus').html("-");
  $('#vEmp').focus();
  $("#vEmp").jqxInput({ height: 25, width: 100, minLength: 1});
  $('#vEmp').jqxInput({disabled: true });


  $("#vSapQr").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vSapQr").keypress(function( event ) {
    if ( event.which == 13 ) {
      //$('#vSapQr').jqxInput({disabled: true });
      var Q = $("#vSapQr").val();
      ReadTag(Q);
    }
  });

  $("#vLocation").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vLocation").keypress(function( event ) {
    if ( event.which == 13 ) {
      var L = $("#vLocation").val();
      CheckLocation(L);
    }
  });
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
    //$("#vSapQr").jqxInput({disabled: true });
    $("#vLocation").jqxInput({disabled: true });
  }
  else {
    $("#vSapQr").jqxInput({disabled: false });
  }
};

var ReadTag = function(Q){

  var tagRead = Q;
  var tagReadArr = tagRead.split('@');
  var vBatchNo = tagReadArr[2];
  var UserID = $('#vEmp').val();
  var vItemNo;

  try{
      var vLenItem = tagReadArr[3].length;
      if(vLenItem > 10)
      {
        vItemNo = tagReadArr[3].substring(8,vLenItem);
      }
      else
      {
        vItemNo = tagReadArr[3];
      }
      var vQty = tagReadArr[4];
      var vLocation = $("#vLocation").val();

      var vChkQR = tagReadArr.length;

      if(vChkQR == 7){
        //$("#vSapQr").val(vBatchNo);
        STBL_STK_UPD_RETURN(vItemNo,vBatchNo,vQty,vLocation,UserID);
      }
      else{
        $("#vSapQr").jqxInput({disabled: false });
        $("#vSapQr").val("");
        $("#vSapQr").focus();

        $('#vStatus').html("QR Not Match!!!");
        $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
      }
    }catch(e){
      $('#vStatus').html(e);
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

var STBL_STK_UPD_RETURN = function(ItemCd,Batch,Qty,Location,Emp) {
   var act = 'STBL_STK_UPD_RETURN';
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Batch=" + Batch
             + "&Emp=" + Emp
             + "&ItemCd=" + ItemCd
             + "&Qty=" + Qty
             + "&Location=" + Location,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];
                 var Result = Data.Result;
                 var RSts = Data.RSts;

                if(RSts == '0'){
                  $('#vSapQr').jqxInput({disabled: false });
                  $("#vSapQr").val("");
                  $("#vSapQr").focus();

                  $('#vLocation').jqxInput({disabled: true });
                  $("#vLocation").val("");

                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                }
                else if(RSts == '9'){
                  $('#vSapQr').jqxInput({disabled: true });
                  $('#vLocation').jqxInput({disabled: false });
                  $('#vLocation').focus();

                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                }
                else{
                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#08ca0e');

                  $("#vSapQr").val("");
                  $('#vSapQr').jqxInput({disabled: false });
                  $("#vSapQr").focus();

                  $('#vLocation').jqxInput({disabled: true });
                  $("#vLocation").val("");
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
var CheckLocation = function(Loc) {
   var act = 'ChkLocation';
   var Location = Loc;
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Location=" + Location,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];
                 var Result = Data.Result;
                 var RSts = Data.RSts;

                if(RSts == '0'){
                  $('#vLocation').jqxInput({disabled: false });
                  $("#vLocation").val("");
                  $("#vLocation").focus();

                  $('#vStatus').html("X");
                  $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                }
                else{
                  var Q = $("#vSapQr").val();
                  ReadTag(Q);
                }
              }
             },
             error: function functionName() {
               $('#vLocation').val("");
               $('#vLocation').focus();
               $('#vLocation').jqxInput({disabled: false });
             }

   });
}
