$(document).ready(function () {

  //inputText
var vItemNoCurr;
var vBatchCurr;
var vBatchRepl;


  $('#tabletest tr').children('td, th').css('background-color','#FFFFFF');
  $('#vStatus').html("Tag SAP");
  $('#vSapQr').focus();

  $("#vSapQr").jqxInput({ height: 20, width: 100, minLength: 1});

  $("#vSapQr").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vSapQr').jqxInput({disabled: true });

      var Q = $("#vSapQr").val();
      ReadTag(Q);
    }
  });

  $("#footer").css({
    fontSize: 10
  });
});

function materialData(Batch) {
            var act = 'getBatch';
            var url = "main.class.php";
            $.ajax({
                      type: "GET",
                      url: url,
                      dataType: "json",
                      data: "action=" + act
                      + "&Batch=" + Batch,
                      success: function(data) {
                        if (data.response == 'success') {
                          var Result = data.data[0];
                          var Batch = Result.BATCH;
                          var Result = Result.Result;

                          if (Result == 'NG')
                          {
                            $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                            $('#vStatus').html(Batch);
                            $('#vSapQr').jqxInput({disabled: false });
                            $('#vSapQr').val('')
                            $('#vSapQr').focus();
                          }else {

                            $('#vStatus').html(Batch);
                            $('#tabletest tr').children('td, th').css('background-color','#08ca0e');
                            $('#vSapQr').jqxInput({disabled: false });
                            $('#vSapQr').val('')
                            $('#vSapQr').focus();
                          }
                        }
                      }
            });
  }

  function ReadTag(Q){
    //console.log(Q);
    var tagRead = Q;
    var tagReadArr = tagRead.split('@');
    var vBatchNo = tagReadArr[2];
    var vItemNo = tagReadArr[3];

    var vChkQR = tagReadArr.length;

    if(vChkQR == 7){
      $("#vStatus").html(vBatchNo);
      $('#tabletest tr').children('td, th').css('background-color','#0adeff');
      materialData(vBatchNo);
    }
    else{
      $("#vSapQr").jqxInput({disabled: false });
      $("#vSapQr").val("");
      $("#vSapQr").focus();

      $('#vStatus').html("QR Not Match!!!");
      $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
    }

  }

  function GetDetailQRcode(Q){
    var tagReadArr = Q.split('@');
    //console.log(tagReadArr);
    var parsedData = {};

    if(tagReadArr[1] == "06"){
      for(var i = 0;i < tagReadArr.length; i++){
        var element = tagReadArr[i];
        if (element.startsWith("V")) {
          parsedData["Vender"] = element.substring(1);
        }else if (element.startsWith("P")) {
          parsedData["Itemcode"] = element.substring(1);
        }else if (element.startsWith("Q")) {
          parsedData["Qty"] = element.substring(1);
        }else if (element.startsWith("S")) {
          parsedData["PackageID"] = element.substring(1);
        }else if (element.startsWith("1T")) {
          parsedData["MakerLot"] = element.substring(2);
        }else if (element.startsWith("1P")) {
          parsedData["ItemDESC"] = element.substring(2);
        }
      }
    }else if(tagReadArr[1] == "SIIX20"){
      parsedData["Itemcode"] = tagReadArr[3];
      parsedData["PackageID"] = tagReadArr[2];
      parsedData["Qty"] = tagReadArr[4];
    }
    
    return parsedData;
  }
