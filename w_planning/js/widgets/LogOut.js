$(document).ready(function () {

  $("#vLogOut").click(function () {
      unsetSESSION();
  });
});

function unsetSESSION() {

         var act = 'unsetSESSION';
         var url = "main.class.php?action="+ act;
         var pData = {
           User : ""
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vSTATUS = data.response;
                     alert("Log-Out :: " + vSTATUS);
                     location.reload();
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error SESSION");
                    }
         });
}
