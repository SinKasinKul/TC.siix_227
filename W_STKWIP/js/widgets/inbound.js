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

  $("#vLocation").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vLocation").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vLocation').jqxInput({disabled: true });
      var Loc = $("#vLocation").val();
	  Loc = Loc.replace(' ', '');
	  $("#vLocation").val(Loc);
      CheckLocation(Loc);
    }
  });
  var vWIPStatus_source = [

    "Wait T/U",
    "Wait Cutting",
    "Wait F/T",
    "Wait Coating",
    "Wait ICT",
    "Wait Assy",
    "Wait S/T"
    ];
  $("#vWIPStatus").jqxDropDownList({ source: vWIPStatus_source, placeHolder: "WIP Status", width: 110, height: 30});
  $('#vWIPStatus').on('select', function (event)
  {
        $('#vSapQr').jqxInput({disabled: false });
        $("#vSapQr").focus();   
  });
  
  $("#vSapQr").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vSapQr").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vSapQr').jqxInput({disabled: true });
      var Q = $("#vSapQr").val();
      ReadTag(Q);
    }
  });
  $("#vLot").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vQty").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vQty").keypress(function( event ) {
    if ( event.which == 13 ) {
      InsertInBound();
    }
  });

  $("#bcLocation").click(function( event ) {
      var user = $("#vEmp").val();
      if(user != ''){
        $('#vSapQr').jqxInput({disabled: true });
        $("#vSapQr").val('');
        $('#vLocation').jqxInput({disabled: false });
        $("#vLocation").val('');
        $("#vLocation").focus();
      }
      else{
        $("#vEmp").focus();
      }

  });

  //chkUserID();
  $('#vWIPStatus').jqxDropDownList({disabled: true });
  $("#vLocation").jqxInput({disabled: true });
  $("#vSapQr").jqxInput({disabled: true });
  $("#vQty").jqxInput({disabled: true });
  $("#vLot").jqxInput({disabled: true });
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
                   $("#vLocation").focus();
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
                  $('#vLocation').jqxInput({disabled: false });
                  $("#vLocation").val("");
                  $("#vLocation").focus();

                  $('#vStatus').html("X");
                  $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                }
                else{
                  $('#vWIPStatus').jqxDropDownList({disabled: false });
                  $("#vWIPStatus").focus();
                  $("#vWIPStatus").jqxDropDownList('open' ); 
                  //$('#vSapQr').jqxInput({disabled: false });
                  //$("#vSapQr").focus();

                  $('#vStatus').html(Location);
                  $('#tabletest tr').children('td, th').css('background-color','#0adeff');
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

function chkUserID() {
  if (typeof vUserID == 'undefined'){
    $("#vLocation").jqxInput({disabled: true });
    $("#vSapQr").jqxInput({disabled: true });
    $("#vQty").jqxInput({disabled: true });
  }
  else {
    $("#vLocation").jqxInput({disabled: false });
    //$("#vSapQr").jqxInput({disabled: false });
    //$("#vQty").jqxInput({disabled: false });
  }
};

var ReadTag = function(Q){

  var tagRead = Q;
  var tagReadArr = tagRead.split('-');
  var vTracking = tagReadArr[0];
  var vLotNo = tagReadArr[1];


  var vLocation = $("#vLocation").val();

  var vChkQR = tagReadArr.length;

  if(vChkQR == 2){
    $("#vSapQr").val(vTracking);
    $("#vLot").val(vLotNo);
    $("#vSapQr").jqxInput({disabled: true });
    //InsertInBound(vTracking,vLotNo,vQty,vLocation,vUserID);
    $("#vQty").jqxInput({disabled: false });
    $("#vQty").focus();
  }
  else{
    $("#vSapQr").jqxInput({disabled: false });
    $("#vSapQr").val("");
    $("#vSapQr").focus();

    $('#vStatus').html("QR Not Match!!!");
    $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
  }
};

var InsertInBound = function() {
  var vTracking = $("#vSapQr").val();
  var vLot = $("#vLot").val();
  var vQty = $("#vQty").val();
  var vLocation = $("#vLocation").val();
  var vWIPStatus = $("#vWIPStatus").val();
  var vEmp = $('#vEmp').val();
   var act = 'insertInBound';
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Tracking=" + vTracking
             + "&Lot=" + vLot
             + "&Qty=" + vQty
             + "&Location=" + vLocation
             + "&WIPStatus=" + vWIPStatus
             + "&Emp=" + vEmp,
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
                  $('#vQty').jqxInput({disabled: true });
                  $("#vSapQr").val("");
                  $("#vLot").val("");
                  $("#vQty").val("");
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
                  $("#vLot").val("");
                  $("#vQty").val("");
                  $('#vSapQr').jqxInput({disabled: false });
                  $('#vQty').jqxInput({disabled: true });
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
