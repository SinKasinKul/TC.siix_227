$(document).ready(function () {
  //inputText
  $('#tabletest tr').children('td, th').css('background-color','#FFFFFF');

  $('#vSiixTag').focus();

  $("#vSiixTag").jqxInput({ height: 20, width: 150, minLength: 1});
  $("#vSiixTag").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vSiixTag').jqxInput({disabled: true });
      var Q = $("#vSiixTag").val();
      $("#imgQR").attr("src",'');
      ReadTagSIIX(Q);
      $('#tabletest tr').children('td, th').css('background-color','#0adeff');
    }
  });
  $("#vKoitTag").jqxInput({ height: 20, width: 150, minLength: 1});
  $("#vKoitTag").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vKoitTag').jqxInput({disabled: true });
      var Q = $("#vKoitTag").val();
      $("#imgQR").attr("src",'');
      ReadTagKOIT(Q);
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
                            $("#vModel").html('No Data');
                            $("#vKanban").html('No Data');
                            $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                          }
                        }
                      }
            });
  }

  var ReadTagSIIX = function(Q){

    var tagRead = Q;
    var tagReadArr = tagRead.split(',');
    var vKanban = tagReadArr[0];
    var vModel = tagReadArr[1];

    //makerLotData(vModel,vKanban,Q);

    //$("#vModel").html(vModel);
    if(tagReadArr.length == 2){
      //$("#imgQR").show();
      //$("#imgQR").attr("src",'img/check.jpg');
      $("#vKanbanSIIX").html(vKanban);
      $("#vSiixTag").val("");
      $('#vSiixTag').jqxInput({disabled: true });
      $('#vKoitTag').jqxInput({disabled: false });
      $('#vKoitTag').focus();
    }
    else {
      $("#imgQR").show();
      $("#imgQR").attr("src",'img/xx.png');
      $("#vKanbanSIIX").html('No Data');
      $('#tabletest tr').children('td, th').css('background-color','#ff0000');
      $("#vSiixTag").val("");
      $('#vKoitTag').jqxInput({disabled: true });
      $('#vSiixTag').jqxInput({disabled: false });
      $('#vSiixTag').focus();
    }

  }

  var ReadTagKOIT = function(Q){

    var tagRead = Q;
    var tagReadArr = tagRead.split('|');
    var vKanban = tagReadArr[0];
    var vModel = tagReadArr[4];

    //makerLotData(vModel,vKanban,Q);

    //$("#vModel").html(vModel);
    if(tagReadArr.length == 12){
      $("#vKanbanKOIT").html(vKanban);
      $("#vKoitTag").val("");
      $('#vKoitTag').jqxInput({disabled: true });
      $('#vSiixTag').jqxInput({disabled: false });

        var vKBKOIT = vKanban;
        var vKBSIIX = $("#vKanbanSIIX").html();
        if(vKBKOIT == vKBSIIX){
          $("#imgQR").show();
          $("#imgQR").attr("src",'img/check.jpg');
        }
        else{
          $("#imgQR").show();
          $("#imgQR").attr("src",'img/xx.png');
        }
      $('#vSiixTag').focus();
    }
    else {
      $('#tabletest tr').children('td, th').css('background-color','#ff0000');
      $("#imgQR").show();
      $("#imgQR").attr("src",'img/xx.png');
      $("#vSiixTag").val("");
      $("#vKanbanKOIT").html('No Data');
      $("#vKoitTag").val("");
      $('#vKoitTag').jqxInput({disabled: true });
      $('#vSiixTag').jqxInput({disabled: false });
      $('#vSiixTag').focus();
    }
  }
