<?php
/**
 * Class for Query data for Process V11
 */
class RTOT
{

  public function ChkUser($frm)
  {
    $DB = connect_mssql226::DB();
    $User = $frm['User'];
    $stmt = "EXEC ICT_CHK_USER ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }

  public function STBL_RTOT_NORMAL_INS($frm)
  {
    $DB = connect_mssql226::DB();
    $Department = $frm['Department'];
    $EmployeeID = $frm['EmployeeID'];
    $EmpGroup = $frm['EmpGroup'];
    $WorkingDate = $frm['WorkingDate'];
    $WorkingType = $frm['WorkingType'];
    $OTNormal = $frm['OTNormal'];
    $BUS = $frm['BUS'];
    $SHIFT = $frm['SHIFT'];
    $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_RTOT_NORMAL_INS] ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($Department, SQLSRV_PARAM_IN),
      array($EmployeeID, SQLSRV_PARAM_IN),
      array($EmpGroup, SQLSRV_PARAM_IN),
      array($WorkingDate, SQLSRV_PARAM_IN),
      array($WorkingType, SQLSRV_PARAM_IN),
      array($OTNormal, SQLSRV_PARAM_IN),
      array($BUS, SQLSRV_PARAM_IN),
      array($SHIFT, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    if (!$query) {
        die( print_r( sqlsrv_errors(), true));
    }else{
      Utility::jsonMSSQL($query);
    }

  }

  public function STBL_RTOT_HOLIDAY_INS($frm)
  {
    $DB = connect_mssql226::DB();
    $Department = $frm['Department'];
    $EmployeeID = $frm['EmployeeID'];
    $EmpGroup = $frm['EmpGroup'];
    $WorkingType = $frm['WorkingType'];
    $WorkingTypeH = $frm['WorkingTypeH'];
    $DateSat = $frm['DateSat'];
    $DateSun = $frm['DateSun'];
    $BUS = $frm['BUS'];
    $SHIFT = $frm['SHIFT'];
    $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_RTOT_HOLIDAY_INS] ?, ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($Department, SQLSRV_PARAM_IN),
      array($EmployeeID, SQLSRV_PARAM_IN),
      array($EmpGroup, SQLSRV_PARAM_IN),
      array($WorkingType, SQLSRV_PARAM_IN),
      array($WorkingTypeH, SQLSRV_PARAM_IN),
      array($DateSat, SQLSRV_PARAM_IN),
      array($DateSun, SQLSRV_PARAM_IN),
      array($BUS, SQLSRV_PARAM_IN),
      array($SHIFT, SQLSRV_PARAM_IN)
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

    public function STBL_LIST_BUS_GROUP($frm)
    {
      $DB = connect_mssql226::DB();
      $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_LIST_BUS_GROUP] ";
      $params = array();
      $query = sqlsrv_query( $DB, $stmt, $params);
      if (!$query) {
          die( print_r( sqlsrv_errors(), true));
      }else{
        Utility::jsonMSSQL($query);
      }
    }

    public function STBL_EMP_SEC($frm)
    {
      $DB = connect_mssql226::DB();
      $EmpID = $frm['EmpID'];
      $stmt = "EXEC [STBL_RT_OT].[dbo].[STBL_EMP_SEC] ?";
      $params = array(
        array($EmpID, SQLSRV_PARAM_IN)
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
