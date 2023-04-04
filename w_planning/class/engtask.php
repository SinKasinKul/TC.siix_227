<?php
/**
 * Class for Query data for Process V11
 */
class ENGTASK
{
  public function ChkUser($frm)
  {
    $DB = connect_mssql228::DB();
    $User = $frm['User'];
    $stmt = "EXEC [STBL_MAIN].[dbo].[CHECK_USER] ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }


}
