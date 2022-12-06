<?php require_once('common.php');
header('Content-Type: application/json');

$TranTU = new TranTU;
	switch ($_GET['action']) {
		case 'ChkUser':
			$TranTU->ChkUser($_GET);
			break;
		case 'ChkModel':
			$TranTU->ChkModel($_GET);
			break;
		case 'JsonTranTU':
			$TranTU->JsonTranTU($_GET);
			break;
		case 'jsonShowCount':
			$TranTU->jsonShowCount($_GET);
			break;
		case 'jsonLotQty':
			$TranTU->jsonLotQty($_GET);
			break;
		case 'checkInsertLot':
			$TranTU->checkInsertLot($_GET);
			break;
		case 'checkInsertBarcode':
			$TranTU->checkInsertBarcode($_GET);
			break;
	}
?>
