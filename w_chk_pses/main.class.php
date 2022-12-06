<?php require_once('common.php');
header('Content-Type: application/json');

$Repair = new makerLotData;
	switch ($_GET['action']) {
		case 'getBatch':
			$Repair->getBatch($_GET);
			break;
	}
?>
