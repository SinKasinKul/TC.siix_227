<?php
/**
 * Class for Query data
 */
class OQC
{
  public function ChkUser($frm)
  {
    $DB = connect_mssql::DB();
    $User = $frm['User'];
    $stmt = "EXEC CHECK_USER ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function Chk_Model_Seiban($frm)
  {
    $DB = connect_mssql::DB();
    $Tracking = $frm['Tracking'];
    $stmt = "EXEC [Siix_check_serial].[dbo].[Chk_Model_Seiban] ?, ?";
    $params = array(
      array('', SQLSRV_PARAM_IN),
      array($Tracking, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
    $R='';
  }
}
?>
