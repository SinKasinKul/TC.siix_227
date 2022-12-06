<?php
/**
 * Class for Query data for Process V11
 */
class SAMTA
{

  public function ChkUser($frm)
  {
    $DB = connect_mssql::DB();
    $User = $frm['User'];
    $stmt = "EXEC ICT_CHK_USER ?";
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
    $stmt = "EXEC Chk_Model_Seiban ?, ?";
    $params = array(
      array($ItemCD, SQLSRV_PARAM_IN),
      array($Seiban, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }

  public function InsWRCtrl($frm='')
  {
      $process = 'SMTA';
      $DB = connect_mssql::DB();
      $stmt = "EXEC NALC_INS_WR_CRL ?,?,?,?,?,?,?,?";
      $params = array(
        array($process, SQLSRV_PARAM_IN),
        array($frm['SHIFT_ID'], SQLSRV_PARAM_IN),
        array($frm['LOT'], SQLSRV_PARAM_IN),
        array($frm['EMP'], SQLSRV_PARAM_IN),
        array($frm['SEIBAN_CD'], SQLSRV_PARAM_IN),
        array($frm['ITEMCODE'], SQLSRV_PARAM_IN),
        array($frm['CLIENT'], SQLSRV_PARAM_IN),
        array($frm['Qty'], SQLSRV_PARAM_IN)
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      Utility::jsonMSSQL($query);
  }

  public function jsonWRCtrl($frm)
  {
    $DB = connect_mssql::DB();
    $Lot = $frm['LOT'];
    $process = 'SMTA';
    $stmt = "EXEC NAL_SELECT_WR_CTRL ?, ?";
    $params = array(
      array($Lot, SQLSRV_PARAM_IN),
      array($process, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
    sqlsrv_close( $DB );

  }

  public function InsMainProcess($frm='')
  {
      $process = 'SMTA';
      $DB = connect_mssql::DB();
      $stmt = "EXEC NAL_INS_MAIN_PROCESS ?,?,?,?,?,?,?";
      $params = array(
        array($frm['Barcode'], SQLSRV_PARAM_IN),
        array($frm['SHIFT_ID'], SQLSRV_PARAM_IN),
        array($frm['SHIFT'], SQLSRV_PARAM_IN),
        array($frm['CLIENT'], SQLSRV_PARAM_IN),
        array($frm['LOT'], SQLSRV_PARAM_IN),
        array($process, SQLSRV_PARAM_IN),
        array($frm['EMP'], SQLSRV_PARAM_IN)
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      Utility::jsonMSSQL($query);
      sqlsrv_close( $DB );
  }

  public function jsonMainProcess($frm)
  {
    $DB = connect_mssql::DB();
    $Lot = $frm['LOT'];
    $process = 'SMTA';
    $stmt = "EXEC NAL_SELECT_MAIN_PROCESS ?, ?";
    $params = array(
      array($Lot, SQLSRV_PARAM_IN),
      array($process, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
    sqlsrv_close( $DB );

  }

  public function jsonCountSeiban($frm)
  {
    $DB = connect_mssql::DB();
    $Lot = $frm['LOT'];
    $process = 'SMTA';
    $stmt = "EXEC NAL_COUNT_SEIBAN_WITHLOT ?, ?";
    $params = array(
      array($process, SQLSRV_PARAM_IN),
      array($Lot, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
    sqlsrv_close( $DB );

  }

  public function jsonCountBar($frm)
  {
    $DB = connect_mssql::DB();
    $Lot = $frm['LOT'];
    $process = 'SMTA';
    $stmt = "EXEC NAL_COUNT_BAR_BY_LOT ?, ?";
    $params = array(
      array($Lot, SQLSRV_PARAM_IN),
      array($process, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
    sqlsrv_close( $DB );

  }

}
?>
