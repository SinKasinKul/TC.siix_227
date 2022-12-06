function login() {
    var user = document.getElementById('txtUsername').value;
    var pass = document.getElementById('txtPassword').value;
    var act = 'login';
    $.ajax({
        type: "POST",
        url: "Check_login.class.php",
        dataType: "json",
        data:"Username="+user+"&Password="+pass+"&action="+act,
        success: function (data) {
        if (data.response == 'success') {
            window.location='index.php';
        } else {
            window.location='../login_page.php';
        }
      },
      error: function() {
        window.location='../login_page.php';
      }
  });
}