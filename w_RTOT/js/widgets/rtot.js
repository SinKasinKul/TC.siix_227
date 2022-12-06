$(document).ready(function () {

  const dateObj = new Date();
  const month = dateObj.getMonth() + 1;
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const output = year + '-' + month + '-' + day;

  //$("cNormal").hide();
  //$("cHoliday").hide();

  var cN = document.getElementById("cNormal");
      cN.style.display = "none";

  var cH = document.getElementById("cHoliday");
      cH.style.display = "none";

  $('input[name=pType]').attr("disabled",true);
  $('input[name=pShift]').attr("disabled",true);

  $("#pOTDate").jqxDateTimeInput({
        width: '150px',
        height: '25px',
        allowNullDate: true,
        //editMode: 'full',
        readonly : true,
        formatString: 'yyyy-MM-dd',
        showFooter: true,
        value: null,
        theme: "darkblue"
        //yearCutoff: 1926
    });
  $("#pOTDate").val(output);


  $("#pOTDateSat").jqxDateTimeInput({
        width: '150px',
        height: '25px',
        allowNullDate: true,
        //editMode: 'full',
        readonly : true,
        formatString: 'yyyy-MM-dd',
        showFooter: true,
        value: null,
        theme: "darkblue"
        //yearCutoff: 1926
    });
  $('#pOTDateSat').jqxDateTimeInput({disabled: true});

  $("#pOTDateSun").jqxDateTimeInput({
        width: '150px',
        height: '25px',
        allowNullDate: true,
        //editMode: 'full',
        readonly : true,
        formatString: 'yyyy-MM-dd',
        showFooter: true,
        value: null,
        theme: "darkblue"
        //yearCutoff: 1926
    });
  $('#pOTDateSun').jqxDateTimeInput({disabled: true});


  $('input[type=radio][name=pShift]').on('change', function() {
    var pEmpID = $("#pEmpID").val();
    var pEmpIDLEN = pEmpID.length;
    var vShift = $('input[type=radio][name=pShift]:checked').val();

    if(pEmpIDLEN == 6){
        $('input[name=pType]').attr("disabled",false);
      }
      else{
        $("#pEmpID").val("");
        $("#pEmpID").focus();
      }
    });

  $('input[type=radio][name=pType]').on('change', function() {
    var pEmpID = $("#pEmpID").val();
    var pEmpIDLEN = pEmpID.length;

    if(pEmpIDLEN == 6){
        switch ($(this).val()) {
          case 'Normal':
            cN.style.display = "block";
            cH.style.display = "none";
            break;
          case 'Holiday':
            cH.style.display = "block";
            cN.style.display = "none";
            break;
        }
      }
      else{
        $("#pEmpID").val("");
        $("#pEmpID").focus();
      }
    });

  $('input[type=radio][name=pConfirmH]').on('change', function() {
      switch ($(this).val()) {
        case 'Sat':
          $('#pOTDateSat').jqxDateTimeInput({disabled: false});
          $('#pOTDateSun').jqxDateTimeInput({disabled: true});
          $('#pOTDateSat').focus();
          $('#pOTDateSun').val("");
          break;
        case 'Sun':
          $('#pOTDateSat').jqxDateTimeInput({disabled: true});
          $('#pOTDateSun').jqxDateTimeInput({disabled: false});
          $('#pOTDateSun').focus();
          $('#pOTDateSat').val("");
          break;
        case 'SatSun':
          $('#pOTDateSat').jqxDateTimeInput({disabled: false});
          $('#pOTDateSun').jqxDateTimeInput({disabled: false});
          break;
      }
    });

    $('#vbSaveNormal').on('click', function() {
        var pEmpID = $("#pEmpID").val();
        var pEmpIDLEN = pEmpID.length;

        if(pEmpIDLEN == 6){
          var vDept = $("#pDept").val();
          var vID = $("#pEmpID").val();
          var vType = $('input[type=radio][name=pType]:checked').val();
          var vDate = $("#pOTDate").val();
          var pConfirm = $('input[type=radio][name=pConfirm]:checked').val();

          STBL_RTOT_NORMAL_INS(vDept,vID,vType,vDate,pConfirm);
          //alert(vID + "-" + vType + "-" + vDate + "-" + pConfirm);
        }
        else{
          $("#pEmpID").val("");
          $("#pEmpID").focus();
        }

      });

    $('#vbSaveHoliday').on('click', function() {
        var vDept = $("#pDept").val();
        var vID = $("#pEmpID").val();
        var vType = $('input[type=radio][name=pType]:checked').val();
        var pConfirmH = $('input[type=radio][name=pConfirmH]:checked').val();
        var vDateSat = $("#pOTDateSat").val();
        var vDateSun = $("#pOTDateSun").val();

        STBL_RTOT_HOLIDAY_INS(vDept,vID,vType,pConfirmH,vDateSat,vDateSun);
      });

      $("#pBus").jqxDropDownList({ placeHolder: "Select Bus", displayMember: "Name_Bus", valueMember: "Bus_ID", width: '200px',theme: "darkblue"});
      $("#pBus").on('select', function (event) {
          if (event.args) {
              var item = event.args.item;
              $("#vpBus").html(item.value);
              $("#vpBusL").html(item.label);
          }
      });
      $("#pEmpGroup").jqxDropDownList({ placeHolder: "Select Group", displayMember: "Team", valueMember: "Team", width: '200px',theme: "darkblue"});//, autoDropDownHeight: true
      $("#pEmpGroup").on('select', function (event) {
          if (event.args) {
              var item = event.args.item;
              $("#vpEmpGroup").html(item.value);
          }
      });

      $("#pDept").prop( "disabled", true );

      var vpDept = $("#pDept").val();
      STBL_LIST_GROUP(vpDept);
      STBL_LIST_BUS_GROUP();

      $("#pEmpID").keyup(function() {
        var pEmpID = $("#pEmpID").val();
        var pEmpIDLEN = pEmpID.length;

        if(pEmpIDLEN == 6){
          //alert(pEmpIDLEN);
          STBL_EMP_SEC(pEmpID);
        }

        if(pEmpIDLEN > 6){
          $("#pEmpID").val("");
          $("#pEmpID").focus();
        }

      });

      //$("#pEmpGroup").val("STAFF : 1");


});

function STBL_LIST_GROUP(vDEPT) {
              var act = 'STBL_LIST_GROUP';
              var url = "main.class.php?action="+act;
              var pData = {
                  Department : vDEPT
              };
              // prepare the data
              var source =
              {
                  datatype: "json",
                  datafields: [
                      { name: 'Team' }
                  ],
                  url: url,
                  data : pData,
                  type : 'POST',
                  async: true
              };
              var dataAdapter = new $.jqx.dataAdapter(source);
              $("#pEmpGroup").jqxDropDownList({source: dataAdapter, displayMember: "Team", valueMember: "Team"});
};

function STBL_LIST_BUS_GROUP() {
              var act = 'STBL_LIST_BUS_GROUP';
              var url = "main.class.php?action="+act;
              var pData = {
                  //Department : vDEPT
              };
              // prepare the data
              var source =
              {
                  datatype: "json",
                  datafields: [
                      { name: 'Bus_ID', type: 'string' },
                      { name: 'Name_Bus', type: 'string' }
                  ],
                  url: url,
                  data : pData,
                  type : 'POST',
                  async: true
              };
              var dataAdapter = new $.jqx.dataAdapter(source);
              $("#pBus").jqxDropDownList({source: dataAdapter, displayMember: "Name_Bus", valueMember: "Bus_ID"});
};

function STBL_EMP_SEC(vEmpID) {

        var pEmpID = vEmpID;

         var act = 'STBL_EMP_SEC';
         var url = "main.class.php?action="+ act;
         var pData = {
             EmpID : pEmpID
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vEmpName = '';
                     var vEmpTeam = '';
                     var vBusID = '';
                     var vBusName = '';
                     if(data.data.length > 0)
                     {
                       vEmpName = data.data[0].EmpName;
                       vEmpTeam = data.data[0].EmpTeam;
                       vBusID = data.data[0].BUS_ID;
                       vBusName = data.data[0].Name_Bus;

                       $("#vpEmpGroup").html(vEmpTeam);
                       $("#vpBus").html(vBusID);
                       $("#vpBusL").html(vBusName);
                       $("#pEmpID").prop( "disabled", true );

                       if (vBusID == '') {
                         alert("กรุณาเลือกสายรถด้วยนะครับ");
                       }
                       $('input[name=pShift]').attr("disabled",false);
                     }
                     else
                     {
                       $("#pEmpID").val("");
                       $("#pEmpID").focus();
                       alert("ไม่พบข้อมูลพนักงาน");
                     }
                   },
                   error: function(xhr, status, error){
                       alert("Error");
                       $("#pEmpID").val("");
                       $("#pEmpID").focus();
                    }
         });
}

function STBL_RTOT_NORMAL_INS(vDept,vID,vType,vDate,vConfirm) {

        var pDept = vDept;
        var pEmpID = vID;
        var pEmpGroup = $("#vpEmpGroup").html();
        var pBus = $("#vpBus").html();
        var pDate = vDate;
        var pType = vType;
        var pConfirm = vConfirm;
        var pShift = $('input[type=radio][name=pShift]:checked').val();

         var act = 'STBL_RTOT_NORMAL_INS';
         var url = "main.class.php?action="+ act;
         var pData = {
             Department : pDept,
             EmployeeID : pEmpID,
             EmpGroup : pEmpGroup,
             WorkingDate : pDate,
             WorkingType : pType,
             OTNormal : pConfirm,
             BUS : pBus,
             SHIFT : pShift

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
                         alert(vResult);
                         location.reload();
                     }
                     else
                     {
                         alert(vResult);
                         location.reload();
                     }
                   },
                   error: function(xhr, status, error){
                       alert("Error");
                       location.reload();
                    }
         });
}

function STBL_RTOT_HOLIDAY_INS(vDept,vID,vType,vConfirmH,vDateSat,vDateSun) {

        var pDept = vDept;
        var pEmpID = vID;
        var pEmpGroup = $("#vpEmpGroup").html();
        var pBus = $("#vpBus").html();
        var pType = vType;
        var pConfirmH = vConfirmH;
        var pDateSat = vDateSat;
        var pDateSun = vDateSun;
        var pShift = $('input[type=radio][name=pShift]:checked').val();

         var act = 'STBL_RTOT_HOLIDAY_INS';
         var url = "main.class.php?action="+ act;
         var pData = {
             Department : pDept,
             EmployeeID : pEmpID,
             EmpGroup : pEmpGroup,
             WorkingType : pType,
             WorkingTypeH : pConfirmH,
             DateSat : pDateSat,
             DateSun : pDateSun,
             BUS : pBus,
             SHIFT : pShift
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
                         alert(vResult);
                         location.reload();
                     }
                     else
                     {
                         alert(vResult);
                         location.reload();
                     }
                   },
                   error: function(xhr, status, error){
                     console.log(error);
                       alert("Error");
                       location.reload();
                    }
         });
}
