<?php
/**
 * Class for Query data for Process V11
 */
class RTOT
{
  public function STBL_RTOT_EMP_BY_MONTH($frm)
  {
    $DB = connect_mssql226::DB();
    $DEPT = $frm['Department'];
    $DATE = $frm['Date'];
    $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_RTOT_EMP_BY_MONTH] ?, ?";
    $params = array(
      array($DATE, SQLSRV_PARAM_IN),
      array($DEPT, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_RTOT_EMP_SUMMARY_BY_MONTH($frm)
  {
    $DB = connect_mssql226::DB();
    $DEPT = $frm['Department'];
    $DATE = $frm['Date'];
    $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_RTOT_EMP_SUMMARY_BY_MONTH] ?, ?";
    $params = array(
      array($DATE, SQLSRV_PARAM_IN),
      array($DEPT, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_RTOT_EMP_SUMMARY_BY_TEAM($frm)
  {
    $DB = connect_mssql226::DB();
    $DEPT = $frm['Department'];
    $DATE = $frm['Date'];
    $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_RTOT_EMP_SUMMARY_BY_TEAM] ?, ?";
    $params = array(
      array($DATE, SQLSRV_PARAM_IN),
      array($DEPT, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_RTOT_EMP_SUMMARY_TIME_BY_TEAM($frm)
  {
    $DB = connect_mssql226::DB();
    $DEPT = $frm['Department'];
    $DATE = $frm['Date'];
    $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_RTOT_EMP_SUMMARY_TIME_BY_TEAM] ?, ?";
    $params = array(
      array($DATE, SQLSRV_PARAM_IN),
      array($DEPT, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_LIST_GROUP($frm)
  {
    $DB = connect_mssql226::DB();
    $DEPT = $frm['Department'];
    $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_LIST_GROUP] ?";
    $params = array(
      array($DEPT, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_EMP_INS($frm)
  {
    $DB = connect_mssql226::DB();
    $EmployeeID = $frm['EmployeeID'];
    $EmpName = $frm['EmpName'];
    $EmpSurName = $frm['EmpSurName'];
    $EmpDept = $frm['EmpDept'];
    $EmpPosition = $frm['EmpPosition'];
    $EmpTeam = $frm['EmpTeam'];
    $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_EMP_INS] ?, ?, ?, ?, ?, ?";
    $params = array(
      array($EmployeeID, SQLSRV_PARAM_IN),
      array($EmpName, SQLSRV_PARAM_IN),
      array($EmpSurName, SQLSRV_PARAM_IN),
      array($EmpDept, SQLSRV_PARAM_IN),
      array($EmpPosition, SQLSRV_PARAM_IN),
      array($EmpTeam, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_EMP_UPD($frm)
  {
    $DB = connect_mssql226::DB();
    $EmployeeID = $frm['EmployeeID'];
    $EmpName = $frm['EmpName'];
    $EmpSurName = $frm['EmpSurName'];
    $EmpDept = $frm['EmpDept'];
    $EmpPosition = $frm['EmpPosition'];
    $EmpTeam = $frm['EmpTeam'];
    $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_EMP_UPD] ?, ?, ?, ?, ?, ?";
    $params = array(
      array($EmployeeID, SQLSRV_PARAM_IN),
      array($EmpName, SQLSRV_PARAM_IN),
      array($EmpSurName, SQLSRV_PARAM_IN),
      array($EmpDept, SQLSRV_PARAM_IN),
      array($EmpPosition, SQLSRV_PARAM_IN),
      array($EmpTeam, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_EMP_UPD_OUT($frm)
  {
    $DB = connect_mssql226::DB();
    $EmployeeID = $frm['EmployeeID'];
    $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_EMP_UPD_OUT] ?";
    $params = array(
      array($EmployeeID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

  public function STBL_BUS_EMP_BY_MONTH($frm)
  {
    $DB = connect_mssql226::DB();
    $Date = $frm['Date'];
    $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_BUS_EMP_BY_MONTH] ?";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }
  }

}
?>
