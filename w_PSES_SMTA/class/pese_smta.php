<?php
/**
 * Class for Query data
 */
class PeseSmtA
{
  private $Process = 'SMTA';

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
          			SELECT  [ITEM_DESC],[STD] FROM [PSES_check_serial].[dbo].[PSES_STD_PACK]
          			WHERE ITEM_DESC = @sModel
          		END";
     $query = sqlsrv_query( $DB, $stmt, $params);
     Utility::jsonMSSQL($query);
  }

  public function JsonPSESSMTA($frm='')
  {
    $DB = connect_mssql::DB();
    $seiban = $frm['seiban'];
    $lot = $frm['lot'];
    $Model = $frm['Model'];
    $Process = $this->Process;
    $stmt = "EXEC [PSES_check_serial].[dbo].[SELECT_PSES_BY_STEP] ?, ?, ?, ?";
    $params = array(
              array($Model, SQLSRV_PARAM_IN),
              array($Process, SQLSRV_PARAM_IN),
              array($seiban, SQLSRV_PARAM_IN),
              array($lot, SQLSRV_PARAM_IN)
            );
        $query = sqlsrv_query( $DB, $stmt, $params);
        Utility::jsonMSSQL($query);
  }

  public function jsonShowCount($frm='')
  {
    $DB = connect_mssql::DB();
    $seiban = $frm['seiban'];
    $lot = $frm['lot'];
    $Model = $frm['Model'];
    $Process = $this->Process;
    $stmt = "EXEC [PSES_check_serial].[dbo].[SELECT_PSES_BY_STEP_COUNT] ?, ?, ?, ?";
    $params = array(
              array($Model, SQLSRV_PARAM_IN),
              array($Process, SQLSRV_PARAM_IN),
              array($seiban, SQLSRV_PARAM_IN),
              array($lot, SQLSRV_PARAM_IN)
            );
     $query = sqlsrv_query( $DB, $stmt, $params);
     Utility::jsonMSSQL($query);
  }

  public function checkInsertBarcode($frm)
  {
    $DB = connect_mssql::DB();
    $Barcode = $frm['Barcode'];
    $vBar = substr($Barcode,13,1);
    if($vBar == "0"){
      for($i = 1; $i < 5; $i++){
        $pBarcode = substr($Barcode,0,13);
        $Model = $frm['Model'];
        $Lot = $frm['lot'];
        $ShipID = $frm['ShipID'];
        $Shift = $frm['Shift'];
        $Emp = $frm['Emp'];
        $Seiban = $frm['Seiban'];
        $Client = $frm['Client'];
        $Process = $this->Process;
        $stmt = "EXEC [PSES_check_serial].[dbo].[CHECK_STEP_PSES_CTRL] ?, ?, ?, ?, ?, ?, ?, ?, ?";
        $params = array(
          array($pBarcode.$i, SQLSRV_PARAM_IN),
          array($Model, SQLSRV_PARAM_IN),
          array($Lot, SQLSRV_PARAM_IN),
          array($ShipID, SQLSRV_PARAM_IN),
          array($Shift, SQLSRV_PARAM_IN),
          array($Emp, SQLSRV_PARAM_IN),
          array($Seiban, SQLSRV_PARAM_IN),
          array($Client, SQLSRV_PARAM_IN),
          array($Process, SQLSRV_PARAM_IN)
          );
        $query = sqlsrv_query( $DB, $stmt, $params);
        //Utility::jsonMSSQL($query);
      }
      echo "{\"response\":\"success\",\"data\":[{\"result\":\"Success\"}]}";
    }
    else{
      $Model = $frm['Model'];
      $Lot = $frm['lot'];
      $ShipID = $frm['ShipID'];
      $Shift = $frm['Shift'];
      $Emp = $frm['Emp'];
      $Seiban = $frm['Seiban'];
      $Client = $frm['Client'];
      $Process = $this->Process;
      $stmt = "EXEC [PSES_check_serial].[dbo].[CHECK_STEP_PSES_CTRL] ?, ?, ?, ?, ?, ?, ?, ?, ?";
      $params = array(
        array($Barcode, SQLSRV_PARAM_IN),
        array($Model, SQLSRV_PARAM_IN),
        array($Lot, SQLSRV_PARAM_IN),
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

}
?>
