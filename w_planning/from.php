<?php require_once('../header_main_w.php');

$DB = connect_mssql::DB();
$ID   = $_GET['ID'];
$stmt = "EXEC [STBL_EDR].[dbo].[EDER_SEC_ID] ?";
$params = array(
  array($ID, SQLSRV_PARAM_IN)
);
$query = sqlsrv_query( $DB, $stmt, $params);
while( $row = sqlsrv_fetch_array( $query, SQLSRV_FETCH_ASSOC) ) {
?>
<table align="center" width="90%" border="1" id="tblData">
  <tr valign="TOP">
    <td align="center" width="80%">
      <h1>รายงานปัญหาคุณภาพ [EDER]</h1>
    </td>
    <td align="center" valign="middle">
      SIIX_P1-001-01 [05Jun2021]<br>EDER No. ::<?=$row['ID']?>
    </td>
  </tr>
  <tr valign="TOP">
    <td align="center" colspan="2">
      <table width="100%" border="1">
        <tr valign="middle">
          <td align="right" valign="middle" width="15%"><h4><B>What problem</B> ::</h4></td>
          <td align="center" valign="middle"  width="85%">&nbsp;&nbsp;&nbsp;<?=$row['EDER_WhatProblem']?></td>
        </tr>
        <tr valign="middle">
          <td align="right" valign="middle" width="15%"><h4><B>Why</B> ::</h4></td>
          <td align="center" valign="middle"  width="85%">&nbsp;&nbsp;&nbsp;<?=$row['EDER_Why']?></td>
        </tr>
        <tr valign="middle">
          <td align="right" valign="middle" width="20%" colspan="2">
            <table width="100%" border="1">
              <tr>
                <td align="right" valign="middle" width="10%"><h4><B>When</B> ::</h4></td>
                <td align="right" valign="middle" width="10%"><h4>(Date/Shift) ::</h4></td>
                <td>&nbsp;&nbsp;&nbsp;<?=$row['EDER_When_Shift']?></td>
                <td rowspan="7" width="30%" valign="middle" align="center">
                  Image NG<br>
                  <img src="eder_image\<?=$row['EDER_IMAGE_NG']?>" width="100%" height="200" alt="<?=$row['EDER_IMAGE_NG']?>">
                </td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"></td>
                <td align="right" valign="middle" width="10%"><h4>Customer ::</h4></td>
                <td>&nbsp;&nbsp;&nbsp;<?=$row['EDER_Customer']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"></td>
                <td align="right" valign="middle" width="10%"><h4>Model ::</h4></td>
                <td>&nbsp;&nbsp;&nbsp;<?=$row['EDER_Model']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"></td>
                <td align="right" valign="middle" width="10%"><h4>Tracking no. ::</h4></td>
                <td>&nbsp;&nbsp;&nbsp;<?=$row['EDER_Tracking']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"></td>
                <td align="right" valign="middle" width="10%"><h4>Q'ty lot ::</h4></td>
                <td>&nbsp;&nbsp;&nbsp;<?=$row['EDER_Qty']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"></td>
                <td align="right" valign="middle" width="10%"><h4>Part item ::</h4></td>
                <td>&nbsp;&nbsp;&nbsp;<?=$row['EDER_Part_Item']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"></td>
                <td align="right" valign="middle" width="10%"><h4>Part name ::</h4></td>
                <td>&nbsp;&nbsp;&nbsp;<?=$row['EDER_Part_Name']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"></td>
                <td align="right" valign="middle" width="10%"><h4>Maker ::</h4></td>
                <td>&nbsp;&nbsp;&nbsp;<?=$row['EDER_Maker']?></td>
                <td rowspan="6" width="30%" valign="middle" align="center">
                  Image OK<br>
                  <img src="eder_image\<?=$row['EDER_IMAGE_OK']?>" width="100%" height="200" alt="<?=$row['EDER_IMAGE_OK']?>">
                </td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"><h4><B>Where</B> ::</h4></td>
                <td align="right" valign="middle" width="10%"><h4>Process ::</h4></td>
                <td>&nbsp;&nbsp;&nbsp;<?=$row['EDER_Where_Process']?>&nbsp;&nbsp;&nbsp;<B>Line ::</B> <?=$row['EDER_LINE']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"></td>
                <td align="right" valign="middle" width="10%"><h4>Time ::</h4></td>
                <td>&nbsp;&nbsp;&nbsp;<?=$row['EDER_When_Date']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"><h4><B>Who Detection</B> ::</h4></td>
                <td colspan="2">&nbsp;&nbsp;&nbsp;<?=$row['EDER_Who_Detection']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"><h4><B>How Many</B> ::</h4></td>
                <td colspan="2">&nbsp;&nbsp;&nbsp;<?=$row['EDER_How_Many']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="10%"><h4><B>How occur</B> ::</h4></td>
                <td colspan="2">&nbsp;&nbsp;&nbsp;<?=$row['EDER_How_Occur']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="20%"><h4><B>Problem case</B> ::</h4></td>
                <td colspan="3">&nbsp;&nbsp;&nbsp;<?=$row['EDER_Problem_Case']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="20%">
                  <h4><B>Temporary action</B> ::</h4><br>
                  <h5><B>Check by</B> ::</h5><br>
                  <h5><B>Approve by</B> ::</h5>
                </td>
                <td colspan="3" valign="top">&nbsp;&nbsp;&nbsp;<?=$row['EDER_Temporary_Action']?></td>
              </tr>
              <tr>
                <td align="right" valign="middle" width="20%">
                  <h4><B>Permanent action</B> ::</h4><br>
                  <h5><B>Check by</B> ::</h5><br>
                  <h5><B>Approve by</B> ::</h5>
                </td>
                <td  colspan="3" valign="top">&nbsp;&nbsp;&nbsp;<?=$row['EDER_Permanent_Action']?></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

    </td>
  </tr>
</table>
<!--button onclick="exportTableToExcel('tblData')">Export Table Data To Excel File</button-->
<?php
}
sqlsrv_free_stmt( $stmt);
?>

<script type="text/javascript">

function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}
</script>
