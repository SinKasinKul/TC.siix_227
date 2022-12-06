$(document).ready(function () {
  $('#vEmp').focus();
  $("#vEmp").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vEmp").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vEmp').jqxInput({disabled: true });

      var user = $("#vEmp").val();
      CheckUser(user);
    }
  });
  $("#vItem").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vItem").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vItem').jqxInput({disabled: true });

      var pItem = $("#vItem").val();
      STBL_STK_OUT(pItem);
    }
  });
  //$("#vQty").jqxInput({ height: 25, width: 100, minLength: 1});

  $("#vConfirm").click(function() { STBL_STK_OUT(vSEC); });
  $("#vCancel").click(function() {  location.reload();  });
});

var CheckUser = function(user) {
   var act = 'ChkUser';
   var User = user;
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&User=" + User,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];

                 if(!Data){
                   $('#vEmp').val("");
                   $('#vEmp').focus();
                   $('#vEmp').jqxInput({disabled: false });
                 }
                 else{
                   MainUserChk = Data.STAFF_NAME;
                   MainUserID = Data.STAFF_CODE;
                   //MainShift = User.SHIFT_NAME;
                   //MainShiftID = User.SHIFT_ID;
                   $("#vEmp").val(MainUserChk);
                   vUserID = MainUserID;

                   $('#vItem').jqxInput({disabled: false });
                   $('#vItem').focus();
                 }

               }else{
                 $('#vEmp').val("");
                 $('#vEmp').focus();
                 $('#vEmp').jqxInput({disabled: false });
               }
             },
             error: function functionName() {
               $('#vEmp').val("");
               $('#vEmp').focus();
               $('#vEmp').jqxInput({disabled: false });
             }

   });
}

var STBL_STK_OUT = function(pItemCD){

    var act = 'STBL_STK_OUT';
    var pSTK_Out_Item_CD = pItemCD;
    var pSTK_Out_Qty = "1";
    var pSTK_Out_Emp_CD = $('#vEmp').val();
    var pSTK_Out_Ref_Req = "";

    var pData = {
      I_ITEM_CD : pSTK_Out_Item_CD
     ,I_QTY : pSTK_Out_Qty
     ,I_EMP : pSTK_Out_Emp_CD
     ,I_REF_REQ : pSTK_Out_Ref_Req
    };

        $.ajax({
                type: "POST",
                url: "main.class.php?action="+ act,
                dataType: "json",
                data: pData,
                success: function(data) {
                  if(data.data[0]){
                      var vdata = data.data[0];
                      var vRSts = vdata.RSts;
                      var vResult = vdata.Result;

                      $('#vStatus').html(vResult);
                      $('#vItem').val("");
                      $('#vItem').jqxInput({disabled: false });
                      $('#vItem').focus();
                    }
                    else{
                      $('#vStatus').html(vResult);
                      $('#vItem').val("");
                      $('#vItem').jqxInput({disabled: false });
                      $('#vItem').focus();
                    }
                },
                error : function (data) {
                    alert( "Posting failed." );
                    $('#vItem').val("");
                    $('#vItem').jqxInput({disabled: false });
                    $('#vItem').focus();
                }
              });
}
