$(document).ready(function () {

  //inputText
var vItemNoCurr;
var vBatchCurr;
var vBatchRepl;


  $('#tabletest tr').children('td, th').css('background-color','#FFFFFF');
  $('#vStatus').html("Tag SAP");
  $('#vSapQrCurrent').focus();
  $("#vSapQrReplace").jqxInput({ height: 20, width: 100, minLength: 1});
  $('#vSapQrReplace').jqxInput({disabled: true });

  $("#vSapQrCurrent").jqxInput({ height: 20, width: 100, minLength: 1});

  $("#vSapQrCurrent").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vSapQrCurrent').jqxInput({disabled: true });

      var Q = $("#vSapQrCurrent").val();
      var vItemCurrent = ReadTag(Q);
      vBatchCurr = ReadTagB(Q);
	//alert(vItemCurrent );
      vItemNoCurr = vItemCurrent;
      //$("#vItemNoCurrent").html(vItemCurrent);
      $("#vStatus").html(vItemCurrent);
      $('#tabletest tr').children('td, th').css('background-color','#0adeff');
      $('#vSapQrReplace').jqxInput({disabled: false });
      $('#vSapQrReplace').focus();
    }
  });

  $("#vSapQrReplace").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vSapQrReplace').jqxInput({disabled: true });
      var Q = $("#vSapQrReplace").val();

      var vItemNoReplace = ReadTag(Q);
      vBatchRepl = ReadTagB(Q);
      //$("#vItemNoReplace").html(vItemNoReplace);
      $("#vStatus").html(vItemNoReplace);

      var vItemCrr = vItemNoCurr
      if (vItemCrr == vItemNoReplace && vBatchRepl != vBatchCurr)
      {
        $('#tabletest tr').children('td, th').css('background-color','#08ca0e');
      }
      else
      {
        $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
        $("#vStatus").html("X");
      }

      $('#vSapQrCurrent').val("");
      $('#vSapQrCurrent').jqxInput({disabled: false });
      $('#vSapQrCurrent').focus();

      $('#vSapQrReplace').val("");
      $('#vSapQrReplace').jqxInput({disabled: true });
      $('#vSapQrReplace').focus();

    }
  });

  $("#footer").css({
    fontSize: 10
  });
});

function materialData(Bc,Q) {
            var act = 'getMakerLot';
            var url = "main.class.php";
            $.ajax({
                      type: "GET",
                      url: url,
                      dataType: "json",
                      data: "action=" + act
                      + "&Barcode=" + Bc,
                      success: function(data) {
                        if (data.response == 'success') {
                          var Result = data.data[0];
                          var ITEMDESC = Result.ITEMDESC;
                          var MAKERLOT = Result.MAKERLOT;
                          var STS = Result.STS;

                          if (STS == '1')
                          {
                            var QR = Q.substring(0, Q.length -1);
                            $('#tabletest tr').children('td, th').css('background-color','#08ca0e');
                            $("#imgQR").show();
                            $("#imgQR").attr("src",'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=' + QR + ITEMDESC + '(R)@' + MAKERLOT + '@@');
                            console.log(QR);
                          }else {
                            $("#imgQR").show();
                            $("#imgQR").attr("src",'img/xx.png');
                            $("#vItemNo").html('No Data');
                            $("#vBatchNo").html('No Data');
                            $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
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

    return vItemNo;
  }

  function ReadTagB(Q){
    //console.log(Q);
    var tagRead = Q;
    var tagReadArr = tagRead.split('@');
    var vBatchNo = tagReadArr[2];
    var vItemNo = tagReadArr[3];

    return vBatchNo;
  }
