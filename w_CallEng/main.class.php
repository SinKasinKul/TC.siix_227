<?php require_once('common.php');
header('Content-Type: application/json');

$CallEng = new CallEng;
switch ($_GET['action']) {
	case 'ChkUser':
		$CallEng->ChkUser($_POST);
		break;
	case 'STBL_GET_ACCECP_MC_LINE':
		$CallEng->STBL_GET_ACCECP_MC_LINE($_POST);
		break;
	case 'STBL_MACHINE_LIST':
		$CallEng->STBL_MACHINE_LIST();
		break;
	case 'STBL_ISSUE_LIST':
		$CallEng->STBL_ISSUE_LIST($_POST);
		break;
	case 'STBL_UPD_ACCP_JOB_I':
		$CallEng->STBL_UPD_ACCP_JOB_I($_POST);
		break;
	}
?>
