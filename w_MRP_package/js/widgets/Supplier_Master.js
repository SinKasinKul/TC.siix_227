$(document).ready(function () {
    $('#Supplier_Master_Tabs').jqxTabs({ width: '99.90%', position: 'top', theme: 'energyblue'});
    $('#CurDate').html(NowDate);

    $("#pSuplierCode").jqxInput({height: 30, width: 100, minLength: 1});
    $("#pSuplierName").jqxInput({height: 30, width: 350, minLength: 1});
    $("#pSuplierAdd1").jqxInput({height: 30, width: 750, minLength: 1});
    $("#pSuplierAdd2").jqxInput({height: 30, width: 350, minLength: 1});
    $("#pSuplierATTN").jqxInput({height: 30, width: 250, minLength: 1});
    $("#pSuplierTEL").jqxInput({height: 30, width: 150, minLength: 1});
    $("#pSuplierEmail").jqxInput({height: 30, width: 350, minLength: 1});
    $("#pSuplierPayment").jqxInput({height: 30, width: 150, minLength: 1});

    $("#SupplierLoad").click(function() {
        gridSupplierMAster('');
    });

    $("#Save").click(function() {
        INS_Supplier_INS();
    });
    $("#Clear").click(function() {
        clareData();
    });

    $("#gridSupplierMAster").jqxGrid({
                width: 1280,
                height: 343,
                altrows: true,
                sortable: true,
                filterable: true,
                showstatusbar: true,
                statusbarheight: 25,
                showaggregates: true,
                theme: "darkblue",
                selectionmode: 'multiplerowsextended',
                columns: [
                  { text: 'Code', datafield: 'I_VENDER_CD', width: 80, align: 'center'},
                  { text: 'Supplier', datafield: 'I_VENDER_NAME', minwidth: 250, align: 'center'},
                  //{ text: 'Address 1', datafield: 'I_VENDER_ADD1', minwidth: 350, align: 'center'},
                  //{ text: 'Address 2', datafield: 'I_VENDER_ADD2', width: 250, align: 'center', cellsalign: 'center'},
                  { text: 'ATTN', datafield: 'I_VENDER_PIC', width: 120, align: 'center'},
                  { text: 'TEL', datafield: 'I_VENDER_TEL', width: 120, align: 'center'},
                  { text: 'Email', datafield: 'I_VENDER_EMAIL', width: 250, align: 'center'},
                  { text: 'Payment', datafield: 'I_PAYMENT', width: 80, align: 'center', cellsalign: 'center'},
                  { text: 'Date Update', datafield: 'I_DATE_UPDATE', width: 120, align: 'center', cellsalign: 'center'},
                  { text: 'Edit', datafield: 'Edit', columntype: 'button', width: 50, align: 'center', cellsrenderer: function () {
                     return "Edit";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       var offset = $("#gridSupplierMAster").offset();
                       //$("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60 } });
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridSupplierMAster").jqxGrid('getrowdata', editrow);
                       $("#pSuplierCode").val(dataRecord.I_VENDER_CD);
                       $("#pSuplierName").val(dataRecord.I_VENDER_NAME);
                       $("#pSuplierAdd1").val(dataRecord.I_VENDER_ADD1);
                       $("#pSuplierAdd2").val(dataRecord.I_VENDER_ADD2);
                       $("#pSuplierATTN").val(dataRecord.I_VENDER_PIC);
                       $("#pSuplierTEL").val(dataRecord.I_VENDER_TEL);
                       $("#pSuplierEmail").val(dataRecord.I_VENDER_EMAIL);
                       $("#pSuplierPayment").val(dataRecord.I_PAYMENT);
                   }
                  },
                  { text: 'Delete', datafield: 'Delete', columntype: 'button', width: 50, align: 'center', cellsrenderer: function () {
                     return "Delete";
                    }, buttonclick: function (row) {
                       deleterow = row;
                       var offset = $("#gridSupplierMAster").offset();
                       var dataRecord = $("#gridSupplierMAster").jqxGrid('getrowdata', deleterow);
                       $("#pSuplierID").val(dataRecord.ID);
                       var vVenderName =  dataRecord.I_VENDER_NAME;
                       var r = confirm("Delete Supplier "+ vVenderName + " ?");
                         if (r == true) {
                             INS_Supplier_DEL(dataRecord.ID);
                         }
                   }
                  }
                ]
            });

            gridSupplierMAster('');
});

function gridSupplierMAster(pPODate) {
            var PO_Date = pPODate;
            var act = 'STBL_SUPPLIER_MASTER';
            var url = "main.class.php?action="+act
            +"&PO_Date="+PO_Date;

            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'ID', type: 'string' },
                    { name: 'I_VENDER_CD', type: 'string' },
                    { name: 'I_VENDER_NAME', type: 'string' },
                    { name: 'I_VENDER_ADD1', type: 'string' },
                    { name: 'I_VENDER_ADD2', type: 'string' },
                    { name: 'I_VENDER_TEL', type: 'string' },
                    { name: 'I_VENDER_PIC', type: 'string' },
                    { name: 'I_VENDER_EMAIL', type: 'string' },
                    { name: 'I_PAYMENT', type: 'string' },
                    { name: 'I_DATE_UPDATE', type: 'string' }
                ],
                url: url,
                root: 'data'
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             $("#gridSupplierMAster").jqxGrid({source: dataAdapter});
             clareData();
  }

  var INS_Supplier_INS = function(){

      var act = 'STBL_SUPPLIER_MASTER_INS';
      var pI_VENDER_CD = $("#pSuplierCode").val();
      var pI_VENDER_NAME = $('#pSuplierName').val();
      var pI_VENDER_ADD1 = $('#pSuplierAdd1').val();
      var pI_VENDER_ADD2 = $('#pSuplierAdd2').val();
      var pI_VENDER_TEL = $('#pSuplierTEL').val();
      var pI_VENDER_PIC = $('#pSuplierATTN').val();
      var pI_VENDER_EMAIL = $('#pSuplierEmail').val();
      var pI_PAYMENT = $('#pSuplierPayment').val();

      var pData = {
        I_VENDER_CD : pI_VENDER_CD
       ,I_VENDER_NAME : pI_VENDER_NAME
       ,I_VENDER_ADD1 : pI_VENDER_ADD1
       ,I_VENDER_ADD2 : pI_VENDER_ADD2
       ,I_VENDER_TEL : pI_VENDER_TEL
       ,I_VENDER_PIC : pI_VENDER_PIC
       ,I_VENDER_EMAIL : pI_VENDER_EMAIL
       ,I_PAYMENT : pI_PAYMENT
      };

          $.ajax({
                    type: "POST",
                    url: "main.class.php?action="+ act,
                    dataType: "json",
                    data: pData,
                    success: function(data) {
                      if(data.data[0]){
                          var vdata = data.data[0];
                          var vRSts = vdata.RSts;
                          var vResult = vdata.Result;
                          if (vRSts == '1'){
                            clareData();
                          }
                          notificationAlert(vRSts, vResult);
                          gridSupplierMAster('');
                        }
                    },
                    error : function (data) {
                        alert( "Posting failed." );
                    }
                  });

  }
  var INS_Supplier_DEL = function(pVenderId){

      var act = 'STBL_SUPPLIER_MASTER_DEL';
      var pI_VENDER_ID = pVenderId;

      var pData = {
        VENDER_ID : pI_VENDER_ID
      };

          $.ajax({
                    type: "POST",
                    url: "main.class.php?action="+ act,
                    dataType: "json",
                    data: pData,
                    success: function(data) {
                      if(data.data[0]){
                          var vdata = data.data[0];
                          var vRSts = vdata.RSts;
                          var vResult = vdata.Result;
                          if (vRSts == '1'){
                            clareData();
                          }
                          notificationAlert(vRSts, vResult);
                          gridSupplierMAster('');
                        }
                    },
                    error : function (data) {
                        alert( "Posting failed." );
                    }
                  });

  }

  function clareData() {
    $("#pSuplierCode").val("");
    $('#pSuplierName').val("");
    $('#pSuplierAdd1').val("");
    $('#pSuplierAdd2').val("");
    $('#pSuplierTEL').val("");
    $('#pSuplierATTN').val("");
    $('#pSuplierEmail').val("");
    $('#pSuplierPayment').val("");
  }
