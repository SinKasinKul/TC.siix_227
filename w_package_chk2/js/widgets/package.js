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

  $("#vPIC").jqxInput({ height: 20, width: 150, minLength: 1});
  $("#vPIC").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vPIC').jqxInput({disabled: true });
      var EmpID = $("#vPIC").val();
      CheckUser(EmpID);
    }
  });

  $('#vPIC').focus();

  $("#vTagID").jqxInput({ height: 20, width: 150, minLength: 1});
  $("#vTagID").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vTagID').jqxInput({disabled: true });
      var Q = $("#vTagID").val();
      ReadTag(Q);
      $('#tabletest tr').children('td, th').css('background-color','#0adeff');
      $('#vStatus').html("Shipment Tag");
      $('#vShipmentTag').jqxInput({disabled: false });
      $('#vShipmentTag').focus();
    }
  });
  $("#vShipmentTag").jqxInput({ height: 20, width: 150, minLength: 1});
  $("#vShipmentTag").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vShipmentTag').jqxInput({disabled: true });
      var Q = $("#vShipmentTag").val();
      //ReadTag(Q);
      var vModel = $("#vShipmentTag").html();
      $("#vShipmentTag").html(vModel + "," + Q);
      $('#tabletest tr').children('td, th').css('background-color','#0adeff');
      $('#vStatus').html("S/N");
      $('#vBarcode').jqxInput({disabled: false });
      $('#vBarcode').focus();
    }
  });
  $("#vBarcode").jqxInput({ height: 20, width: 150, minLength: 1});
  $("#vBarcode").keypress(function( event ) {
    if ( event.which == 13 ) {
      var Q = $("#vBarcode").val();
      var ModelTag = $("#vTagID").val();
      var ModelShipmentTag = $("#vShipmentTag").val();
      var Box = $("#vCaton").html();
      chkModel(Q, ModelTag, ModelShipmentTag, Box);
      $('#vBarcode').jqxInput({disabled: true });
    }
  });

  $('#BarcodeScan').focus(function() {
      var vUser = $("#UserChk").val();
      if(vUser == ''){
        enterProgram();
      }
  });

  $('#vTagID').jqxInput({disabled: true });
  $('#vShipmentTag').jqxInput({disabled: true });
  $('#vBarcode').jqxInput({disabled: true });
});

function chkModel(Bc,Model,ShipModel,Box) {
            var act = 'ChkModel';
            var url = "main.class.php";
            var vEmp = $('#vPIC').val();
            $.ajax({
                      type: "GET",
                      url: url,
                      dataType: "json",
                      data: "action=" + act
                      + "&Barcode=" + Bc
                      + "&Model=" + Model
                      + "&ShipModel=" + ShipModel
                      + "&Box=" + Box,
                      success: function(data) {
                        if (data.response == 'success') {
                          var Result = data.data[0];
                          var Results = Result.Result;
                          var Status = Result.Status;

                          $('#vStatus').html(Results);

                          if (Status == '1')
                          {
                            STBL_INS_PACKING_CHK(vEmp,Model,Box,ShipModel,Bc,'1');
                            $('#tabletest tr').children('td, th').css('background-color','#08ca0e');
                            $('#vTagID').jqxInput({disabled: false });
                            $('#vTagID').focus();
                            $('#vTagID').val("");
                            $('#vShipmentTag').val("");
                            $('#vShipmentTag').jqxInput({disabled: true });
                            $('#vBarcode').val("");
                            $('#vBarcode').jqxInput({disabled: true });
                            $('#vCaton').html("");
                          }else
                          {
                            STBL_INS_PACKING_CHK(vEmp,Model,Box,ShipModel,Bc,'0');
                            $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                            $('#vTagID').jqxInput({disabled: false });
                            $('#vTagID').focus();
                            $('#vTagID').val("");
                            $('#vShipmentTag').val("");
                            $('#vShipmentTag').jqxInput({disabled: true });
                            $('#vBarcode').val("");
                            $('#vBarcode').jqxInput({disabled: true });
                            $('#vCaton').html("");
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
    //$("#vModel").html(vModel);
    $("#vCaton").html(vCaton);
    $("#vTagID").val(vModel);
  }

  var CheckUser = function(vUser) {
    var act = 'ChkUser';
    var User = vUser;
    $.ajax({
              type: "GET",
              url: "main.class.php",
              dataType: "json",
              data: "action=" + act
              + "&User=" + User,
              success: function(data) {
                if (data.response == 'success') {
                  if(data.data.length > 0){
                    var User = data.data[0];
                    MainUserChk = User.STAFF_NAME;
                    MainUserID = User.STAFF_CODE;

                    $("#vPIC").val(MainUserChk);
                    $('#vTagID').jqxInput({disabled: false });
                    $('#vTagID').focus();
                    $('#tabletest tr').children('td, th').css('background-color','#0adeff');
                    $('#vStatus').html(MainUserChk);
                  }else{
                    $('#vPIC').val("");
                    $('#vPIC').focus();
                    $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                    $('#vStatus').html("Please login.");
                    $('#vPIC').jqxInput({disabled: false });
                  }
                  
                }else{
                  $('#vPIC').jqxInput({disabled: false });
                  $('#vPIC').val("");
                  $('#vPIC').focus();
                  $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                  $('#vStatus').html("X");
                }
              }
    });
  }

  function STBL_INS_PACKING_CHK(vEmpName,vCatonModel,vCatonNo,vShipmentModel,vSerialCheck,vStatus) {
    var act = 'STBL_INS_PACKING_CHK';
    var url = "main.class.php?action=" + act;
    var pData = {
      EmpName : vEmpName
     ,CatonModel : vCatonModel
     ,CatonNo : vCatonNo
     ,ShipmentModel : vShipmentModel
     ,SerialCheck : vSerialCheck
     ,Status : vStatus
    };
    $.ajax({
              type: "POST",
              url: url,
              dataType: "json",
              data: pData,
              success: function(data) {
                if (data.response == 'success') {
                  var Result = data.data[0];
                  var Results = Result.Result;
                  var Status = Result.Status;

                  $('#vStatus').html(Results);

                  if (Status == '1')
                  {
                    $('#tabletest tr').children('td, th').css('background-color','#08ca0e');
                    $('#vStatus').html("save success");
                  }else
                  {
                    $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                    $('#vStatus').html('Failed!!!');
                  }
                }
              }
    });
}