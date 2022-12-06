$(document).ready(function () {

    $('#Main').jqxTabs({ width: '99.90%', position: 'top', theme: 'energyblue'});

    var notificationWidth = 300;
    $("#successNoti").jqxNotification({ width: notificationWidth, position: "top-right", autoOpen: false, closeOnClick: true, autoClose: true, template: "success" });
    $("#failedNoti").jqxNotification({ width: notificationWidth, position: "top-right", autoOpen: false, closeOnClick: true, autoClose: true, template: "error" });

    $("#User").jqxPasswordInput({ height: 30, width: 250, minLength: 1});
    $("#User").keypress(function( event ) {
      if ( event.which == 13 ) {

        var BC = $("#User").val();
        CheckUser(BC);
        console.log(BC);
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

     $("#Location").jqxDropDownList({ selectedIndex: 2/*, source: dataAdapter*/, displayMember: "ContactName", valueMember: "CompanyName", width: 200, height: 30, });
     $("#DefectPoint").jqxDropDownList({ selectedIndex: 2/*, source: dataAdapter*/, displayMember: "ContactName", valueMember: "CompanyName", width: 200, height: 30, });
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
                 var MainUserChk = User.STAFF_NAME;
                 var MainUserID = User.STAFF_CODE;

                 alert(User.STAFF_NAME);

                 $("#EngLogin").jqxWindow('close');

               }else{

                 $('#User').val("");
                 $('#User').focus();
               }
             }
   });
}
