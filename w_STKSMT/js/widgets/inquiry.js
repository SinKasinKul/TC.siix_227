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
  //var vItemNo = tagReadArr[3];
  //var vChkQR = tagReadArr.length;

  var parsedData = {};
  parsedData = GetDetailQRcode(Q);
  //console.log(parsedData);
  var vItemNo = parsedData["Itemcode"];
  //var vBatchNo = parsedData["PackageID"];
  //ar vQty = parsedData["Qty"];

  if(tagReadArr[1] == "SIIX20" || tagReadArr[1] == "06")
  {
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

function GetDetailQRcode(Q){
  var tagReadArr = Q.split('@');
  var parsedData = {};
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
  }else if(tagReadArr[1] == "SIIX20"){
    parsedData["Itemcode"] = (tagReadArr[3].length == 18) ? tagReadArr[3].substring(8) : tagReadArr[3];
    parsedData["PackageID"] = tagReadArr[2];
    parsedData["Qty"] = tagReadArr[4];
  }
  return parsedData;
}


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
