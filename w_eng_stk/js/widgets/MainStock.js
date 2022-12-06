$(document).ready(function () {

    var vSEC = $('#vSts').html();//Section;

    $("#gridMainStock").jqxGrid({
                width: 1065,
                height: 543,
                altrows: true,
                sortable: true,
                filterable: true,
                showfilterrow: true,
                showstatusbar: true,
                statusbarheight: 25,
                showaggregates: true,
                theme: "darkblue",
                selectionmode: 'multiplerowsextended',
                columns: [
                  { text: 'Item CD', datafield: 'I_ITEM_CD', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'Item DESC', datafield: 'I_ITEM_DESC', minwidth: 250, align: 'center'},
                  { text: 'Stock Qty', datafield: 'I_STK_QTY', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'Use/Month', datafield: 'I_USE_PRE_MONTH', width: 100, align: 'center', cellsalign: 'center'},
                  { text: 'Lead Time (Day)', datafield: 'I_LEAD_TIME_DAY', width: 150, align: 'center', cellsalign: 'center'},
                  { text: 'Safety Stock', datafield: 'I_SAFETY_STK', width: 130, align: 'center', cellsalign: 'center'},
                  { text: 'Type', datafield: 'I_TYPE', width: 80, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
                  { text: 'Date Update', datafield: 'I_UPDATE_DATE', width: 120, align: 'center', cellsalign: 'center'}
                ]
            });

            $("#vMainReLoad").click(function() { gridMainStock(vSEC); });
            $("#vMainReLoad").jqxButton({ template: "primary" });
            $("#popUpSTKIn").click(function() { $('#wStockIn').jqxWindow('open');gridItemlist(); clareDataSTKIN();});
            $("#popUpSTKOut").click(function() { $('#wStockOut').jqxWindow('open');gridItemlist(); clareDataSTKOUT(); });

            $("#STK_In_Item_CD").jqxInput({height: 30, width: 200, minLength: 1, theme: 'energyblue' ,disabled:true});
            $("#STK_In_Item_DESC").jqxComboBox({ selectedIndex: 0, displayMember: "I_ITEM_DESC", valueMember: "I_ITEM_CD",dropDownHeight: 250, width: 300, height: 25, theme: 'energyblue'});
            $('#STK_In_Item_DESC').on('select', function (event)
            {
                var args = event.args;
                if (args && args.item != -1) {
                    // index represents the item's index.
                    var index = args.index;
                    var item = args.item;
                    // get item's label and value.
                    if(item != null)
                    {
                      var label = item.label;
                      var value = item.value;
                      var type = args.type; // keyboard, mouse or null depending on how the item was selected.
                      $("#STK_In_Item_CD").val(value);
                    }
                    else{
                      $("#STK_In_Item_CD").val("");
                    }
                }
            });
            $("#STK_In_Qty").jqxNumberInput({height: 30, width: 200 , min: 0, theme: 'energyblue', decimalDigits: 0,digits:4});
            $("#STK_In_Emp_CD").jqxInput({height: 30, width: 200, minLength: 1, theme: 'energyblue' ,disabled:true});
            $("#STK_In_Ref_PO").jqxInput({height: 30, width: 200, minLength: 1, theme: 'energyblue'});
            $("#STK_In_Ref_INV").jqxInput({height: 30, width: 200, minLength: 1, theme: 'energyblue'});

            $("#SaveSTKIn").click(function() { STBL_STK_IN(vSEC); });
            $("#CancelSTKIn").click(function() { clareDataSTKIN(); $('#wStockIn').jqxWindow('close'); });
/*------------------*/
            $("#STK_Out_Item_CD").jqxInput({height: 30, width: 200, minLength: 1, theme: 'energyblue',disabled:true});
            $("#STK_Out_Item_DESC").jqxComboBox({ selectedIndex: 0, displayMember: "I_ITEM_DESC", valueMember: "I_ITEM_CD", width: 200, height: 25, theme: 'energyblue'});
            $("#STK_Out_Item_DESC").on('select', function (event)
            {
                var args = event.args;
                if (args && args.item != -1) {
                    // index represents the item's index.
                    var index = args.index;
                    var item = args.item;
                    // get item's label and value.
                    if(item != null){
                      var label = item.label;
                      var value = item.value;
                      var type = args.type; // keyboard, mouse or null depending on how the item was selected.
                      $("#STK_Out_Item_CD").val(value);
                    }
                    else{
                      $("#STK_Out_Item_CD").val("");
                    }
                }
            });
            $("#STK_Out_Qty").jqxNumberInput({height: 30, width: 200, min: 0, theme: 'energyblue', decimalDigits: 0,digits:4});
            $("#STK_Out_Emp_CD").jqxInput({height: 30, width: 200, minLength: 1, theme: 'energyblue' ,disabled:true});
            $("#STK_Out_Ref_Req").jqxInput({height: 30, width: 200, minLength: 1, theme: 'energyblue'});

            $("#SaveSTKOut").click(function() { STBL_STK_OUT(vSEC); });
            $("#CancelSTKOut").click(function() { clareDataSTKOUT(); $('#wStockOut').jqxWindow('close'); });

            $("#wStockIn").jqxWindow({
                    width: 400,
                    height: 420,
                    resizable: false,
                    isModal: false,
                    autoOpen: false,
                    showCollapseButton: true,
                    cancelButton: $("#ClearSTKIn"),
                    isModal: true,
                    modalOpacity: 0.3
                });
            $("#ClearSTKIn").click(function () {
                clareDataSTKIN();
                $('#wStockIn').jqxWindow('close');
            });
            $("#wStockOut").jqxWindow({
                    width: 400,
                    height: 420,
                    resizable: false,
                    isModal: false,
                    autoOpen: false,
                    showCollapseButton: true,
                    cancelButton: $("#ClearSTKOut"),
                    isModal: true,
                    modalOpacity: 0.3
                });
            $("#ClearSTKOut").click(function () {
                clareDataSTKOUT();
                $('#wStockOut').jqxWindow('close');
            });

            gridItemlist();
});
function gridMainStock(Section) {
          var SSS = $('#vSts').html();
          var act = 'STBL_STK_OVER_VIEW';
          var url = "main.class.php?action=" + act + "&Section=" + SSS;

          var source =
          {
              datatype: "json",
              datafields: [
                  { name: 'ID', type: 'number' },
                  { name: 'I_ITEM_CD', type: 'string' },
                  { name: 'I_ITEM_DESC', type: 'string' },
                  { name: 'I_STK_QTY', type: 'number' },
                  { name: 'I_USE_PRE_MONTH', type: 'number' },
                  { name: 'I_LEAD_TIME_DAY', type: 'number' },
                  { name: 'I_SAFETY_STK', type: 'number' },
                  { name: 'I_TYPE', type: 'string' },
                  { name: 'I_UPDATE_DATE', type: 'string' }
              ],
              url: url,
              root: 'data'
          };
          var dataAdapter = new $.jqx.dataAdapter(source);
           $("#gridMainStock").jqxGrid({source: dataAdapter});
}

function gridItemlist() {
          var act = 'STBL_ITEM_MS_GET';
          var url = "main.class.php?action="+act
          +"&I_ITEM_ID="
          +"&I_ITEM_CD="
          +"&I_ITEM_DESCE="
          +"&I_USE_PRE_MONTH="
          +"&I_LEAD_TIME_DAY="
          +"&I_SAFETY_STK="
          +"&I_TYPE="
          +"&I_EMP="
          +"&Actions=SELECT";

          var source =
          {
              datatype: "json",
              datafields: [
                  { name: 'ID', type: 'string' },
                  { name: 'I_ITEM_CD', type: 'string' },
                  { name: 'I_ITEM_DESC', type: 'string' },
                  { name: 'I_USE_PRE_MONTH', type: 'number' },
                  { name: 'I_LEAD_TIME_DAY', type: 'number' },
                  { name: 'I_SAFETY_STK', type: 'number' },
                  { name: 'I_TYPE', type: 'number' },
                  { name: 'I_EMP', type: 'string' },
                  { name: 'I_UPDATE_DATE', type: 'string' }
              ],
              url: url,
              root: 'data'
          };
          var dataAdapter = new $.jqx.dataAdapter(source);
          var dataAdapterOut = new $.jqx.dataAdapter(source);
          $("#STK_In_Item_DESC").jqxComboBox({source: dataAdapter});
          $("#STK_Out_Item_DESC").jqxComboBox({source: dataAdapterOut});
          $("#HIS_Item_DESC").jqxComboBox({source: dataAdapterOut});
}

var STBL_STK_IN = function(vSEC){

    var act = 'STBL_STK_IN';
    var pSTK_In_Item_CD = $("#STK_In_Item_CD").val();
    var pSTK_In_Qty = $('#STK_In_Qty').val();
    var pSTK_In_Emp_CD = $('#STK_In_Emp_CD').val();
    var pSTK_In_Ref_PO = $('#STK_In_Ref_PO').val();
    var pSTK_In_Ref_INV = $('#STK_In_Ref_INV').val();

    var pData = {
      I_ITEM_CD : pSTK_In_Item_CD
     ,I_QTY : pSTK_In_Qty
     ,I_EMP : pSTK_In_Emp_CD
     ,I_REF_PO : pSTK_In_Ref_PO
     ,I_REF_INV : pSTK_In_Ref_INV
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
                        clareDataSTKIN();
                      }
                      notificationAlert(vRSts, vResult);
                      gridMainStock(vSEC);
                      clareDataSTKIN();
                    }
                },
                error : function (data) {
                    alert( "Posting failed." );
                }
              });
}

var STBL_STK_OUT = function(vSEC){

    var act = 'STBL_STK_OUT';
    var pSTK_Out_Item_CD = $("#STK_Out_Item_CD").val();
    var pSTK_Out_Qty = $('#STK_Out_Qty').val();
    var pSTK_Out_Emp_CD = $('#STK_Out_Emp_CD').val();
    var pSTK_Out_Ref_Req = $('#STK_Outn_Ref_Req').val();

    var pData = {
      I_ITEM_CD : pSTK_Out_Item_CD
     ,I_QTY : pSTK_Out_Qty
     ,I_EMP : pSTK_Out_Emp_CD
     ,I_REF_REQ : pSTK_Out_Ref_Req
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
                        clareDataSTKIN(vSEC);
                      }
                      notificationAlert(vRSts, vResult);
                      gridMainStock();
                      clareDataSTKIN();
                    }
                },
                error : function (data) {
                    alert( "Posting failed." );
                }
              });
}

function clareDataSTKIN() {
  $("#STK_In_Item_CD").val("");
  $("#STK_In_Item_DESC").val("");
  $("#STK_In_Item_DESC").jqxComboBox({selectedIndex: -1 });
  $("#STK_In_Qty").val("");
  $("#STK_In_Ref_PO").val("");
  $("#STK_In_Ref_INV").val("");
}

function clareDataSTKOUT() {
  $("#STK_Out_Item_CD").val("");
  $("#STK_Out_Item_DESC").val("");
  $("#STK_Out_Item_DESC").jqxComboBox({selectedIndex: -1 });
  $("#STK_Out_Qty").val("");
  $("#STK_Out_Ref_Req").val("");
}
