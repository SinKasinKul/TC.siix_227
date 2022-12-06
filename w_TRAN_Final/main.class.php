<?php require_once('common.php');
header('Content-Type: application/json');

$TranFinal = new TranFinal;
	switch ($_GET['action']) {
		case 'ChkUser':
			$TranFinal->ChkUser($_GET);
			break;
		case 'ChkModel':
			$TranFinal->ChkModel($_GET);
			break;
		case 'JsonTranFinal':
			$TranFinal->JsonTranFinal($_GET);
			break;
		case 'jsonShowCount':
			$TranFinal->jsonShowCount($_GET);
			break;
		case 'jsonLotQty':
			$TranFinal->jsonLotQty($_GET);
			break;
		case 'checkInsertLot':
			$TranFinal->checkInsertLot($_GET);
			break;
		case 'checkInsertBarcode':
			$TranFinal->checkInsertBarcode($_GET);
			break;
	}
?>
