<?php require_once('common.php');
header('Content-Type: application/json');

$Repair = new package;
	switch ($_GET['action']) {
		case 'ChkModel':
			$Repair->ChkModel($_GET);
			break;
	}
?>
