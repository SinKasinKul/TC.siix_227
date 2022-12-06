<?php require_once('common.php');
header('Content-Type: application/json');

$RTOT = new RTOT;
switch ($_GET['action']) {
	case 'STBL_RTOT_NORMAL_INS':
		$RTOT->STBL_RTOT_NORMAL_INS($_POST);
		break;
	case 'STBL_RTOT_HOLIDAY_INS':
		$RTOT->STBL_RTOT_HOLIDAY_INS($_POST);
		break;
	case 'STBL_LIST_GROUP':
		$RTOT->STBL_LIST_GROUP($_POST);
		break;
	case 'STBL_LIST_BUS_GROUP':
		$RTOT->STBL_LIST_BUS_GROUP($_POST);
		break;
	case 'STBL_EMP_SEC':
		$RTOT->STBL_EMP_SEC($_POST);
		break;
	}
?>
