<?php
/**
 * Class for Query data
 */
class package
{
  public function ChkUser($frm)
  {
    $DB = connect_mssql::DB();
    $User = $frm['User'];
    $stmt = "EXEC [Siix_check_serial].[dbo].[CHECK_USER] ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function ChkModel($frm)
  {
    $DB = connect_mssql::DB();
    $Model = $frm['Model'];
    $ShipModel = $frm['ShipModel'];
    $Barcode = $frm['Barcode'];
    $Box = $frm['Box'];
    $stmt = "EXEC [STBL_NAL].[dbo].[MAIN_CHK_PACKAGE_NEW] ?, ?, ?, ?";
    $params = array(
      array($Barcode, SQLSRV_PARAM_IN),
      array($Model, SQLSRV_PARAM_IN),
      array($ShipModel, SQLSRV_PARAM_IN),
      array($Box, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_INS_PACKING_CHK($frm)
  {
    $DB = connect_mssql::DB();
    $vEmpName       = $frm['EmpName'];
    $vCatonModel    = $frm['CatonModel'];
    $vCatonNo       = $frm['CatonNo'];
    $vShipmentModel = $frm['ShipmentModel'];
    $vSerialCheck   = $frm['SerialCheck'];
    $vStatus        = $frm['Status'];

    $stmt = "EXEC [STBL_NAL].[dbo].[STBL_INS_PACKING_CHK] ?, ?, ?, ?, ?, ?";
    $params = array(
      array($vEmpName, SQLSRV_PARAM_IN),
      array($vCatonModel, SQLSRV_PARAM_IN),
      array($vCatonNo, SQLSRV_PARAM_IN),
      array($vShipmentModel, SQLSRV_PARAM_IN),
      array($vSerialCheck, SQLSRV_PARAM_IN),
      array($vStatus, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
}
?>
