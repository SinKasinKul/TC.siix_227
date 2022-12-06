<?php
/**
 * Class for Query data
 */
class Repair
{
  private $Process = 'Judgment';

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
    $stmt = "EXEC Chk_Model_Seiban ?, ?";
    $params = array(
      array($ItemCD, SQLSRV_PARAM_IN),
      array($Seiban, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }

  public function checkInsertLot($frm)
  {
    $DB = connect_mssql::DB();
    $Model = $frm['Model'];
    $Lot = $frm['lot'];
    $ShipID = $frm['ShipID'];
    $Emp = $frm['Emp'];
    $Qty = $frm['Qty'];
    $Seiban = $frm['Seiban'];
    $Mode = '10';
    $stmt = "EXEC LOTS_CHK_INSTER ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($Model, SQLSRV_PARAM_IN),
      array($Lot, SQLSRV_PARAM_IN),
      array($ShipID, SQLSRV_PARAM_IN),
      array($Emp, SQLSRV_PARAM_IN),
      array($Qty, SQLSRV_PARAM_IN),
      array($Seiban, SQLSRV_PARAM_IN),
      array($Mode, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }

  public function jsonLotQty($frm='')
  {
    $DB = connect_mssql::DB();
    $model = $frm['Model'];
    $lot = $frm['lot'];
    $stmt = "BEGIN
          		DECLARE @sModel nvarchar(50);
          		DECLARE @sLot   nvarchar(20);
          		DECLARE @sMode  int;
          		SET @sModel = '$model';
          		SET @sLot = '$lot';
              SET @sMode = '10';
          			SELECT  [lot_no],[model],[qty] FROM [Siix_check_serial].[dbo].[TBL_LOTS]
          			WHERE model = @sModel
          			AND lot_no = @sLot
                AND mode = @sMode
          		END";
     $query = sqlsrv_query( $DB, $stmt, $params);
     Utility::jsonMSSQL($query);
  }

  public function jsonLotSTD($frm='')
  {
    $DB = connect_mssql::DB();
    $model = $frm['Model'];
    $stmt = "BEGIN
          		DECLARE @sModel nvarchar(50),
          		        @sLot   nvarchar(20);
          		SET @sModel = '$model';
          			SELECT  [ITEM_DESC],[STD] FROM [Siix_check_serial].[dbo].[PSES_STD_PACK]
          			WHERE ITEM_DESC = @sModel
          		END";
     $query = sqlsrv_query( $DB, $stmt, $params);
     Utility::jsonMSSQL($query);
  }

  public function JsonMainGrid($frm='')
  {
    $DB = connect_mssql::DB();
    $Barcode = $frm['Barcode'];
    $stmt = "EXEC REPAIR_CHECK_DATA ?";
    $params = array(
      array($Barcode, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }

  public function jsonShowCount($frm='')
  {
    $DB = connect_mssql::DB();
    $seiban = $frm['seiban'];
    $lot = $frm['lot'];
    $stmt = "BEGIN
              DECLARE @sSeiban nvarchar(50);
              DECLARE @sLot   nvarchar(20);
              SET @sSeiban = '$seiban';
              SET @sLot = '$lot';
                SELECT	COUNT(CASE [STATE_DESC] WHEN 'OK' THEN [Barcode] END) AS STATUS_OK
                       ,COUNT(CASE [STATE_DESC] WHEN 'NG' THEN [Barcode] END) AS STATUS_NG
                       ,COUNT(CASE [STATE_DESC] WHEN 'NO Data' THEN [Barcode] END) AS STATUS_ND
                       ,COUNT(CASE [STATE_DESC] WHEN 'MIX' THEN [Barcode] END) AS STATUS_MIX
                FROM [Siix_check_serial].[dbo].[TBL_CHECK_ICT]
                where [SEIBAN_CD] = @sSeiban and lot = @sLot
          	 END";
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
    $Process = $this->Process;
    $stmt = "EXEC [Siix_check_serial].[dbo].[REPAIR_INS_DATE] ?, ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($Barcode, SQLSRV_PARAM_IN),
      array($Model, SQLSRV_PARAM_IN),
      array($Status, SQLSRV_PARAM_IN),
      array($ShipID, SQLSRV_PARAM_IN),
      array($Shift, SQLSRV_PARAM_IN),
      array($Emp, SQLSRV_PARAM_IN),
      array($Seiban, SQLSRV_PARAM_IN),
      array($Client, SQLSRV_PARAM_IN),
      array($Process, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }

}
?>
