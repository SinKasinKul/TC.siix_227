<?php require_once('common.php');
header('Content-Type: application/json');

$EngStk = new EngStk;
	switch ($_GET['action'])
	{
		case 'STBL_TYPE_MS_GET':
			$EngStk->STBL_TYPE_MS($_GET);
			break;
		case 'STBL_TYPE_MS_POST':
			$EngStk->STBL_TYPE_MS($_POST);
			break;
		case 'STBL_ITEM_MS_GET':
			$EngStk->STBL_ITEM_MS($_GET);
			break;
		case 'STBL_ITEM_MS_POST':
			$EngStk->STBL_ITEM_MS($_POST);
			break;
		case 'ChkUser':
			$EngStk->ChkUser($_GET);
			//echo '9999';
			break;
		case 'STBL_STK_OVER_VIEW':
			$EngStk->STBL_STK_OVER_VIEW($_GET);
			break;
		case 'STBL_STK_IN':
			$EngStk->STBL_STK_IN($_POST);
			break;
		case 'STBL_STK_OUT':
			$EngStk->STBL_STK_OUT($_POST);
			break;
		case 'STBL_HIS_ITEM':
			$EngStk->STBL_HIS_ITEM($_GET);
			break;
		case 'STBL_ORDER_LIST':
			$EngStk->STBL_ORDER_LIST($_GET);
			break;
		case 'STBL_ORDER_LIST_DEL':
			$EngStk->STBL_ORDER_LIST_DEL($_POST);
			break;
		case 'STBL_ORDER_LIST_UPD':
			$EngStk->STBL_ORDER_LIST_UPD($_POST);
			break;
		case 'STBL_STK_BY_MONTH':
			$EngStk->STBL_STK_BY_MONTH($_GET);
			break;
	}
?>
