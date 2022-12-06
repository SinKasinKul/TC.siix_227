<?php require_once('common.php');
header('Content-Type: application/json');

$MQTT = new APIMQTT;
switch ($_GET['action']) {
	case 'publishMQTT':
		$MQTT->publishMQTT($_GET);
		break;
	}
?>
