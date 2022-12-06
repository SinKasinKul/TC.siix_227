<?php require_once('common.php');
header('Content-Type: application/json');

$SPI = new SPI;
	switch ($_GET['action']) {
		case 'ChkUser':
			$SPI->ChkUser($_GET);
			break;
		case 'STBL_XRAY_STATUS':
			$SPI->STBL_XRAY_STATUS($_GET);
			break;
		case 'MAIN_SEC_SPI_DETAIL':
			$SPI->MAIN_SEC_SPI_DETAIL($_GET);
			break;
		case 'STBL_CONFIRM_XRAY_STATUS':
			$SPI->STBL_CONFIRM_XRAY_STATUS($_POST);
			break;
	};
?>
