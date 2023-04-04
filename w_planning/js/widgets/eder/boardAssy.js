$(document).ready(function () {

      $("#pTracking").jqxInput({placeHolder: 'Tracking', height: 25, width: '15%', minLength: 1,theme: "darkblue"});
      $("#pModel").jqxInput({placeHolder: 'Model', height: 25, width: '15%', minLength: 1,theme: "darkblue"});
      $("#pStartDate").jqxDateTimeInput({
           width: '15%',
           height: '25px',
           allowNullDate: true,
           //editMode: 'full',
           formatString: 'yyyy-MM-dd',
           showFooter: true,
           value: null,
           theme: "darkblue"
           //yearCutoff: 1926
       });
      $("#pEndDate").jqxDateTimeInput({
           width: '15%',
           height: '25px',
           allowNullDate: true,
           //editMode: 'full',
           formatString: 'yyyy-MM-dd',
           showFooter: true,
           value: null,
           theme: "darkblue"
           //yearCutoff: 1926
       });
      $("#btSearch").jqxButton({ height: '25px', template: "info" });
      $("#btSearch").click(function( event ) {
          EDER_SEC_TYPE_Q();
          EDER_SEC_TYPE_C();
          EDER_SEC_TYPE_D();
          EDER_SEC_TYPE_M();
      });

      $("#vMGRCHAL_Challenge").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});
      $("#vMGRCHAL_Action").jqxInput({height: 25, width: '100%', minLength: 1,theme: "darkblue"});


      $("#btMCQ").click(function( event ) {
          $("#vWDMGRCHAL").html('Add');
          $("#vMGRCHAL_TYPE").val('Q');
          var vID = $("#vMCQID").html();
          if(vID != '')
          {
            $("#vMGRCHAL_ID").val(vID);
            $("#windowMGRCHAL").jqxWindow('open');
          }
      });
      $("#btMCC").click(function( event ) {
          $("#vWDMGRCHAL").html('Add');
          $("#vMGRCHAL_TYPE").val('C');
          var vID = $("#vMCCID").html();
          if(vID != '')
          {
            $("#vMGRCHAL_ID").val(vID);
            $("#windowMGRCHAL").jqxWindow('open');
          }
      });
      $("#btMCD").click(function( event ) {
          $("#vWDMGRCHAL").html('Add');
          $("#vMGRCHAL_TYPE").val('D');
          var vID = $("#vMCDID").html();
          if(vID != '')
          {
            $("#vMGRCHAL_ID").val(vID);
            $("#windowMGRCHAL").jqxWindow('open');
          }
      });
      $("#btMCM").click(function( event ) {
          $("#vWDMGRCHAL").html('Add');
          $("#vMGRCHAL_TYPE").val('M');
          var vID = $("#vMCMID").html();
          if(vID != '')
          {
            $("#vMGRCHAL_ID").val(vID);
            $("#windowMGRCHAL").jqxWindow('open');
          }
      });

      $("#gridEDERQuality").jqxGrid(
      {
          width: '100%',
          height: 343,
          altrows: true,
          sortable: true,
          showstatusbar: true,
          statusbarheight: 25,
          showaggregates: true,
          showfilterrow: false,
          filterable: false,
          theme: "darkblue",
          selectionmode: 'multiplerowsextended',
          columns: [
            { text: 'No.', datafield: 'ID', width: 40, align: 'center', cellsalign: 'center'},
            { text: 'Tracking', datafield: 'EDER_Tracking', width: 100, align: 'center', cellsalign: 'center'},
            { text: 'Model', datafield: 'EDER_Model', width: 150, align: 'center'},
            { text: 'Problem', datafield: 'EDER_WhatProblem', minwidth: 100, align: 'center'},
            { text: 'Open', datafield: 'Open', width: 80, columntype: 'button', cellsrenderer: function () {
                     return "Open";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridEDERQuality").jqxGrid('getrowdata', editrow);
                     window.open("from.php?ID=" + dataRecord.ID);
                }
              }
            ]
        });

        $('#gridEDERQuality').on('rowselect', function (event)
        {
            var vID = event.args.row.ID;
            var vProblem = event.args.row.EDER_WhatProblem;
            if(vID != ''){
              $("#vMCQID").html(vID);
              $("#vMCQPROBLEM").html(vProblem);
              EDER_CHAL_SEC_Q(vID);
            }
        });

        $("#gridMCQuality").jqxGrid(
        {
          width: '100%',
          height: 343,
          altrows: true,
          sortable: true,
          showstatusbar: true,
          statusbarheight: 25,
          showaggregates: true,
          showfilterrow: false,
          filterable: false,
          theme: "darkblue",
          selectionmode: 'multiplerowsextended',
          columns: [
            { text: '#', datafield: 'EDER_NO', width: 40, align: 'center', cellsalign: 'center'},
            { text: 'Challenge', datafield: 'MGR_CHAL', minwidth: 180, align: 'center', cellsalign: 'center'},
            { text: 'Action', datafield: 'SUP_ACTION', width: 180, align: 'center'},
            { text: 'edit', datafield: 'edit', width: 50, columntype: 'button', cellsrenderer: function () {
                     return "Edit";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridMCQuality").jqxGrid('getrowdata', editrow);
                     let vID = dataRecord.ID;
                     let vMGR_CHAL = dataRecord.MGR_CHAL;
                     let vSUP_ACTION = dataRecord.SUP_ACTION;

                     if(vID != '')
                     {
                       $("#vMGRCHAL_Challenge").val(vMGR_CHAL);
                       $("#vMGRCHAL_Action").val(vSUP_ACTION);;
                       $("#vMGRCHAL_ID").val(vID);

                       $("#vWDMGRCHAL").html('Edit');
                       $("#vMGRCHAL_TYPE").val('Q');

                       $("#windowMGRCHAL").jqxWindow('open');
                     }
                }
              },
              { text: 'delete', datafield: 'delete', width: 50, columntype: 'button', cellsrenderer: function () {
                       return "Delete";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridMCQuality").jqxGrid('getrowdata', editrow);
                       let vID = dataRecord.ID;
                       var r = confirm("Do you want to delete No.: "+ vID + "?");
                       if (r == true) {
                         EDER_CHAL_DEL_Q(vID);
                       }
                  }
                }
            ]
        });

      $("#gridEDERCost").jqxGrid(
      {
          width: '100%',
          height: 343,
          altrows: true,
          sortable: true,
          showstatusbar: true,
          statusbarheight: 25,
          showaggregates: true,
          showfilterrow: false,
          filterable: false,
          theme: "darkblue",
          selectionmode: 'multiplerowsextended',
          columns: [
            { text: 'No.', datafield: 'ID', width: 40, align: 'center', cellsalign: 'center'},
            { text: 'Tracking', datafield: 'EDER_Tracking', width: 100, align: 'center', cellsalign: 'center'},
            { text: 'Model', datafield: 'EDER_Model', width: 150, align: 'center'},
            { text: 'Problem', datafield: 'EDER_WhatProblem', minwidth: 100, align: 'center'},
            { text: 'Open', datafield: 'Open', width: 80, columntype: 'button', cellsrenderer: function () {
                     return "Open";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridEDERCost").jqxGrid('getrowdata', editrow);
                     window.open("from.php?ID=" + dataRecord.ID);
                }
              }
            ]
        });

        $('#gridEDERCost').on('rowselect', function (event)
          {
              var vID = event.args.row.ID;
              var vProblem = event.args.row.EDER_WhatProblem;
              if(vID != ''){
                $("#vMCCID").html(vID);
                $("#vMCCPROBLEM").html(vProblem);
                EDER_CHAL_SEC_C(vID);
              }
          });

        $("#gridMCCost").jqxGrid(
        {
            width: '100%',
            height: 343,
            altrows: true,
            sortable: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            showfilterrow: false,
            filterable: false,
            theme: "darkblue",
            selectionmode: 'multiplerowsextended',
            columns: [
              { text: '#', datafield: 'EDER_NO', width: 40, align: 'center', cellsalign: 'center'},
              { text: 'Challenge', datafield: 'MGR_CHAL', minwidth: 180, align: 'center', cellsalign: 'center'},
              { text: 'Action', datafield: 'SUP_ACTION', width: 180, align: 'center'},
              { text: 'edit', datafield: 'edit', width: 50, columntype: 'button', cellsrenderer: function () {
                       return "Edit";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridMCCost").jqxGrid('getrowdata', editrow);
                       let vID = dataRecord.ID;
                       let vMGR_CHAL = dataRecord.MGR_CHAL;
                       let vSUP_ACTION = dataRecord.SUP_ACTION;

                       if(vID != '')
                       {
                         $("#vMGRCHAL_Challenge").val(vMGR_CHAL);
                         $("#vMGRCHAL_Action").val(vSUP_ACTION);;
                         $("#vMGRCHAL_ID").val(vID);

                         $("#vWDMGRCHAL").html('Edit');
                         $("#vMGRCHAL_TYPE").val('C');

                         $("#windowMGRCHAL").jqxWindow('open');
                       }
                  }
                },
                { text: 'delete', datafield: 'delete', width: 50, columntype: 'button', cellsrenderer: function () {
                         return "Delete";
                      }, buttonclick: function (row) {
                         // open the popup window when the user clicks a button.
                         editrow = row;
                         // get the clicked row's data and initialize the input fields.
                         var dataRecord = $("#gridMCCost").jqxGrid('getrowdata', editrow);
                         let vID = dataRecord.ID;
                         var r = confirm("Do you want to delete No.: "+ vID + "?");
                         if (r == true) {
                           EDER_CHAL_DEL_C(vID);
                         }
                    }
                  }
              ]
          });

      $("#gridEDERDelivery").jqxGrid(
      {
          width: '100%',
          height: 343,
          altrows: true,
          sortable: true,
          showstatusbar: true,
          statusbarheight: 25,
          showaggregates: true,
          showfilterrow: false,
          filterable: false,
          theme: "darkblue",
          selectionmode: 'multiplerowsextended',
          columns: [
            { text: 'No.', datafield: 'ID', width: 40, align: 'center', cellsalign: 'center'},
            { text: 'Tracking', datafield: 'EDER_Tracking', width: 100, align: 'center', cellsalign: 'center'},
            { text: 'Model', datafield: 'EDER_Model', width: 150, align: 'center'},
            { text: 'Problem', datafield: 'EDER_WhatProblem', minwidth: 100, align: 'center'},
            { text: 'Open', datafield: 'Open', width: 80, columntype: 'button', cellsrenderer: function () {
                     return "Open";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridEDERDelivery").jqxGrid('getrowdata', editrow);
                     window.open("from.php?ID=" + dataRecord.ID);
                }
              }
            ]
        });

        $('#gridEDERDelivery').on('rowselect', function (event)
          {
              var vID = event.args.row.ID;
              var vProblem = event.args.row.EDER_WhatProblem;
              if(vID != ''){
                $("#vMCDID").html(vID);
                $("#vMCDPROBLEM").html(vProblem);
                EDER_CHAL_SEC_D(vID);
              }
          });

        $("#gridMCDelivery").jqxGrid(
        {
            width: '100%',
            height: 343,
            altrows: true,
            sortable: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            showfilterrow: false,
            filterable: false,
            theme: "darkblue",
            selectionmode: 'multiplerowsextended',
            columns: [
              { text: '#', datafield: 'EDER_NO', width: 40, align: 'center', cellsalign: 'center'},
              { text: 'Challenge', datafield: 'MGR_CHAL', minwidth: 180, align: 'center', cellsalign: 'center'},
              { text: 'Action', datafield: 'SUP_ACTION', width: 180, align: 'center'},
              { text: 'edit', datafield: 'edit', width: 50, columntype: 'button', cellsrenderer: function () {
                       return "Edit";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridMCDelivery").jqxGrid('getrowdata', editrow);
                       let vID = dataRecord.ID;
                       let vMGR_CHAL = dataRecord.MGR_CHAL;
                       let vSUP_ACTION = dataRecord.SUP_ACTION;

                       if(vID != '')
                       {
                         $("#vMGRCHAL_Challenge").val(vMGR_CHAL);
                         $("#vMGRCHAL_Action").val(vSUP_ACTION);;
                         $("#vMGRCHAL_ID").val(vID);

                         $("#vWDMGRCHAL").html('Edit');
                         $("#vMGRCHAL_TYPE").val('D');

                         $("#windowMGRCHAL").jqxWindow('open');
                       }
                  }
                },
                { text: 'delete', datafield: 'delete', width: 50, columntype: 'button', cellsrenderer: function () {
                         return "Delete";
                      }, buttonclick: function (row) {
                         // open the popup window when the user clicks a button.
                         editrow = row;
                         // get the clicked row's data and initialize the input fields.
                         var dataRecord = $("#gridMCDelivery").jqxGrid('getrowdata', editrow);
                         let vID = dataRecord.ID;
                         var r = confirm("Do you want to delete No.: "+ vID + "?");
                         if (r == true) {
                           EDER_CHAL_DEL_D(vID);
                         }
                    }
                  }
              ]
          });

      $("#gridEDERMotivation").jqxGrid(
      {
          width: '100%',
          height: 343,
          altrows: true,
          sortable: true,
          showstatusbar: true,
          statusbarheight: 25,
          showaggregates: true,
          showfilterrow: false,
          filterable: false,
          theme: "darkblue",
          selectionmode: 'multiplerowsextended',
          columns: [
            { text: 'No.', datafield: 'ID', width: 40, align: 'center', cellsalign: 'center'},
            { text: 'Tracking', datafield: 'EDER_Tracking', width: 100, align: 'center', cellsalign: 'center'},
            { text: 'Model', datafield: 'EDER_Model', width: 150, align: 'center'},
            { text: 'Problem', datafield: 'EDER_WhatProblem', minwidth: 100, align: 'center'},
            { text: 'Open', datafield: 'Open', width: 80, columntype: 'button', cellsrenderer: function () {
                     return "Open";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#gridEDERMotivation").jqxGrid('getrowdata', editrow);
                     window.open("from.php?ID=" + dataRecord.ID);
                }
              }
            ]
        });

        $('#gridEDERMotivation').on('rowselect', function (event)
          {
              var vID = event.args.row.ID;
              var vProblem = event.args.row.EDER_WhatProblem;
              if(vID != ''){
                $("#vMCMID").html(vID);
                $("#vMCMPROBLEM").html(vProblem);
                EDER_CHAL_SEC_M(vID);
              }
          });

        $("#gridMCMotivation").jqxGrid(
        {
            width: '100%',
            height: 343,
            altrows: true,
            sortable: true,
            showstatusbar: true,
            statusbarheight: 25,
            showaggregates: true,
            showfilterrow: false,
            filterable: false,
            theme: "darkblue",
            selectionmode: 'multiplerowsextended',
            columns: [
              { text: '#', datafield: 'EDER_NO', width: 40, align: 'center', cellsalign: 'center'},
              { text: 'Challenge', datafield: 'MGR_CHAL', minwidth: 180, align: 'center', cellsalign: 'center'},
              { text: 'Action', datafield: 'SUP_ACTION', width: 180, align: 'center'},
              { text: 'edit', datafield: 'edit', width: 50, columntype: 'button', cellsrenderer: function () {
                       return "Edit";
                    }, buttonclick: function (row) {
                       // open the popup window when the user clicks a button.
                       editrow = row;
                       // get the clicked row's data and initialize the input fields.
                       var dataRecord = $("#gridMCMotivation").jqxGrid('getrowdata', editrow);
                       let vID = dataRecord.ID;
                       let vMGR_CHAL = dataRecord.MGR_CHAL;
                       let vSUP_ACTION = dataRecord.SUP_ACTION;

                       if(vID != '')
                       {
                         $("#vMGRCHAL_Challenge").val(vMGR_CHAL);
                         $("#vMGRCHAL_Action").val(vSUP_ACTION);;
                         $("#vMGRCHAL_ID").val(vID);

                         $("#vWDMGRCHAL").html('Edit');
                         $("#vMGRCHAL_TYPE").val('M');

                         $("#windowMGRCHAL").jqxWindow('open');
                       }

                  }
                },
                { text: 'delete', datafield: 'delete', width: 50, columntype: 'button', cellsrenderer: function () {
                         return "Delete";
                      }, buttonclick: function (row) {
                         // open the popup window when the user clicks a button.
                         editrow = row;
                         // get the clicked row's data and initialize the input fields.
                         var dataRecord = $("#gridMCMotivation").jqxGrid('getrowdata', editrow);
                         let vID = dataRecord.ID;
                         var r = confirm("Do you want to delete No.: "+ vID + "?");
                         if (r == true) {
                           EDER_CHAL_DEL_M(vID);
                         }
                    }
                  }
              ]
          });

        EDER_SEC_TYPE_Q();
        EDER_SEC_TYPE_C();
        EDER_SEC_TYPE_D();
        EDER_SEC_TYPE_M();

        /*---------Update Status POP UP------------*/
          $("#windowMGRCHAL").jqxWindow({
                  width: 600,
                  height: 225,
                  resizable: false,
                  autoOpen: false,
                  showCollapseButton: true,
                  isModal: true,
                  modalOpacity: 0.3
              });
        /*-------------------------------------------*/
        $('#windowMGRCHAL').on('close', function (event) {
            clearMGRCHALFrom();
        });

        $("#vMGRCHAL_Save").click(function () {
            var vType = $("#vWDMGRCHAL").html();
            var vTypeEDER = $("#vMGRCHAL_TYPE").val();
            if(vType == 'Add')
            {
              switch (vTypeEDER) {
                case 'Q':
                  EDER_CHAL_INS_Q();
                  break;
                case 'C':
                  EDER_CHAL_INS_C();
                  break;
                case 'D':
                  EDER_CHAL_INS_D();
                  break;
                case 'M':
                  EDER_CHAL_INS_M();
                  break;
              }
            }
            else if(vType == 'Edit')
            {
              switch (vTypeEDER) {
                case 'Q':
                  EDER_CHAL_UPD_Q();
                  break;
                case 'C':
                  EDER_CHAL_UPD_C();
                  break;
                case 'D':
                  EDER_CHAL_UPD_D();
                  break;
                case 'M':
                  EDER_CHAL_UPD_M();
                  break;
              }
            }
            else {
              clearMGRCHALFrom();
              $("#windowMGRCHAL").jqxWindow('close');
            }
          });

        $("#vMGRCHAL_Cancel").click(function () {
            clearMGRCHALFrom();
            $("#windowMGRCHAL").jqxWindow('close');
          });
});

function clearMGRCHALFrom() {
  $('#vMGRCHAL_Challenge').val('');
  $('#vMGRCHAL_Action').val('');
  $('#vMGRCHAL_ID').val('');
}

function EDER_SEC_TYPE_Q() {
            var pTracking = $("#pTracking").val();
            var pModel = $("#pModel").val();
            var pStartDate = $("#pStartDate").val();
            var pEndDate = $("#pEndDate").val();
            var act = 'EDER_SEC_TYPE_ASSY';
            var url = "main.class.php?action="+act;
            var pData = {
                StartDate : pStartDate,
                EndDate : pEndDate,
                Tracking : pTracking,
                Model : pModel,
                Type : 'Quality'
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
             $("#gridEDERQuality").jqxGrid({source: gridEDEREntry});
  }

function EDER_CHAL_SEC_Q(ID) {

            var act = 'EDER_CHAL_SEC';
            var url = "main.class.php?action="+act;
            var pData = {
                EDER_NO : ID
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
                    { name: 'EDER_NO', type: 'string' },
                    { name: 'MGR_CHAL', type: 'string' },
                    { name: 'SUP_ACTION', type: 'string' },
                    { name: 'MGR_NANE', type: 'string' },
                    { name: 'SUP_NANE', type: 'string' },
                    { name: 'Date_Update', type: 'string' }
                ]
            };
            var gridEDEREntry = new $.jqx.dataAdapter(source);
             $("#gridMCQuality").jqxGrid({source: gridEDEREntry});
  }

function EDER_CHAL_INS_Q() {

         var pvMGRCHAL_NO = $("#vMCQID").html();
         var pvMGRCHAL_Challenge = $("#vMGRCHAL_Challenge").val();
         var pMGRCHAL_Action = $("#vMGRCHAL_Action").val();

         var act = 'EDER_CHAL_INS';
         var url = "main.class.php?action="+ act;
         var pData = {
             EDER_NO : pvMGRCHAL_NO,
             MGR_CHAL : pvMGRCHAL_Challenge,
             SUP_ACTION : pMGRCHAL_Action
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
                         EDER_CHAL_SEC_Q(pvMGRCHAL_NO);
                         ShowNoti(vResult,"success");
                         clearMGRCHALFrom();
                         $("#windowMGRCHAL").jqxWindow('close');
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

function EDER_CHAL_UPD_Q() {

        var pvMGRCHAL_NO = $("#vMCQID").html();
        var pvMGRCHAL_ID = $("#vMGRCHAL_ID").val();
        var pvMGRCHAL_Challenge = $("#vMGRCHAL_Challenge").val();
        var pMGRCHAL_Action = $("#vMGRCHAL_Action").val();

         var act = 'EDER_CHAL_UPD';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pvMGRCHAL_ID,
             MGR_CHAL : pvMGRCHAL_Challenge,
             SUP_ACTION : pMGRCHAL_Action
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
                       EDER_CHAL_SEC_Q(pvMGRCHAL_NO);
                       ShowNoti(vResult,"success");
                       clearMGRCHALFrom();
                       $("#windowMGRCHAL").jqxWindow('close');
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

function EDER_CHAL_DEL_Q(pID) {

        var pvMGRCHAL_NO = $("#vMCQID").html();

         var act = 'EDER_CHAL_DEL';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pID
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
                       EDER_CHAL_SEC_Q(pvMGRCHAL_NO);
                       ShowNoti(vResult,"success");
                       clearMGRCHALFrom();
                       $("#windowMGRCHAL").jqxWindow('close');
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
///////////////////////////////////////
function EDER_SEC_TYPE_C() {
            var pTracking = $("#pTracking").val();
            var pModel = $("#pModel").val();
            var pStartDate = $("#pStartDate").val();
            var pEndDate = $("#pEndDate").val();
            var act = 'EDER_SEC_TYPE_ASSY';
            var url = "main.class.php?action="+act;
            var pData = {
                StartDate : pStartDate,
                EndDate : pEndDate,
                Tracking : pTracking,
                Model : pModel,
                Type : 'Cost'
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
             $("#gridEDERCost").jqxGrid({source: gridEDEREntry});
  }

function EDER_CHAL_SEC_C(ID) {

            var act = 'EDER_CHAL_SEC';
            var url = "main.class.php?action="+act;
            var pData = {
                EDER_NO : ID
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
                    { name: 'EDER_NO', type: 'string' },
                    { name: 'MGR_CHAL', type: 'string' },
                    { name: 'SUP_ACTION', type: 'string' },
                    { name: 'MGR_NANE', type: 'string' },
                    { name: 'SUP_NANE', type: 'string' },
                    { name: 'Date_Update', type: 'string' }
                ]
            };
            var gridEDEREntry = new $.jqx.dataAdapter(source);
             $("#gridMCCost").jqxGrid({source: gridEDEREntry});
  }

function EDER_CHAL_INS_C() {

         var pvMGRCHAL_NO = $("#vMCCID").html();
         var pvMGRCHAL_Challenge = $("#vMGRCHAL_Challenge").val();
         var pMGRCHAL_Action = $("#vMGRCHAL_Action").val();

         var act = 'EDER_CHAL_INS';
         var url = "main.class.php?action="+ act;
         var pData = {
             EDER_NO : pvMGRCHAL_NO,
             MGR_CHAL : pvMGRCHAL_Challenge,
             SUP_ACTION : pMGRCHAL_Action
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
                         EDER_CHAL_SEC_C(pvMGRCHAL_NO);
                         ShowNoti(vResult,"success");
                         clearMGRCHALFrom();
                         $("#windowMGRCHAL").jqxWindow('close');
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

function EDER_CHAL_UPD_C() {

        var pvMGRCHAL_NO = $("#vMCCID").html();
        var pvMGRCHAL_ID = $("#vMGRCHAL_ID").val();
        var pvMGRCHAL_Challenge = $("#vMGRCHAL_Challenge").val();
        var pMGRCHAL_Action = $("#vMGRCHAL_Action").val();

         var act = 'EDER_CHAL_UPD';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pvMGRCHAL_ID,
             MGR_CHAL : pvMGRCHAL_Challenge,
             SUP_ACTION : pMGRCHAL_Action
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
                       EDER_CHAL_SEC_C(pvMGRCHAL_NO);
                       ShowNoti(vResult,"success");
                       clearMGRCHALFrom();
                       $("#windowMGRCHAL").jqxWindow('close');
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

function EDER_CHAL_DEL_C(pID) {

        var pvMGRCHAL_NO = $("#vMCCID").html();

         var act = 'EDER_CHAL_DEL';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pID
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
                       EDER_CHAL_SEC_C(pvMGRCHAL_NO);
                       ShowNoti(vResult,"success");
                       clearMGRCHALFrom();
                       $("#windowMGRCHAL").jqxWindow('close');
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
///////////////////////////////////////
function EDER_SEC_TYPE_D() {
            var pTracking = $("#pTracking").val();
            var pModel = $("#pModel").val();
            var pStartDate = $("#pStartDate").val();
            var pEndDate = $("#pEndDate").val();
            var act = 'EDER_SEC_TYPE_ASSY';
            var url = "main.class.php?action="+act;
            var pData = {
                StartDate : pStartDate,
                EndDate : pEndDate,
                Tracking : pTracking,
                Model : pModel,
                Type : 'Delivery'
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
             $("#gridEDERDelivery").jqxGrid({source: gridEDEREntry});
  }

function EDER_CHAL_SEC_D(ID) {

            var act = 'EDER_CHAL_SEC';
            var url = "main.class.php?action="+act;
            var pData = {
                EDER_NO : ID
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
                    { name: 'EDER_NO', type: 'string' },
                    { name: 'MGR_CHAL', type: 'string' },
                    { name: 'SUP_ACTION', type: 'string' },
                    { name: 'MGR_NANE', type: 'string' },
                    { name: 'SUP_NANE', type: 'string' },
                    { name: 'Date_Update', type: 'string' }
                ]
            };
            var gridEDEREntry = new $.jqx.dataAdapter(source);
             $("#gridMCDelivery").jqxGrid({source: gridEDEREntry});
  }

function EDER_CHAL_INS_D() {

         var pvMGRCHAL_NO = $("#vMCDID").html();
         var pvMGRCHAL_Challenge = $("#vMGRCHAL_Challenge").val();
         var pMGRCHAL_Action = $("#vMGRCHAL_Action").val();

         var act = 'EDER_CHAL_INS';
         var url = "main.class.php?action="+ act;
         var pData = {
             EDER_NO : pvMGRCHAL_NO,
             MGR_CHAL : pvMGRCHAL_Challenge,
             SUP_ACTION : pMGRCHAL_Action
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
                         EDER_CHAL_SEC_D(pvMGRCHAL_NO);
                         ShowNoti(vResult,"success");
                         clearMGRCHALFrom();
                         $("#windowMGRCHAL").jqxWindow('close');
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

function EDER_CHAL_UPD_D() {

        var pvMGRCHAL_NO = $("#vMCDID").html();
        var pvMGRCHAL_ID = $("#vMGRCHAL_ID").val();
        var pvMGRCHAL_Challenge = $("#vMGRCHAL_Challenge").val();
        var pMGRCHAL_Action = $("#vMGRCHAL_Action").val();

         var act = 'EDER_CHAL_UPD';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pvMGRCHAL_ID,
             MGR_CHAL : pvMGRCHAL_Challenge,
             SUP_ACTION : pMGRCHAL_Action
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
                       EDER_CHAL_SEC_D(pvMGRCHAL_NO);
                       ShowNoti(vResult,"success");
                       clearMGRCHALFrom();
                       $("#windowMGRCHAL").jqxWindow('close');
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

function EDER_CHAL_DEL_D(pID) {

        var pvMGRCHAL_NO = $("#vMCDID").html();

         var act = 'EDER_CHAL_DEL';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pID
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
                       EDER_CHAL_SEC_D(pvMGRCHAL_NO);
                       ShowNoti(vResult,"success");
                       clearMGRCHALFrom();
                       $("#windowMGRCHAL").jqxWindow('close');
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
//////////////////////////////////////
function EDER_SEC_TYPE_M() {
            var pTracking = $("#pTracking").val();
            var pModel = $("#pModel").val();
            var pStartDate = $("#pStartDate").val();
            var pEndDate = $("#pEndDate").val();
            var act = 'EDER_SEC_TYPE_ASSY';
            var url = "main.class.php?action="+act;
            var pData = {
                StartDate : pStartDate,
                EndDate : pEndDate,
                Tracking : pTracking,
                Model : pModel,
                Type : 'Motivation'
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
             $("#gridEDERMotivation").jqxGrid({source: gridEDEREntry});
  }

function EDER_CHAL_SEC_M(ID) {

            var act = 'EDER_CHAL_SEC';
            var url = "main.class.php?action="+act;
            var pData = {
                EDER_NO : ID
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
                    { name: 'EDER_NO', type: 'string' },
                    { name: 'MGR_CHAL', type: 'string' },
                    { name: 'SUP_ACTION', type: 'string' },
                    { name: 'MGR_NANE', type: 'string' },
                    { name: 'SUP_NANE', type: 'string' },
                    { name: 'Date_Update', type: 'string' }
                ]
            };
            var gridEDEREntry = new $.jqx.dataAdapter(source);
             $("#gridMCMotivation").jqxGrid({source: gridEDEREntry});
  }

function EDER_CHAL_INS_M() {

         var pvMGRCHAL_NO = $("#vMCMID").html();
         var pvMGRCHAL_Challenge = $("#vMGRCHAL_Challenge").val();
         var pMGRCHAL_Action = $("#vMGRCHAL_Action").val();

         var act = 'EDER_CHAL_INS';
         var url = "main.class.php?action="+ act;
         var pData = {
             EDER_NO : pvMGRCHAL_NO,
             MGR_CHAL : pvMGRCHAL_Challenge,
             SUP_ACTION : pMGRCHAL_Action
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
                         EDER_CHAL_SEC_M(pvMGRCHAL_NO);
                         ShowNoti(vResult,"success");
                         clearMGRCHALFrom();
                         $("#windowMGRCHAL").jqxWindow('close');
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

function EDER_CHAL_UPD_M() {

        var pvMGRCHAL_NO = $("#vMCMID").html();
        var pvMGRCHAL_ID = $("#vMGRCHAL_ID").val();
        var pvMGRCHAL_Challenge = $("#vMGRCHAL_Challenge").val();
        var pMGRCHAL_Action = $("#vMGRCHAL_Action").val();

         var act = 'EDER_CHAL_UPD';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pvMGRCHAL_ID,
             MGR_CHAL : pvMGRCHAL_Challenge,
             SUP_ACTION : pMGRCHAL_Action
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
                       EDER_CHAL_SEC_M(pvMGRCHAL_NO);
                       ShowNoti(vResult,"success");
                       clearMGRCHALFrom();
                       $("#windowMGRCHAL").jqxWindow('close');
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

function EDER_CHAL_DEL_M(pID) {

        var pvMGRCHAL_NO = $("#vMCMID").html();

         var act = 'EDER_CHAL_DEL';
         var url = "main.class.php?action="+ act;
         var pData = {
             ID : pID
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
                       EDER_CHAL_SEC_M(pvMGRCHAL_NO);
                       ShowNoti(vResult,"success");
                       clearMGRCHALFrom();
                       $("#windowMGRCHAL").jqxWindow('close');
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
