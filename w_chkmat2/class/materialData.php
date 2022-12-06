<?php
/**
 * Class for Query data
 */
class makerLotData
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

  public function insReplSMT($frm)
  {
    $DB = connect_mssql::DB();
    $Line = $frm['Line'];
    $Tables = $frm['Tables'];
    $ItenCD = $frm['ItemCD'];
    $Qty = $frm['Qty'];
    $BatchCurr = $frm['BatchCurr'];
    $BatchRepl = $frm['BatchRepl'];
    $Emp = $frm['Emp'];

    $stmt = "EXEC [STBL_REPLACE_MAT_SMT].[dbo].[STBL_REPL_INS_MAIN] ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($Line, SQLSRV_PARAM_IN),
      array($Tables, SQLSRV_PARAM_IN),
      array($ItenCD, SQLSRV_PARAM_IN),
      array($Qty, SQLSRV_PARAM_IN),
      array($BatchCurr, SQLSRV_PARAM_IN),
      array($BatchRepl, SQLSRV_PARAM_IN),
      array($Emp, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function countReplSMT($frm)
  {
    $DB = connect_mssql::DB();
    $Line = $frm['Line'];
    $Tables = $frm['Tables'];
    $ItenCD = $frm['ItemCD'];

    $stmt = "EXEC [STBL_REPLACE_MAT_SMT].[dbo].[STBL_RELP_SEC_COUNT] ?, ?, ?";
    $params = array(
      array($Line, SQLSRV_PARAM_IN),
      array($Tables, SQLSRV_PARAM_IN),
      array($ItenCD, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_REP_INS_SEIBAN($frm)
  {
    $DB = connect_mssql::DB();
    $LINE = $frm['Line'];
    $SEIBAN = $frm['SEIBAN'];
    $Emp = $frm['Emp'];

    $stmt = "EXEC [STBL_REPLACE_MAT_SMT].[dbo].[STBL_REP_INS_SEIBAN] ?, ?, ?";
    $params = array(
      array($LINE, SQLSRV_PARAM_IN),
      array($SEIBAN, SQLSRV_PARAM_IN),
      array($Emp, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_RELP_MC_LIST($frm)
  {
    $DB = connect_mssql::DB();
    $stmt = "EXEC [STBL_REPLACE_MAT_SMT].[dbo].[STBL_RELP_MC_LIST]";
    $params = array();
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_REP_HIS_MAT($frm)
  {
    $DB = connect_mssql::DB();
    $LINE = $frm['Line'];
    $Item = $frm['Item'];
    $SEIBAN = $frm['SEIBAN'];

    $stmt = "EXEC [STBL_REPLACE_MAT_SMT].[dbo].[STBL_REP_HIS_MAT] ?, ?, ?";
    $params = array(
      array($LINE, SQLSRV_PARAM_IN),
      array($Item, SQLSRV_PARAM_IN),
      array($SEIBAN, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
}
?>
