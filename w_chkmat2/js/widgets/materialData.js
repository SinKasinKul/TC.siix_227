$(document).ready(function () {

  //inputText
var vItemNoCurr;
var vItemNoRepl;
var vBatchCurr;
var vBatchRepl;
var vUserID;
var vLine;
var vTable;
var MainUserChk;
var MainUserID;

  $('#tabletest tr').children('td, th').css('background-color','#FFFFFF');
  $('#vStatus').html("Tag SAP");
  $('#vEmp').focus();
  $("#vEmp").jqxInput({ height: 20, width: 100, minLength: 1});
  $("#vEmp").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vEmp').jqxInput({disabled: true });

      var user = $("#vEmp").val();
      CheckUser(user);
    }
  });
  $("#vMachine").jqxInput({ height: 20, width: 100, minLength: 1});
  $("#vMachine").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vMachine').jqxInput({disabled: true });
      var vQrMachine = $('#vMachine').val();
      CheckMachine(vQrMachine);
    }
  });

  $("#vSapQrReplace").jqxInput({ height: 20, width: 100, minLength: 1});
  $("#vSapQrCurrent").jqxInput({ height: 20, width: 100, minLength: 1});

  $("#vSapQrCurrent").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vSapQrCurrent').jqxInput({disabled: true });

      var Q = $("#vSapQrCurrent").val();
      ReadTagCurrent(Q);
    }
  });

  $("#vSapQrReplace").keypress(function( event ) {
    if ( event.which == 13 ) {
      $('#vSapQrReplace').jqxInput({disabled: true });

      var Q = $("#vSapQrReplace").val();
      ReadTagReplace(Q);
    }
  });
  $('#vSapQrReplace').jqxInput({disabled: true });
  $("#vSapQrCurrent").jqxInput({disabled: true });
  $("#vMachine").jqxInput({disabled: true });

  $("#footer").css({
    fontSize: 10
  });

  $("#vReload").click(function ( event ) {
    location.reload();
  });
});

var CheckUser = function(user) {
   var act = 'ChkUser';
   var User = user;
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&User=" + User,
             success: function(data) {
               if (data.response == 'success') {
                 var Data = data.data[0];

                 if(!Data){
                   $('#vEmp').val("");
                   $('#vEmp').focus();
                   $('#vEmp').jqxInput({disabled: false });
                 }
                 else{
                   MainUserChk = Data.STAFF_NAME;
                   MainUserID = Data.STAFF_CODE;
                   //MainShift = User.SHIFT_NAME;
                   //MainShiftID = User.SHIFT_ID;
                   $("#vEmp").val(MainUserChk);
                   vUserID = MainUserID;

                   $('#vMachine').jqxInput({disabled: false });
                   $('#vMachine').focus();
                 }

               }else{
                 $('#vEmp').val("");
                 $('#vEmp').focus();
                 $('#vEmp').jqxInput({disabled: false });
               }
             },
             error: function functionName() {
               $('#vEmp').val("");
               $('#vEmp').focus();
               $('#vEmp').jqxInput({disabled: false });
             }

   });
}

function insReplSMT(Line,Tables,Item,Qty,BatchCurr,BatchRepl,Emp) {
            var act = 'insReplSMT';
            var url = "main.class.php";
            $.ajax({
                      type: "GET",
                      url: url,
                      dataType: "json",
                      data: "action=" + act
                      + "&Line=" + Line
                      + "&Tables=" + Tables
                      + "&ItemCD=" + Item
                      + "&Qty=" + Qty
                      + "&BatchCurr=" + BatchCurr
                      + "&BatchRepl=" + BatchRepl
                      + "&Emp=" + Emp,
                      success: function(data) {
                        if (data.response == 'success') {
                          var Data = data.data[0];


                          if(!Data)
                          {
                            $('#vStatus').html('SQL Error');
                            $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');

                            $('#vSapQrReplace').jqxInput({disabled: true });
                            $('#vSapQrReplace').val("");
                            $("#vSapQrCurrent").jqxInput({disabled: true });
                            $('#vSapQrCurrent').val("");

                            $("#vMachine").jqxInput({disabled: false });
                            $("#vMachine").val("");
                            $("#vMachine").focus();
                          }
                          else
                          {
                            var Result = Data.Result;
                            var RSts = Data.RSts;

                            if (RSts == '1')
                            {
                              $('#vStatus').html(Result);
                              $('#tabletest tr').children('td, th').css('background-color','#08ca0e');

                              $('#vSapQrReplace').jqxInput({disabled: true });
                              $('#vSapQrReplace').val("");
                              $("#vSapQrCurrent").jqxInput({disabled: true });
                              $('#vSapQrCurrent').val("");

                              $("#vMachine").jqxInput({disabled: false });
                              $("#vMachine").val("");
                              $("#vMachine").focus();
                              countReplSMT(Line,Tables,Item);
                            }else {

                              $('#vStatus').html(Result);
                              $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');

                              $('#vSapQrReplace').jqxInput({disabled: true });
                              $('#vSapQrReplace').val("");
                              $("#vSapQrCurrent").jqxInput({disabled: true });
                              $('#vSapQrCurrent').val("");

                              $("#vMachine").jqxInput({disabled: false });
                              $("#vMachine").val("");
                              $("#vMachine").focus();
                            }
                          }
                        }
                      }
            });
  }

  function countReplSMT(Line,Tables,Item) {
     var act = 'countReplSMT';
     $.ajax({
               type: "GET",
               url: "main.class.php",
               dataType: "json",
               data: "action=" + act
               + "&Line=" + Line
               + "&Tables=" + Tables
               + "&ItemCD=" + Item,
               success: function(data) {
                 if (data.response == 'success') {
                   var Data = data.data[0];

                   if(!Data){
                     $("#vCount").html("-");
                   }
                   else{
                     var CountItem = Data.CountItem;
                     $("#vCount").html(CountItem);
                   }

                 }else{
                   $("#vCount").html("-");
                 }
               }
     });
  }

  function ReadTagCurrent(Q){
    //console.log(Q);
    var tagRead = Q;
    var tagReadArr = tagRead.split('@');
    var parsedData = {};
    parsedData = GetDetailQRcode(Q);
    //console.log(parsedData);
    vItemNoCurr = parsedData["Itemcode"];
    vBatchCurr = parsedData["PackageID"];

    if(tagReadArr[1] == "SIIX20" || tagReadArr[1] == "06")
    {
      $('#vSapQrCurrent').val(vBatchCurr);
      $("#vStatus").html(vItemNoCurr);
      $('#tabletest tr').children('td, th').css('background-color','#0adeff');
      $('#vSapQrReplace').jqxInput({disabled: false });
      $('#vSapQrReplace').focus();

      countReplSMT(vLine,vTable,vItemNoCurr);
    }
    else
    {
      $('#vStatus').html('QR Not Match');
      $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
      $('#vSapQrCurrent').jqxInput({disabled: false });
      $('#vSapQrCurrent').val("");
      $('#vSapQrCurrent').focus();
    }

  }

  function ReadTagReplace(Q){
    //console.log(Q);
    var tagRead = Q;
    var tagReadArr = tagRead.split('@');
    var parsedData = {};
    parsedData = GetDetailQRcode(Q);
    //console.log(parsedData);
    vItemNoRepl = parsedData["Itemcode"];
    vBatchRepl = parsedData["PackageID"];
    vQty = parsedData["Qty"];

    var vLentagReadArr = tagReadArr.length;
    if(tagReadArr[1] == "SIIX20" || tagReadArr[1] == "06")
    {
      if(vItemNoRepl == vItemNoCurr && vBatchRepl != vBatchCurr)
      {
        $("#vStatus").html(vItemNoRepl);
        $('#vSapQrReplace').val(vBatchRepl);
        insReplSMT(vLine,vTable,vItemNoRepl,vQty,vBatchCurr,vBatchRepl,vUserID);
      }
      else
      {
        $("#vStatus").html("Can't Insert");
        $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');

        $('#vSapQrCurrent').jqxInput({disabled: false });
        $('#vSapQrCurrent').val("");
        $('#vSapQrCurrent').focus();

        $('#vSapQrReplace').jqxInput({disabled: true });
        $('#vSapQrReplace').val("");
      }
    }else 
    {
      $('#vStatus').html('QR Not Match');
      $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');
      $('#vSapQrReplace').jqxInput({disabled: false });
      $('#vSapQrReplace').val("");
      $('#vSapQrReplace').focus();
    }
  }

  function GetDetailQRcode(Q){
    var tagReadArr = Q.split('@');
    //console.log(tagReadArr);
    var parsedData = {};

    if(tagReadArr[1] == "06"){
      for(var i = 0;i < tagReadArr.length; i++){
        var element = tagReadArr[i];
        if (element.startsWith("V")) {
          parsedData["Vender"] = element.substring(1);
        }else if (element.startsWith("P")) {
          parsedData["Itemcode"] = element.substring(1);
        }else if (element.startsWith("Q")) {
          parsedData["Qty"] = element.substring(1);
        }else if (element.startsWith("S")) {
          parsedData["PackageID"] = element.substring(1);
        }else if (element.startsWith("1T")) {
          parsedData["MakerLot"] = element.substring(2);
        }else if (element.startsWith("1P")) {
          parsedData["ItemDESC"] = element.substring(2);
        }
      }
    }else if(tagReadArr[1] == "SIIX20"){
      parsedData["Itemcode"] = tagReadArr[3];
      parsedData["PackageID"] = tagReadArr[2];
      parsedData["Qty"] = tagReadArr[4];
    }
    
    return parsedData;
  }

  function CheckMachine(Q){
    //console.log(Q);
    var tag = Q;
    var tagRead;
    tagRead = tag;
    if (/\s/.test(Q)) {
        tagRead = tag.split(' ').join('_');
    }else{
        tagRead = tag;
    }

    var tagReadArr = tagRead.split('_');
    var tagReadLen = tagReadArr.length;

    if (tagReadLen == 3){
      var vLineNo = tagReadArr[0] +'_'+ tagReadArr[1];
      var vTableNo = tagReadArr[2];
    }
    else if (tagReadLen == 2){
      var vLineNo = tagReadArr[0] +'_'+ tagReadArr[1];
      var vTableNo = tagReadArr[1];
    }
    else{
      $('#vStatus').html('Not found Machine');
      $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');

      $('#vMachine').jqxInput({disabled: false });
      $('#vMachine').val("");
      $('#vMachine').focus();
    }

    if (tagReadLen >= 2){
      vLine = vLineNo;
      vTable = vTableNo;
      $("#vSapQrCurrent").jqxInput({disabled: false });
      $("#vSapQrCurrent").focus();

      $('#vStatus').html(vLineNo);
      $('#tabletest tr').children('td, th').css('background-color','#08ca0e');
    }
    else{
      $('#vStatus').html('Not found Machine');
      $('#tabletest tr').children('td, th').css('background-color','#ff0a0a');

      $('#vMachine').jqxInput({disabled: false });
      $('#vMachine').val("");
      $('#vMachine').focus();
    }
  }
