<?php
/**
 * Class for Query data
 */
class Repair
{
  private $Process = 'Judgement';

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

  public function ChkModel($frm)
  {
    $DB = connect_mssql::DB();
    $ItemCD = $frm['ItemCode'];
    $Seiban = $frm['Seiban'];
    $stmt = "EXEC [STBL_TRAN].[dbo].[Chk_Model_Seiban] ?, ?";
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
    $stmt = "EXEC [STBL_TRAN].[dbo].[STBL_MAIN_CHECK_DATA] ?";
    $params = array(
      array($Barcode, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }


  public function checkInsertBarcode($frm)
  {
    $DB = connect_mssql::DB();
    $Barcode = $frm['Barcode'];
    $Model = $frm['Model'];
    $Status = $frm['Status'];
    $ShipID = $frm['ShipID'];
    $Shift = $frm['Shift'];
    $Emp = $frm['Emp'];
    $Seiban = $frm['Seiban'];
    $Client = $frm['Client'];
    $Troubleshoot = $frm['Troubleshoot'];
    $Process = $this->Process;
    $stmt = "EXEC [STBL_TRAN].[dbo].[STBL_MAIN_REPAIR_INS] ?, ?, ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($Barcode, SQLSRV_PARAM_IN),
      array($Model, SQLSRV_PARAM_IN),
      array($Status, SQLSRV_PARAM_IN),
      array($ShipID, SQLSRV_PARAM_IN),
      array($Shift, SQLSRV_PARAM_IN),
      array($Emp, SQLSRV_PARAM_IN),
      array($Seiban, SQLSRV_PARAM_IN),
      array($Client, SQLSRV_PARAM_IN),
      array($Process, SQLSRV_PARAM_IN),
      array($Troubleshoot, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }

}
?>
