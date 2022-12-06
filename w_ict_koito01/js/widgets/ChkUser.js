$(document).ready(function () {

  var MainModel;
  var MainModelItem;
  var MainSeiban;
  var MainUserChk;
  var MainShift;

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

   /*$("#User").blur(function() {
      CheckUser();
   });*/


   $( "#StartScan" ).focus(function() {
        var QRC = $("#QRcode").val();
        ReadQrcode(QRC);
        $("#passwordIT").jqxWindow('close');
    });

});

var U = $( "#User" ).val();
var enterTap = function(){
	console.log(adpw);
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
   CheckUser();
 }

 var CheckUser = function() {
    var act = 'ChkUser';
    var User = $('#User').val();
    $.ajax({
              type: "GET",
              url: "ICT.class.php",
              dataType: "json",
              data: "action=" + act
              + "&User=" + User,
              success: function(data) {
                if (data.response == 'success') {
                  var User = data.data[0];
                  MainUserChk = User.STAFF_NAME;
                  MainShift = User.SHIFT_NAME;
                  $("#UserChk").html(MainUserChk);
                  $("#Shift").html(MainShift);
                  $('#QRcode').focus();
                  //console.log(data.response);
                  //console.log(User.STAFF_NAME);
                }else{
                  $('#User').val("");
                  $('#User').focus();
                }
              }

    });

  }
