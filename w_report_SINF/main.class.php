<?php require_once('common.php');
header('Content-Type: application/json');

$Repair = new Repair;
	switch ($_GET['action']) {
		case 'ChkUser':
			$Repair->ChkUser($_GET);
			break;
		case 'ChkModel':
			$Repair->ChkModel($_GET);
			break;
		case 'checkInsertLot':
			$Repair->checkInsertLot($_GET);
			break;
		case 'JsonMainGrid':
			$Repair->JsonMainGrid($_GET);
			break;
		case 'jsonShowCount':
			$Repair->jsonShowCount($_GET);
			break;
		case 'jsonLotQty':
			$Repair->jsonLotQty($_GET);
			break;
		/*case 'jsonLotSTD':
			$Repair->jsonLotSTD($_GET);
			break;*/
		case 'checkInsertBarcode':
			$Repair->checkInsertBarcode($_GET);
			break;
	}
?>
