<?php
/**
 * Class for Query data for Process V11
 */
class CallEng
{

  public function ChkUser($frm)
  {
    $DB = connect_mssql229::DB();
    $User = $frm['TectID'];
    $stmt = "EXEC [STBL_MAINTENNANCE].[dbo].[STBL_GET_NAME_ENG] ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_MACHINE_LIST()
  {
    $DB = connect_mssql229::DB();
    $stmt = "EXEC [STBL_MAINTENNANCE].[dbo].[STBL_MACHINE_LIST]";
    $params = array();
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_ISSUE_LIST($frm)
  {
    $DB = connect_mssql229::DB();
    $Machine = $frm['Machine'];
    $stmt = "EXEC [STBL_MAINTENNANCE].[dbo].[STBL_ISSUE_LIST] ?";
    $params = array(
        array($Machine, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_GET_ACCECP_MC_LINE($frm)
  {
    $DB = connect_mssql229::DB();
    $Location = "SMT";
    $Line = $frm['Line'];
    $stmt = "EXEC [STBL_MAINTENNANCE].[dbo].[STBL_GET_ACCECP_MC_LINE] ?, ?";
    $params = array(
      array($Location, SQLSRV_PARAM_IN),
      array($Line, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_UPD_ACCP_JOB_I($frm)
  {
    $DB = connect_mssql229::DB();
    $ID = $frm['ID'];
    $EngCode = $frm['EngCode'];
    $Machine = $frm['Machine'];
    $Issue = $frm['Issue'];
    $Other = $frm['Other'];
    $stmt = "EXEC [STBL_MAINTENNANCE].[dbo].[STBL_UPD_ACCP_JOB_I] ?, ?, ?, ?, ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN),
      array($EngCode, SQLSRV_PARAM_IN),
      array($Machine, SQLSRV_PARAM_IN),
      array($Issue, SQLSRV_PARAM_IN),
      array($Other, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }
}