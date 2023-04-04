<?php
/**
 * Class for Query data
 */
class PLAN
{
  public function ChkUser($frm)
  {
    $DB = connect_mssql228::DB();
    $User = $frm['User'];
    $stmt = "EXEC [STBL_MAIN].[dbo].[CHECK_USER] ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }

  public function inputUserSESSION($frm)
  {
    $_SESSION["UserCode"] = $frm['UserCD'];
    $_SESSION["UserName"] = $frm['UserName'];

    echo "{\"response\":\"".$_SESSION["UserName"]."\"}";
  }

  public function getUserSESSION()
  {
    echo "{\"response\":\"".$_SESSION["UserName"]."\"}";
  }

  public function unsetSESSION()
  {
    session_unset();
    echo "{\"response\":\""."Success"."\"}";
  }

  public function PLAN_SEC($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $Line   = $frm['Line'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PLAN_SEC] ?, ?";
    $params = array(
      array($Date, SQLSRV_PARAM_IN),
      array($Line, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_PLAN_SEC_CHART($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PLAN_SEC_CHART]";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_KITTING_SEC_CHART($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_KITTING_SEC_CHART]";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_PROD_SEC_CHART($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PROD_SEC_CHART]";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function PLAN_SEC_WH($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PLAN_SEC_WH]";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function PLAN_SEC_PROD($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PLAN_SEC_PROD]";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_PLAN_SEC_OVERTRACKING($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PLAN_SEC_OVERTRACKING]";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_PLAN_SEC_OVERTRACKING_DATE($frm)
  {
    $DB = connect_mssql228::DB();
    $startDate   = $frm['startDate'];
    $endDate   = $frm['endDate'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PLAN_SEC_OVERTRACKING_DATE] ?, ?";
    $params = array(
      array($startDate, SQLSRV_PARAM_IN),
      array($endDate, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_PLAN_SEC_TOTAL_STATUS($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PLAN_SEC_TOTAL_STATUS]";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_PLAN_SEC_TOTAL_STATUS_PIE($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PLAN_SEC_TOTAL_STATUS_PIE]";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_WH_SEC_TOTAL_STATUS_PIE($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_WH_SEC_TOTAL_STATUS_PIE]";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_PROD_SEC_TOTAL_STATUS_PIE($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PROD_SEC_TOTAL_STATUS_PIE]";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function PLAN_INS($frm)
  {
    $DB = connect_mssql228::DB();
    $SMT_line = $frm['SMT_line'];
    $Priority = $frm['Priority'];
    $Delivery_date = $frm['Delivery_date'];
    $Side = $frm['Side'];
    $Project = $frm['Project'];

    $PCB_SAP_Code = $frm['PCB_SAP_Code'];
    $Type = $frm['Type'];
    $FG_SAP_Code = $frm['FG_SAP_Code'];
    $Model = $frm['Model'];
    $Tracking = $frm['Tracking'];

    $Lot = $frm['Lot'];
    $Plans = $frm['Plans'];
    $PLAN_Start_Date = $frm['PLAN_Start_Date'];
    $PLAN_End_Date = $frm['PLAN_End_Date'];
    $Unit_Hrs = $frm['Unit_Hrs'];

    $Schedule_Kitting_part = $frm['Schedule_Kitting_part'];
    $WH_Start_Date = $frm['WH_Start_Date'];
    $WH_End_Date = $frm['WH_End_Date'];
    $Pro_Start_Date = $frm['Pro_Start_Date'];
    $Pro_End_Date = $frm['Pro_End_Date'];

    $UserName = $frm['UserName'];

    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_INS_PLAN] ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($SMT_line, SQLSRV_PARAM_IN),
      array($Priority, SQLSRV_PARAM_IN),
      array($Delivery_date, SQLSRV_PARAM_IN),
      array($Side, SQLSRV_PARAM_IN),
      array($Project, SQLSRV_PARAM_IN),

      array($PCB_SAP_Code, SQLSRV_PARAM_IN),
      array($Type, SQLSRV_PARAM_IN),
      array($FG_SAP_Code, SQLSRV_PARAM_IN),
      array($Model, SQLSRV_PARAM_IN),
      array($Tracking, SQLSRV_PARAM_IN),

      array($Lot, SQLSRV_PARAM_IN),
      array($Plans, SQLSRV_PARAM_IN),
      array($PLAN_Start_Date, SQLSRV_PARAM_IN),
      array($PLAN_End_Date, SQLSRV_PARAM_IN),
      array($Unit_Hrs, SQLSRV_PARAM_IN),

      array($Schedule_Kitting_part, SQLSRV_PARAM_IN),
      array($UserName, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }

  public function PLAN_UPD($frm)
  {
    $DB = connect_mssql228::DB();
    $ID = $frm['ID'];

    $SMT_line = $frm['SMT_line'];
    $Priority = $frm['Priority'];
    $Delivery_date = $frm['Delivery_date'];
    $Side = $frm['Side'];
    $Project = $frm['Project'];

    $PCB_SAP_Code = $frm['PCB_SAP_Code'];
    $Type = $frm['Type'];
    $FG_SAP_Code = $frm['FG_SAP_Code'];
    $Model = $frm['Model'];
    $Tracking = $frm['Tracking'];

    $Lot = $frm['Lot'];
    $Plans = $frm['Plans'];
    $PLAN_Start_Date = $frm['PLAN_Start_Date'];
    $PLAN_End_Date = $frm['PLAN_End_Date'];
    $Unit_Hrs = $frm['Unit_Hrs'];

    $Schedule_Kitting_part = $frm['Schedule_Kitting_part'];
    $WH_Start_Date = $frm['WH_Start_Date'];
    $WH_End_Date = $frm['WH_End_Date'];
    $Pro_Start_Date = $frm['Pro_Start_Date'];
    $Pro_End_Date = $frm['Pro_End_Date'];

    $UserName = $frm['UserName'];

    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PLAN_UPD] ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN),

      array($SMT_line, SQLSRV_PARAM_IN),
      array($Priority, SQLSRV_PARAM_IN),
      array($Delivery_date, SQLSRV_PARAM_IN),
      array($Side, SQLSRV_PARAM_IN),
      array($Project, SQLSRV_PARAM_IN),

      array($PCB_SAP_Code, SQLSRV_PARAM_IN),
      array($Type, SQLSRV_PARAM_IN),
      array($FG_SAP_Code, SQLSRV_PARAM_IN),
      array($Model, SQLSRV_PARAM_IN),
      array($Tracking, SQLSRV_PARAM_IN),

      array($Lot, SQLSRV_PARAM_IN),
      array($Plans, SQLSRV_PARAM_IN),
      array($PLAN_Start_Date, SQLSRV_PARAM_IN),
      array($PLAN_End_Date, SQLSRV_PARAM_IN),
      array($Unit_Hrs, SQLSRV_PARAM_IN),

      array($Schedule_Kitting_part, SQLSRV_PARAM_IN),
      array($UserName, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }

  public function PLAN_DEL($frm)
  {
    $DB = connect_mssql228::DB();
    $ID   = $frm['ID'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PLAN_DEL] ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_WH_UPD($frm)
  {
    $DB = connect_mssql228::DB();
    $Type   = $frm['Type'];
    $ID   = $frm['ID'];
    $UserName = $frm['UserName'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_WH_UPD] ?, ?, ?";
    $params = array(
      array($Type, SQLSRV_PARAM_IN),
      array($ID, SQLSRV_PARAM_IN),
      array($UserName, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function MAIN_PROD_UPD($frm)
  {
    $DB = connect_mssql228::DB();
    $Type   = $frm['Type'];
    $ID   = $frm['ID'];
    $Actual = $frm['Actual'];
    $UserName = $frm['UserName'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PROD_UPD] ?, ?, ?, ?";
    $params = array(
      array($Type, SQLSRV_PARAM_IN),
      array($ID, SQLSRV_PARAM_IN),
      array($UserName, SQLSRV_PARAM_IN),
      array($Actual, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_LIST_LINE($frm)
  {
    $DB = connect_mssql228::DB();
    $Process   = '';//$frm['Type'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_LIST_LINE] ?";
    $params = array(
      array($Process, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_MODEL_GROUP_SEC($frm)
  {
    $DB = connect_mssql228::DB();
    $Model   = $frm['Model'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_MODEL_GROUP_SEC] ?";
    $params = array(
      array($Model, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_MODEL_GROUP_INS($frm)
  {
    $DB = connect_mssql228::DB();
    $Model   = $frm['Model'];
    $GroupModel   = $frm['GroupModel'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_MODEL_GROUP_INS] ?, ?";
    $params = array(
      array($Model, SQLSRV_PARAM_IN),
      array($GroupModel, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_MODEL_GROUP_UPD($frm)
  {
    $DB = connect_mssql228::DB();
    $Model   = $frm['Model'];
    $GroupModel   = $frm['GroupModel'];
    $ID   = $frm['ID'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_MODEL_GROUP_UPD] ?, ?, ?";
    $params = array(
      array($Model, SQLSRV_PARAM_IN),
      array($GroupModel, SQLSRV_PARAM_IN),
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_MODEL_GROUP_DEL($frm)
  {
    $DB = connect_mssql228::DB();
    $ID   = $frm['ID'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_MODEL_GROUP_DEL] ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_REMARK_SEC($frm)
  {
    $DB = connect_mssql228::DB();
    $Tracking   = $frm['Tracking'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_REMARK_SEC] ?";
    $params = array(
      array($Tracking, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_REMARK_INS($frm)
  {
    $DB = connect_mssql228::DB();
    $Tracking   = $frm['Tracking'];
    $Remark   = $frm['Remark'];
    $Emp   = $frm['UserName'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_REMARK_INS] ?, ?, ?";
    $params = array(
      array($Tracking, SQLSRV_PARAM_IN),
      array($Remark, SQLSRV_PARAM_IN),
      array($Emp, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_REMARK_UPD($frm)
  {
    $DB = connect_mssql228::DB();
    $ID   = $frm['ID'];
    $Tracking   = $frm['Tracking'];
    $Remark   = $frm['Remark'];
    $Emp   = $frm['UserName'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_REMARK_UPD] ?, ?, ?, ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN),
      array($Tracking, SQLSRV_PARAM_IN),
      array($Remark, SQLSRV_PARAM_IN),
      array($Emp, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_REMARK_DEL($frm)
  {
    $DB = connect_mssql228::DB();
    $ID   = $frm['ID'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_REMARK_DEL] ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_PLAN_LINE($frm)
  {
    $DB = connect_mssql228::DB();
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_PLAN_LINE] ";
    $params = array(
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function PLAN_SEC_DAILY_DATE($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $Line   = $frm['Line'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[MAIN_PLAN_SEC_DAILY_DATE] ?, ?";
    $params = array(
      array($Date, SQLSRV_PARAM_IN),
      array($Line, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_PLAN_MANAGE($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_PLAN_MANAGE] ?";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_AUTO_CAL_DATE_ALL($frm)
  {
    $DB = connect_mssql228::DB();
    $Line   = $frm['Line'];
    $stmt = "EXEC [STBL_PLAN].[dbo].[STBL_AUTO_CAL_DATE_ALL] ?";
    $params = array(
      array($Line, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

}
?>
