<?php
/**
 * Class for Query data
 */
class makerLotData
{
  public function getMakerLot($frm)
  {
    $DB = connect_mssql::DB();
    $Barcode = $frm['Barcode'];
    $stmt = "EXEC SAP_GET_MAKER_LOT ?";
    $params = array(
      array($Barcode, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
}
?>
