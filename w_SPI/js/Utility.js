  $(document).ready(function () {

      //$('#main_Tabs').jqxTabs({ width: '99.90%', position: 'top', theme: 'energyblue'});
      //$('#sub_Tabs').jqxTabs({ width: '99.90%', position: 'top', theme: theme});

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
  });
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
                   $('#UserName').html(MainUserChk);
                   $("#EngLogin").jqxWindow('close');

                 }else{

                   $('#User').val("");
                   $('#User').focus();
                 }
               }
     });
  }
