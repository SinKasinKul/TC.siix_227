function showDateH() {

      var d = new Date();
      var y = d.getFullYear();
      var month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      var m = month[d.getMonth()];
      $("#s_month").html(m);
      $("#s_year").html(y);
}

$('#sibos').on('click', function() {
    let url = "http://192.168.1.57/";
      window.open(url);
    });

  $('#v11').on('click', function() {
    let url = "http://200.100.100.12/Citrix/XenApp/auth/login.aspx";
      window.open(url);
    });

  $('#wms').on('click', function() {
    let url = "http://192.168.1.19:8000/GMES20010_Login.aspx";
      window.open(url);
    });

  $('#kintone').on('click', function() {
    let url = "https://siixth.cybozu.com";
      window.open(url);
    });

  $('#siixems').on('click', function() {
    let url = "http://10.0.110.59:82/";
      window.open(url);
    });

  $('#siixpns').on('click', function() {
    let url = "http://10.0.100.248:83/Main_Menu.aspx";
      window.open(url);
    });

 $('#wipsubprocess').on('click', function() {
    let url = "http://10.0.110.134:82/Wip_ReportWTU.aspx";
      window.open(url);
    });
 $('#GMreportI').on('click', function() {
    let url = "http://10.0.110.134:82/Wip_ReportWTU.aspx";
      window.open(url);
    });
 $('#GMreportII').on('click', function() {
    let url = "http://10.0.110.134:82/Wip_ReportWTU.aspx";
      window.open(url);
    });
