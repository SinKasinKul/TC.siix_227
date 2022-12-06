$(document).ready(function () {

  var vUserID;
  var vLocation;

  $('#tabletest tr').children('td, th').css('background-color','#FFFFFF');
  $('#vStatus').html("-");

  $("#vSapQr").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vSapQr").focus();
  $("#vSapQr").keypress(function( event ) {
    if ( event.which == 13 ) {
      //$('#vSapQr').jqxInput({disabled: true });
      var Q = $("#vSapQr").val();
      ReadTag(Q);
    }
  });
});

var ReadTag = function(Q){

  var tagRead = Q;
  var tagReadArr = tagRead.split('@');
  var vItemNo = tagReadArr[3];

  var vChkQR = tagReadArr.length;

  if(vChkQR == 7){
    $("#vSapQr").val(vItemNo);
    $("#vItemShow").html(vItemNo);
    InquirySTK(vItemNo);
  }
  else{
     vItemNo = $("#vSapQr").val();
     $("#vSapQr").val(vItemNo);
     $("#vItemShow").html(vItemNo);
     InquirySTK(vItemNo);
  }
};

var InquirySTK = function(ItemCd) {
   var act = 'InquirySTK';
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&ItemCD=" + ItemCd,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];
                 var location = Data.LOCATION;
                 var STS = Data.RSts;

                  $('#vSapQr').jqxInput({disabled: false });
                  $("#vSapQr").val("");
                  $("#vSapQr").focus();

                  if(STS == '1'){
                    $('#vStatus').html(location);
                    $('#tabletest tr').children('td, th').css('background-color','#08ca0e');
                  }
                  else{
                    $('#vStatus').html(location);
                    $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
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
