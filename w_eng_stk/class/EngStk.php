<?php
class EngStk
{
  public function ChkUser($frm)
  {
    $DB = connect_mssql::DB();
    $User = $frm['User'];
    $stmt = "EXEC [STBL_Engineer_STK].[dbo].[CHECK_USER] ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }
  //---------------------------ItemMaster----------------------------------//
  public function STBL_TYPE_MS($frm="")
  {
      $DB = connect_mssql::DBName('STBL_Engineer_STK');
      $I_TYPE_ID = $frm['I_TYPE_ID'];
      $I_TYPE_NAME = $frm['I_TYPE'];
      $Action = $frm['Actions'];
      $stmt = "EXEC STBL_TYPE_MS ?, ?, ?";
      $params = array(
        array($I_TYPE_ID, SQLSRV_PARAM_IN),
        array($I_TYPE_NAME, SQLSRV_PARAM_IN),
        array($Action, SQLSRV_PARAM_IN)
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      $d = Utility::jsonMSSQL($query);
  }

  public function STBL_ITEM_MS($frm="")
  {
      $DB = connect_mssql::DBName('STBL_Engineer_STK');
      $I_ID = $frm['I_ITEM_ID'];
      $I_ITEM_CD = $frm['I_ITEM_CD'];
      $I_ITEM_DESC = $frm['I_ITEM_DESC'];
      $I_USE_PRE_MONTH = $frm['I_USE_PRE_MONTH'];
      $I_LEAD_TIME_DAY = $frm['I_LEAD_TIME_DAY'];
      $I_SAFETY_STK = $frm['I_SAFETY_STK'];
      $I_TYPE = $frm['I_TYPE'];
      $I_EMP = $frm['I_EMP'];
      $Action = $frm['Actions'];
      $stmt = "EXEC STBL_ITEM_MS ?, ?, ?, ?, ?, ?, ?, ?, ?";
      $params = array(
        array($I_ID, SQLSRV_PARAM_IN),
        array($I_ITEM_CD, SQLSRV_PARAM_IN),
        array($I_ITEM_DESC, SQLSRV_PARAM_IN),
        array($I_USE_PRE_MONTH, SQLSRV_PARAM_IN),
        array($I_LEAD_TIME_DAY, SQLSRV_PARAM_IN),
        array($I_SAFETY_STK, SQLSRV_PARAM_IN),
        array($I_TYPE, SQLSRV_PARAM_IN),
        array($I_EMP, SQLSRV_PARAM_IN),
        array($Action, SQLSRV_PARAM_IN)
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      $d = Utility::jsonMSSQL($query);
  }

  public function STBL_STK_OVER_VIEW($frm)
  {
    $DB = connect_mssql::DBName('STBL_Engineer_STK');
    $Act = $frm['Section'];
    $stmt = "EXEC STBL_STK_OVER_VIEW ?";
    $params = array(
      array($Act, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_STK_IN($frm="")
  {
      $DB = connect_mssql::DBName('STBL_Engineer_STK');
      $I_ITEM_CD = $frm['I_ITEM_CD'];
      $I_QTY = $frm['I_QTY'];
      $I_EMP = $frm['I_EMP'];
      $I_REF_PO = $frm['I_REF_PO'];
      $I_REF_INV = $frm['I_REF_INV'];
      $stmt = "EXEC STBL_STK_IN ?, ?, ?, ?, ?";
      $params = array(
        array($I_ITEM_CD, SQLSRV_PARAM_IN),
        array($I_QTY, SQLSRV_PARAM_IN),
        array($I_EMP, SQLSRV_PARAM_IN),
        array($I_REF_PO, SQLSRV_PARAM_IN),
        array($I_REF_INV, SQLSRV_PARAM_IN)
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      $d = Utility::jsonMSSQL($query);
  }

  public function STBL_STK_OUT($frm="")
  {
      $DB = connect_mssql::DBName('STBL_Engineer_STK');
      $I_ITEM_CD = $frm['I_ITEM_CD'];
      $I_QTY = $frm['I_QTY'];
      $I_EMP = $frm['I_EMP'];
      $I_REF_REQ = $frm['I_REF_REQ'];
      $stmt = "EXEC STBL_STK_OUT ?, ?, ?, ?";
      $params = array(
        array($I_ITEM_CD, SQLSRV_PARAM_IN),
        array($I_QTY, SQLSRV_PARAM_IN),
        array($I_EMP, SQLSRV_PARAM_IN),
        array($I_REF_REQ, SQLSRV_PARAM_IN),
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      $d = Utility::jsonMSSQL($query);
  }

  public function STBL_HIS_ITEM($frm="")
  {
      $DB = connect_mssql::DBName('STBL_Engineer_STK');
      $I_ITEM_CD = $frm['I_ITEM_CD'];
      $stmt = "EXEC STBL_HIS_ITEM ?";
      $params = array(
        array($I_ITEM_CD, SQLSRV_PARAM_IN),
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      $d = Utility::jsonMSSQL($query);
  }

  public function STBL_ORDER_LIST($frm="")
  {
      $DB = connect_mssql::DBName('STBL_Engineer_STK');
      $I_ITEM_CD = $frm['Status'];
      $stmt = "EXEC STBL_ORDER_LIST ";
      $params = array(
        array($I_ITEM_CD, SQLSRV_PARAM_IN),
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      $d = Utility::jsonMSSQL($query);
  }

  public function STBL_ORDER_LIST_DEL($frm="")
  {
      $DB = connect_mssql::DBName('STBL_Engineer_STK');
      $I_ID = $frm['ID'];
      $stmt = "EXEC STBL_ORDER_LIST_DEL ?";
      $params = array(
        array($I_ID, SQLSRV_PARAM_IN),
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      $d = Utility::jsonMSSQL($query);
  }

  public function STBL_ORDER_LIST_UPD($frm="")
  {
      $DB = connect_mssql::DBName('STBL_Engineer_STK');
      $I_ID = $frm['ID'];
      $I_PR_ref = $frm['RefPR'];
      $I_PO_ref = $frm['RefPO'];
      $I_EMP = $frm['Emp'];
      $stmt = "EXEC STBL_ORDER_LIST_UPD ?, ?, ?, ?";
      $params = array(
        array($I_ID, SQLSRV_PARAM_IN),
        array($I_PR_ref, SQLSRV_PARAM_IN),
        array($I_PO_ref, SQLSRV_PARAM_IN),
        array($I_EMP, SQLSRV_PARAM_IN)
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      $d = Utility::jsonMSSQL($query);
  }

  public function STBL_STK_BY_MONTH($frm="")
  {
      $DB = connect_mssql::DBName('STBL_Engineer_STK');
      $I_EMP = $frm['Emp'];
      $stmt = "EXEC STBL_STK_BY_MONTH ?";
      $params = array(
        array($I_EMP, SQLSRV_PARAM_IN)
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      $d = Utility::jsonMSSQL($query);
  }
}
?>
