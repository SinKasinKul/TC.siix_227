<?php require_once('common.php');
header('Content-Type: application/json');

$MRP = new MRP;
	switch ($_GET['action']) {
		case 'ChkUser':
			$MRP->ChkUser($_GET);
			break;
		case 'STBL_GET_DATA_PO':
			$MRP->STBL_GET_DATA_PO($_GET);
			break;
		case 'STBL_SUPPLIER_MASTER':
			$MRP->STBL_SUPPLIER_MASTER($_GET);
			break;
		case 'STBL_SUPPLIER_MASTER_INS':
			$MRP->STBL_SUPPLIER_MASTER_INS($_POST);
			break;
		case 'STBL_SUPPLIER_MASTER_DEL':
			$MRP->STBL_SUPPLIER_MASTER_DEL($_POST);
			break;
		case 'STBL_ITEM_MASTER':
			$MRP->STBL_ITEM_MASTER($_GET);
			break;
		case 'STBL_ITEM_MASTER_INS':
			$MRP->STBL_ITEM_MASTER_INS($_POST);
			break;
		case 'STBL_ITEM_MASTER_DEL':
			$MRP->STBL_ITEM_MASTER_DEL($_POST);
			break;
		case 'STBL_BOM_MASTER':
			$MRP->STBL_BOM_MASTER($_GET);
			break;
		case 'STBL_BOM_MASTER_INS':
			$MRP->STBL_BOM_MASTER_INS($_POST);
			break;
		case 'STBL_BOM_MASTER_DEL':
			$MRP->STBL_BOM_MASTER_DEL($_POST);
			break;
	}
?>
