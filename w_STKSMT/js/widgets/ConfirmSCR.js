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

  /*$("#vTracking").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vTracking").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vTracking').jqxInput({disabled: true });
      var vTracking = $("#vTracking").val();
      ReadQRTracking(vTracking);
    }
  });
  $("#vLocation").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vLocation").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vLocation').jqxInput({disabled: true });
      var Loc = $("#vLocation").val();
      CheckLocation(Loc);
    }
  });*/
  $("#vSapQr").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vSapQr").keypress(function( event ) {
    if ( event.which == 13 ) {
      //$('#vSapQr').jqxInput({disabled: true });
      var Q = $("#vSapQr").val();
      ReadTag(Q);
    }
  });

  /*$("#bcLocation").click(function( event ) {
      var user = $("#vEmp").val();
      if(user != ''){
        $('#vSapQr').jqxInput({disabled: true });
        $("#vSapQr").val('');
        //$('#vLocation').jqxInput({disabled: false });
        //$("#vLocation").val('');
        //$("#vLocation").focus();
      }
      else{
        $("#vEmp").focus();
      }

  });*/

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
                   $('#vSapQr').jqxInput({disabled: false });
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
                  //$('#vLocation').jqxInput({disabled: false });
                  //$("#vLocation").val("");
                  //$("#vLocation").focus();

                  $('#vStatus').html("X");
                  $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                }
                else{
                  $('#vSapQr').jqxInput({disabled: false });
                  $("#vSapQr").focus();

                  $('#vStatus').html(Location);
                  $('#tabletest tr').children('td, th').css('background-color','#0adeff');
                }
              }
             },
             error: function functionName() {
               //$('#vLocation').val("");
               //$('#vLocation').focus();
               //$('#vLocation').jqxInput({disabled: false });
             }

   });
}

function chkUserID() {
  if (typeof vUserID == 'undefined'){
    //$("#vLocation").jqxInput({disabled: true });
    //$("#vTracking").jqxInput({disabled: true });
    $("#vSapQr").jqxInput({disabled: true });
  }
  else {
    //$("#vTracking").jqxInput({disabled: false });
    //$("#vTracking").jqxInput({disabled: false });
    //$("#vSapQr").jqxInput({disabled: false });
  }
};

var ReadTag = function(Q){

  var tagRead = Q;
  var tagReadArr = tagRead.split('@');
  try
  {
        var vBatchNo = tagReadArr[2];

        var vItemNo;

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
        //var vTracking = $("#vTracking").val();
        //var vLocation = $("#vLocation").val();

        var vChkQR = tagReadArr.length;

        if(vChkQR == 7)
        {
          $("#vSapQr").val("");
          InsConfirmSCR(vItemNo,vBatchNo,vQty,vUserID);
        }
        else
        {
          $("#vSapQr").jqxInput({disabled: false });
          $("#vSapQr").val("");
          $("#vSapQr").focus();

          $('#vStatus').html("QR Not Match!!!");
          $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
        }
    }
    catch(err) {
      $('#vStatus').html("QR Not Match!!!");
      $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');

      $("#vSapQr").val("");
      $("#vSapQr").focus();
    }
};

var InsConfirmSCR = function(ItemCd,Batch,Qty,Emp) {
   var act = 'InsConfirmSCR';
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&ItemCD=" + ItemCd
             + "&Batch=" + Batch
             + "&Qty=" + Qty
             + "&Emp=" + Emp,
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

                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                }
                else{
                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#08ca0e');

                  //$("#vLocation").val("");
                  //$('#vLocation').jqxInput({disabled: false });
                  //$("#vLocation").focus();

                  $("#vSapQr").val("");
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
