$(document).ready(function () {
    $('#pTechID').jqxInput({placeHolder: "Technician ID",height: 30, width: 100, disabled: false});
    $('#pTechID').on('keyup', function() {
        var pTechID = $("#pTechID").val();
        var pTechIDLEN = pTechID.length;

        if(pTechIDLEN > 5){
            checkName(pTechID);
          }
        });
    $('#pTechName').jqxInput({placeHolder: "Technician Name",height: 30, width: 120});
    STBL_MACHINE_LIST();
    $("#ListMachine").jqxDropDownList({
        placeHolder: "Machine", selectedIndex: -1, displayMember: "Machine", valueMember: "Machine", width: 200, height: 30,
    });
    $("#ListMachine").on('select', function (event) {
        if (event.args) {
            var item = event.args.item;
            STBL_ISSUE_LIST(item.value)
            //console.log(item['value']);
        }
    });
    $("#IssueMachine").jqxDropDownList({
        placeHolder: "Issues", selectedIndex: -1, displayMember: "Issues", valueMember: "Issues", width: "100%", height: 30,
    });
    $("#IssueMachine").on('select', function (event) {
        if (event.args) {
            var item = event.args.item;
            if(item.value == 'Other'){
                $('#pIssueOther').jqxInput({disabled: false});
            }   $('#pIssueOther').focus();
        }
    });
    $('#pIssueOther').jqxInput({placeHolder: "Other",height: 30, width: "100%",disabled: true});
    $('#pTechID').focus();

    $("#gridJobList").jqxGrid({
        width: '100%',
        height: 150,
        altrows: true,
        sortable: true,
        showstatusbar: true,
        statusbarheight: 25,
        showaggregates: true,
        theme: "darkblue",
        selectionmode: 'multiplerowsextended',
        columns: [
          { text: '#JobID', datafield: 'ID', width: 80, align: 'center', cellsalign: 'center'},
          { text: 'Line', datafield: 'Line', width: 100, align: 'center', cellsalign: 'center'},
          { text: 'Status', datafield: 'Status', width: 100, align: 'center', cellsalign: 'center'},
          { text: 'Accecp', datafield: 'Accecp', columntype: 'button', minwidth: 100, align: 'center', cellsrenderer: function () {
            return "Accecp";
           }, buttonclick: function (row) {
              editrow = row;
              var offset = $("#gridItemMaster").offset();
              var dataRecord = $("#gridJobList").jqxGrid('getrowdata', editrow);

              var vJobID = dataRecord.ID;
              var vMC = $("#ListMachine").val();
              var vIssue = $("#IssueMachine").val();
              var vIssueOther = $("#pIssueOther").val();
              var vtechID = $("#pTechID").val();
              
              STBL_UPD_ACCP_JOB_I(vJobID,vtechID,vMC,vIssue,vIssueOther);
          }
         }
        ]
    });
    var vLine = $('#vSMTLine').html();
    gridJobList(vLine);
});

function checkName(pID){
    var vID = pID;
    var act = 'ChkUser';
    var url = "main.class.php?action="+ act;
    var pData = {
        TectID : vID
    };

    $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: pData,
            success: function(e) {
                var data = e;
                var vEmpName = data.data[0].EmpName;

                if(vEmpName != "Not Found" && vEmpName != ""){
                    $('#pTechName').val(vEmpName)
                    $('#pTechID').jqxInput({disabled: true});
                }
                else
                {
                    $('#pTechID').val("");
                    $('#pTechID').focus();
                }
            },
            error: function(xhr, status, error){
                console.log(error);
                alert("Error");
                location.reload();
            }
    });
}

function STBL_MACHINE_LIST() {
    var act = 'STBL_MACHINE_LIST';
    var url = "main.class.php?action="+act

    var source =
    {
        datatype: "json",
        datafields: [
            { name: 'Machine', type: 'string' }
        ],
        url: url,
        root: 'data'
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    $("#ListMachine").jqxDropDownList({source: dataAdapter});
}

function STBL_ISSUE_LIST(vMC) {
    var act = 'STBL_ISSUE_LIST';
    var url = "main.class.php?action="+act
    var pData = {
        Machine : vMC
    };

    var source =
    {
        datatype: "json",
        datafields: [
            { name: 'Issues', type: 'string' }
        ],
        url: url,
        type: "POST",
        data: pData,
        root: 'data'
    };
    var dAIssueMachine = new $.jqx.dataAdapter(source);
    $("#IssueMachine").jqxDropDownList({source: dAIssueMachine});
}

function gridJobList(vLine) {
    var act = 'STBL_GET_ACCECP_MC_LINE';
    var url = "main.class.php?action="+act
    var pData = {
        Line : vLine
    };

    var source =
    {
        datatype: "json",
        datafields: [
            { name: 'ID', type: 'string' },
            { name: 'Location', type: 'string' },
            { name: 'Line', type: 'string' },
            { name: 'Machine', type: 'string' },
            { name: 'Issue', type: 'string' },
            { name: 'TechCode', type: 'string' },
            { name: 'EmgineerCode', type: 'string' },
            { name: 'Req_Date', type: 'string' },
            { name: 'Status', type: 'string' }
        ],
        url: url,
        type: "POST",
        data: pData,
        root: 'data'
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    $("#gridJobList").jqxGrid({source: dataAdapter});
}

function STBL_UPD_ACCP_JOB_I(pID,pEmpCode,pMC,pIssue,pOther){

    var act = 'STBL_UPD_ACCP_JOB_I';
    var url = "main.class.php?action=" + act;
    var vLine = $('#vSMTLine').html();

    if(pEmpCode == ""){
        alert("Please login.");
        $("#pTechID").focus();
        return;
    }

    if(pMC == ""){
        alert("Please select Machine.");
        $("#ListMachine").jqxDropDownList('open' );
        return;
    }

    if(pIssue == ""){
        alert("Please select Issue.");
        $("#IssueMachine").jqxDropDownList('open' );
        return;
    }

    if(pIssue == "Other" && pOther == ""){
        alert("Please input Other detail.");
        $("#pIssueOther").focus();
        return;
    }


    var pData = {
        ID : pID,
        EngCode : pEmpCode,
        Machine : pMC,
        Issue : pIssue,
        Other : pOther
    };

    $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: pData,
            success: function(e) {
                var data = e;
                var vResult = data.data[0].Result;
                gridJobList(vLine)
                alert("Confirm status : " + vResult);
                $("#pTechID").val("");
                $("#pTechName").val("");
                $("#pIssueOther").val("");
                $("#ListMachine").val("");
                $("#IssueMachine").val("");
            },
            error: function(xhr, status, error){
                alert("Error");
                location.reload();
            }
    });
}
