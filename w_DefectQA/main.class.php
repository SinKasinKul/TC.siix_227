<?php require_once('common.php');
header('Content-Type: application/json');

$defect = new defect;
	switch ($_GET['action'])
	{
		case 'ChkUser':
			$defect->ChkUser($_GET);
			break;
			echo "999";
	}
?>
