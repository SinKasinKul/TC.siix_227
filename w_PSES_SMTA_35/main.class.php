<?php require_once('common.php');
header('Content-Type: application/json');

$PeseSmtA = new PeseSmtA;
	switch ($_GET['action']) {
		case 'ChkUser':
			$PeseSmtA->ChkUser($_GET);
			break;
		case 'ChkModel':
			$PeseSmtA->ChkModel($_GET);
			break;
		case 'checkInsertLot':
			$PeseSmtA->checkInsertLot($_GET);
			break;
		case 'JsonPSESSMTA':
			$PeseSmtA->JsonPSESSMTA($_GET);
			break;
		case 'jsonShowCount':
			$PeseSmtA->jsonShowCount($_GET);
			break;
		case 'jsonLotQty':
			$PeseSmtA->jsonLotQty($_GET);
			break;
		case 'jsonLotSTD':
			$PeseSmtA->jsonLotSTD($_GET);
			break;
		case 'checkInsertBarcode':
			$PeseSmtA->checkInsertBarcode($_GET);
			break;
	}
?>
