<?php require_once('common.php');
header('Content-Type: application/json');

$SAMTA = new SAMTA;
	switch ($_GET['action']) {
		case 'ChkUser':
			$SAMTA->ChkUser($_GET);
			break;
		case 'InsWRCtrl':
			$SAMTA->InsWRCtrl($_GET);
			break;
		case 'jsonWRCtrl':
			$SAMTA->jsonWRCtrl($_GET);
			break;
		case 'InsMainProcess':
			$SAMTA->InsMainProcess($_GET);
			break;
		case 'jsonMainProcess':
			$SAMTA->jsonMainProcess($_GET);
			break;
		case 'jsonCountSeiban':
			$SAMTA->jsonCountSeiban($_GET);
			break;
		case 'jsonCountBar':
			$SAMTA->jsonCountBar($_GET);
			break;
	}
?>
