<?php require_once('common.php');
header('Content-Type: application/json');

$Batch = new Batch;
	switch ($_GET['action']) {
		case 'BatchPanasonic':
			$Batch->BatchPanasonic($_GET);
			break;
		case 'BatchPSESFN':
			$Batch->BatchPSESFN($_GET);
			break;
	}
?>
