<?php require_once('common.php');
header('Content-Type: application/json');

$ICT = new ICT;
	switch ($_GET['action']) {
		case 'ChkUser':
			$ICT->ChkUser($_GET);
			break;
		case 'ChkModel':
			$ICT->ChkModel($_GET);
			break;
		case 'ChkDupBarcode':
			$ICT->ChkDupBarcode($_GET);
			break;
		case 'ChkDupBarcodeII':
			$ICT->ChkDupBarcodeII($_GET);
			break;
		case 'InsertICTLogData':
			$ICT->InsertICTLogData($_GET);
			break;
		case 'ChkSess':
		  $ChkSess = $_SESSION["ChkBar"];
			print_r($ChkSess);
			unset($_SESSION['ChkBar']);
	}
?>
