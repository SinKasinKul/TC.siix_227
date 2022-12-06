<?php
/**
 * Class for Query data for Process V11
 */
class PARKING
{

    public function STBL_INS_BOOKING($frm)
    {
      $DB = connect_mssql228::DB();
      $EmployeeID = $frm['EmployeeID'];
      $stmt = "EXEC [STBL_PARKING].[dbo].[STBL_INS_BOOKING] ?";
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

    public function STBL_INS_OUT($frm)
    {
      $DB = connect_mssql228::DB();
      $EmployeeID = $frm['EmployeeID'];
      $stmt = "EXEC [STBL_PARKING].[dbo].[STBL_INS_OUT] ?";
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

    public function STBL_PARKING_STATUS($frm)
    {
      $DB = connect_mssql228::DB();
      $EmployeeID = $frm['EmployeeID'];
      $stmt = "EXEC [STBL_PARKING].[dbo].[STBL_PARKING_STATUS]";
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
