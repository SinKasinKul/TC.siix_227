<?php
/**
 * Class for Query data for Process V11
 */
class ICT
{

  public function ChkUser($frm)
  {
    $DB = connect_mssql::DB();
    $User = $frm['User'];
    $stmt = "EXEC ICT_CHK_USER ?";
    $params = array(
      array($User, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }

  public function ChkModel($frm)
  {
    $DB = connect_mssql::DB();
    $ItemCD = $frm['ItemCode'];
    $Seiban = $frm['Seiban'];
    $stmt = "EXEC Chk_Model_Seiban ?, ?";
    $params = array(
      array($ItemCD, SQLSRV_PARAM_IN),
      array($Seiban, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);

  }

  public function jsonSTK($frm)
  {
    $DB = connect_mssql::DB();
    $stmt = "EXEC INSERT_G_ICT_Log";
    $query = sqlsrv_query( $DB, $stmt);
    $d = Utility::jsonMSSQL($query);
  }

  public function ChkDupBarcode($frm='')
  {
    if(isset($_SESSION["ChkBar"])  && $frm["barcode"] != '' ){
      $chkBarDupM = array();

			foreach ($_SESSION["ChkBar"] as $key => $row) {
			    $chkBarDupM[] = $row['barcode'];
			}

      if (in_array($frm["barcode"],$chkBarDupM)){
            echo "{\"response\":\"false\"}";
      }else{
        $_SESSION["ChkBar"][] = array(
                        'barcode'=>$frm["barcode"],
                        );
        $datatemp = json_encode($_SESSION["ChkBar"]);
          if(!$_SESSION["ChkBar"]){
            echo "{\"response\":\"false\",\"loop\":\"1\"}";
          }else{
            echo  "{\"response\":\"success\",\"loop\":\"1\",\"data\":".$datatemp."}";
          }
       }
    }else{
        $_SESSION["ChkBar"][] = array(
                        'barcode'=>$frm["barcode"],
                        );
          if(!$_SESSION["ChkBar"]){
            echo "{\"response\":\"false\",\"loop\":\"1\"}";
          }else{
            echo  "{\"response\":\"success\",\"loop\":\"1\",\"data\":".$datatemp."}";
          }
    }
  }

  public function ShowDataTemp($sess)
    {
      //$_SESSION['PODetail']
    if(isset($sess)!=""){
        $countitem = count($sess)+1;
        echo "{\"data\":".json_encode($sess).",\"item\":".$countitem."}";
      }else{
        echo  "{\"item\":\"1\"}";
      }
    }

    public function InsertICTLogData($frm='',$cus,$process)
    {
      $cus = 'KOIT';
      $process = 'ICT';
      $DB = connect_mssql::DB();
      $stmt = "EXEC CHK_BARCODE_KOITO ?,?,?,?,?,?";
      $params = array(
        array($frm['Model'], SQLSRV_PARAM_IN),
        array($frm['Barcode'], SQLSRV_PARAM_IN),
        array($frm['MC'], SQLSRV_PARAM_IN),
        array($cus, SQLSRV_PARAM_IN),
        array($process, SQLSRV_PARAM_IN),
        array($frm['Seiban'], SQLSRV_PARAM_IN)
      );
      $query = sqlsrv_query( $DB, $stmt, $params);
      $d = Utility::jsonMSSQL($query);
    }

    public function ChkDupBarcodeII($frm='')
    {
        $cus = 'KOIT';
        $process = 'ICT';
        $DB = connect_mssql::DB();
        $stmt = "EXEC CHK_DUP_BR_ICT_SCAN ?,?,?,?,?,?";
        $params = array(
          array($frm['Model'], SQLSRV_PARAM_IN),
          array($frm['Barcode'], SQLSRV_PARAM_IN),
          array($frm['MC'], SQLSRV_PARAM_IN),
          array($cus, SQLSRV_PARAM_IN),
          array($process, SQLSRV_PARAM_IN),
          array($frm['Seiban'], SQLSRV_PARAM_IN)
        );
        $query = sqlsrv_query( $DB, $stmt, $params);
        $d = Utility::jsonMSSQL($query);
    }

}
?>
