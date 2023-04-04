<?php
/**
 * Class for Query data
 */
class Solder
{

  public function STBL_SEC_SOLDER_MS($frm)
  {
    $DB = connect_mssql::DB();
    $User = "";
    $stmt = "EXEC [STBL_SOLDER_CTRL].[dbo].[STBL_SEC_SOLDER_MS] ";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_SEC_SOLDER($frm)
  {
    $DB = connect_mssql::DB();
    $Name = $frm['Name'];
    $stmt = "EXEC [STBL_SOLDER_CTRL].[dbo].[STBL_SEC_SOLDER] ?";
    $params = array(
      array($Name, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_INC_SOLDER_MS($frm)
  {
    $DB = connect_mssql::DB();
    $CustomerName = $frm['CustomerName'];
    $ItemCD = $frm['ItemCD'];
    $Model = $frm['Model'];
    $WIPProcess = $frm['WIPProcess'];
    $SolderItemCD = $frm['SolderItemCD'];
    $SolderItemName = $frm['SolderItemName'];
    $Usage = $frm['Usage'];
    $stmt = "EXEC [STBL_SOLDER_CTRL].[dbo].[STBL_INC_SOLDER_MS] ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($CustomerName, SQLSRV_PARAM_IN)
      ,array($ItemCD, SQLSRV_PARAM_IN)
      ,array($Model, SQLSRV_PARAM_IN)
      ,array($WIPProcess, SQLSRV_PARAM_IN)
      ,array($SolderItemCD, SQLSRV_PARAM_IN)
      ,array($SolderItemName, SQLSRV_PARAM_IN)
      ,array($Usage, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_UPD_SOLDER_MS($frm)
  {
    $DB = connect_mssql::DB();
    $ID = $frm['ID'];
    $CustomerName = $frm['CustomerName'];
    $ItemCD = $frm['ItemCD'];
    $Model = $frm['Model'];
    $WIPProcess = $frm['WIPProcess'];
    $SolderItemCD = $frm['SolderItemCD'];
    $SolderItemName = $frm['SolderItemName'];
    $Usage = $frm['Usage'];
    $stmt = "EXEC [STBL_SOLDER_CTRL].[dbo].[STBL_UPD_SOLDER_MS] ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
      ,array($CustomerName, SQLSRV_PARAM_IN)
      ,array($ItemCD, SQLSRV_PARAM_IN)
      ,array($Model, SQLSRV_PARAM_IN)
      ,array($WIPProcess, SQLSRV_PARAM_IN)
      ,array($SolderItemCD, SQLSRV_PARAM_IN)
      ,array($SolderItemName, SQLSRV_PARAM_IN)
      ,array($Usage, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_DEL_SOLDER_MS($frm)
  {
    $DB = connect_mssql::DB();
    $ID = $frm['ID'];
    $stmt = "EXEC [STBL_SOLDER_CTRL].[dbo].[STBL_DEL_SOLDER_MS] ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_SOLDER_LIST($frm)
  {
    $DB = connect_mssql::DB();
    $ID = $frm['ID'];
    $stmt = "EXEC [STBL_SOLDER_CTRL].[dbo].[STBL_SOLDER_LIST] ";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

}
?>
