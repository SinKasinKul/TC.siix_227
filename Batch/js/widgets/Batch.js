$(document).ready(function () {

  var ttimer = setInterval(function () {
              //BatchPSESFN();
              BatchPanasonic();
          }, 1000 * 60);

  var reloadpage = setInterval(function () {
              location.reload();
          }, (((1000 * 60)*60)+5)*3);

});

  var BatchPanasonic = function(){

      var act     = 'BatchPanasonic';
          $.ajax({
                    type: "GET",
                    url: "batch.class.php",
                    dataType: "json",
                    data: "action=" + act,
                    success: function(data) {
                        var result = data.result;
                        $("#Result").html(result);
                        var detail = data.Detail;
                        $("#detail").html(detail);
                    }
          });
  }

  var BatchPSESFN = function(){

      var act     = 'BatchPSESFN';
          $.ajax({
                    type: "GET",
                    url: "batch.class.php",
                    dataType: "json",
                    data: "action=" + act,
                    success: function(data) {
                        var result = data.result;
                        $("#Result_FN").html(result);
                        var detail = data.Detail;
                        $("#detail_FN").html(detail);
                    }
          });
  }
