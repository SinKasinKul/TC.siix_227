<?php
/**
 * Class for Query data
 */
class EDER
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
    $d = Utility::jsonMSSQL($query);

  }

  public function EDER_INS($frm)
  {
    $DB = connect_mssql228::DB();
    $Type = $frm['Type'];
    $WhatProblem = $frm['WhatProblem'];
    $WhereProcess = $frm['WhereProcess'];
    $Line = $frm['Line'];
    $Why = $frm['Why'];
    $Time = $frm['Time'];
    $WhenDate = $frm['WhenDate'];

    $WhoDetection = $frm['WhoDetection'];
    $WhenShift = $frm['WhenShift'];
    $HowMany = $frm['HowMany'];
    $Customer = $frm['Customer'];
    $HowOccur = $frm['HowOccur'];

    $Tracking = $frm['Tracking'];
    $Model = $frm['Model'];
    $Qty = $frm['Qty'];
    $PartItem = $frm['PartItem'];
    $PartName = $frm['PartName'];

    $Maker = $frm['Maker'];
    $ProblemCase = $frm['ProblemCase'];
    $TemporaryAction = $frm['TemporaryAction'];
    $PermanentAction = $frm['PermanentAction'];
    $PictureOK = $frm['PictureOK'];

    $PictureNG = $frm['PictureNG'];
    $EmpName = $frm['Emp'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_INS] ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($Type, SQLSRV_PARAM_IN),
      array($Line, SQLSRV_PARAM_IN),
      array($Tracking, SQLSRV_PARAM_IN),
      array($WhatProblem, SQLSRV_PARAM_IN),
      array($Why, SQLSRV_PARAM_IN),
      array($WhenDate, SQLSRV_PARAM_IN),
      array($WhenShift, SQLSRV_PARAM_IN),

      array($Customer, SQLSRV_PARAM_IN),
      array($Model, SQLSRV_PARAM_IN),
      array($Qty, SQLSRV_PARAM_IN),
      array($PartItem, SQLSRV_PARAM_IN),
      array($PartName, SQLSRV_PARAM_IN),

      array($Maker, SQLSRV_PARAM_IN),
      array($WhereProcess, SQLSRV_PARAM_IN),
      array($WhoDetection, SQLSRV_PARAM_IN),
      array($HowMany, SQLSRV_PARAM_IN),
      array($HowOccur, SQLSRV_PARAM_IN),

      array($ProblemCase, SQLSRV_PARAM_IN),
      array($TemporaryAction, SQLSRV_PARAM_IN),
      array($PermanentAction, SQLSRV_PARAM_IN),
      array($PictureOK, SQLSRV_PARAM_IN),
      array($PictureNG, SQLSRV_PARAM_IN),

      array($EmpName, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }

  public function EDER_UPD($frm)
  {
    $DB = connect_mssql228::DB();
    $ID = $frm['ID'];
    $Type = $frm['Type'];
    $WhatProblem = $frm['WhatProblem'];
    $WhereProcess = $frm['WhereProcess'];
    $Line = $frm['Line'];

    $Why = $frm['Why'];
    $Time = $frm['Time'];
    $WhenDate = $frm['WhenDate'];
    $WhoDetection = $frm['WhoDetection'];
    $WhenShift = $frm['WhenShift'];

    $HowMany = $frm['HowMany'];
    $Customer = $frm['Customer'];
    $HowOccur = $frm['HowOccur'];
    $Tracking = $frm['Tracking'];
    $Model = $frm['Model'];

    $Qty = $frm['Qty'];
    $PartItem = $frm['PartItem'];
    $PartName = $frm['PartName'];
    $Maker = $frm['Maker'];
    $ProblemCase = $frm['ProblemCase'];

    $TemporaryAction = $frm['TemporaryAction'];
    $PermanentAction = $frm['PermanentAction'];
    $PictureOK = $frm['PictureOK'];
    $PictureNG = $frm['PictureNG'];
    $EmpName = $frm['Emp'];

    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_UPD] ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN),
      array($Type, SQLSRV_PARAM_IN),
      array($Line, SQLSRV_PARAM_IN),
      array($Tracking, SQLSRV_PARAM_IN),
      array($WhatProblem, SQLSRV_PARAM_IN),

      array($Why, SQLSRV_PARAM_IN),
      array($WhenDate, SQLSRV_PARAM_IN),
      array($WhenShift, SQLSRV_PARAM_IN),
      array($Customer, SQLSRV_PARAM_IN),
      array($Model, SQLSRV_PARAM_IN),

      array($Qty, SQLSRV_PARAM_IN),
      array($PartItem, SQLSRV_PARAM_IN),
      array($PartName, SQLSRV_PARAM_IN),
      array($Maker, SQLSRV_PARAM_IN),
      array($WhereProcess, SQLSRV_PARAM_IN),

      array($WhoDetection, SQLSRV_PARAM_IN),
      array($HowMany, SQLSRV_PARAM_IN),
      array($HowOccur, SQLSRV_PARAM_IN),
      array($ProblemCase, SQLSRV_PARAM_IN),
      array($TemporaryAction, SQLSRV_PARAM_IN),

      array($PermanentAction, SQLSRV_PARAM_IN),
      array($PictureOK, SQLSRV_PARAM_IN),
      array($PictureNG, SQLSRV_PARAM_IN),
      array($EmpName, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function EDER_UPD_STATUS($frm)
  {
    $DB = connect_mssql228::DB();
    $ID = $frm['ID'];
    $Status = $frm['Status'];

    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_UPD_STATUS] ?, ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN),
      array($Status, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function EDER_SEC($frm)
  {
    $DB = connect_mssql228::DB();
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_SEC] ?";
    $params = array(
      array($Date, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function EDER_SEC_TYPE($frm)
  {
    $DB = connect_mssql228::DB();
    $StartDate   = $frm['StartDate'];
    $EndDate   = $frm['EndDate'];
    $Tracking   = $frm['Tracking'];
    $Model   = $frm['Model'];
    $Type   = $frm['Type'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_SEC_TYPE] ?, ?, ?, ?, ?";
    $params = array(
      array($StartDate, SQLSRV_PARAM_IN),
      array($EndDate, SQLSRV_PARAM_IN),
      array($Tracking, SQLSRV_PARAM_IN),
      array($Model, SQLSRV_PARAM_IN),
      array($Type, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function EDER_SEC_TYPE_SMT($frm)
  {
    $DB = connect_mssql228::DB();
    $StartDate   = $frm['StartDate'];
    $EndDate   = $frm['EndDate'];
    $Tracking   = $frm['Tracking'];
    $Model   = $frm['Model'];
    $Type   = $frm['Type'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_SEC_TYPE_SMT] ?, ?, ?, ?, ?";
    $params = array(
      array($StartDate, SQLSRV_PARAM_IN),
      array($EndDate, SQLSRV_PARAM_IN),
      array($Tracking, SQLSRV_PARAM_IN),
      array($Model, SQLSRV_PARAM_IN),
      array($Type, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function EDER_SEC_TYPE_ASSY($frm)
  {
    $DB = connect_mssql228::DB();
    $StartDate   = $frm['StartDate'];
    $EndDate   = $frm['EndDate'];
    $Tracking   = $frm['Tracking'];
    $Model   = $frm['Model'];
    $Type   = $frm['Type'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_SEC_TYPE_ASSY] ?, ?, ?, ?, ?";
    $params = array(
      array($StartDate, SQLSRV_PARAM_IN),
      array($EndDate, SQLSRV_PARAM_IN),
      array($Tracking, SQLSRV_PARAM_IN),
      array($Model, SQLSRV_PARAM_IN),
      array($Type, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function Chk_Model_Seiban($frm)
  {
    $DB = connect_mssql228::DB();
    $Tracking = $frm['Tracking'];
    $Item = '';
    $stmt = "EXEC [STBL_MAIN].[dbo].[Chk_Model_Seiban] ?, ?";
    $params = array(
      array($Item, SQLSRV_PARAM_IN),
      array($Tracking, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }

  public function EDER_SEC_ID($frm)
  {
    $DB = connect_mssql228::DB();
    $ID   = $frm['ID'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_SEC_ID] ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function EDER_SEC_HIS($frm)
  {
    $DB = connect_mssql228::DB();
    $Dpet   = $frm['Dept'];
    $Date   = $frm['Date'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_SEC_HIS] ?, ?";
    $params = array(
      array($Dpet, SQLSRV_PARAM_IN)
      ,array($Date, SQLSRV_PARAM_IN)
    );
    //print_r($params);
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function EDER_DEL($frm)
  {
    $DB = connect_mssql228::DB();
    $ID   = $frm['ID'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_DEL] ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function UNLINK($frm)
  {
      $FileName = $frm['Name'];
      $FileName = "eder_image\\".$FileName;

      if(file_exists($FileName)){
          unlink($FileName);
          echo "{\"response\":\"success\"}";
      }else{
          echo "{\"response\":\"File not found\"}";
      }
  }

  public function STBL_UPD_DEPT($frm)
  {
    $DB = connect_mssql228::DB();
    $Line   = $frm['Line'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_LIST_DEPT] ";
    $params = array(
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    Utility::jsonMSSQL($query);
  }

  public function checkFileUpload($FILES)
	{
		$U = new Utility;
		// Check for errors
		if($FILES['error'] > 0){
		    $U->outputJSON('An error ocurred when uploading.');
		}

		/*if(!getimagesize($_FILES['filUpload']['tmp_name'])){
		    outputJSON('Please ensure you are uploading an image.');
		}*/

		// Check filetype
		if($FILES['type'] != ''){
			switch ($FILES['type']) {
				/*case 'application/vnd.ms-excel':
					# code...
					break;
				case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
					# code...
					break;*/
				case 'image/png':
					# code...
					break;
				default:
					$U->outputJSON('Unsupported filetype uploaded.'.'File type: '.$FILES['type']);
					break;
			}
		}

		// Check filesize
		if($FILES['size'] > 500000){
		    $U->outputJSON('File uploaded exceeds maximum upload size.');
		}

		// Check if the file exists
		if(file_exists('eder_image/' . $FILES['name'])){
		    $U->outputJSON('File with that name already exists.');
		}

		// Upload file
		if(!move_uploaded_file($FILES["tmp_name"],"eder_image/".$FILES["name"])){
		    $U->outputJSON('Error uploading file - check destination is writeable.');
		}else{
			$date_now = date('YmdHis');
			$file = "eder_image/".$FILES['name'];//member.csv
			$new_dir = "eder_image/".$date_now."-".$FILES['name'];

			rename($file, $new_dir);
		}

		//Utility::uploadFile($FILES);
		// Success!
		$U->outputJSON('File uploaded successfully to "' . 'eder_image/' . $FILES['name'] . '".', 'success');
	}

  public function EDER_CHAL_SEC($frm)
  {
    $DB = connect_mssql228::DB();
    $EDER_NO   = $frm['EDER_NO'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_CHAL_SEC] ?";
    $params = array(
      array($EDER_NO, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function EDER_CHAL_INS($frm)
  {
    $DB = connect_mssql228::DB();
    $EDER_NO      = $frm['EDER_NO'];
    $MGR_CHAL     = $frm['MGR_CHAL'];
    $SUP_ACTION   = $frm['SUP_ACTION'];
    $MGR_NANE     = "";//$frm['MGR_NANE'];
    $SUP_NANE     = "";//$frm['SUP_NANE'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_CHAL_INS] ?, ?, ?, ?, ?";
    $params = array(
      array($EDER_NO, SQLSRV_PARAM_IN),
      array($MGR_CHAL, SQLSRV_PARAM_IN),
      array($SUP_ACTION, SQLSRV_PARAM_IN),
      array($MGR_NANE, SQLSRV_PARAM_IN),
      array($SUP_NANE, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function EDER_CHAL_UPD($frm)
  {
    $DB = connect_mssql228::DB();
    $ID           = $frm['ID'];
    $MGR_CHAL     = $frm['MGR_CHAL'];
    $SUP_ACTION   = $frm['SUP_ACTION'];
    $MGR_NANE     = "";//$frm['MGR_NANE'];
    $SUP_NANE     = "";//$frm['SUP_NANE'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_CHAL_UPD] ?, ?, ?, ?, ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN),
      array($MGR_CHAL, SQLSRV_PARAM_IN),
      array($SUP_ACTION, SQLSRV_PARAM_IN),
      array($MGR_NANE, SQLSRV_PARAM_IN),
      array($SUP_NANE, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

  public function EDER_CHAL_DEL($frm)
  {
    $DB = connect_mssql228::DB();
    $ID           = $frm['ID'];
    $stmt = "EXEC [STBL_EDR].[dbo].[EDER_CHAL_DEL] ?";
    $params = array(
      array($ID, SQLSRV_PARAM_IN)
    );
    $query = sqlsrv_query( $DB, $stmt, $params);
    $d = Utility::jsonMSSQL($query);
  }

}
?>
