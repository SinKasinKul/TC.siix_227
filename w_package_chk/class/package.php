<?php
/**
 * Class for Query data
 */
class package
{
  public function ChkModel($frm)
  {
    $DB = connect_mssql::DB();
    $Model = $frm['Model'];
    $Barcode = $frm['Barcode'];
    $Box = $frm['Box'];
    $stmt = "EXEC [STBL_NAL].[dbo].[MAIN_CHK_PACKAGE] ?, ?, ?";
    $params = array(
      array($Barcode, SQLSRV_PARAM_IN),
      array($Model, SQLSRV_PARAM_IN),
      array($Box, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
}
?>
