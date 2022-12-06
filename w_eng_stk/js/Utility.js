$(document).ready(function () {
  var Section = "";
  var vEMP_Main = "";
    $('#Main').jqxTabs({ width: '99.90%', position: 'top', theme: 'energyblue'});

    $('#Main').on('selected', function (event)
      {
        var vUser = $("#pI_EMP").val();
          if(vUser == ''){
            $('#EngLogin').jqxWindow('open');
          }
      });
    //$('#sub_Tabs').jqxTabs({ width: '99.90%', position: 'top', theme: theme});
    var notificationWidth = 300;
    $("#successNoti").jqxNotification({ width: notificationWidth, position: "top-right", autoOpen: false, closeOnClick: true, autoClose: true, template: "success" });
    $("#failedNoti").jqxNotification({ width: notificationWidth, position: "top-right", autoOpen: false, closeOnClick: true, autoClose: true, template: "error" });

    $("#User").jqxPasswordInput({ height: 30, width: 250, minLength: 1});
    $("#User").keypress(function( event ) {
      if ( event.which == 13 ) {

        var BC = $("#User").val();
        vEMP_Main = $("#User").val();
        CheckUser(BC);
      }
    });
    /*---------Update Status POP UP------------*/
      $("#EngLogin").jqxWindow({
              width: 400,
              height: 120,
              resizable: false,
              isModal: false,
              autoOpen: false,
              showCollapseButton: true,
              //cancelButton: $("#CancelIT"),
              isModal: true,
              modalOpacity: 0.3
          });
      //$("#CancelIT").click(function () {
          //$('#EngLogin').jqxWindow('close');
        //});
    /*-------------------------------------------*/

     $("#EngLogin").jqxWindow('open');
     $('#User').focus();

});

function notificationAlert(pRSts, pResult) {
  if(pRSts == '1'){
    $("#vTXTsuccess").html(pResult);
    $("#successNoti").jqxNotification("open");

  }
  else{
    $("#vTXTFailed").html(pResult);
    $("#failedNoti").jqxNotification("open");

  }
}

var CheckUser = function(BC) {
   var act = 'ChkUser';
   var User = BC;
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&User=" + User,
             success: function(data) {
               if (data.response == 'success') {
                 var User = data.data[0];
                 MainUserChk = User.STAFF_NAME;
                 MainUserID = User.STAFF_CODE;
                 Section = User.I_Section;
                 $('#vSts').html(Section);
                 //MainShift = User.SHIFT_NAME;
                 //MainShiftID = User.SHIFT_ID;
                 $("#pI_EMP").val(MainUserChk);
                 $("#STK_In_Emp_CD").val(MainUserChk);
                 $("#STK_Out_Emp_CD").val(MainUserChk);

                 //$("#Shift").val(MainShift);
                 //$('#LotNo').focus();
                 gridMainStock(Section);
                 $("#EngLogin").jqxWindow('close');

               }else{

                 $('#User').val("");
                 $('#User').focus();
               }
             }
   });
}
