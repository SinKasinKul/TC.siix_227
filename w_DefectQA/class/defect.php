<?php
/**
 * Class for Query data
 */
class defect
{
  public function ChkUser($frm)
  {
    $DB = connect_mssql::DB228();
    $User = $frm['User'];
    $stmt = "EXEC [siix_check_serial].[dbo].[CHECK_USER] ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
}
?>
