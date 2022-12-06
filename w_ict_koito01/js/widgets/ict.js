$(document).ready(function () {

  $("#QRcode01").blur( function() {var bercode = $("#QRcode01").val(); if(bercode !== ''){ChkBarDupII(bercode,'QRcode01');}});
  $("#QRcode02").blur( function() {var bercode = $("#QRcode02").val(); if(bercode !== ''){ChkBarDupII(bercode,'QRcode02');}});
  $("#QRcode03").blur( function() {var bercode = $("#QRcode03").val(); if(bercode !== ''){ChkBarDupII(bercode,'QRcode03');}});
  $("#QRcode04").blur( function() {var bercode = $("#QRcode04").val(); if(bercode !== ''){ChkBarDupII(bercode,'QRcode04');}});
  $("#QRcode05").blur( function() {var bercode = $("#QRcode05").val(); if(bercode !== ''){ChkBarDupII(bercode,'QRcode05');}});
  $("#QRcode06").blur( function() {var bercode = $("#QRcode06").val(); if(bercode !== ''){ChkBarDupII(bercode,'QRcode06');}});
  $("#QRcode07").blur( function() {var bercode = $("#QRcode07").val(); if(bercode !== ''){ChkBarDupII(bercode,'QRcode07');}});
  $("#QRcode08").blur( function() {var bercode = $("#QRcode08").val(); if(bercode !== ''){ChkBarDupII(bercode,'QRcode08');}});

  $("#SaveLog").click(function() {

    InsertICTLogData(QRcode01);
    InsertICTLogData(QRcode02);
    InsertICTLogData(QRcode03);
    InsertICTLogData(QRcode04);
    InsertICTLogData(QRcode05);
    InsertICTLogData(QRcode06);
    InsertICTLogData(QRcode07);
    InsertICTLogData(QRcode08);

  });

});

var ChkBarDup = function(bar,Obj) {
   var act = 'ChkDupBarcode';
   var barcode = bar;
   $.ajax({
             type: "GET",
             url: "ICT.class.php",
             dataType: "json",
             data: "action=" + act
             + "&barcode=" + bar,
             success: function(data) {
               if (data.response == 'success') {
                 console.log(data.response);
                 InsertICTLogData();
               }else{
                 $("#"+Obj).val('');
                 $("#"+Obj).focus();
               }
             }

   });
}

var ChkBarDupII = function(bar,Obj) {
  var act = 'ChkDupBarcodeII';
  var barcode = bar;
  var MC = $('#PCMC').val();
  $.ajax({
            type: "GET",
            url: "ICT.class.php",
            dataType: "json",
            data: "action=" + act
            + "&Model=" + MainModel
            + "&Barcode=" + bar
            + "&MC=" + MC
            + "&Seiban=" + MainSeiban,
            success: function(data) {
              if (data.data[0].RESULT == 'SUCCESS') {
                console.log(data.data[0].RESULT);
              }else{
                //console.log(data.data[0].RESULT);
                $("#"+Obj).val('');
                $("#"+Obj).focus();
              }
            }

  });
 }

 var InsertICTLogData = function(barcode) {
   var act = 'InsertICTLogData';
   var M = MainModel;
   var S = MainSeiban;
   var MC = $('#PCMC').val();
   var i;
       $.ajax({
               type: "GET",
               url: "ICT.class.php",
               dataType: "json",
               data: "action=" + act
               + "&Model=" + M
               + "&Barcode=" + barcode
               + "&MC=" + MC
               + "&Seiban=" + S,
               success: function(data) {
                   console.log(data.data[0].RESULT);
               }

     });

  }
