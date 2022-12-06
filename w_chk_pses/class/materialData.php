<?php
/**
 * Class for Query data
 */
class makerLotData
{
  public function getBatch($frm)
  {
    $DB = connect_mssql::DB();
    $Batch = $frm['Batch'];
    $stmt = "EXEC [PSES_check_serial].[dbo].[PSES_CHK_BATCH_NG] ?";
    $params = array(
      array($Batch, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
}
?>
