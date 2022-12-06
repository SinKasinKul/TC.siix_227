<?php require_once('common.php');
header('Content-Type: application/json');
$login = new login;

switch ($_POST['action']) {
	case 'login':
		$login->check_login($_POST);
		break;
	case 'logout':
		$login->userLogOut();
		break;
}

?>