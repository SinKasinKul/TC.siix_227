<?php require_once('common.php');
header('Content-Type: application/json');

$NALcoat = new NALcoat;
	switch ($_GET['action']) {
		case 'ChkUser':
			$NALcoat->ChkUser($_GET);
			break;
		case 'ChkModel':
			$NALcoat->ChkModel($_GET);
			break;
		case 'checkInsertLot':
			$NALcoat->checkInsertLot($_GET);
			break;
		case 'JsonMainGrid':
			$NALcoat->JsonMainGrid($_GET);
			break;
		case 'jsonShowCount':
			$NALcoat->jsonShowCount($_GET);
			break;
		case 'jsonLotQty':
			$NALcoat->jsonLotQty($_GET);
			break;
		case 'jsonLotSTD':
			$NALcoat->jsonLotSTD($_GET);
			break;
		case 'checkInsertBarcode':
			$NALcoat->checkInsertBarcode($_GET);
			break;
	}
?>
