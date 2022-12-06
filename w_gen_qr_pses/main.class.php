<?php require_once('common.php');
header('Content-Type: application/json');

$Repair = new makerLotData;
	switch ($_GET['action']) {
		case 'getMakerLot':
			$Repair->getMakerLot($_GET);
			break;
	}
?>
