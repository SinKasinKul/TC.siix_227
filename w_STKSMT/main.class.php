<?php require_once('common.php');
header('Content-Type: application/json');

$stksmt = new stksmt;
	switch ($_GET['action']) {
		case 'ChkUser':
			$stksmt->ChkUser($_GET);
			break;
		case 'ChkLocation':
			$stksmt->ChkLocation($_GET);
			break;
		case 'insertInBound':
			$stksmt->InsInBound($_GET);
			break;
		case 'insertOutBound':
			$stksmt->InsOutBound($_GET);
			break;
		case 'InsOutBoundSeiban':
			$stksmt->InsOutBoundSeiban($_GET);
			break;
		case 'InsOutBound':
			$stksmt->InsOutBound($_GET);
			break;
		case 'InquirySTK':
			$stksmt->InquirySTK($_GET);
			break;
		case 'UpdateOnHand':
			$stksmt->UpdateOnHand($_GET);
			break;
		case 'jsonOnHandTotal':
			$stksmt->jsonOnHandTotal($_GET);
			break;
		case 'jsonOnHandStatus':
			$stksmt->jsonOnHandStatus($_GET);
			break;
		case 'jsonOnHandDetail':
			$stksmt->jsonOnHandDetail($_GET);
			break;
		case 'jsonOnHandHis':
			$stksmt->jsonOnHandHis($_GET);
			break;
		case 'InsertStockTake':
			$stksmt->InsertStockTake($_GET);
			break;
		case 'CheckBatchOnHand':
			$stksmt->CheckBatchOnHand($_GET);
			break;
		case 'STBL_STK_UPD_RETURN':
			$stksmt->STBL_STK_UPD_RETURN($_GET);
			break;
		case 'InsConfirmSCR':
			$stksmt->InsConfirmSCR($_GET);
			break;

	}
?>
