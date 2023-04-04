<?php
/**
 * Class for Query data
 */
class NPI
{

  public function STBL_TRIAL_MODEL_SEC($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_TRIAL_MODEL_SEC] ?";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_TRIAL_MODEL_SEC_HIS($frm)
  {
    $DB = connect_mssql228::DB();
    $Model   = $frm['Model'];
    $Status  = $frm['Status'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_TRIAL_MODEL_SEC_HIS] ?, ?";
    $params = array(
      array($Model, SQLSRV_PARAM_IN),
      array($Status, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_TRIAL_MODEL_INS($frm)
  {
    $DB = connect_mssql228::DB();
    $CUS          = $frm['CUS'];
    $TIEMCD       = $frm['TIEMCD'];
    $MODELNAME    = $frm['MODELNAME'];
    $MODELNO      = $frm['MODELNO'];
    $TRACKING     = $frm['TRACKING'];
    $STATUS       = $frm['STATUS'];
    $LINK_DOCU    = $frm['LINK_DOCU'];
    $EMPNAME      = $frm['EMPNAME'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_TRIAL_MODEL_INS] ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($CUS, SQLSRV_PARAM_IN),
      array($TIEMCD, SQLSRV_PARAM_IN),
      array($MODELNAME, SQLSRV_PARAM_IN),
      array($MODELNO, SQLSRV_PARAM_IN),
      array($TRACKING, SQLSRV_PARAM_IN),
      array($STATUS, SQLSRV_PARAM_IN),
      array($LINK_DOCU, SQLSRV_PARAM_IN),
      array($EMPNAME, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_TRIAL_MODEL_UPD($frm)
  {
    $DB = connect_mssql228::DB();
    $ID           = $frm['ID'];
    $CUS          = $frm['CUS'];
    $TIEMCD          = $frm['TIEMCD'];
    $MODELNAME    = $frm['MODELNAME'];
    $MODELNO      = $frm['MODELNO'];
    $TRACKING     = $frm['TRACKING'];
    $STATUS       = $frm['STATUS'];
    $LINK_DOCU    = $frm['LINK_DOCU'];
    $EMPNAME      = $frm['EMPNAME'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_TRIAL_MODEL_UPD] ?, ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN),
      array($CUS, SQLSRV_PARAM_IN),
      array($TIEMCD, SQLSRV_PARAM_IN),
      array($MODELNAME, SQLSRV_PARAM_IN),
      array($MODELNO, SQLSRV_PARAM_IN),
      array($TRACKING, SQLSRV_PARAM_IN),
      array($STATUS, SQLSRV_PARAM_IN),
      array($LINK_DOCU, SQLSRV_PARAM_IN),
      array($EMPNAME, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_TRIAL_MODEL_DEL($frm)
  {
    $DB = connect_mssql228::DB();
    $ID = $frm['ID'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_TRIAL_MODEL_DEL] ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_FLOWS_SEC($frm)
  {
    $DB = connect_mssql228::DB();
    $TRACKING   = $frm['TRACKING'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_FLOWS_SEC] ?";
    $params = array(
      array($TRACKING, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_FLOWS_INS($frm)
  {
    $DB = connect_mssql228::DB();
    $TRACKING     = $frm['TRACKING'];
    $TYPE         = $frm['TYPE'];
    $PROCESS      = $frm['PROCESS'];
    $CHK_PERCENT  = $frm['CHK_PERCENT'];
    $EMPNAME      = $frm['EMPNAME'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_FLOWS_INS] ?, ?, ?, ?, ?";
    $params = array(
      array($TRACKING, SQLSRV_PARAM_IN),
      array($TYPE, SQLSRV_PARAM_IN),
      array($PROCESS, SQLSRV_PARAM_IN),
      array($CHK_PERCENT, SQLSRV_PARAM_IN),
      array($EMPNAME, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_FLOWS_DEL($frm)
  {
    $DB = connect_mssql228::DB();
    $ID           = $frm['ID'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_FLOWS_DEL] ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_TROUBLE_SEC($frm)
  {
    $DB = connect_mssql228::DB();
    $TRACKING   = $frm['TRACKING'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_TROUBLE_SEC] ?";
    $params = array(
      array($TRACKING, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_TROUBLE_INS($frm)
  {
    $DB = connect_mssql228::DB();
    $TRACKING           = $frm['TRACKING'];
    $PROCESS            = $frm['PROCESS'];
    $EVENT              = $frm['EVENT'];
    $TROUBLE            = $frm['TROUBLE'];
    $CAUSE              = $frm['CAUSE'];
    $ACTION             = $frm['ACTION'];
    $NG_PERCENT         = $frm['NG_PERCENT'];
    $CURRENT_CONDITION  = $frm['CURRENT_CONDITION'];
    $PRPPOSAL_TXT       = $frm['PRPPOSAL_TXT'];
    $PRPPOSAL_IMG       = $frm['PRPPOSAL_IMG'];
    $TARGET             = $frm['TARGET'];
    $ACTUAL             = $frm['ACTUAL'];
    $RESULT             = $frm['RESULT'];
    $PIC_RESPONSE       = $frm['PIC_RESPONSE'];
    $JUDGMENT           = $frm['JUDGMENT'];
    $STATUS             = $frm['STATUS'];
    $EMPNAME            = $frm['EMPNAME'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_TROUBLE_INS] ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($TRACKING, SQLSRV_PARAM_IN),
      array($PROCESS, SQLSRV_PARAM_IN),
      array($EVENT, SQLSRV_PARAM_IN),
      array($TROUBLE, SQLSRV_PARAM_IN),
      array($CAUSE, SQLSRV_PARAM_IN),
      array($ACTION, SQLSRV_PARAM_IN),
      array($NG_PERCENT, SQLSRV_PARAM_IN),
      array($CURRENT_CONDITION, SQLSRV_PARAM_IN),
      array($PRPPOSAL_TXT, SQLSRV_PARAM_IN),
      array($PRPPOSAL_IMG, SQLSRV_PARAM_IN),
      array($TARGET, SQLSRV_PARAM_IN),
      array($ACTUAL, SQLSRV_PARAM_IN),
      array($RESULT, SQLSRV_PARAM_IN),
      array($PIC_RESPONSE, SQLSRV_PARAM_IN),
      array($JUDGMENT, SQLSRV_PARAM_IN),
      array($STATUS, SQLSRV_PARAM_IN),
      array($EMPNAME, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_TROUBLE_UPD($frm)
  {
    $DB = connect_mssql228::DB();
    $ID                 = $frm['ID'];
    $TRACKING           = $frm['TRACKING'];
    $PROCESS            = $frm['PROCESS'];
    $EVENT              = $frm['EVENT'];
    $TROUBLE            = $frm['TROUBLE'];
    $CAUSE              = $frm['CAUSE'];
    $ACTION             = $frm['ACTION'];
    $NG_PERCENT         = $frm['NG_PERCENT'];
    $CURRENT_CONDITION  = $frm['CURRENT_CONDITION'];
    $PRPPOSAL_TXT       = $frm['PRPPOSAL_TXT'];
    $PRPPOSAL_IMG       = $frm['PRPPOSAL_IMG'];
    $TARGET             = $frm['TARGET'];
    $ACTUAL             = $frm['ACTUAL'];
    $RESULT             = $frm['RESULT'];
    $PIC_RESPONSE       = $frm['PIC_RESPONSE'];
    $JUDGMENT           = $frm['JUDGMENT'];
    $STATUS             = $frm['STATUS'];
    $EMPNAME            = $frm['EMPNAME'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_TROUBLE_UPD] ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN),
      array($TRACKING, SQLSRV_PARAM_IN),
      array($PROCESS, SQLSRV_PARAM_IN),
      array($EVENT, SQLSRV_PARAM_IN),
      array($TROUBLE, SQLSRV_PARAM_IN),
      array($CAUSE, SQLSRV_PARAM_IN),
      array($ACTION, SQLSRV_PARAM_IN),
      array($NG_PERCENT, SQLSRV_PARAM_IN),
      array($CURRENT_CONDITION, SQLSRV_PARAM_IN),
      array($PRPPOSAL_TXT, SQLSRV_PARAM_IN),
      array($PRPPOSAL_IMG, SQLSRV_PARAM_IN),
      array($TARGET, SQLSRV_PARAM_IN),
      array($ACTUAL, SQLSRV_PARAM_IN),
      array($RESULT, SQLSRV_PARAM_IN),
      array($PIC_RESPONSE, SQLSRV_PARAM_IN),
      array($JUDGMENT, SQLSRV_PARAM_IN),
      array($STATUS, SQLSRV_PARAM_IN),
      array($EMPNAME, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function STBL_TROUBLE_DEL($frm)
  {
    $DB = connect_mssql228::DB();
    $ID                 = $frm['ID'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_TROUBLE_DEL] ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }


  public function STBL_PROCESS_SEC($frm)
  {
    $DB = connect_mssql228::DB();
    $TYPE = $frm['TYPE'];
    $stmt = "EXEC [STBL_NPI].[dbo].[STBL_PROCESS_SEC] ?";
    $params = array(
      array($TYPE, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function DEL_IMG_CONDITION($frm)
  {
      $FileName = $frm['Name'];
      $FileName = "picture\\CURRENT_CONDITION\\".$FileName;

      if(file_exists($FileName)){
          unlink($FileName);
          echo "{\"response\":\"success\"}";
      }else{
          echo "{\"response\":\"File not found\"}";
      }
  }

  public function DEL_IMG_PRPPOSAL($frm)
  {
      $FileName = $frm['Name'];
      $FileName = "picture\\PRPPOSAL_IMG\\".$FileName;

      if(file_exists($FileName)){
          unlink($FileName);
          echo "{\"response\":\"success\"}";
      }else{
          echo "{\"response\":\"File not found\"}";
      }
  }

}
?>
