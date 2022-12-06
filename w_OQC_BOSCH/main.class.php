<?php require_once('common.php');
header('Content-Type: application/json');

$OQC = new OQC;
	switch ($_GET['action']) {
		case 'ChkUser':
			$OQC->ChkUser($_GET);
			break;
		case 'Chk_Model_Seiban':
			$OQC->Chk_Model_Seiban($_GET);
			break;

	}
?>
