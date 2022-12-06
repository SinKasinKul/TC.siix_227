<?php require_once('common.php');
header('Content-Type: application/json');

$PARKING = new PARKING;
switch ($_GET['action']) {
	case 'STBL_INS_BOOKING':
		$PARKING->STBL_INS_BOOKING($_POST);
		break;
	case 'STBL_INS_OUT':
		$PARKING->STBL_INS_OUT($_POST);
		break;
	case 'STBL_PARKING_STATUS':
		$PARKING->STBL_PARKING_STATUS($_POST);
		break;
	case 'STBL_EMP_SEC':
		$PARKING->STBL_EMP_SEC($_POST);
		break;
	}
?>
