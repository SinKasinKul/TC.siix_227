$(document).ready(function () {
  //inputText
  $('#tabletest tr').children('td, th').css('background-color','#FFFFFF');

  $('#vBarcode').focus();

  $("#vBarcode").jqxInput({ height: 20, width: 150, minLength: 1});
  $("#vBarcode").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vBarcode').jqxInput({disabled: true });
      var Q = $("#vBarcode").val();
      $("#imgQR").attr("src",'');
      ReadTag(Q);
      $('#tabletest tr').children('td, th').css('background-color','#0adeff');
    }
  });
  $("#imgQR").hide();
  $('#imgQR').width(150); // Units are assumed to be pixels
  $('#imgQR').height(150);

  $("#footer").css({
    fontSize: 10
  });
});

function makerLotData(Item,Bc,Q) {
            var act = 'getMakerLot';
            var url = "main.class.php";
            var QR = Q.substring(0, Q.length -1);
            //console.log(QR);
            $.ajax({
                      type: "GET",
                      url: url,
                      dataType: "json",
                      data: "action=" + act
                      + "&Batch=" + Bc
                      + "&Item=" + Item,
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
                            $("#imgQR").attr("src",'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=' + QR + ITEMDESC + '@' + MAKERLOT + '@@');
                            console.log(QR + ITEMDESC + '@' + MAKERLOT + '@@');
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

  var ReadTag = function(Q){

    var tagRead = Q;
    var tagReadArr = tagRead.split('@');
    var vBatchNo = tagReadArr[2];
    var vItemNo = tagReadArr[3];

    makerLotData(vItemNo,vBatchNo,Q);

    $("#vItemNo").html(vItemNo);
    $("#vBatchNo").html(vBatchNo);
    $("#vBarcode").val("");
    $('#vBarcode').jqxInput({disabled: false });
    $('#vBarcode').focus();
  }
