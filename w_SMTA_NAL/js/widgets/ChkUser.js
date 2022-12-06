$(document).ready(function () {

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
  } else if (today >= 00 && today <= 7) {
    MainShift = "c";
    MainShiftID = "3";
  }

  /*---------Update Status POP UP------------*/
    $("#passwordIT").jqxWindow({
            width: 350,
            height: 170,
            resizable: false,
            isModal: false,
            autoOpen: false,
            showCollapseButton: true,
            cancelButton: $("#CancelIT"),
            modalOpacity: 0.01
        });
    $("#CancelIT").click(function () {
          $('#passwordIT').jqxWindow('close');
      });
  /*-------------------------------------------*/

   $("#passwordIT").jqxWindow('open');
   $('#User').focus();

   $("#SMTALogin").click(function() {
        CheckUser();
   });

});

var enterProgram = function(){
  var U = $( "#User" ).val();
	if(U != ''){
		$("#passwordIT").jqxWindow('close');
	}else{
		$("#passwordIT").jqxWindow('open');
    $( "#User" ).focus();
	}
}

 var ReadQrcode = function(Q){
   var res = [];
   res[0] = Q.substring(0, 37);
   res[1] = Q.substring(38, 60);
   res[2] = Q.substring(61, 76);
   res[3] = Q.substring(76, 100);
   res[4] = Q.substring(101, 125);
   res[5] = Q.substring(126, 130);
   res[6] = Q.substring(130, 141);
   res[7] = Q.substring(142, 166);
   res[8] = Q.substring(167, 190);
   res[9] = Q.substring(191, 205);

   var i;

   MainModelItem = res[4];
   MainSeiban = res[1];

   var act = 'ChkModel';
   $.ajax({
             type: "GET",
             url: "ICT.class.php",
             dataType: "json",
             data: "action=" + act
             + "&ItemCode=" + MainModelItem
             + "&Seiban=" + MainSeiban,
             success: function(data) {
               if (data.response == 'success') {
                 var Model = data.data[0];
                 MainModel = Model.ITEMDESC;
                 $('#Model').html(MainModel);
                 $('#Seiban').html(MainSeiban);
                 $('#ScanQty').focus();
               }
             }
   });
 }

 var GetComputerName = function() {
    try {
        var network = new ActiveXObject('WScript.Network');
        // Show a pop up if it works
        console.log(network.computerName);
    }
    catch (e) { }
}

 var CheckUser = function() {
    var act = 'ChkUser';
    var User = $('#User').val();
    $.ajax({
              type: "GET",
              url: "smta.class.php",
              dataType: "json",
              data: "action=" + act
              + "&User=" + User,
              success: function(data) {
                if (data.response == 'success') {
                  var User = data.data[0];
                  MainUserChk = User.STAFF_NAME;
                  MainUserID = User.STAFF_CODE;
                  //MainShift = User.SHIFT_NAME;
                  //MainShiftID = User.SHIFT_ID;
                  $("#UserChk").val(MainUserChk);
                  $("#Shift").val(MainShift);
                  $('#LotNo').focus();
                  $("#passwordIT").jqxWindow('close');
                }else{
                  $('#User').val("");
                  $('#User').focus();
                }
              }

    });

  }
