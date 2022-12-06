<?php
/**
 * Class for Query data
 */
class Repair
{
  private $Process = 'Repair';

  public function ChkUser($frm)
  {
    $DB = connect_mssql::DB();
    $User = $frm['User'];
    $stmt = "EXEC [STBL_MAIN].[dbo].[CHECK_USER] ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }

  public function ChkModel($frm)
  {
    $DB = connect_mssql::DB();
    $ItemCD = $frm['ItemCode'];
    $Seiban = $frm['Seiban'];
    $stmt = "EXEC [STBL_MAIN].[dbo].[Chk_Model_Seiban] ?, ?";
    $params = array(
      array($ItemCD, SQLSRV_PARAM_IN),
      array($Seiban, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }

  public function JsonMainGrid($frm='')
  {
    $DB = connect_mssql::DB();
    $Barcode = $frm['Barcode'];
    $stmt = "EXEC [STBL_MAIN].[dbo].[STBL_MAIN_CHECK_DATA] ?";
    $params = array(
      array($Barcode, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }
}
?>
