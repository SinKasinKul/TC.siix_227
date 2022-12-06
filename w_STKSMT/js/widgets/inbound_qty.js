$(document).ready(function () {

  var vUserID;
  var vLocation;

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
      $('#vSapQr').jqxInput({disabled: true });
      //var Q = $("#vSapQr").val();
      //ReadTag(Q);
      $('#vQty').focus();
    }
  });

  $("#vQty").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vQty").keypress(function( event ) {
    if ( event.which == 13 ) {
      var Q = $("#vSapQr").val();
      ReadTag(Q);
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
    //$("#vLocation").jqxInput({disabled: true });
    $("#vSapQr").jqxInput({disabled: true });
    $("#vQty").jqxInput({disabled: true });
  }
  else {
    //$("#vLocation").jqxInput({disabled: false });
    $("#vSapQr").jqxInput({disabled: false });
    $("#vQty").jqxInput({disabled: false });
  }
};

var ReadTag = function(Q){

  var tagRead = Q;
  var tagReadArr = tagRead.split('@');
  var vBatchNo = tagReadArr[2];
  var vItemNo = tagReadArr[3];
  var vQty; //= $("vQty").val();//tagReadArr[4];
  var vLocation = $("#vLocation").val();

  var vChkQR = tagReadArr.length;

  if(vChkQR == 7){

    var pQty = $("#vQty").val();
    if(pQty == "0"){
      $("#vQty").val(tagReadArr[4]);
      vQty = tagReadArr[4];
    }
    else{
      vQty = $("#vQty").val();
    }

    $("#vSapQr").val(vBatchNo);
    UpdateOnHand(vBatchNo,vQty);
  }
  else{
    $("#vSapQr").jqxInput({disabled: false });
    $("#vSapQr").val("");
    $("#vSapQr").focus();

    $('#vStatus').html("QR Not Match!!!");
    $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
  }
};

var UpdateOnHand = function(Batch,Qty) {
   var act = 'UpdateOnHand';
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Batch=" + Batch
             + "&Qty=" + Qty,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];
                 var Result = Data.Result;
                 var RSts = Data.RSts;

                if(RSts == '0'){
                  //$("#vLocation").val("");
                  //$('#vLocation').jqxInput({disabled: false });
                  //$("#vLocation").focus();

                  $('#vSapQr').jqxInput({disabled: false });
                  $("#vSapQr").val("");
                  $("#vSapQr").focus();
                  $("#vQty").val("0");

                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                }
                else{
                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#08ca0e');

                  $("#vSapQr").val("");
                  $("#vQty").val("0");
                  $('#vSapQr').jqxInput({disabled: false });
                  $("#vSapQr").focus();

                }
              }
             },
             error: function functionName() {
               $('#vSapQr').jqxInput({disabled: false });
               $("#vSapQr").val("");
               $("#vSapQr").focus();
               $("#vQty").val("0");
             }

   });
}
