$(document).ready(function () {
  //inputText
  $('#tabvarest tr').children('td, th').css('background-color','#FFFFFF');

  $('#vBarcode').focus();

  $("#vBarcode").jqxInput({ height: 20, width: 150, minLength: 1});
  $("#vBarcode").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vBarcode').jqxInput({disabled: true });
      var Q = $("#vBarcode").val();
      $("#imgQR").attr("src",'');
      ReadTag(Q);
      $('#tabvarest tr').children('td, th').css('background-color','#0adeff');
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
                            $('#tabvarest tr').children('td, th').css('background-color','#08ca0e');
                            $("#imgQR").show();
                            $("#imgQR").attr("src",'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=' + QR + ITEMDESC + '@' + MAKERLOT + '@@');
                            console.log(QR + ITEMDESC + '@' + MAKERLOT + '@@');
                          }else {
                            $("#imgQR").show();
                            $("#imgQR").attr("src",'img/xx.png');
                            $("#vItemNo").html('No Data');
                            $("#vBatchNo").html('No Data');
                            $('#tabvarest tr').children('td, th').css('background-color','#ff0a0a');
                          }
                        }
                      }
            });
  }

  var ReadTag = function(Q){

    var tagRead = Q;
    var tagReadArr = tagRead.split('@');
//console.log(tagReadArr[1]);
    var vBatchNo = "";
    var vItemNo = "";

    if(tagReadArr[1] == "SIIX20"){
      vBatchNo = tagReadArr[2];
      vItemNo = tagReadArr[3];
    }else if(tagReadArr[1] == "06"){
      vBatchNo = tagReadArr[5].substring(1,tagReadArr[5].length);
      vItemNo = tagReadArr[3].substring(1,tagReadArr[3].length);

      console.log(vBatchNo);
      console.log(vItemNo);
    }

    makerLotData(vItemNo,vBatchNo,Q);

    $("#vItemNo").html(vItemNo);
    $("#vBatchNo").html(vBatchNo);
    $("#vBarcode").val("");
    $('#vBarcode').jqxInput({disabled: false });
    $('#vBarcode').focus();
  }
