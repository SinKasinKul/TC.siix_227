<?php require_once('common.php');
header('Content-Type: application/json');

$MASFCT = new MASFCT;
	switch ($_GET['action']) {
		case 'ChkUser':
			$MASFCT->ChkUser($_GET);
			break;
		case 'ChkLocation':
			$MASFCT->ChkLocation($_GET);
			break;
		case 'STBL_INS_MASTER_SERIAL':
			$MASFCT->STBL_INS_MASTER_SERIAL($_GET);
			break;

	}
?>
