$(document).ready(function () {

  var MainStepControl;
  var MainModel;
  var MainModelItem;
  var MainSeiban;
  var MainUserChk;
  var MainUserID;
  var MainSeniorChk;
  var MainSeniorID;
  var MainShift;
  var MainShiftID;
  var MainTotalQty = 0;
  //MainStepControl = 'SMTA';

  var today = new Date().getHours();
  if (today >= 7 && today <= 15) {
     MainShift = "A";
     MainShiftID = "1";
  } else if (today >= 15 && today <= 23) {
    MainShift = "B";
    MainShiftID = "2";
  } else if (today = 23) {
    MainShift = "c";
    MainShiftID = "3";
  } else if (today >= 23 && today <= 7) {
    MainShift = "c";
    MainShiftID = "3";
  }

  //inputText
  $('#tabletest tr').children('td, th').css('background-color','#FFFFFF');
  $('#vStatus').html("Tag");

  $('#vTagID').focus();

  $("#vTagID").jqxInput({ height: 20, width: 150, minLength: 1});
  $("#vTagID").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vTagID').jqxInput({disabled: true });
      var Q = $("#vTagID").val();
      ReadTag(Q);
      $('#tabletest tr').children('td, th').css('background-color','#0adeff');
      $('#vStatus').html("S/N");
      $('#vBarcode').focus();
    }
  });
  $("#vBarcode").jqxInput({ height: 20, width: 150, minLength: 1});
  $("#vBarcode").keypress(function( event ) {
    if ( event.which == 13 ) {
      var Q = $("#vBarcode").val();
      var Model = $("#vModel").html();
      var Box = $("#vCaton").html();
      chkModel(Q,Model,Box);
      $('#vBarcode').jqxInput({disabled: true });
    }
  });

  $('#BarcodeScan').focus(function() {
      var vUser = $("#UserChk").val();
      if(vUser == ''){
        enterProgram();
      }
  });
});

function chkModel(Bc,Model,Box) {
            var act = 'ChkModel';
            var url = "main.class.php";
            $.ajax({
                      type: "GET",
                      url: url,
                      dataType: "json",
                      data: "action=" + act
                      + "&Barcode=" + Bc
                      + "&Model=" + Model
                      + "&Box=" + Box,
                      success: function(data) {
                        if (data.response == 'success') {
                          var Result = data.data[0];
                          var Results = Result.Result;
                          var Status = Result.Status;

                          $('#vStatus').html(Results);

                          if (Status == '1')
                          {
                            $('#tabletest tr').children('td, th').css('background-color','#08ca0e');
                            $('#vTagID').jqxInput({disabled: false });
                            $('#vTagID').focus();
                            $('#vBarcode').val("");
                            $('#vBarcode').jqxInput({disabled: true });
                          }else {
                            $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                            $('#vTagID').jqxInput({disabled: false });
                            $('#vTagID').focus();
                            $('#vBarcode').val("");
                            $('#vBarcode').jqxInput({disabled: true });
                          }
                        }
                      }
            });
  }

  var ReadTag = function(Q){

    var tagRead = Q;

    var tagReadArr = tagRead.split(',');
    var vModel = tagReadArr[1];
    var vCaton = tagReadArr[5];
    $("#vModel").html(vModel);
    $("#vCaton").html(vCaton);
    $("#vTagID").val("");
    $('#vBarcode').jqxInput({disabled: false });
    $('#vBarcode').focus();
  }
