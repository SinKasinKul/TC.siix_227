$(document).ready(function () {
  $("#vBusDate").jqxDateTimeInput({
        width: '125px',
        height: '25px',
        allowNullDate: true,
        //editMode: 'full',
        formatString: 'yyyyMM',
        showFooter: true,
        value: null,
        theme: "darkblue"
        //yearCutoff: 1926
    });

    $("#vbtReload").click(function () {
          STBL_BUS_EMP_BY_MONTH();
      });

      var cellclass = function (row, columnfield, value) { return 'blue'; };

      var vStatus = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
          if (value != '0') {
              return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #FF0000;"><B>' + value + '<B></span>';
          }
          else if (value == '0') {
              return '<span style="margin: 4px; margin-top:8px; float: ' + columnproperties.cellsalign + '; color: #FF0000;">' + '' + '</span>';
          }
      }

    $("#gridBusOverAll").jqxGrid({
          width: "100%",
          height: 795,
          altrows: true,
          filterable: true,
          sortable: true,
          showstatusbar: true,
          statusbarheight: 25,
          showaggregates: true,
          theme: theme,
          //pageable: true,
          //pagesize: 20,
          //groupable: true,
          //pagesizeoptions: ['20', '50', '100', '500', '1000'],
          //selectionmode: 'multiplerowsextended',
          columns: [
            { text: 'Days', datafield: 'Day', width: 40, align: 'center', cellsalign: 'center'},
            { text: 'Day', columngroup: 'B011', datafield: 'B011_D_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            //{ text: 'D-Out', columngroup: 'B011', datafield: 'B011_D_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            { text: 'Nigth', columngroup: 'B011', datafield: 'B011_N_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            //{ text: 'N-Out', columngroup: 'B011', datafield: 'B011_N_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            { text: 'Day', columngroup: 'B010', datafield: 'B010_D_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            //{ text: 'D-Out', columngroup: 'B010', datafield: 'B010_D_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            { text: 'Nigth', columngroup: 'B010', datafield: 'B010_N_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            //{ text: 'N-Out', columngroup: 'B010', datafield: 'B010_N_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            { text: 'Day', columngroup: 'B009', datafield: 'B009_D_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            //{ text: 'D-Out', columngroup: 'B009', datafield: 'B009_D_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            { text: 'Nigth', columngroup: 'B009', datafield: 'B009_N_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            //{ text: 'N-Out', columngroup: 'B009', datafield: 'B009_N_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            { text: 'Day', columngroup: 'B008', datafield: 'B008_D_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            //{ text: 'D-Out', columngroup: 'B008', datafield: 'B008_D_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            { text: 'Nigth', columngroup: 'B008', datafield: 'B008_N_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            //{ text: 'N-Out', columngroup: 'B008', datafield: 'B008_N_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            { text: 'Day', columngroup: 'B007', datafield: 'B007_D_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            //{ text: 'D-Out', columngroup: 'B007', datafield: 'B007_D_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            { text: 'Nigth', columngroup: 'B007', datafield: 'B007_N_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            //{ text: 'N-Out', columngroup: 'B007', datafield: 'B007_N_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            { text: 'Day', columngroup: 'B006', datafield: 'B006_D_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            //{ text: 'D-Out', columngroup: 'B006', datafield: 'B006_D_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            { text: 'Nigth', columngroup: 'B006', datafield: 'B006_N_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            //{ text: 'N-Out', columngroup: 'B006', datafield: 'B006_N_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            { text: 'Day', columngroup: 'B005', datafield: 'B005_D_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            //{ text: 'D-Out', columngroup: 'B005', datafield: 'B005_D_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            { text: 'Nigth', columngroup: 'B005', datafield: 'B005_N_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            //{ text: 'N-Out', columngroup: 'B005', datafield: 'B005_N_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            { text: 'Day', columngroup: 'B004', datafield: 'B004_D_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            //{ text: 'D-Out', columngroup: 'B004', datafield: 'B004_D_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            { text: 'Nigth', columngroup: 'B004', datafield: 'B004_N_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            //{ text: 'N-Out', columngroup: 'B004', datafield: 'B004_N_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            { text: 'Day', columngroup: 'B003', datafield: 'B003_D_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            //{ text: 'D-Out', columngroup: 'B003', datafield: 'B003_D_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            { text: 'Nigth', columngroup: 'B003', datafield: 'B003_N_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            //{ text: 'N-Out', columngroup: 'B003', datafield: 'B003_N_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            { text: 'Day', columngroup: 'B002', datafield: 'B002_D_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            //{ text: 'D-Out', columngroup: 'B002', datafield: 'B002_D_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            { text: 'Nigth', columngroup: 'B002', datafield: 'B002_N_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            //{ text: 'N-Out', columngroup: 'B002', datafield: 'B002_N_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus, cellclassname: cellclass},
            { text: 'Day', columngroup: 'B001', datafield: 'B001_D_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            //{ text: 'D-Out', columngroup: 'B001', datafield: 'B001_D_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
            { text: 'Nigth', columngroup: 'B001', datafield: 'B001_N_IN', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus}
            //{ text: 'N-Out', columngroup: 'B001', datafield: 'B001_N_OUT', width: 60, align: 'center', cellsalign: 'center', cellsrenderer: vStatus},
          ],
          columngroups: [
              { text: 'รถส่วนบุคคล', align: 'center', name: 'B011' },
              { text: 'ปู่เจ้าสมิงพราย', align: 'center', name: 'B010' },
              { text: 'คลองสวน', align: 'center', name: 'B009' },
              { text: 'พระราม2-วัดพุทธ', align: 'center', name: 'B008' },
              { text: 'สาขลา', align: 'center', name: 'B007' },
              { text: 'เคหะบางพลี', align: 'center', name: 'B006' },
              { text: 'สำโรง-ปากน', align: 'center', name: 'B005' },
              { text: 'พระประแดง', align: 'center', name: 'B004' },
              { text: 'คู่สร้าง', align: 'center', name: 'B003' },
              { text: 'บางปะแก้ว', align: 'center', name: 'B002' },
              { text: 'เจดีย์', align: 'center', name: 'B001' }
          ]
      });
      STBL_BUS_EMP_BY_MONTH();
});


function STBL_BUS_EMP_BY_MONTH() {
            var pDate = '';
            pDate = $("#vBusDate").val();
            console.log(pDate);
            var act = 'STBL_BUS_EMP_BY_MONTH';
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
                    { name: 'Day', type: 'string' },
                    { name: 'B011_D_OUT', type: 'number' },
                    { name: 'B011_D_IN', type: 'number' },
                    { name: 'B011_N_OUT', type: 'number' },
                    { name: 'B011_N_IN', type: 'number' },
                    { name: 'B010_D_OUT', type: 'number' },
                    { name: 'B010_D_IN', type: 'number' },
                    { name: 'B010_N_OUT', type: 'number' },
                    { name: 'B010_N_IN', type: 'number' },
                    { name: 'B009_D_OUT', type: 'number' },
                    { name: 'B009_D_IN', type: 'number' },
                    { name: 'B009_N_OUT', type: 'number' },
                    { name: 'B009_N_IN', type: 'number' },
                    { name: 'B008_D_OUT', type: 'number' },
                    { name: 'B008_D_IN', type: 'number' },
                    { name: 'B008_N_OUT', type: 'number' },
                    { name: 'B008_N_IN', type: 'number' },
                    { name: 'B007_D_OUT', type: 'number' },
                    { name: 'B007_D_IN', type: 'number' },
                    { name: 'B007_N_OUT', type: 'number' },
                    { name: 'B007_N_IN', type: 'number' },
                    { name: 'B006_D_OUT', type: 'number' },
                    { name: 'B006_D_IN', type: 'number' },
                    { name: 'B006_N_OUT', type: 'number' },
                    { name: 'B006_N_IN', type: 'number' },
                    { name: 'B005_D_OUT', type: 'number' },
                    { name: 'B005_D_IN', type: 'number' },
                    { name: 'B005_N_OUT', type: 'number' },
                    { name: 'B005_N_IN', type: 'number' },
                    { name: 'B004_D_OUT', type: 'number' },
                    { name: 'B004_D_IN', type: 'number' },
                    { name: 'B004_N_OUT', type: 'number' },
                    { name: 'B004_N_IN', type: 'number' },
                    { name: 'B003_D_OUT', type: 'number' },
                    { name: 'B003_D_IN', type: 'number' },
                    { name: 'B003_N_OUT', type: 'number' },
                    { name: 'B003_N_IN', type: 'number' },
                    { name: 'B002_D_OUT', type: 'number' },
                    { name: 'B002_D_IN', type: 'number' },
                    { name: 'B002_N_OUT', type: 'number' },
                    { name: 'B002_N_IN', type: 'number' },
                    { name: 'B001_D_OUT', type: 'number' },
                    { name: 'B001_D_IN', type: 'number' },
                    { name: 'B001_N_OUT', type: 'number' },
                    { name: 'B001_N_IN', type: 'number' },
                    { name: 'TotalEmp', type: 'number' }
                ]
            };
            var gridBusOverAll = new $.jqx.dataAdapter(source);
            $("#gridBusOverAll").jqxGrid({source: gridBusOverAll});
  };
