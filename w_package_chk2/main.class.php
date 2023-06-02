<?php require_once('common.php');
header('Content-Type: application/json');

$package = new package;
	switch ($_GET['action']) {
		case 'ChkUser':
			$package->ChkUser($_GET);
			break;
		case 'ChkModel':
			$package->ChkModel($_GET);
			break;
		case 'STBL_INS_PACKING_CHK':
			$package->STBL_INS_PACKING_CHK($_POST);
			break;
	}
?>
