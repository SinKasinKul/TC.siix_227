<?php
/**
 * Class for Query data
 */
class MASFCT
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

  public function ChkLocation($frm)
  {
    $DB = connect_mssql::DB();
    $Location = $frm['Location'];
    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_STK_CHK_LOCATION] ?";
    $params = array(
      array($Location, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_INS_MASTER_SERIAL($frm)
  {
    $DB = connect_mssql::DB();
    $Serial = $frm['Serial'];

    $stmt = "EXEC [STBL_MAIN_FCT].[dbo].[STBL_INS_MASTER_SERIAL] ?";
    $params = array(
      array($Serial, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

}
?>
