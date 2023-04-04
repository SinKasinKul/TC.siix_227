$(document).ready(function () {

  var MainUser;
  var MainUserID;
  var MainShift;
  var Tracking;
  var ItemCode;
  var ItemDESC;
  var WBSCode;
  var SMTLine;
  $("#pEDER_ID").val('');
  $('#psProcess').val('');

      $("#pTracking").keypress(function( event ) {
        if ( event.which == 13 ) {
          var vTK = $("#pTracking").val();
          Chk_Model_Seiban(vTK);
        }
      });

      $("#pWhenDate").jqxDateTimeInput({
            width: '100%',
            height: '25px',
            allowNullDate: true,
            //editMode: 'full',
            formatString: 'yyyy-MM-dd HH:mm:ss',
            showFooter: true,
            value: null,
            theme: "darkblue"
            //yearCutoff: 1926
        });

      $("#psDate").jqxDateTimeInput({
             width: '100px',
             height: '25px',
             allowNullDate: true,
             //editMode: 'full',
             formatString: 'yyyy-MM-dd',
             showFooter: true,
             value: null,
             theme: "darkblue"
             //yearCutoff: 1926
         });
         var vDept = DeptDetail();
         $("#dpDept").jqxComboBox({ placeHolder: "Process", theme: "darkblue", selectedIndex: -1, source: vDept, displayMember: "Dept", valueMember: "Dept", width: '100%', height: 30 });
         $('#dpDept').on('select', function (event) {
                         var args = event.args;
                         var item = $('#dpDept').jqxComboBox('getItem', args.index);
                         if (item != null) {
                             $('#pWhereProcess').val(item.label);
                         }
                     });

         $("#dpDeptSearch").jqxDropDownList({ placeHolder: "Process", theme: "darkblue", selectedIndex: -1, source: vDept, displayMember: "Dept", valueMember: "Dept", width: 200, height: 30 });
         $('#dpDeptSearch').on('select', function (event) {
                         var args = event.args;
                         var item = $('#dpDeptSearch').jqxDropDownList('getItem', args.index);
                         if (item != null) {
                             $('#psProcess').val(item.label);
                         }
                     });

         var sourceTYPE = ["Quality","Cost","Delivery","Motivation"];

         $("#pEderType").jqxDropDownList({ source: sourceTYPE, placeHolder: "Type", autoDropDownHeight: true, width: '100%',theme: "darkblue"});

         $("#pWhatProblem").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pWhereProcess").val('');
         $("#pWhy").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pLine").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pTime").val('');
         $("#pWhenDate").val('');

         $("#pWhoDetection").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pWhenShift").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pHowMany").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pCustomer").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pHowOccur").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});

         $("#pTracking").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pModel").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pQty").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pPartItem").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pPartName").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});

         $("#pMaker").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
         $("#pProblemCase").jqxTextArea({ height: 100, width: '100%', minLength: 1, theme: "darkblue"});
         $("#pTemporaryAction").jqxTextArea({ height: 100, width: '100%', minLength: 1, theme: "darkblue"});
         $("#pPermanentAction").jqxTextArea({ height: 100, width: '100%', minLength: 1, theme: "darkblue"});
         $("#pPictureOK").val('');
         $("#pPictureNG").val('');

      $("#gridEDEREntry").jqxGrid(
      {
          width: '100%',
          height: 343,
          altrows: true,
          sortable: true,
          showstatusbar: true,
          statusbarheight: 25,
          showaggregates: true,
          showfilterrow: true,
          filterable: true,
          theme: "darkblue",
          selectionmode: 'multiplerowsextended',
          columns: [
            { text: 'No.', datafield: 'ID', width: 20, align: 'center', cellsalign: 'center'},
            { text: 'Type', datafield: 'EDER_TYPE', width: 100, align: 'center', cellsalign: 'center'},
            { text: 'Line', datafield: 'EDER_LINE', width: 60, align: 'center', cellsalign: 'center'},
            { text: 'Location', datafield: 'EDER_Where_Process', width: 100, align: 'center', cellsalign: 'center'},
            { text: 'Tracking', datafield: 'EDER_Tracking', width: 120, align: 'center', cellsalign: 'center'},
            { text: 'Model', datafield: 'EDER_Model', width: 200, align: 'center', cellsalign: 'center'},
            { text: 'Problem', datafield: 'EDER_WhatProblem', minwidth: 100, align: 'center', cellsalign: 'center'},
            { text: 'TIME', datafield: 'Date_Update', width: 100, align: 'center', cellsalign: 'center'},
            /*{ text: 'Operator', datafield: 'EMP', width: 100, align: 'center', cellsalign: 'center'},
            { text: 'status', datafield: 'status', width: 100, align: 'center', cellsalign: 'center'},*/
            { text: 'Edit', datafield: 'Edit', width: 50, columntype: 'button', cellsrenderer: function () {
                     return "Edit";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridEDEREntry").jqxGrid('getrowdata', editrow);

                     $("#pEDER_ID").val(dataRecord.ID);
                     $("#pEderType").val(dataRecord.EDER_TYPE);
                     $("#pLine").val(dataRecord.EDER_LINE);
                     $("#pWhatProblem").val(dataRecord.EDER_WhatProblem);
                     $("#pWhereProcess").val(dataRecord.EDER_Where_Process);
                     $('#dpDept').val(dataRecord.EDER_Where_Process);
                     $("#pWhy").val(dataRecord.EDER_Why);
                     $("#pTime").val(dataRecord.EDER_When_Date);
                     $("#pWhenDate").val(dataRecord.EDER_When_Date);

                     $("#pWhoDetection").val(dataRecord.EDER_Who_Detection);
                     $("#pWhenShift").val(dataRecord.EDER_When_Shift);
                     $("#pHowMany").val(dataRecord.EDER_How_Many);
                     $("#pCustomer").val(dataRecord.EDER_Customer);
                     $("#pHowOccur").val(dataRecord.EDER_How_Occur);

                     $("#pTracking").val(dataRecord.EDER_Tracking);
                     $("#pModel").val(dataRecord.EDER_Model);
                     $("#pQty").val(dataRecord.EDER_Qty);
                     $("#pPartItem").val(dataRecord.EDER_Part_Item);
                     $("#pPartName").val(dataRecord.EDER_Part_Name);

                     $("#pMaker").val(dataRecord.EDER_Maker);
                     $("#pProblemCase").val(dataRecord.EDER_Problem_Case);
                     $("#pTemporaryAction").val(dataRecord.EDER_Temporary_Action);
                     $("#pPermanentAction").val(dataRecord.EDER_Permanent_Action);

                     show_image_OK(dataRecord.EDER_IMAGE_OK);
                     show_image_NG(dataRecord.EDER_IMAGE_NG);
                     $("#pPictureOKH").val(dataRecord.EDER_IMAGE_OK);

                     $("#pPictureNGH").val(dataRecord.EDER_IMAGE_NG);
              }
            },
            { text: 'Delete', datafield: 'Delete', width: 60, columntype: 'button', cellsrenderer: function () {
                     return "Delete";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridEDEREntry").jqxGrid('getrowdata', editrow);
                     var vTracking = dataRecord.EDER_Tracking;
                     var ID = dataRecord.ID;
                     let vFileNameOK = dataRecord.EDER_IMAGE_OK;
                     let vFileNameNG = dataRecord.EDER_IMAGE_NG;
                     var r = confirm("Do you want to delete "+ vTracking + " ?");
                     if (r == true) {
                         EDER_DEL(ID);
                         UNLINK_IMG_OK(vFileNameOK);
                         UNLINK_IMG_NG(vFileNameNG);
                     }
              }
            },
            { text: 'Open', datafield: 'Open', width: 60, columntype: 'button', cellsrenderer: function () {
                     return "Open";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridEDEREntry").jqxGrid('getrowdata', editrow);
                     window.open("from.php?ID=" + dataRecord.ID);
              }
            },
            { text: 'Send', datafield: 'Send', width: 60, columntype: 'button', cellsrenderer: function (row) {
                    editrow = row;
                    var dataRecord = $("#gridEDEREntry").jqxGrid('getrowdata', editrow);

                    var vSTATUS = dataRecord.EDER_STATUS;
                    var vS = "";
                    if(vSTATUS == "0")
                    {
                      vS = "Send"
                    }
                    else{
                      vS = "Already"
                    }
                    return vS;
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridEDEREntry").jqxGrid('getrowdata', editrow);

                     var vID = dataRecord.ID;
                     var vSTATUS = dataRecord.EDER_STATUS;
                     var vTracking = dataRecord.EDER_Tracking;

                     if (vSTATUS == "0")
                     {
                       var r = confirm("Do you want to send "+ vTracking + " ?");
                       if (r == true) {
                         EDER_UPD_STATUS(vID, vSTATUS);
                       }
                     }
                     else{
                       var r = confirm("Do you want to cancel "+ vTracking + " ?");
                       if (r == true) {
                         EDER_UPD_STATUS(vID, vSTATUS);
                       }
                     }
              }
            }
          ]
      });
      EDER_SEC();

       //$("#EDERRecord").jqxWindow('open');
       $('#User').focus();
    /*--------------------------------------------*/

    $("#EDEREntry").click(function( event ) {
        $("#EDERRecord").jqxWindow('open');
    });

    $("#btSearch").click(function( event ) {
        var pDept = $('#psProcess').val();
        var pDate = $('#psDate').val();
        EDER_SEC_HIS(pDept,pDate);
    });

    $("#btReload").click(function( event ) {
        EDER_SEC();
    });

    $("#rRecord").click(function(event) {
      var ChkID = $("#pEDER_ID").val();
      if(ChkID == '')
      {
        EDER_INS();
      }
      else
      {
        EDER_UPD();
      }
    });
    $("#rRecordClose").click(function(event) {
        if ($("#pPictureOK").val() != "")
        {
          let vFileNameOK = document.getElementById("pPictureOK").files[0].name; //$("#pPictureOK").val();
          UNLINK_IMG_OK(vFileNameOK);
          //alert(vFileNameOK);
        }

        if ($("#pPictureNG").val() != "")
        {
          let vFileNameNG = document.getElementById("pPictureNG").files[0].name; //$("#pPictureOK").val();
          UNLINK_IMG_NG(vFileNameNG);
          //alert(vFileNameNG);
        }

       clearfrom();
    });

    $(document).on('change','#pPictureOK',function(){
        UploadImageOK()
    });

    $(document).on('change','#pPictureNG',function(){
        UploadImageNG()
    });

    $("#btDELimgOK").click(function(event) {
      var vFileName = $("#pPictureOKH").val();
      UNLINK_IMG_OK(vFileName);
    });
    $("#btDELimgNG").click(function(event) {
      var vFileName = $("#pPictureNGH").val();
      UNLINK_IMG_NG(vFileName);
    });
});

function ShowNoti(Msg,Type) {
  $("#MessageNoti").html(Msg);
  $("#Notification").jqxNotification({template: Type});
  $("#Notification").jqxNotification("open");
}

function UploadImageOK(){
    var file_data = $('#pPictureOK').prop('files')[0];
    var form_data = new FormData();
    form_data.append('file', file_data);
    //console.log(form_data);

    var image_name = file_data.name;
    var image_extension = image_name.split('.').pop().toLowerCase();

    if(jQuery.inArray(image_extension,['png','gif','jpg','jpeg','']) == -1){
      //alert("Invalid image file");
      ShowNoti("Invalid image file","warning");
      $("#pPictureOK").val("");
      show_image_OK('');
      return;
    }

    var form_data = new FormData();
    form_data.append("file",file_data);
    console.log(form_data);

    $.ajax({
      url:'Upload.php',
      dataType: 'text',
      method:'POST',
      data:form_data,
      contentType:false,
      cache:false,
      processData:false,
      beforeSend:function(){
        $('#msgIMGOK').html('Loading......');
      },
      success:function(data){
        const obj = JSON.parse(data);
        var vdata = obj.data;
        var vStatus = obj.status;

        if(vStatus != "Success")
        {
            //EDER_SEC();
            ShowNoti(vdata,"warning");
            //clearfrom();
            $("#pPictureOK").val("");
            show_image_OK('');
        }
        else
        {
            ShowNoti(vdata,"success");
        }
        //$('#msgIMGOK').html(data);
      }
    });
}

function UploadImageNG(){
    var file_data = $('#pPictureNG').prop('files')[0];
    var form_data = new FormData();
    form_data.append('file', file_data);
    //console.log(form_data);

    var image_name = file_data.name;
    var image_extension = image_name.split('.').pop().toLowerCase();

    if(jQuery.inArray(image_extension,['png','gif','jpg','jpeg','']) == -1){
      //alert("Invalid image file");
      ShowNoti("Invalid image file","warning");
      $("#pPictureNG").val("");
      show_image_NG('');
      return;
    }

    var form_data = new FormData();
    form_data.append("file",file_data);
    console.log(form_data);
    $.ajax({
      url:'Upload.php',
      dataType: 'text',
      method:'POST',
      data:form_data,
      contentType:false,
      cache:false,
      processData:false,
      beforeSend:function(){
        $('#msgIMGNG').html('Loading......');
      },
      success:function(data){
        const obj = JSON.parse(data);
        var vdata = obj.data;
        var vStatus = obj.status;

        if(vStatus != "Success"){
            //EDER_SEC();
            ShowNoti(vdata,"warning");
            //clearfrom();
            $("#pPictureNG").val("");
            show_image_NG('');
        }
        else
        {
            ShowNoti(vdata,"success");
        }
        //$('#msgIMGOK').html(data);
      }
    });
}

function EDER_INS() {

        var pType = $("#pEderType").val();
        var pWhatProblem = $("#pWhatProblem").val();
        var pWhereProcess = $("#pWhereProcess").val();
        var pLine = $("#pLine").val();
        var pWhy = $("#pWhy").val();
        var pTime = $("#pTime").val();
        var pWhenDate = $("#pWhenDate").val();
        var pWhoDetection = $("#pWhoDetection").val();
        var pWhenShift = $("#pWhenShift").val();
        var pHowMany = $("#pHowMany").val();
        var pCustomer = $("#pCustomer").val();
        var pHowOccur = $("#pHowOccur").val();
        var pTracking = $("#pTracking").val();
        var pModel = $("#pModel").val();
        var pQty = $("#pQty").val();
        var pPartItem = $("#pPartItem").val();
        var pPartName = $("#pPartName").val();
        var pMaker = $("#pMaker").val();
        var pProblemCase = $("#pProblemCase").val();
        var pTemporaryAction = $("#pTemporaryAction").val();
        var pPermanentAction = $("#pPermanentAction").val();
        var pPictureOK = $("#pPictureOK").val();
        var pPictureNG = $("#pPictureNG").val();
        var pEmp = $("#UserName").html();

         let imgOK = pPictureOK.split('\\');
         pPictureOK = imgOK[2];

         let imgNG = pPictureNG.split('\\');
         pPictureNG = imgNG[2];

         var act = 'EDER_INS';
         var url = "main.class.php?action="+ act;
         var pData = {
             Type : pType,
             WhatProblem : pWhatProblem,
             WhereProcess : pWhereProcess,
             Line : pLine,
             Why : pWhy,
             Time : pTime,
             WhenDate : pWhenDate,
             WhoDetection : pWhoDetection,
             WhenShift : pWhenShift,
             HowMany : pHowMany,
             Customer : pCustomer,
             HowOccur : pHowOccur,
             Tracking : pTracking,
             Model : pModel,
             Qty : pQty,
             PartItem : pPartItem,
             PartName : pPartName,
             Maker : pMaker,
             ProblemCase : pProblemCase,
             TemporaryAction : pTemporaryAction,
             PermanentAction : pPermanentAction,
             PictureOK : pPictureOK,
             PictureNG : pPictureNG,
             Emp : pEmp
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "success"){
                         EDER_SEC();
                         ShowNoti(vResult,"success");
                         clearfrom();
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error");
                    }
         });
}

function EDER_UPD() {
        var pEDER_ID = $("#pEDER_ID").val();
        var pType = $("#pEderType").val();
        var pLine = $("#pLine").val();
        var pWhatProblem = $("#pWhatProblem").val();
        var pWhereProcess = $("#pWhereProcess").val();
        var pWhy = $("#pWhy").val();
        var pTime = $("#pTime").val();
        var pWhenDate = $("#pWhenDate").val();
        var pWhoDetection = $("#pWhoDetection").val();
        var pWhenShift = $("#pWhenShift").val();
        var pHowMany = $("#pHowMany").val();
        var pCustomer = $("#pCustomer").val();
        var pHowOccur = $("#pHowOccur").val();
        var pTracking = $("#pTracking").val();
        var pModel = $("#pModel").val();
        var pQty = $("#pQty").val();
        var pPartItem = $("#pPartItem").val();
        var pPartName = $("#pPartName").val();
        var pMaker = $("#pMaker").val();
        var pProblemCase = $("#pProblemCase").val();
        var pTemporaryAction = $("#pTemporaryAction").val();
        var pPermanentAction = $("#pPermanentAction").val();
        var pPictureOK = $("#pPictureOK").val();
        var pPictureNG = $("#pPictureNG").val();
        var pEmp = $("#UserName").html();

        if(pPictureOK != ''){
          let imgOK = pPictureOK.split('\\');
          pPictureOK = imgOK[2];
        }

        if(pPictureNG != ''){
          let imgNG = pPictureNG.split('\\');
          pPictureNG = imgNG[2];
        }

         var act = 'EDER_UPD';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pEDER_ID,
             Type : pType,
             Line : pLine,
             WhatProblem : pWhatProblem,
             WhereProcess : pWhereProcess,
             Why : pWhy,
             Time : pTime,
             WhenDate : pWhenDate,
             WhoDetection : pWhoDetection,
             WhenShift : pWhenShift,
             HowMany : pHowMany,
             Customer : pCustomer,
             HowOccur : pHowOccur,
             Tracking : pTracking,
             Model : pModel,
             Qty : pQty,
             PartItem : pPartItem,
             PartName : pPartName,
             Maker : pMaker,
             ProblemCase : pProblemCase,
             TemporaryAction : pTemporaryAction,
             PermanentAction : pPermanentAction,
             PictureOK : pPictureOK,
             PictureNG : pPictureNG,
             Emp : pEmp
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "success"){
                         EDER_SEC();
                         ShowNoti(vResult,"success");
                         clearfrom();
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error");
                    }
         });
}

function EDER_UPD_STATUS(pID, pStatus) {

         var vID = pID;
         var vStatus = "";

         if(pStatus == "0")
         {
           vStatus = "1";
         }
         else{
           vStatus = "0";
         }

         var act = 'EDER_UPD_STATUS';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : vID,
             Status : vStatus
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "success"){
                         EDER_SEC();
                         ShowNoti(vResult,"success");
                         clearfrom();
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error");
                    }
         });
}

function EDER_SEC() {
            var pDate = '';
            var act = 'EDER_SEC';
            var url = "main.class.php?action="+act;
            var pData = {
                Date : pDate
            };
            var source =
            {
                datatype: "json",
                url: url,
                type : 'POST',
                data : pData,
                root: 'data',
                datafields: [
                    { name: 'ID', type: 'string' },
                    { name: 'EDER_STATUS', type: 'string' },
                    { name: 'EDER_TYPE', type: 'string' },
                    { name: 'EDER_LINE', type: 'string' },
                    { name: 'EDER_Tracking', type: 'string' },
                    { name: 'EDER_WhatProblem', type: 'string' },
                    { name: 'EDER_Why', type: 'string' },
                    { name: 'EDER_When_Date', type: 'string' },
                    { name: 'EDER_When_Shift', type: 'string' },
                    { name: 'EDER_Customer', type: 'string' },
                    { name: 'EDER_Model', type: 'string' },
                    { name: 'EDER_Qty', type: 'string' },
                    { name: 'EDER_Part_Item', type: 'string' },
                    { name: 'EDER_Part_Name', type: 'string' },
                    { name: 'EDER_Maker', type: 'string' },
                    { name: 'EDER_Where_Process', type: 'string' },
                    { name: 'EDER_Who_Detection', type: 'string' },
                    { name: 'EDER_How_Many', type: 'string' },
                    { name: 'EDER_How_Occur', type: 'string' },
                    { name: 'EDER_Problem_Case', type: 'string' },
                    { name: 'EDER_Temporary_Action', type: 'string' },
                    { name: 'EDER_Permanent_Action', type: 'string' },
                    { name: 'EDER_IMAGE_OK', type: 'string' },
                    { name: 'EDER_IMAGE_NG', type: 'string' },
                    { name: 'EEDER_Name', type: 'string' },
                    { name: 'Date_Update', type: 'string' }
                ]
            };
            var gridEDEREntry = new $.jqx.dataAdapter(source);
             $("#gridEDEREntry").jqxGrid({source: gridEDEREntry});
  }

function EDER_SEC_HIS(Dept,Date) {
          //var pDate = '';
          var pDept = Dept;
          var pDate = Date;
          var act = 'EDER_SEC_HIS';
          var url = "main.class.php?action="+act;
          var pData = {
              Dept : pDept
              ,Date : pDate
          };
          var source =
          {
              datatype: "json",
              url: url,
              type : 'POST',
              data : pData,
              root: 'data',
              datafields: [
                  { name: 'ID', type: 'string' },
                  { name: 'EDER_STATUS', type: 'string' },
                  { name: 'EDER_TYPE', type: 'string' },
                  { name: 'EDER_LINE', type: 'string' },
                  { name: 'EDER_Tracking', type: 'string' },
                  { name: 'EDER_WhatProblem', type: 'string' },
                  { name: 'EDER_Why', type: 'string' },
                  { name: 'EDER_When_Date', type: 'string' },
                  { name: 'EDER_When_Shift', type: 'string' },
                  { name: 'EDER_Customer', type: 'string' },
                  { name: 'EDER_Model', type: 'string' },
                  { name: 'EDER_Qty', type: 'string' },
                  { name: 'EDER_Part_Item', type: 'string' },
                  { name: 'EDER_Part_Name', type: 'string' },
                  { name: 'EDER_Maker', type: 'string' },
                  { name: 'EDER_Where_Process', type: 'string' },
                  { name: 'EDER_Who_Detection', type: 'string' },
                  { name: 'EDER_How_Many', type: 'string' },
                  { name: 'EDER_How_Occur', type: 'string' },
                  { name: 'EDER_Problem_Case', type: 'string' },
                  { name: 'EDER_Temporary_Action', type: 'string' },
                  { name: 'EDER_Permanent_Action', type: 'string' },
                  { name: 'EDER_IMAGE_OK', type: 'string' },
                  { name: 'EDER_IMAGE_NG', type: 'string' },
                  { name: 'EEDER_Name', type: 'string' },
                  { name: 'Date_Update', type: 'string' }
              ]
          };
          var gridEDEREntry = new $.jqx.dataAdapter(source);
           $("#gridEDEREntry").jqxGrid({source: gridEDEREntry});
}

function EDER_DEL(pID) {
            var act = 'EDER_DEL';
            var url = "main.class.php?action="+ act;
            var pData = { ID : pID };

            $.ajax({
                  type: "POST",
                  url: url,
                  dataType: "json",
                  data: pData,
                  success: function(e) {
                    var data = e;
                    var vResult = data.data[0].Result;

                    if(vResult == "success"){
                        EDER_SEC();
                        ShowNoti(vResult,"success");
                        clearfrom();
                    }
                    else
                    {
                        ShowNoti(vResult,"warning");
                    }
                  },
                  error: function(xhr, status, error){
                    console.log(error);
                   }
            });
  }

function clearfrom(){
  $("#pEDER_ID").val('');
  $("#pWhatProblem").val('');
  $("#pWhereProcess").val('');
  $("#pWhy").val('');
  $("#pTime").val('');
  $("#pWhenDate").val('');

  $("#pWhoDetection").val('');
  $("#pWhenShift").val('');
  $("#pHowMany").val('');
  $("#pCustomer").val('');
  $("#pHowOccur").val('');

  $("#pTracking").val('');
  $("#pModel").val('');
  $("#pQty").val('');
  $("#pPartItem").val('');
  $("#pPartName").val('');

  $("#pMaker").val('');
  $("#pProblemCase").val('');
  $("#pTemporaryAction").val('');
  $("#pPermanentAction").val('');
  $("#pPictureOK").val('');
  $("#pPictureNG").val('');

  show_image_OK('');
  show_image_NG('');

  $("#dpDept").jqxComboBox({ placeHolder: "", selectedIndex: -1});
}

var Chk_Model_Seiban = function(TK) {

   var act = 'Chk_Model_Seiban';
   var Tracking = TK.substr(0,10);
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Tracking=" + Tracking,
             success: function(data) {
               if (data.response == 'success') {

                 if(data.data.length > 0){
                   var TRK = data.data[0];
                   Tracking = TRK.SEIBAN_CD;
                   ItemCode = TRK.ITEMCODE;
                   ItemDESC = TRK.ITEMDESC;
                   WBSCode = TRK.WBS_Element;

                   $("#pTracking").val(Tracking);
                   $("#pModel").val(ItemDESC);
                   $("#pCustomer").val(WBSCode);
                 }else{
                   $("#pTracking").val('');
                   $("#pModel").val('');
                   $("#pCustomer").val('');
                 }
               }else{
                 $("#pTracking").val('');
                 $("#pModel").val('');
                 $("#pCustomer").val('');
               }
             }
   });
}

var UNLINK_IMG_OK = function(File) {

   var act = 'DEL_IMG';
   var pNameFile = File;
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Name=" + File,
             success: function(data) {
               if (data.response == 'success')
               {
                  show_image_OK('');
                  $("#pPictureOKH").val('');
               }
            }
   });
}

var UNLINK_IMG_NG = function(File) {

   var act = 'DEL_IMG';
   var pNameFile = File;
   $.ajax({
             type: "GET",
             url: "main.class.php",
             dataType: "json",
             data: "action=" + act
             + "&Name=" + File,
             success: function(data) {
               if (data.response == 'success')
               {
                  show_image_NG('');
                  $("#pPictureNGH").val('');
               }
            }
   });
}

function DeptDetail(Process) {
            var act = 'STBL_UPD_DEPT';
            var url = "main.class.php?action="+act;
            var pData = {
                Process : Process
            };
            var source =
            {
                datatype: "json",
                url: url,
                type : 'POST',
                data : pData,
                root: 'data',
                datafields: [
                    { name: 'ID', type: 'string' },
                    { name: 'Dept', type: 'string' }
                ]
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
             //$("#Line").jqxDropDownList({source: dataAdapter});
             return dataAdapter;
  }

function show_image_OK(src) {
  document.getElementById("psImgOK").src = "eder_image\\" + src;
}

function show_image_NG(src) {
  document.getElementById("psImgNG").src = "eder_image\\" + src;
}
