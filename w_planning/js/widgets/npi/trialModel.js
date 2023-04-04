$(document).ready(function () {

      $("#gridTrialModel").jqxGrid({
            width: "100%",
            height: 535,
            altrows: true,
            filterable: true,
            sortable: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            theme: theme,
            pageable: true,
            pagesize: 20,
            groupable: true,
            pagesizeoptions: ['20', '50', '100', '500', '1000'],
            //selectionmode: 'multiplerowsextended',
            columns: [
              { text: 'Date', datafield: 'DATE_UPDATE', width: 100, align: 'center', filtertype: 'checkedlist'},
              { text: 'Customer', datafield: 'CUS', width: 100, align: 'center', cellsalign: 'left', filtertype: 'checkedlist'},
              { text: 'Item Code', datafield: 'TIEMCD', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Model Name', datafield: 'MODELNAME', width: 180, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Model No', datafield: 'MODELNO', minwidth: 120, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Tacking', datafield: 'TRACKING', width: 100, align: 'center', cellsalign: 'center'},
              //{ text: 'Link', datafield: 'LINK_DOCU', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Status', datafield: 'STATUS', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Link', datafield: 'Link', width: 50, align: 'center', columntype: 'button', cellsrenderer: function () {
                       return "Link";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridTrialModel").jqxGrid('getrowdata', editrow);
                       var vLINK_DOCU = dataRecord.LINK_DOCU;
                       window.open(vLINK_DOCU);
                 }
               },
              { text: 'Edit', datafield: 'Edit', width: 50, align: 'center', columntype: 'button', cellsrenderer: function () {
                       return "Edit";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridTrialModel").jqxGrid('getrowdata', editrow);
                       var vID = dataRecord.ID;
                       var vCUS = dataRecord.CUS;
                       var vTIEMCD = dataRecord.TIEMCD;
                       var vMODELNAME = dataRecord.MODELNAME;
                       var vMODELNO = dataRecord.MODELNO;
                       var vTRACKING = dataRecord.TRACKING;
                       var vLINK_DOCU = dataRecord.LINK_DOCU;
                       var vSTATUS = dataRecord.STATUS;

                       $("#vTMtype").html('Edit');
                       $("#vTM_CUS").val(vCUS);
                       $("#vTM_TIEMCD").val(vTIEMCD);
                       $("#vTM_MODELNAME").val(vMODELNAME);
                       $("#vTM_MODELNO").val(vMODELNO);
                       $("#vTM_TRACKING").val(vTRACKING);
                       $("#vTM_LINK_DOCU").val(vLINK_DOCU);
                       $("#vTM_STATUS").val(vSTATUS);
                       $("#vTM_ID").val(vID);

                       $("#TrialModel").jqxWindow('open');
                 }
               },
               { text: 'Delete', datafield: 'Delete', width: 50, align: 'center', columntype: 'button', cellsrenderer: function () {
                        return "Delete";
                     }, buttonclick: function (row) {
                        // open the popup window when the user clicks a button.
                        editrow = row;
                        // get the clicked row's data and initialize the input fields.
                        var dataRecord = $("#gridTrialModel").jqxGrid('getrowdata', editrow);
                        var ID = dataRecord.ID;
                        var Tracking = dataRecord.TRACKING;
                        if(ID != ''){
                          var r = confirm("Do you want to delete data "+ Tracking + " ?");
                            if (r == true) {
                                STBL_TRIAL_MODEL_DEL(ID);
                            }
                        }
                  }
                }
            ]
        });
      STBL_TRIAL_MODEL_SEC();

      $('#gridTrialModel').on('rowselect', function (event)
        {
            var vTRACKING = event.args.row.TRACKING;
            if(vTRACKING != ''){
              $("#vTSTracking").html(vTRACKING);
              $("#vTSProcessFlow").html(vTRACKING);
              STBL_FLOWS_SEC(vTRACKING);
              STBL_TROUBLE_SEC(vTRACKING);
              STBL_PROCESS_SEC_TS(vTRACKING);
            }
        });

      $("#gridProcessFlow").jqxGrid({
            width: "100%",
            height: 535,
            altrows: true,
            filterable: true,
            sortable: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            theme: theme,
            pageable: true,
            pagesize: 20,
            groupable: true,
            pagesizeoptions: ['20', '50', '100', '500', '1000'],
            //selectionmode: 'multiplerowsextended',
            columns: [
              { text: 'No', datafield: 'No', width: 50, align: 'center', filtertype: 'checkedlist'},
              { text: 'Type', datafield: 'TYPE', width: 80, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Process', datafield: 'PROCESS', minwidth: 100, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: '%', datafield: 'CHK_PERCENT', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Delete', datafield: 'Delete', width: 50, align: 'center', columntype: 'button', cellsrenderer: function () {
                       return "Delete";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridProcessFlow").jqxGrid('getrowdata', editrow);
                       var vID = dataRecord.ID;
                       var vPROCESS = dataRecord.PROCESS;
                       var vTRACKING = dataRecord.TRACKING;
                       $('#vPF_ID').val(vID);
                       if(vID != ''){
                         var r = confirm("Do you want to delete process "+ vPROCESS + " ?");
                           if (r == true) {
                               STBL_FLOWS_DEL(vID, vTRACKING);
                           }
                       }
                 }
               }
            ]
        });

      $("#gridTroubleShooting").jqxGrid({
            width: "100%",
            height: 535,
            altrows: true,
            filterable: true,
            sortable: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            theme: theme,
            pageable: true,
            pagesize: 20,
            groupable: true,
            pagesizeoptions: ['20', '50', '100', '500', '1000'],
            selectionmode: 'multiplerowsextended',
            columns: [
              { text: '#', datafield: 'No', width: 30, align: 'center', cellsalign: 'center'},
              { text: 'Date', datafield: 'DATE_INSERT', width: 100, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              { text: 'Status', datafield: 'STATUS', width: 80, align: 'center', cellsalign: 'center'},
              //{ text: 'Customer', datafield: 'Customer', width: 100, align: 'center', cellsalign: 'left', filtertype: 'checkedlist'},
              //{ text: 'Item Code', datafield: 'ItemCode', width: 100, align: 'center', cellsalign: 'center'},
              //{ text: 'Model Name', datafield: 'ModelName', width: 180, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              //{ text: 'Model No', datafield: 'ModelNo', minwidth: 120, align: 'center', cellsalign: 'center', filtertype: 'checkedlist'},
              //{ text: 'Tacking', datafield: 'TRACKING', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Event', datafield: 'EVENT', minwidth: 120, align: 'center', cellsalign: 'center'},
              { text: 'Process', datafield: 'PROCESS', width: 100, align: 'center', cellsalign: 'center'},
              { text: 'Open Point', datafield: 'Open Point', width: 80, align: 'center', columntype: 'button', cellsrenderer: function () {
                       return "Open Point";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridTroubleShooting").jqxGrid('getrowdata', editrow);
                       var vTROUBLE = dataRecord.TROUBLE;
                       var vCAUSE = dataRecord.CAUSE;
                       var vACTION = dataRecord.ACTION;

                       $("#vOP_TROUBLE").val(vTROUBLE);
                       $("#vOP_CAUSE").val(vCAUSE);
                       $("#vOP_ACTION").val(vACTION);

                       $("#vWDOpenPoint").html('Data');
                       $("#windowOpenPoint").jqxWindow('open');

                 }
               },
              //{ text: 'TROUBLE', datafield: 'TROUBLE', width: 180, columngroup: 'OpenPoint', align: 'center', cellsalign: 'center'},
              //{ text: 'CAUSE', datafield: 'CAUSE', width: 180, columngroup: 'OpenPoint', align: 'center', cellsalign: 'center'},
              //{ text: 'ACTION', datafield: 'ACTION', width: 180, columngroup: 'OpenPoint', align: 'center', cellsalign: 'center'},
              { text: 'NG (%)', datafield: 'NG_PERCENT', width: 60, align: 'center', cellsalign: 'center'},
              { text: 'Current Condition', datafield: 'Current Condition', width: 140, align: 'center', columntype: 'button', cellsrenderer: function () {
                       return "Current Condition";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridTroubleShooting").jqxGrid('getrowdata', editrow);
                       var vCURRENT_CONDITION = dataRecord.CURRENT_CONDITION;

                       document.getElementById("vCC_ImgCURRENT_CONDITION").src = "picture\\CURRENT_CONDITION\\" + vCURRENT_CONDITION;

                       $("#vWDCONDITION").html('Data');
                       $("#windowCONDITION").jqxWindow('open');

                 }
               },
               { text: 'Proposal', datafield: 'Proposal', width: 100, align: 'center', columntype: 'button', cellsrenderer: function () {
                        return "Proposal";
                     }, buttonclick: function (row) {
                        // open the popup window when the user clicks a button.
                        editrow = row;
                        // get the clicked row's data and initialize the input fields.
                        var dataRecord = $("#gridTroubleShooting").jqxGrid('getrowdata', editrow);
                        var vPRPPOSAL_TXT = dataRecord.PRPPOSAL_TXT;
                        var vPRPPOSAL_IMG = dataRecord.PRPPOSAL_IMG;

                        $("#vPP_PRPPOSAL").val(vPRPPOSAL_TXT);

                        document.getElementById("vPP_ImgPRPPOSAL").src = "picture\\PRPPOSAL_IMG\\" + vPRPPOSAL_IMG;

                        $("#vWDPRPPOSAL").html('Data');
                        $("#windowPRPPOSAL").jqxWindow('open');

                  }
                },
              { text: 'Target', datafield: 'TARGET', width: 90, align: 'center', cellsalign: 'center'},
              { text: 'Actual', datafield: 'ACTUAL', width: 90, align: 'center', cellsalign: 'center'},
              { text: 'Result', datafield: 'RESULT', width: 180, align: 'center', cellsalign: 'center'},
              { text: 'PIC', datafield: 'PIC_RESPONSE', width: 80, align: 'center', cellsalign: 'center'},
              { text: 'Judgement', datafield: 'JUDGMENT', width: 80, align: 'center', cellsalign: 'center'},
              { text: 'Edit', datafield: 'Edit', width: 50, align: 'center', columntype: 'button', cellsrenderer: function () {
                       return "Edit";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridTroubleShooting").jqxGrid('getrowdata', editrow);
                       var vID = dataRecord.ID;
                       var vTRACKING = dataRecord.TRACKING;
                       var vEVENT = dataRecord.EVENT;
                       var vPROCESS = dataRecord.PROCESS;
                       var vTROUBLE = dataRecord.TROUBLE;
                       var vCAUSE = dataRecord.CAUSE;
                       var vACTION = dataRecord.ACTION;
                       var vNG_PERCENT = dataRecord.NG_PERCENT;
                       var vPRPPOSAL_TXT = dataRecord.PRPPOSAL_TXT;
                       var vCURRENT_CONDITION = dataRecord.CURRENT_CONDITION;
                       var vPRPPOSAL_IMG = dataRecord.PRPPOSAL_IMG;
                       var vTARGET = dataRecord.TARGET;
                       var vACTUAL = dataRecord.ACTUAL;
                       var vRESULT = dataRecord.RESULT;
                       var vSTATUS = dataRecord.STATUS;
                       var vPIC_RESPONSE = dataRecord.PIC_RESPONSE;
                       var vJUDGMENT = dataRecord.JUDGMENT;

                       $("#vTS_EVENT").val(vEVENT);
                       $("#vTS_PROCESS").val(vPROCESS);
                       $("#vTS_TROUBLE").val(vTROUBLE);
                       $("#vTS_CAUSE").val(vCAUSE);
                       $("#vTS_ACTION").val(vACTION);
                       $("#vTS_NG_PERCENT").val(vNG_PERCENT);
                       $("#vTS_PRPPOSAL_TXT").val(vPRPPOSAL_TXT);
                       $("#vTS_CURRENT_CONDITION_pic").val(vCURRENT_CONDITION);
                       $("#vTS_PRPPOSAL_IMG_pic").val(vPRPPOSAL_IMG);
                       $("#vTS_TARGET").val(vTARGET);
                       $("#vTS_ACTUAL").val(vACTUAL);
                       $("#vTS_RESULT").val(vRESULT);
                       $("#vTS_STATUS").val(vSTATUS);
                       $("#vTS_PIC_RESPONSE").val(vPIC_RESPONSE);
                       $("#vTS_JUDGMENT").val(vJUDGMENT);
                       $("#vTS_ID").val(vID);

                       show_image_CONDITION(vCURRENT_CONDITION);
                       show_image_PRPPOSAL(vPRPPOSAL_IMG);


                       $("#vWDTroubleShooting").html('Edit');
                       $("#windowTroubleShooting").jqxWindow('open');

                 }
               },
               { text: 'Delete', datafield: 'Delete', width: 50, align: 'center', columntype: 'button', cellsrenderer: function () {
                        return "Delete";
                     }, buttonclick: function (row) {
                        // open the popup window when the user clicks a button.
                        editrow = row;
                        // get the clicked row's data and initialize the input fields.
                        var dataRecord = $("#gridTroubleShooting").jqxGrid('getrowdata', editrow);
                        var vID = dataRecord.ID;
                        var vTracking = dataRecord.TRACKING;
                        var vPROCESS = dataRecord.PROCESS;
                        if(vID != ''){
                          var r = confirm("Do you want to delete process "+ vPROCESS + " ?");
                            if (r == true) {
                                STBL_TROUBLE_DEL(vID, vTracking);
                            }
                        }
                  }
                }
            ]
        });

      $("#vbtAddTrialModel").click(function () {
          $("#vTMtype").html('Add');
          $("#TrialModel").jqxWindow('open');
        });

        /*---------Update Status POP UP------------*/
          $("#TrialModel").jqxWindow({
                  width: 600,
                  height: 425,
                  resizable: false,
                  autoOpen: false,
                  showCollapseButton: true,
                  isModal: true,
                  modalOpacity: 0.3
              });
        /*-------------------------------------------*/
        $('#TrialModel').on('close', function (event) {
            clearTMFrom();
        });

        $("#vTM_Save").click(function () {
            var vType = $("#vTMtype").html();

            if(vType == 'Add')
            {
              STBL_TRIAL_MODEL_INS();
            }
            else if(vType == 'Edit')
            {
              STBL_TRIAL_MODEL_UPD();
            }
            else {
              clearTMFrom();
              $("#TrialModel").jqxWindow('close');
            }
          });

        $("#vTM_Cancel").click(function () {
            clearTMFrom();
            $("#TrialModel").jqxWindow('close');
          });

        var sourceSTATUS = ["Completed","Wait result","On going"];

        $("#vTM_CUS").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
        $("#vTM_TIEMCD").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
        $("#vTM_MODELNAME").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
        $("#vTM_MODELNO").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
        $("#vTM_TRACKING").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
        $("#vTM_LINK_DOCU").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
        $("#vTM_STATUS").jqxDropDownList({ source: sourceSTATUS, placeHolder: "Status", autoDropDownHeight: true, width: '100%',theme: "darkblue"});


        $("#vbtAddProcessFlow").click(function () {
            var vTracking = $('#vTSProcessFlow').html();
            if(vTracking.length == 10)
            {
              $("#vWDProcessFlows").html('Add');
              $("#windowProcessFlows").jqxWindow('open');
            }
            else
            {
              alert("Please select Tracking.");
            }
          });

          /*---------Update Status POP UP------------*/
            $("#windowProcessFlows").jqxWindow({
                    width: 400,
                    height: 200,
                    resizable: false,
                    autoOpen: false,
                    showCollapseButton: true,
                    isModal: true,
                    modalOpacity: 0.3
                });
          /*-------------------------------------------*/
          $('#vbtAddProcessFlow').on('close', function (event) {
              clearPFFrom();
          });

          $("#vPF_Save").click(function () {
              var vType = $("#vWDProcessFlows").html();
              var vTP = $("#vPF_Type").val();
              var vP = $("#vPF_PROCESS").val();
              var vTracking = $("#vTSProcessFlow").html();

              if(vType == 'Add')
              {
                STBL_FLOWS_INS(vTP, vP, vTracking);
              }
              else if(vType == 'Edit')
              {
                //STBL_TRIAL_MODEL_UPD();
              }
              else {
                clearPFFrom();
                $("#windowProcessFlows").jqxWindow('close');
              }
            });

          $("#vPF_Cancel").click(function () {
              clearPFFrom();
              $("#windowProcessFlows").jqxWindow('close');
            });

          var sourcePROCESS = ["Front end","Back end"];
          $("#vPF_Type").jqxDropDownList({ source: sourcePROCESS, placeHolder: "Type", autoDropDownHeight: true, width: '100%',theme: "darkblue"});
          $('#vPF_Type').on('select', function (event)
            {
                var args = event.args;
                if (args)
                {
                    // index represents the item's index.
                    var index = args.index;
                    var item = args.item;
                    // get item's label and value.
                    var label = item.label;
                    var value = item.value;
                    var type = args.type; // keyboard, mouse or null depending on how the item was selected.

                    //console.log(value);
                    STBL_PROCESS_SEC(value);
                }
            });
          $("#vPF_PROCESS").jqxDropDownList({placeHolder: "Process", displayMember: "Step_Name", valueMember: "Step_Name", autoDropDownHeight: true, width: '100%',theme: "darkblue"});

          $("#vbtAddTroubleShooting").click(function () {
              var vTracking = $('#vTSTracking').html();
              if(vTracking.length == 10)
              {
                $("#vWDTroubleShooting").html('Add');
                $("#windowTroubleShooting").jqxWindow('open');
                //STBL_PROCESS_SEC_TS(vTracking);
              }
              else
              {
                alert("Please select Tracking.");
              }
            });

          /*---------Update Status POP UP------------*/
            $("#windowTroubleShooting").jqxWindow({
                    width: 900,
                    height: 650,
                    resizable: false,
                    autoOpen: false,
                    showCollapseButton: true,
                    isModal: true,
                    modalOpacity: 0.3
                });
          /*-------------------------------------------*/
          $('#windowTroubleShooting').on('close', function (event) {
              clearTSFrom();
          });

          $("#vTS_Save").click(function () {
              var vType = $("#vWDTroubleShooting").html();

              if(vType == 'Add')
              {
                STBL_TROUBLE_INS();
              }
              else if(vType == 'Edit')
              {
                STBL_TROUBLE_UPD();
              }
              else {
                clearTSFrom();
                $("#windowProcessFlows").jqxWindow('close');
              }
            });

          $("#vTS_Cancel").click(function () {
              clearPFFrom();
              $("#windowTroubleShooting").jqxWindow('close');
            });

          var TS_sourceSTATUS = ["Completed","Pending","On going"];

          $("#vTS_EVENT").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
          $("#vTS_PROCESS").jqxDropDownList({placeHolder: "Process", displayMember: "PROCESS", valueMember: "PROCESS", autoDropDownHeight: true, width: '100%',theme: "darkblue"});
          $("#vTS_TROUBLE").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
          $("#vTS_CAUSE").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
          $("#vTS_ACTION").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
          $("#vTS_NG_PERCENT").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
          $("#vTS_PRPPOSAL_TXT").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
          $("#vTS_TARGET").jqxDateTimeInput({width: '100%',height: '25px',allowNullDate: true,formatString: 'yyyy-MM-dd',showFooter: true,value: null,theme: "darkblue"});
          $("#vTS_ACTUAL").jqxDateTimeInput({width: '100%',height: '25px',allowNullDate: true,formatString: 'yyyy-MM-dd',showFooter: true,value: null,theme: "darkblue"});
          $("#vTS_RESULT").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
          //$("#vTS_STATUS").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
          $("#vTS_STATUS").jqxDropDownList({ source: TS_sourceSTATUS, placeHolder: "Status", autoDropDownHeight: true, width: '100%',theme: "darkblue"});
          $("#vTS_PIC_RESPONSE").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});
          $("#vTS_JUDGMENT").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue"});

          $("#btDELimgCONDITION").click(function(event) {
            var vFileName = $("#vTS_CURRENT_CONDITION_pic").val();
            UNLINK_IMG_CONDITION(vFileName);
          });
          $("#btDELimgPRPPOSAL").click(function(event) {
            var vFileName = $("#vTS_PRPPOSAL_IMG_pic").val();
            UNLINK_IMG_PRPPOSAL(vFileName);
          });

          $("#windowOpenPoint").jqxWindow({
                  width: 800,
                  height: 230,
                  resizable: false,
                  autoOpen: false,
                  showCollapseButton: true,
                  isModal: true,
                  modalOpacity: 0.3
              });
        /*-------------------------------------------*/
        $('#windowOpenPoint').on('close', function (event) {
            clearOPFrom();
        });

        $("#vOP_Cancel").click(function () {
            clearOPFrom();
            $("#windowOpenPoint").jqxWindow('close');
          });

        $("#vOP_TROUBLE").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue", disabled: true});
        $("#vOP_CAUSE").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue", disabled: true});
        $("#vOP_ACTION").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue", disabled: true});

        $("#windowCONDITION").jqxWindow({
                width: 600,
                height: 530,
                resizable: false,
                autoOpen: false,
                showCollapseButton: true,
                isModal: true,
                modalOpacity: 0.3,
                resizable: true
            });
      /*-------------------------------------------*/
        $("#vCC_Cancel").click(function () {
          $("#windowCONDITION").jqxWindow('close');
        });

        $("#windowPRPPOSAL").jqxWindow({
                width: 600,
                height: 560,
                resizable: false,
                autoOpen: false,
                showCollapseButton: true,
                isModal: true,
                modalOpacity: 0.3,
                resizable: true
            });
      /*-------------------------------------------*/
        $("#vPP_Cancel").click(function () {
          $("#windowPRPPOSAL").jqxWindow('close');
        });

        $("#vPP_PRPPOSAL").jqxInput({height: 20, width: '100%', minLength: 1,theme: "darkblue", disabled: true});

        /*-------------------------------------------*/
        var sTMsourceSTATUS = ["","Completed","Wait result","On going"];
        $("#sTM_MODEL").jqxInput({placeHolder: "Model", height: 30, width: 200, minLength: 1,theme: "darkblue"});
        $("#sTM_STATUS").jqxDropDownList({ source: sTMsourceSTATUS, placeHolder: "Status", autoDropDownHeight: true, height: 30, width: 100,theme: "darkblue"});
        //$("#vbtSearchTrialModel").jqxButton({ height: 25, template: "info" });

        $("#vbtSearchTrialModel").click(function () {
          STBL_TRIAL_MODEL_SEC_HIS();
        });
});

function clearTMFrom() {
  $("#vTM_CUS").val('');
  $("#vTM_TIEMCD").val('');
  $("#vTM_MODELNAME").val('');
  $("#vTM_MODELNO").val('');
  $("#vTM_TRACKING").val('');
  $("#vTM_LINK_DOCU").val('');
  $("#vTM_STATUS").jqxDropDownList('clearSelection');
  $("#vTM_ID").val('');
};

function clearPFFrom() {
  $("#vPF_Type").jqxDropDownList('clearSelection');
  $("#vPF_PROCESS").jqxDropDownList('clearSelection');
  $("#vPF_ID").val('');
};

function clearTSFrom() {
  $("#vTS_EVENT").val('');
  $("#vTS_PROCESS").jqxDropDownList('clearSelection');
  $("#vTS_TROUBLE").val('');
  $("#vTS_CAUSE").val('');
  $("#vTS_ACTION").val('');
  $("#vTS_NG_PERCENT").val('');
  $("#vTS_PRPPOSAL_TXT").val('');
  $("#vTS_CURRENT_CONDITION").val('');
  $("#vTS_PRPPOSAL_IMG").val('');
  $("#vTS_CURRENT_CONDITION_pic").val('');
  $("#vTS_PRPPOSAL_IMG_pic").val('');
  $("#vTS_TARGET").val('');
  $("#vTS_ACTUAL").val('');
  $("#vTS_RESULT").val('');
  $("#vTS_STATUS").val('');
  $("#vTS_PIC_RESPONSE").val('');
  $("#vTS_JUDGMENT").val('');
  $("#vTS_ID").val('');
  show_image_CONDITION('');
  show_image_PRPPOSAL('');
};

function clearOPFrom() {
  $("#vOP_TROUBLE").val('');
  $("#vOP_CAUSE").val('');
  $("#vOP_ACTION").val('');
};

function STBL_PROCESS_SEC(vTYPE) {
              var act = 'STBL_PROCESS_SEC';
              var url = "main.class.php?action="+act;
              var pData = {
                  TYPE : vTYPE
              };
              // prepare the data
              var source =
              {
                  datatype: "json",
                  datafields: [
                      { name: 'Step_Name' }
                  ],
                  url: url,
                  data : pData,
                  type : 'POST',
                  async: true
              };
              var dataAdapter = new $.jqx.dataAdapter(source);
              $("#vPF_PROCESS").jqxDropDownList({source: dataAdapter});
};

function STBL_PROCESS_SEC_TS(pTRACKING) {
              var act = 'STBL_FLOWS_SEC';
              var url = "main.class.php?action="+act;
              var pData = {
                  TRACKING : pTRACKING
              };
              // prepare the data
              var source =
              {
                  datatype: "json",
                  datafields: [
                      { name: 'PROCESS' }
                  ],
                  url: url,
                  data : pData,
                  type : 'POST',
                  async: true
              };
              var dataAdapter = new $.jqx.dataAdapter(source);
              $("#vTS_PROCESS").jqxDropDownList({source: dataAdapter});
};

function STBL_TRIAL_MODEL_SEC() {
            var pDate = '';
            var act = 'STBL_TRIAL_MODEL_SEC';
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
                    { name: 'CUS', type: 'string' },
                    { name: 'TIEMCD', type: 'string' },
                    { name: 'MODELNAME', type: 'string' },
                    { name: 'MODELNO', type: 'string' },
                    { name: 'TRACKING', type: 'string' },
                    { name: 'STATUS', type: 'string' },
                    { name: 'LINK_DOCU', type: 'string' },
                    { name: 'EMPNAME', type: 'string' },
                    { name: 'DATE_UPDATE', type: 'string' }
                ]
            };
            var gridTrialModel = new $.jqx.dataAdapter(source);
            $("#gridTrialModel").jqxGrid({source: gridTrialModel});
  };

function STBL_TRIAL_MODEL_SEC_HIS() {
            var pMODEL = $("#sTM_MODEL").val();
            var pSTATUS = $("#sTM_STATUS").val();
            var act = 'STBL_TRIAL_MODEL_SEC_HIS';
            var url = "main.class.php?action="+act;
            var pData = {
                Model : pMODEL,
                Status : pSTATUS
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
                    { name: 'CUS', type: 'string' },
                    { name: 'TIEMCD', type: 'string' },
                    { name: 'MODELNAME', type: 'string' },
                    { name: 'MODELNO', type: 'string' },
                    { name: 'TRACKING', type: 'string' },
                    { name: 'STATUS', type: 'string' },
                    { name: 'LINK_DOCU', type: 'string' },
                    { name: 'EMPNAME', type: 'string' },
                    { name: 'DATE_UPDATE', type: 'string' }
                ]
            };
            var gridTrialModel = new $.jqx.dataAdapter(source);
            $("#gridTrialModel").jqxGrid({source: gridTrialModel});

            $("#sTM_MODEL").val('');
            $("#sTM_STATUS").jqxDropDownList('clearSelection');
  };

function STBL_TRIAL_MODEL_INS() {

        var vCUS = $("#vTM_CUS").val();
        var vTIEMCD = $("#vTM_TIEMCD").val();
        var vMODELNAME = $("#vTM_MODELNAME").val();
        var vMODELNO = $("#vTM_MODELNO").val();
        var vTRACKING = $("#vTM_TRACKING").val();
        var vLINK_DOCU = $("#vTM_LINK_DOCU").val();
        var vSTATUS = $("#vTM_STATUS").val();
        var vEMPNAME = $("#UserName").html();
        //var vID = $("#vTM_ID").val(vID);

         var act = 'STBL_TRIAL_MODEL_INS';
         var url = "main.class.php?action="+ act;
         var pData = {
             CUS : vCUS,
             TIEMCD : vTIEMCD,
             MODELNAME : vMODELNAME,
             MODELNO : vMODELNO,
             TRACKING : vTRACKING,
             STATUS : vSTATUS,
             LINK_DOCU : vLINK_DOCU,
             EMPNAME : vEMPNAME
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
                         STBL_TRIAL_MODEL_SEC();
                         ShowNoti(vResult,"success");
                         clearTMFrom();
                         $("#TrialModel").jqxWindow('close');
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                   },
                   error: function(xhr, status, error){
                     //console.log(error);
                       alert("Error");
                    }
         });
}

function STBL_TRIAL_MODEL_UPD() {

        var vCUS = $("#vTM_CUS").val();
        var vTIEMCD = $("#vTM_TIEMCD").val();
        var vMODELNAME = $("#vTM_MODELNAME").val();
        var vMODELNO = $("#vTM_MODELNO").val();
        var vTRACKING = $("#vTM_TRACKING").val();
        var vSTATUS = $("#vTM_STATUS").val();
        var vLINK_DOCU = $("#vTM_LINK_DOCU").val();
        var vEMPNAME = $("#UserName").html();
        var vID = $("#vTM_ID").val();

         var act = 'STBL_TRIAL_MODEL_UPD';
         var url = "main.class.php?action="+ act;
         var pData = {
             CUS : vCUS,
             TIEMCD : vTIEMCD,
             MODELNAME : vMODELNAME,
             MODELNO : vMODELNO,
             TRACKING : vTRACKING,
             STATUS : vSTATUS,
             LINK_DOCU : vLINK_DOCU,
             EMPNAME : vEMPNAME,
             ID : vID,
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
                         STBL_TRIAL_MODEL_SEC();
                         ShowNoti(vResult,"success");
                         clearTMFrom();
                         $("#TrialModel").jqxWindow('close');
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                   },
                   error: function(xhr, status, error){
                     //console.log(error);
                       alert("Error");
                    }
         });
}

function STBL_TRIAL_MODEL_DEL(pID) {

        var vID = pID;

         var act = 'STBL_TRIAL_MODEL_DEL';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : vID
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
                         STBL_TRIAL_MODEL_SEC();
                         ShowNoti(vResult,"success");
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                   },
                   error: function(xhr, status, error){
                     //console.log(error);
                       alert("Error");
                    }
         });
}

function STBL_TROUBLE_SEC(pTRACKING) {

            var act = 'STBL_TROUBLE_SEC';
            var url = "main.class.php?action="+act;
            var pData = {
                TRACKING : pTRACKING
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
                    { name: 'No', type: 'string' },
                    { name: 'TRACKING', type: 'string' },
                    { name: 'PROCESS', type: 'string' },
                    { name: 'EVENT', type: 'string' },
                    { name: 'TROUBLE', type: 'string' },
                    { name: 'CAUSE', type: 'string' },
                    { name: 'ACTION', type: 'string' },
                    { name: 'NG_PERCENT', type: 'string' },
                    { name: 'CURRENT_CONDITION', type: 'string' },
                    { name: 'PRPPOSAL_TXT', type: 'string' },
                    { name: 'PRPPOSAL_IMG', type: 'string' },
                    { name: 'TARGET', type: 'string' },
                    { name: 'ACTUAL', type: 'string' },
                    { name: 'RESULT', type: 'string' },
                    { name: 'PIC_RESPONSE', type: 'string' },
                    { name: 'JUDGMENT', type: 'string' },
                    { name: 'STATUS', type: 'string' },
                    { name: 'DATE_INSERT', type: 'string' }
                ]
            };
            var gridTroubleShooting = new $.jqx.dataAdapter(source);
            $("#gridTroubleShooting").jqxGrid({source: gridTroubleShooting});
  };

function STBL_TROUBLE_INS() {

        var vTRACKING = $("#vTSTracking").html();
        var vEVENT = $("#vTS_EVENT").val();
        var vPROCESS = $("#vTS_PROCESS").val();
        var vTROUBLE = $("#vTS_TROUBLE").val();
        var vCAUSE = $("#vTS_CAUSE").val();
        var vACTION = $("#vTS_ACTION").val();
        var vNG_PERCENT = $("#vTS_NG_PERCENT").val();
        var vPRPPOSAL_TXT = $("#vTS_PRPPOSAL_TXT").val();
        var vCURRENT_CONDITION = $("#vTS_CURRENT_CONDITION").val();
        var vPRPPOSAL_IMG = $("#vTS_PRPPOSAL_IMG").val();
        var vTARGET = $("#vTS_TARGET").val();
        var vACTUAL = $("#vTS_ACTUAL").val();
        var vRESULT = $("#vTS_RESULT").val();
        var vSTATUS = $("#vTS_STATUS").val();
        var vPIC_RESPONSE = $("#vTS_PIC_RESPONSE").val();
        var vJUDGMENT = $("#vTS_JUDGMENT").val();
        var vEMPNAME = $("#UserName").html();
        //var vID = $("#vTM_ID").val(vID);
        if(vCURRENT_CONDITION != ''){
          let imgCURRENT_CONDITION = vCURRENT_CONDITION.split('\\');
          vCURRENT_CONDITION = imgCURRENT_CONDITION[2];
        }

        if(vPRPPOSAL_IMG != ''){
          let imgPRPPOSAL_IMG = vPRPPOSAL_IMG.split('\\');
          vPRPPOSAL_IMG = imgPRPPOSAL_IMG[2];
        }

         var act = 'STBL_TROUBLE_INS';
         var url = "main.class.php?action="+ act;
         var pData = {
             TRACKING : vTRACKING,
             EVENT : vEVENT,
             PROCESS : vPROCESS,
             TROUBLE : vTROUBLE,
             CAUSE : vCAUSE,
             ACTION : vACTION,
             NG_PERCENT : vNG_PERCENT,
             PRPPOSAL_TXT : vPRPPOSAL_TXT,
             CURRENT_CONDITION : vCURRENT_CONDITION,
             PRPPOSAL_IMG : vPRPPOSAL_IMG,
             TARGET : vTARGET,
             ACTUAL : vACTUAL,
             RESULT : vRESULT,
             STATUS : vSTATUS,
             PIC_RESPONSE : vPIC_RESPONSE,
             JUDGMENT : vJUDGMENT,
             EMPNAME : vEMPNAME
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "Success"){
                         STBL_TROUBLE_SEC(vTRACKING);
                         ShowNoti(vResult,"success");
                         if(vCURRENT_CONDITION != '')
                         {
                           UploadImageCURRENT_CONDITION();
                         }

                         if(vPRPPOSAL_IMG != '')
                         {
                           UploadImagePRPPOSAL_IMG();
                         }
                         clearTSFrom();
                         $("#windowTroubleShooting").jqxWindow('close');
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                   },
                   error: function(xhr, status, error){
                     //console.log(error);
                       alert("Error");
                    }
         });
}

function STBL_TROUBLE_UPD() {

        var vID = $("#vTS_ID").val();
        var vTRACKING = $("#vTSTracking").html();
        var vEVENT = $("#vTS_EVENT").val();
        var vPROCESS = $("#vTS_PROCESS").val();
        var vTROUBLE = $("#vTS_TROUBLE").val();
        var vCAUSE = $("#vTS_CAUSE").val();
        var vACTION = $("#vTS_ACTION").val();
        var vNG_PERCENT = $("#vTS_NG_PERCENT").val();
        var vPRPPOSAL_TXT = $("#vTS_PRPPOSAL_TXT").val();
        var vCURRENT_CONDITION = $("#vTS_CURRENT_CONDITION").val();
        var vPRPPOSAL_IMG = $("#vTS_PRPPOSAL_IMG").val();
        var vTARGET = $("#vTS_TARGET").val();
        var vACTUAL = $("#vTS_ACTUAL").val();
        var vRESULT = $("#vTS_RESULT").val();
        var vSTATUS = $("#vTS_STATUS").val();
        var vPIC_RESPONSE = $("#vTS_PIC_RESPONSE").val();
        var vJUDGMENT = $("#vTS_JUDGMENT").val();
        var vEMPNAME = $("#UserName").html();
        //var vID = $("#vTM_ID").val(vID);
        if(vCURRENT_CONDITION != ''){
          let imgCURRENT_CONDITION = vCURRENT_CONDITION.split('\\');
          vCURRENT_CONDITION = imgCURRENT_CONDITION[2];
        }

        if(vPRPPOSAL_IMG != ''){
          let imgPRPPOSAL_IMG = vPRPPOSAL_IMG.split('\\');
          vPRPPOSAL_IMG = imgPRPPOSAL_IMG[2];
        }

         var act = 'STBL_TROUBLE_UPD';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : vID,
             TRACKING : vTRACKING,
             EVENT : vEVENT,
             PROCESS : vPROCESS,
             TROUBLE : vTROUBLE,
             CAUSE : vCAUSE,
             ACTION : vACTION,
             NG_PERCENT : vNG_PERCENT,
             PRPPOSAL_TXT : vPRPPOSAL_TXT,
             CURRENT_CONDITION : vCURRENT_CONDITION,
             PRPPOSAL_IMG : vPRPPOSAL_IMG,
             TARGET : vTARGET,
             ACTUAL : vACTUAL,
             RESULT : vRESULT,
             STATUS : vSTATUS,
             PIC_RESPONSE : vPIC_RESPONSE,
             JUDGMENT : vJUDGMENT,
             EMPNAME : vEMPNAME
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "Success"){
                         STBL_TROUBLE_SEC(vTRACKING);
                         ShowNoti(vResult,"success");

                         if(vCURRENT_CONDITION != '')
                         {
                           UploadImageCURRENT_CONDITION();
                         }

                         if(vPRPPOSAL_IMG != '')
                         {
                           UploadImagePRPPOSAL_IMG();
                         }

                         clearTSFrom();
                         $("#windowTroubleShooting").jqxWindow('close');
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                   },
                   error: function(xhr, status, error){
                     //console.log(error);
                       alert("Error");
                    }
         });
}

function STBL_TROUBLE_DEL(pID, pTRACKING) {

        var vID = pID;
        var vTRACKING = pTRACKING;

         var act = 'STBL_TROUBLE_DEL';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : vID
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "Success"){
                         STBL_TROUBLE_SEC(vTRACKING);
                         ShowNoti(vResult,"success");
                         clearTSFrom();
                         $("#windowTroubleShooting").jqxWindow('close');
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                   },
                   error: function(xhr, status, error){
                     //console.log(error);
                       alert("Error");
                    }
         });
}

function STBL_FLOWS_SEC(pTRACKING) {

            var act = 'STBL_FLOWS_SEC';
            var url = "main.class.php?action="+act;
            var pData = {
                TRACKING : pTRACKING
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
                    { name: 'No', type: 'string' },
                    { name: 'TRACKING', type: 'string' },
                    { name: 'TYPE', type: 'string' },
                    { name: 'PROCESS', type: 'string' },
                    { name: 'CHK_PERCENT', type: 'string' },
                    { name: 'TRACKING', type: 'string' },
                    { name: 'DATE_UPDAET', type: 'string' }
                ]
            };
            var gridProcessFlow = new $.jqx.dataAdapter(source);
            $("#gridProcessFlow").jqxGrid({source: gridProcessFlow});
  };

function STBL_FLOWS_INS(pTP,pP,pTracking) {

        var vTYPE = pTP;
        var vPROCESS = pP;
        var vTRACKING = pTracking;
        var vEMPNAME = $("#UserName").html();
        //var vID = $("#vTM_ID").val(vID);

         var act = 'STBL_FLOWS_INS';
         var url = "main.class.php?action="+ act;
         var pData = {
             TYPE : vTYPE,
             PROCESS : vPROCESS,
             TRACKING : vTRACKING,
             CHK_PERCENT : '',
             EMPNAME : vEMPNAME
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
                         STBL_FLOWS_SEC(vTRACKING);
                         ShowNoti(vResult,"success");
                         clearPFFrom();
                         $("#windowProcessFlows").jqxWindow('close');
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                   },
                   error: function(xhr, status, error){
                     //console.log(error);
                       alert("Error");
                    }
         });
}

function STBL_FLOWS_DEL(pID,pTracking) {

        var vID = pID;
        var vTRACKING = pTracking;

         var act = 'STBL_FLOWS_DEL';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : vID
         };

         $.ajax({
                   type: "POST",
                   url: url,
                   dataType: "json",
                   data: pData,
                   success: function(e) {
                     var data = e;
                     var vResult = data.data[0].Result;

                     if(vResult == "Success"){
                         STBL_FLOWS_SEC(vTRACKING);
                         ShowNoti(vResult,"success");
                     }
                     else
                     {
                         ShowNoti(vResult,"warning");
                     }
                   },
                   error: function(xhr, status, error){
                     //console.log(error);
                       alert("Error");
                    }
         });
}

function UploadImageCURRENT_CONDITION(){
    var file_data = $('#vTS_CURRENT_CONDITION').prop('files')[0];
    var form_data = new FormData();
    form_data.append('file', file_data);
    //console.log(form_data);

    var image_name = file_data.name;
    var image_extension = image_name.split('.').pop().toLowerCase();

    if(jQuery.inArray(image_extension,['png','gif','jpg','jpeg','']) == -1){
      //alert("Invalid image file");
      ShowNoti("Invalid image file","warning");
      $("#vTS_CURRENT_CONDITION").val("");
      show_image_CONDITION('');
      return;
    }

    var form_data = new FormData();
    form_data.append("file",file_data);
    console.log(form_data);
    $.ajax({
      url:'Upload_npi_condition.php',
      dataType: 'text',
      method:'POST',
      data:form_data,
      contentType:false,
      cache:false,
      processData:false,
      beforeSend:function(){
        $('#msgCURRENT_CONDITION').html('Loading......');
      },
      success:function(data){
        const obj = JSON.parse(data);
        var vdata = obj.data;
        var vStatus = obj.status;

        if(vStatus != "Success"){
            //EDER_SEC();
            ShowNoti(vdata,"warning");
            //clearfrom();
            $("#vTS_CURRENT_CONDITION").val("");
            show_image_CONDITION('');
        }
        else
        {
            ShowNoti(vdata,"success");
            $('#msgCURRENT_CONDITION').html('');
        }
        //$('#msgIMGOK').html(data);
      }
    });
}

function UploadImagePRPPOSAL_IMG(){
    var file_data = $('#vTS_PRPPOSAL_IMG').prop('files')[0];
    var form_data = new FormData();
    form_data.append('file', file_data);
    //console.log(form_data);

    var image_name = file_data.name;
    var image_extension = image_name.split('.').pop().toLowerCase();

    if(jQuery.inArray(image_extension,['png','gif','jpg','jpeg','']) == -1){
      //alert("Invalid image file");
      ShowNoti("Invalid image file","warning");
      $("#vTS_PRPPOSAL_IMG").val("");
      show_image_PRPPOSAL('');
      return;
    }

    var form_data = new FormData();
    form_data.append("file",file_data);
    console.log(form_data);
    $.ajax({
      url:'Upload_npi_proposal.php',
      dataType: 'text',
      method:'POST',
      data:form_data,
      contentType:false,
      cache:false,
      processData:false,
      beforeSend:function(){
        $('#msgPRPPOSAL_IMG_pic').html('Loading......');
      },
      success:function(data){
        const obj = JSON.parse(data);
        var vdata = obj.data;
        var vStatus = obj.status;

        if(vStatus != "Success"){
            //EDER_SEC();
            ShowNoti(vdata,"warning");
            //clearfrom();
            $("#vTS_PRPPOSAL_IMG").val("");
            show_image_PRPPOSAL('');
        }
        else
        {
            ShowNoti(vdata,"success");
            $('#msgPRPPOSAL_IMG_pic').html('');
        }
        //$('#msgIMGOK').html(data);
      }
    });
}

var UNLINK_IMG_CONDITION = function(File) {

   var act = 'DEL_IMG_CONDITION';
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
                  show_image_CONDITION('');
                  $("#vTS_CURRENT_CONDITION_pic").val('');
               }
            }
   });
}

var UNLINK_IMG_PRPPOSAL = function(File) {

   var act = 'DEL_IMG_PRPPOSAL';
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
                  show_image_PRPPOSAL('');
                  $("#vTS_PRPPOSAL_IMG_pic").val('');
               }
            }
   });
}

function show_image_CONDITION(src) {
  document.getElementById("vTS_ImgCURRENT_CONDITION").src = "picture\\CURRENT_CONDITION\\" + src;
}

function show_image_PRPPOSAL(src) {
  document.getElementById("vTS_ImgPRPPOSAL_IMG").src = "picture\\PRPPOSAL_IMG\\" + src;
}
