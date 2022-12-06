$(document).ready(function () {

$("#gridQRcodeSMTB").jqxGrid(
        {
            width: 460,
            height: 343,
            altrows: true,
            sortable: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            theme: "orange",
            selectionmode: 'multiplerowsextended',
            columns: [
              { text: 'No.', datafield: 'Row', width: 25, align: 'center', cellsalign: 'center'},
              { text: 'Bacode', datafield: 'Barcode', width: 250, align: 'center', cellsalign: 'center', aggregates: ['count']},
              { text: 'Status A', datafield: 'STATE_A', width: 80, align: 'center', cellsalign: 'center'},
              { text: 'Status B', datafield: 'STATE_B', width: 80, align: 'center', cellsalign: 'center'}/*,
              { text: 'Date', datafield: 'DATE_UPDATE', width: 150, align: 'center', cellsalign: 'center'}*/
            ]
        });
});

function gridQRcodeSMTB(LotNo) {
            var LotNo = LotNo;
            var act = 'jsonMainProcess';
            var url = "smtb.class.php?action="+act+"&LOT="+LotNo;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'Row', type: 'string' },
                    { name: 'Barcode', type: 'string' },
                    { name: 'STATE_A', type: 'string' },
                    { name: 'STATE_B', type: 'string' },
                    { name: 'DATE_UPDATE', type: 'string' }
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridQRcodeSMTB").jqxGrid({source: dataAdapter});
  }

  var ReadQrcodeParts = function(Q){
      $('#ScanQRcode').jqxInput({disabled: true });
      var act = 'InsMainProcess';
      var Bar = Q
      var ShID = MainShiftID;
      var Sh = MainShift;
      var MC = $('#PCMC').val();
      var Lot = $("#LotNo").val();
      var Emp = MainUserID;

    if(Bar !=''){
      $.ajax({
                type: "GET",
                url: "smtb.class.php",
                dataType: "json",
                data: "action=" + act
                + "&Barcode=" + Bar
                + "&SHIFT_ID=" + ShID
                + "&SHIFT=" + Sh
                + "&CLIENT=" + MC
                + "&LOT=" + Lot
                + "&EMP=" + Emp,
                success: function(data) {
                  if (data.response == 'success') {
                    var result = data.data[0].result;
                    $("#AlertMsg").html(result);

                    if(result == 'Success'){
                      $("#AlertMsg").css('color', 'green');
                    }else{
                      $("#AlertMsg").css('color', 'red');
                    }

                    $("#ScanQRcode").val("");
                    $("#ScanQRcode").focus();
                    ShowCountBar();
                    $('#ScanQRcode').jqxInput({disabled: false });
                  }
                }
      });
      gridQRcodeSMTB(Lot);
      $('#ScanQRcode').jqxInput({disabled: false });
    }else{
      $('#ScanQRcode').jqxInput({disabled: false });
    }
  }
