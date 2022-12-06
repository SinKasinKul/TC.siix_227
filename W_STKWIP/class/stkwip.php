<?php
/**
 * Class for Query data
 */
class STKWIP
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

  public function InsInBound($frm)
  {
    $DB = connect_mssql::DB();
    $Tracking = $frm['Tracking'];
    $Lot = $frm['Lot'];
    $Qty = $frm['Qty'];
    $Location = $frm['Location'];
    $Emp = $frm['Emp'];

    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_STK_INS_INBOUND] ?, ?, ?, ?, ?";
    $params = array(
      array($Tracking, SQLSRV_PARAM_IN),
      array($Lot, SQLSRV_PARAM_IN),
      array($Qty, SQLSRV_PARAM_IN),
      array($Location, SQLSRV_PARAM_IN),
      array($Emp, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function InsOutBound($frm)
  {
    $DB = connect_mssql::DB();
    $Tracking = $frm['Tracking'];
    $Lot = $frm['Lot'];
    $Emp = $frm['Emp'];

    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_STK_INS_OUTBOUND] ?, ?, ?";
    $params = array(
      array($Tracking, SQLSRV_PARAM_IN),
      array($Lot, SQLSRV_PARAM_IN),
      array($Emp, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function InsOutBoundSeiban($frm)
  {
    $DB = connect_mssql::DB();
    $Emp = $frm['Emp'];
    $Location = $frm['Location'];
    $Seiban = $frm['Seiban'];

    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_STK_INS_OUTBOUND_SEIBAN] ?, ?, ?";
    $params = array(
      array($Seiban, SQLSRV_PARAM_IN),
      array($Emp, SQLSRV_PARAM_IN),
      array($Location, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function InquirySTK($frm)
  {
    $DB = connect_mssql::DB();
    $ItemCD = $frm['ItemCD'];

    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_STK_SEC_ONHAND] ?";
    $params = array(
      array($ItemCD, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function UpdateOnHand($frm)
  {
    $DB = connect_mssql::DB();
    $Batch = $frm['Batch'];
    $Qty = $frm['Qty'];

    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_STK_UPD_QTY_ONHAND] ?, ?";
    $params = array(
      array($Batch, SQLSRV_PARAM_IN),
      array($Qty, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function jsonOnHandTotal($frm)
  {
    $DB = connect_mssql::DB();
    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_STK_SEC_OUTBOUND_TOTAL]";
    $params = array(
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
    sqlsrv_close( $DB );
  }

  public function jsonOnHandDetail($frm)
  {
    $DB = connect_mssql::DB();
    $ItemCD = $frm['ItemCD'];
    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_STK_SEC_OUTBOUND_DETAIL] ?";
    $params = array(
      array($ItemCD, SQLSRV_PARAM_IN),
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
    sqlsrv_close( $DB );

  }

  public function jsonOnHandHis($frm)
  {
    $DB = connect_mssql::DB();
    $ItemCD = $frm['ItemCD'];;
    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_STK_SEC_HIS] ?";
    $params = array(
      array($ItemCD, SQLSRV_PARAM_IN),
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
    sqlsrv_close( $DB );

  }

  public function STBL_PLAN_WITH_WIP($frm)
  {
    $DB = connect_mssql::DB();
    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_PLAN_WITH_WIP] ";
    $params = array();
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
    sqlsrv_close( $DB );

  }

  public function InsertStockTake($frm)
  {
    $DB = connect_mssql::DB();
    $ItemCD = $frm['ItemCD'];
    $Batch = $frm['Batch'];
    $Qty = $frm['Qty'];
    $Location = $frm['Location'];
    $Emp = $frm['Emp'];

    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_STK_INS_STOCKTAKE] ?, ?, ?, ?";
    $params = array(
      array($ItemCD, SQLSRV_PARAM_IN),
      array($Batch, SQLSRV_PARAM_IN),
      array($Qty, SQLSRV_PARAM_IN),
      array($Location, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function CheckBatchOnHand($frm)
  {
    $DB = connect_mssql::DB();
    $Batch = $frm['Batch'];

    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_STK_CHK_BATCH_ONHAND] ?";
    $params = array(
      array($Batch, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_UPD_PLAN($frm)
  {
    $DB = connect_mssql::DB();
    $WBS = $frm['WBS'];
    $Qty = $frm['Qty'];

    $stmt = "EXEC [STBL_STOCK_WIP].[dbo].[STBL_UPD_PLAN] ?, ?";
    $params = array(
      array($WBS, SQLSRV_PARAM_IN),
      array($Qty, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
}
?>
