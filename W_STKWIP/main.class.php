<?php require_once('common.php');
header('Content-Type: application/json');

$stkwip = new stkwip;
	switch ($_GET['action']) {
		case 'ChkUser':
			$stkwip->ChkUser($_GET);
			break;
		case 'ChkLocation':
			$stkwip->ChkLocation($_GET);
			break;
		case 'insertInBound':
			$stkwip->InsInBound($_GET);
			break;
		case 'insertOutBound':
			$stkwip->InsOutBound($_GET);
			break;
		case 'InsOutBoundSeiban':
			$stkwip->InsOutBoundSeiban($_GET);
			break;
		case 'InsOutBound':
			$stkwip->InsOutBound($_GET);
			break;
		case 'InquirySTK':
			$stkwip->InquirySTK($_GET);
			break;
		case 'UpdateOnHand':
			$stkwip->UpdateOnHand($_GET);
			break;
		case 'jsonOnHandTotal':
			$stkwip->jsonOnHandTotal($_GET);
			break;
		case 'jsonOnHandDetail':
			$stkwip->jsonOnHandDetail($_GET);
			break;
		case 'jsonOnHandHis':
			$stkwip->jsonOnHandHis($_GET);
			break;
		case 'InsertStockTake':
			$stkwip->InsertStockTake($_GET);
			break;
		case 'CheckBatchOnHand':
			$stkwip->CheckBatchOnHand($_GET);
			break;
		case 'STBL_PLAN_WITH_WIP':
			$stkwip->STBL_PLAN_WITH_WIP($_GET);
			break;
		case 'STBL_UPD_PLAN':
			$stkwip->STBL_UPD_PLAN($_POST);
			break;

	}
?>
