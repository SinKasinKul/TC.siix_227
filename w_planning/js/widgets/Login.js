$(document).ready(function () {

  $("#vLogin").click(function () {
        var vEmpCD = $("#vEmpCD").val();
        ChkUser(vEmpCD);
    });

});

function ChkUser(vEmpCD) {

  if(vEmpCD.length >= 4){
    var act = 'ChkUser';
    var url = "main.class.php?action="+ act;
    var pData = {
        User : vEmpCD
    };

    $.ajax({
              type: "POST",
              url: url,
              dataType: "json",
              data: pData,
              success: function(e) {
                var data = e;

                if(data.data.length > 0){
                  var vSTAFF_NAME = data.data[0].STAFF_NAME;
                  var vSTAFF_CODE = data.data[0].STAFF_CODE;
                  //alert(vSTAFF_NAME);
                  inputUserSESSION(vSTAFF_CODE,vSTAFF_NAME);
                }
                else{
                  alert("No Data");
                }
              },
              error: function(xhr, status, error){
                console.log(error);
                  alert("Error ChkUser");
               }
    });
  }
  else{
    alert("Please enter employee code.");
  }
}

function inputUserSESSION(vEmpCD,vEmpName) {

         var act = 'inputUserSESSION';
         var url = "main.class.php?action="+ act;
         var pData = {
             UserCD : vEmpCD,
             UserName : vEmpName
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;

                     var data = e;
                     var vSTATUS = data.response;
                     alert("Login User :: " + vSTATUS);
                     location.reload();
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error SESSION");
                    }
         });
}
