function logOut() {
    var act = 'logout';
    $.ajax({
        type: "POST",
        url: "../Check_login.class.php",
        dataType: "json",
        data:"action="+act,
        success: function (data) {
        if (data.response == 'success')
         {
            window.location.href="index.php";
         }
      }
    });
}