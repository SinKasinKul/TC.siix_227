$(document).ready(function () {

  var vUserID;
  var vLocation;

  $('#tabletest tr').children('td, th').css('background-color','#FFFFFF');
  $('#vStatus').html("-");

  $("#vTracking").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vTracking").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vTracking').jqxInput({disabled: true });
      var vTracking = $("#vTracking").val();
      Chk_Model_Seiban(vTracking);
    }
  });
  $('#vTracking').val("");
  $('#vTracking').focus();
  $("#vModel").jqxInput({ height: 25, width: 100, minLength: 1});
  $('#vModel').jqxInput({disabled: true });
  $("#vTagBosch").jqxInput({ height: 25, width: 100, minLength: 1});
  $("#vTagBosch").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vTagBosch').jqxInput({disabled: true });
      var vTagBosch = $("#vTagBosch").val();
      ReadTagBosch(vTagBosch);
    }
  });
});


var Chk_Model_Seiban = function(Tracking) {
   var act = 'Chk_Model_Seiban';
   var vTracking = Tracking.substring(0,10);
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Tracking=" + vTracking,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];
                 if(!Data){
                   $('#vTracking').val("");
                   $('#vTracking').focus();
                   $('#vTracking').jqxInput({disabled: false });

                   $('#vStatus').html("X");
                   $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                 }
                 else{
                   var Model = Data.ITEMDESC;
                   //MainShift = User.SHIFT_NAME;
                   //MainShiftID = User.SHIFT_ID;
                   if(Model == 'Not Found')
                   {
                     $('#vTracking').val("");
                     $('#vTracking').focus();
                     $('#vTracking').jqxInput({disabled: false });

                     $('#vStatus').html("X");
                     $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
                   }
                   else{
                     $("#vTracking").val(vTracking);
                     $("#vModel").val(Model);
                     $("#vTagBosch").focus();

                     $('#vStatus').html(Model);
                     $('#tabletest tr').children('td, th').css('background-color','#0adeff');
                   }
                 }
               }else{
                 $('#vTracking').val("");
                 $('#vTracking').focus();
                 $('#vTracking').jqxInput({disabled: false });

                 $('#vStatus').html("X");
                 $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
               }
             },
             error: function functionName() {
               $('#vTracking').val("");
               $('#vTracking').focus();
               $('#vTracking').jqxInput({disabled: false });

               $('#vStatus').html("X");
               $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
             }

   });
}

var ReadTagBosch = function(Q) {
  var tagRead = Q;
  var tagReadArr = tagRead.split('@');
  var vModel = $("#vModel").val();

  if(tagReadArr.length == 25)
  {
    var vTagModel = tagReadArr[4].substring(2,12);
    var vBoxID = tagReadArr[17];

    if(vTagModel == vModel){
      $('#vStatus').html('Success');
      $('#tabletest tr').children('td, th').css('background-color','#0adeff');

      $('#vTagBosch').val('');
      $('#vTagBosch').focus();
    }
    else{
      $('#vStatus').html("Not match Model. Please re-check. BOX No.:" + vBoxID);
      $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');

      $('#vTagBosch').val('');
      $('#vTagBosch').focus();
    }

    $('#vTagBosch').val('');
    $('#vTagBosch').focus();
    $('#vTagBosch').jqxInput({disabled: false });
  }
  else{
    $('#vTagBosch').val('');
    $('#vTagBosch').focus();
    $('#vTagBosch').jqxInput({disabled: false });

    $('#vStatus').html("X");
    $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
  };
}
