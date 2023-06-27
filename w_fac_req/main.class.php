<?php require_once('common.php');
header('Content-Type: application/json');

$FAC = new FAC;
	switch ($_GET['action']) {
		case 'STBL_FAC_MAIN':
			$FAC->STBL_FAC_MAIN($_POST);
			break;
	}
?>
