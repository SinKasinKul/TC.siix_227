<?php require_once('common.php');
header('Content-Type: application/json');

$stksmt = new makerLotData;
	switch ($_GET['action'])
	{
		case 'ChkUser':
			$stksmt->ChkUser($_GET);
			break;
		case 'insReplSMT':
			$stksmt->insReplSMT($_GET);
			break;
		case 'countReplSMT':
			$stksmt->countReplSMT($_GET);
			break;
		case 'STBL_REP_INS_SEIBAN':
			$stksmt->STBL_REP_INS_SEIBAN($_GET);
			break;
		case 'STBL_RELP_MC_LIST':
			$stksmt->STBL_RELP_MC_LIST($_GET);
			break;
		case 'STBL_REP_HIS_MAT':
			$stksmt->STBL_REP_HIS_MAT($_GET);
			break;
	}
?>
