<?php require_once('common.php');
header('Content-Type: application/json');

$PeseFinal = new PeseFinal;
	switch ($_GET['action']) {
		case 'ChkUser':
			$PeseFinal->ChkUser($_GET);
			break;
		case 'ChkModel':
			$PeseFinal->ChkModel($_GET);
			break;
		case 'checkInsertLot':
			$PeseFinal->checkInsertLot($_GET);
			break;
		case 'JsonPSESFinal':
			$PeseFinal->JsonPSESFinal($_GET);
			break;
		case 'jsonShowCount':
			$PeseFinal->jsonShowCount($_GET);
			break;
		case 'jsonLotQty':
			$PeseFinal->jsonLotQty($_GET);
			break;
		case 'jsonLotSTD':
			$PeseFinal->jsonLotSTD($_GET);
			break;
		case 'checkInsertBarcode':
			$PeseFinal->checkInsertBarcode($_GET);
			break;
	}
?>
