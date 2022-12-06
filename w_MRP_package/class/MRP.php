<?php
class MRP
{
  public function ChkUser($frm)
  {
    $DB = connect_mssql::DB('');
    $User = $frm['User'];
    $stmt = "EXEC CHECK_USER ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }
  public function STBL_GET_DATA_PO($frm)
  {
    $DB = connect_mssql::DBName('MRP_PACKAGING');
    $PO_Date = $frm['PO_Date'];
    $stmt = "EXEC STBL_GET_DATA_PO ?";
    $params = array(
      array($PO_Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }

  //---------------------------Supplier----------------------------------//
  public function STBL_SUPPLIER_MASTER($frm)
  {
    $DB = connect_mssql::DBName('MRP_PACKAGING');
    $SupplierCD = $frm['SupplierCD'];
    $stmt = "EXEC STBL_SUPPLIER_MASTER ?";
    $params = array(
      array($PO_Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }
  public function STBL_SUPPLIER_MASTER_INS($frm)
  {
    $I_VENDER_CD = $frm['I_VENDER_CD'];
    $I_VENDER_NAME = $frm['I_VENDER_NAME'];
    $I_VENDER_ADD1 = $frm['I_VENDER_ADD1'];
    $I_VENDER_ADD2 = $frm['I_VENDER_ADD2'];
    $I_VENDER_TEL = $frm['I_VENDER_TEL'];
    $I_VENDER_PIC = $frm['I_VENDER_PIC'];
    $I_VENDER_EMAIL = $frm['I_VENDER_EMAIL'];
    $I_PAYMENT = $frm['I_PAYMENT'];

    $DB = connect_mssql::DBName('MRP_PACKAGING');
    $stmt = "EXEC STBL_SUPPLIER_MASTER_INS ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($I_VENDER_CD, SQLSRV_PARAM_IN),
      array($I_VENDER_NAME, SQLSRV_PARAM_IN),
      array($I_VENDER_ADD1, SQLSRV_PARAM_IN),
      array($I_VENDER_ADD2, SQLSRV_PARAM_IN),
      array($I_VENDER_TEL, SQLSRV_PARAM_IN),
      array($I_VENDER_PIC, SQLSRV_PARAM_IN),
      array($I_VENDER_EMAIL, SQLSRV_PARAM_IN),
      array($I_PAYMENT, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
  public function STBL_SUPPLIER_MASTER_DEL($frm)
  {
    $DB = connect_mssql::DBName('MRP_PACKAGING');
    $VENDER_ID = $frm['VENDER_ID'];
    $stmt = "EXEC STBL_SUPPLIER_MASTER_DEL ?";
    $params = array(
      array($VENDER_ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }
  //---------------------------ItemMaster----------------------------------//
  public function STBL_ITEM_MASTER($frm)
  {
    $DB = connect_mssql::DBName('MRP_PACKAGING');
    $I_ITEM_ID = $frm['I_ITEM_ID'];
    $I_TYPE = $frm['I_TYPE'];
    $stmt = "EXEC STBL_ITEM_MASTER ?, ?";
    $params = array(
      array($I_ITEM_ID, SQLSRV_PARAM_IN),
      array($I_TYPE, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }
  public function STBL_ITEM_MASTER_INS($frm)
  {
    $I_ITEM_CD = $frm['I_ITEM_CD'];
    $I_ITEM_DESC = $frm['I_ITEM_DESC'];
    $I_ITEM_MODEL = $frm['I_ITEM_MODEL'];
    $I_TYPE = $frm['I_TYPE'];
    $I_MOQ = $frm['I_MOQ'];
    $I_SPQ = $frm['I_SPQ'];
    $I_MAX_STK = $frm['I_MAX_STK'];
    $I_ACTIVE = $frm['I_ACTIVE'];

    $DB = connect_mssql::DBName('MRP_PACKAGING');
    $stmt = "EXEC STBL_ITEM_MASTER_INS ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($I_ITEM_CD, SQLSRV_PARAM_IN),
      array($I_ITEM_DESC, SQLSRV_PARAM_IN),
      array($I_ITEM_MODEL, SQLSRV_PARAM_IN),
      array($I_TYPE, SQLSRV_PARAM_IN),
      array($I_MOQ, SQLSRV_PARAM_IN),
      array($I_SPQ, SQLSRV_PARAM_IN),
      array($I_MAX_STK, SQLSRV_PARAM_IN),
      array($I_ACTIVE, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
  public function STBL_ITEM_MASTER_DEL($frm)
  {
    $DB = connect_mssql::DBName('MRP_PACKAGING');
    $ITEM_ID = $frm['ITEM_ID'];
    $stmt = "EXEC STBL_ITEM_MASTER_DEL ?";
    $params = array(
      array($ITEM_ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }
  //---------------------------BOMMaster----------------------------------//
  public function STBL_BOM_MASTER($frm)
  {
    $DB = connect_mssql::DBName('MRP_PACKAGING');
    $I_ITEM_CD_FG = $frm['I_ITEM_CD_FG'];
    $stmt = "EXEC STBL_BOM_MASTER ?";
    $params = array(
      array($I_ITEM_CD_FG, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }
  public function STBL_BOM_MASTER_INS($frm)
  {
    $ID = $frm['ID'];
    $I_ITEM_CD_FG = $frm['I_ITEM_CD_FG'];
    $I_ITEM_CD_MAT = $frm['I_ITEM_CD_MAT'];
    $I_TRAY_USAGE = $frm['I_TRAY_USAGE'];
    $I_TRAY_SUPPORT = $frm['I_TRAY_SUPPORT'];
    $I_BOX_USAGE = $frm['I_BOX_USAGE'];
    $I_ACTIVE = $frm['I_ACTIVE'];

    $DB = connect_mssql::DBName('MRP_PACKAGING');
    $stmt = "EXEC STBL_BOM_MASTER_INS ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN),
      array($I_ITEM_CD_FG, SQLSRV_PARAM_IN),
      array($I_ITEM_CD_MAT, SQLSRV_PARAM_IN),
      array($I_TRAY_USAGE, SQLSRV_PARAM_IN),
      array($I_TRAY_SUPPORT, SQLSRV_PARAM_IN),
      array($I_BOX_USAGE, SQLSRV_PARAM_IN),
      array($I_ACTIVE, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
  public function STBL_BOM_MASTER_DEL($frm)
  {
    $DB = connect_mssql::DBName('MRP_PACKAGING');
    $ITEM_ID = $frm['ITEM_ID'];
    $stmt = "EXEC STBL_BOM_MASTER_DEL ?";
    $params = array(
      array($ITEM_ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }
  //---------------------------ForeCastMaster----------------------------------//
  public function STBL_FORECAST_MASTER($frm)
  {
    $ID = $frm['ID'];
    $I_ITEM_CD_FG = $frm['I_ITEM_CD_FG'];
    $I_ITEM_CD_DESC = $frm['I_ITEM_CD_DESC'];
    $I_QTY = $frm['I_QTY'];
    $I_ACTIVE = $frm['I_ACTIVE'];

    $DB = connect_mssql::DBName('STBL_FORECAST_MASTER');
    $stmt = "EXEC STBL_BOM_MASTER_INS ?, ?, ?, ?, ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN),
      array($I_ITEM_CD_FG, SQLSRV_PARAM_IN),
      array($I_ITEM_CD_DESC, SQLSRV_PARAM_IN),
      array($I_QTY, SQLSRV_PARAM_IN),
      array($I_ACTIVE, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

}
 ?>
