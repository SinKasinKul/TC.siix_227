<?php
/**
 * ClassĠ쀀or    ry data
 */
class Repair
{
  private $Process = 'Repair';

  public function ChkUser($frm)
  {
    $DB = connect_mssql::DB();
    $User = $frm['User'];
    $stmt = "EXEC [STBL_KOITO].[dbo].[CHECK_USER] ?";
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
    $stmt = "EXEC [STBL_KOITO].[dbo].[Chk_Model_Seiban] ?, ?";
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
    $stmt = "EXEC [STBL_KOITO].[dbo].[REPAIR_CHECK_DATA] ?";
    $params = array(
      array($Barcode, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }
}
?>
