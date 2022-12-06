<?php
/**
 * Class for Query data
 */
class SPI
{
  public function ChkUser($frm)
  {
    $DB = connect_mssql::DB();
    $User = $frm['User'];
    $stmt = "EXEC [siix_check_serial].[dbo].[CHECK_USER] ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_XRAY_STATUS($frm)
  {
    $DB = connect_mssql::DB();

    $stmt = "EXEC [STBL_TRAN].[dbo].[STBL_XRAY_STATUS]";
    $params = array();
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_SEC_SPI_DETAIL($frm)
  {
    $DB = connect_mssql229::DB();
    $Serial = $frm['Serial'];
    $stmt = "EXEC [SPI_LOG_2021].[dbo].[MAIN_SEC_SPI_DETAIL] ?";
    $params = array(
      array($Serial, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_CONFIRM_XRAY_STATUS($frm)
  {
    $DB = connect_mssql::DB();
    $Serial = $frm['Serial'];
    $Status = $frm['Status'];
    $StatusDESC = $frm['StatusDESC'];
    $Emp = $frm['Emp'];
    $stmt = "EXEC [STBL_TRAN].[dbo].[STBL_CONFIRM_XRAY_STATUS] ? ,? ,? ,?";
    $params = array(
      array($Serial, SQLSRV_PARAM_IN),
      array($Status, SQLSRV_PARAM_IN),
      array($StatusDESC, SQLSRV_PARAM_IN),
      array($Emp, SQLSRV_PARAM_IN),
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
}
?>
