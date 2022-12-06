$(document).ready(function () {
  STBL_PARKING_STATUS();

  setInterval(function () {STBL_PARKING_STATUS();}, 1000 * 30);

  $('#vBooking').on('click', function() {
      STBL_INS_BOOKING();
  });

  $('#vOut').on('click', function() {
      STBL_INS_OUT();
  });

  $("#pEmpID").keyup(function() {
    var pEmpID = $("#pEmpID").val();
    var pEmpIDLEN = pEmpID.length;

    if(pEmpIDLEN == 6){
      //alert(pEmpIDLEN);
      STBL_EMP_SEC(pEmpID);
    }

    if(pEmpIDLEN > 6){
      $("#pEmpID").val("");
      $("#pEmpID").focus();
    }

  });
});

function STBL_EMP_SEC(vEmpID) {

        var pEmpID = vEmpID;

         var act = 'STBL_EMP_SEC';
         var url = "main.class.php?action="+ act;
         var pData = {
             EmpID : pEmpID
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vEmpName = '';
                     var vEmpTeam = '';
                     var vBusID = '';
                     var vBusName = '';
                     if(data.data.length > 0)
                     {
                       vEmpName = data.data[0].EmpName;
                       $("#vEmpName").html(vEmpName);
                       $("#pEmpID").prop( "disabled", true );
                     }
                     else
                     {
                       $("#pEmpID").val("");
                       $("#pEmpID").focus();
                       alert("ไม่พบข้อมูลพนักงาน");
                     }
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error");
                    }
         });
}

function STBL_INS_BOOKING() {

        var pEmpID = $("#pEmpID").val();

         var act = 'STBL_INS_BOOKING';
         var url = "main.class.php?action="+ act;
         var pData = {
             EmployeeID : pEmpID
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "success"){
                         alert(vResult);
                         location.reload();
                     }
                     else
                     {
                         alert(vResult);
                         location.reload();
                     }
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error");
                       location.reload();
                    }
         });
}

function STBL_INS_OUT() {

        var pEmpID = $("#pEmpID").val();

         var act = 'STBL_INS_OUT';
         var url = "main.class.php?action="+ act;
         var pData = {
             EmployeeID : pEmpID
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "success"){
                         alert(vResult);
                         location.reload();
                     }
                     else
                     {
                         alert(vResult);
                         location.reload();
                     }
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error");
                       location.reload();
                    }
         });
}

function STBL_PARKING_STATUS() {

         var act = 'STBL_PARKING_STATUS';
         var url = "main.class.php?action="+ act;
         var pData = { };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vBookingCount = data.data[0].BookingCount;
                     var vFreeCount = data.data[0].FreeCount;

                     $("#vBookingC").html(vBookingCount);
                     $("#vFreeC").html(vFreeCount);

                   },
                   error: function(xhr, status, error){
                     console.log(error);
                    }
         });
}
