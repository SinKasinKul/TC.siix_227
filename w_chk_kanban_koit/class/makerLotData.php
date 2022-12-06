<?php
/**
 * Class for Query data
 */
class makerLotData
{
  public function getMakerLot($frm)
  {
    $DB = connect_mssql::DB();
    $Batch = $frm['Batch'];
    $Item = $frm['Item'];
    $stmt = "EXEC SAP_GET_MAKER_LOT ?, ?";
    $params = array(
      array($Batch, SQLSRV_PARAM_IN),
      array($Item, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
}
?>
