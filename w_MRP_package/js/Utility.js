  $(document).ready(function () {
      $("#MRP_Menu").jqxMenu({ width: '99.90%', height: '30px', theme: 'energyblue'});
      //$('#sub_Tabs').jqxTabs({ width: '99.90%', position: 'top', theme: theme});
      var notificationWidth = 300;
      $("#successNoti").jqxNotification({ width: notificationWidth, position: "top-right", autoOpen: false, closeOnClick: true, autoClose: true, template: "success" });
      $("#failedNoti").jqxNotification({ width: notificationWidth, position: "top-right", autoOpen: false, closeOnClick: true, autoClose: true, template: "error" });
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

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var d = new Date();
  var vDay = d.getDate();
  var vMonth = months[d.getMonth()];
  var vYear = d.getFullYear();
  var NowDate = vDay + '-' + vMonth + '-' + vYear;

function showDateH() {

      var d = new Date();
      var y = d.getFullYear();
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var m = months[d.getMonth()];
      $("#s_month").html(m);
      $("#s_year").html(y);
}

function showNameMonth(month){

if(month > 11){
      var calMonth = month - 11;
      month = calMonth;
}

      switch(month){
            case 0 :var m = 'January';break;
            case 1 :var m = 'February';break;
            case 2 :var m = 'March';break;
            case 3 :var m = 'April';break;
            case 4 :var m = 'May';break;
            case 5 :var m = 'June';break;
            case 6 :var m = 'July';break;
            case 7 :var m = 'August';break;
            case 8 :var m = 'September';break;
            case 9 :var m = 'October';break;
            case 10 :var m = 'November';break;
            case 11 :var m = 'December';break;
      }

      return m;
}

Number.prototype.format = function(n, x) {
          var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
          return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
      };
