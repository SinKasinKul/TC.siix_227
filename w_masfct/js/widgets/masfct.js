$(document).ready(function () {

  var vUserID;
  var vLocation;

  $('#tabletest tr').children('td, th').css('background-color','#FFFFFF');
  $('#vStatus').html("-");
  $('#vMasterSerial').focus();

  $("#vMasterSerial").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vMasterSerial").keypress(function( event ) {
    if ( event.which == 13 ) {
      //$('#vSapQr').jqxInput({disabled: true });
      var MS = $("#vMasterSerial").val();
      STBL_INS_MASTER_SERIAL(MS);
    }
  });

});

var STBL_INS_MASTER_SERIAL = function(vMasterSerial) {
   var act = 'STBL_INS_MASTER_SERIAL';
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Serial=" + vMasterSerial,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];
                 var Result = Data.Result;
                 var RSts = Data.RSts;

                if(RSts == '0'){

                  $("#vMasterSerial").val("");
                  $("#vMasterSerial").focus();

                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                }
                else{
                  $('#vStatus').html(Result);
                  $('#tabletest tr').children('td, th').css('background-color','#08ca0e');


                  $("#vMasterSerial").val("");
                  $("#vMasterSerial").focus();
                }
              }
             },
             error: function functionName() {
               $("#vMasterSerial").val("");
               $("#vMasterSerial").focus();
             }

   });
}
