<?php require_once('common.php');
header('Content-Type: application/json');

	$PLAN = new PLAN;
	$EDER = new EDER;
	$NPI = new NPI;
	$RTOT = new RTOT;
	$SOLDER = new Solder;

	switch ($_GET['action']) {
		case 'ChkUser':
			$PLAN->ChkUser($_POST);
			break;
		case 'inputUserSESSION':
			$PLAN->inputUserSESSION($_POST);
			break;
		case 'unsetSESSION':
			$PLAN->unsetSESSION($_POST);
			break;
		case 'PLAN_INS':
			$PLAN->PLAN_INS($_POST);
			break;
		case 'PLAN_UPD':
			$PLAN->PLAN_UPD($_POST);
			break;
		case 'PLAN_SEC':
			$PLAN->PLAN_SEC($_POST);
			break;
		case 'MAIN_PLAN_SEC_CHART':
			$PLAN->MAIN_PLAN_SEC_CHART($_POST);
			break;
		case 'MAIN_KITTING_SEC_CHART':
			$PLAN->MAIN_KITTING_SEC_CHART($_POST);
			break;
		case 'MAIN_PROD_SEC_CHART':
			$PLAN->MAIN_PROD_SEC_CHART($_POST);
			break;
		case 'MAIN_PLAN_SEC_TOTAL_STATUS':
			$PLAN->MAIN_PLAN_SEC_TOTAL_STATUS($_POST);
			break;
		case 'MAIN_PLAN_SEC_TOTAL_STATUS_PIE':
			$PLAN->MAIN_PLAN_SEC_TOTAL_STATUS_PIE($_POST);
			break;
		case 'MAIN_WH_SEC_TOTAL_STATUS_PIE':
			$PLAN->MAIN_WH_SEC_TOTAL_STATUS_PIE($_POST);
			break;
		case 'MAIN_PROD_SEC_TOTAL_STATUS_PIE':
			$PLAN->MAIN_PROD_SEC_TOTAL_STATUS_PIE($_POST);
			break;
		case 'PLAN_SEC_WH':
			$PLAN->PLAN_SEC_WH($_POST);
			break;
		case 'PLAN_SEC_PROD':
			$PLAN->PLAN_SEC_PROD($_POST);
			break;
		case 'MAIN_PLAN_SEC_OVERTRACKING':
			$PLAN->MAIN_PLAN_SEC_OVERTRACKING($_POST);
			break;
		case 'MAIN_PLAN_SEC_OVERTRACKING_DATE':
			$PLAN->MAIN_PLAN_SEC_OVERTRACKING_DATE($_POST);
			break;
		case 'PLAN_DEL':
			$PLAN->PLAN_DEL($_POST);
			break;
		case 'MAIN_WH_UPD':
			$PLAN->MAIN_WH_UPD($_POST);
			break;
		case 'MAIN_PROD_UPD':
			$PLAN->MAIN_PROD_UPD($_POST);
			break;
		case 'STBL_LIST_LINE':
			$PLAN->STBL_LIST_LINE($_POST);
			break;
		case 'STBL_MODEL_GROUP_SEC':
			$PLAN->STBL_MODEL_GROUP_SEC($_POST);
			break;
		case 'STBL_MODEL_GROUP_INS':
			$PLAN->STBL_MODEL_GROUP_INS($_POST);
			break;
		case 'STBL_MODEL_GROUP_UPD':
			$PLAN->STBL_MODEL_GROUP_UPD($_POST);
			break;
		case 'STBL_MODEL_GROUP_DEL':
			$PLAN->STBL_MODEL_GROUP_DEL($_POST);
			break;
		case 'STBL_REMARK_SEC':
			$PLAN->STBL_REMARK_SEC($_POST);
			break;
		case 'STBL_REMARK_INS':
			$PLAN->STBL_REMARK_INS($_POST);
			break;
		case 'STBL_PLAN_LINE':
			$PLAN->STBL_PLAN_LINE($_POST);
			break;
		case 'PLAN_SEC_DAILY_DATE':
			$PLAN->PLAN_SEC_DAILY_DATE($_POST);
			break;
		case 'STBL_REMARK_UPD':
			$PLAN->STBL_REMARK_UPD($_POST);
			break;
		case 'STBL_REMARK_DEL':
			$PLAN->STBL_REMARK_DEL($_POST);
			break;
		case 'STBL_PLAN_MANAGE':
			$PLAN->STBL_PLAN_MANAGE($_POST);
			break;
		case 'STBL_AUTO_CAL_DATE_ALL':
			$PLAN->STBL_AUTO_CAL_DATE_ALL($_POST);
			break;
		case 'Chk_Model_Seiban':
			$EDER->Chk_Model_Seiban($_GET);
			break;
		case 'STBL_LIST_LINE':
			$EDER->STBL_LIST_LINE($_GET);
			break;
		case 'EDER_INS':
			$EDER->EDER_INS($_POST);
			break;
		case 'EDER_UPD':
			$EDER->EDER_UPD($_POST);
			break;
		case 'EDER_UPD_STATUS':
			$EDER->EDER_UPD_STATUS($_POST);
			break;
		case 'EDER_DEL':
			$EDER->EDER_DEL($_POST);
			break;
		case 'EDER_SEC':
			$EDER->EDER_SEC($_POST);
			break;
		case 'EDER_SEC_ID':
			$EDER->EDER_SEC_ID($_POST);
			break;
		case 'EDER_SEC_HIS':
			$EDER->EDER_SEC_HIS($_POST);
			break;
		case 'EDER_SEC_TYPE':
			$EDER->EDER_SEC_TYPE($_POST);
			break;
		case 'EDER_SEC_TYPE_SMT':
			$EDER->EDER_SEC_TYPE_SMT($_POST);
			break;
		case 'EDER_SEC_TYPE_ASSY':
			$EDER->EDER_SEC_TYPE_ASSY($_POST);
			break;
		case 'STBL_UPD_DEPT':
			$EDER->STBL_UPD_DEPT($_POST);
			break;
		case 'DEL_IMG':
			$EDER->UNLINK($_GET);
			break;
		case 'EDER_CHAL_SEC':
			$EDER->EDER_CHAL_SEC($_POST);
			break;
		case 'EDER_CHAL_INS':
			$EDER->EDER_CHAL_INS($_POST);
			break;
		case 'EDER_CHAL_UPD':
			$EDER->EDER_CHAL_UPD($_POST);
			break;
		case 'EDER_CHAL_UPD':
			$EDER->EDER_CHAL_UPD($_POST);
			break;
		case 'EDER_CHAL_DEL':
			$EDER->EDER_CHAL_DEL($_POST);
			break;
		case 'STBL_TRIAL_MODEL_SEC':
			$NPI->STBL_TRIAL_MODEL_SEC($_POST);
			break;
		case 'STBL_TRIAL_MODEL_SEC_HIS':
			$NPI->STBL_TRIAL_MODEL_SEC_HIS($_POST);
			break;
		case 'STBL_TRIAL_MODEL_INS':
			$NPI->STBL_TRIAL_MODEL_INS($_POST);
			break;
		case 'STBL_TRIAL_MODEL_UPD':
			$NPI->STBL_TRIAL_MODEL_UPD($_POST);
			break;
		case 'STBL_TRIAL_MODEL_DEL':
			$NPI->STBL_TRIAL_MODEL_DEL($_POST);
			break;
		case 'STBL_FLOWS_SEC':
			$NPI->STBL_FLOWS_SEC($_POST);
			break;
		case 'STBL_FLOWS_INS':
			$NPI->STBL_FLOWS_INS($_POST);
			break;
		case 'STBL_FLOWS_DEL':
			$NPI->STBL_FLOWS_DEL($_POST);
			break;
		case 'STBL_TROUBLE_SEC':
			$NPI->STBL_TROUBLE_SEC($_POST);
			break;
		case 'STBL_TROUBLE_INS':
			$NPI->STBL_TROUBLE_INS($_POST);
			break;
		case 'STBL_TROUBLE_UPD':
			$NPI->STBL_TROUBLE_UPD($_POST);
			break;
		case 'STBL_TROUBLE_DEL':
			$NPI->STBL_TROUBLE_DEL($_POST);
			break;
		case 'STBL_PROCESS_SEC':
			$NPI->STBL_PROCESS_SEC($_POST);
			break;
		case 'DEL_IMG_CONDITION':
			$NPI->DEL_IMG_CONDITION($_GET);
			break;
		case 'DEL_IMG_PRPPOSAL':
			$NPI->DEL_IMG_PRPPOSAL($_GET);
			break;
		case 'STBL_RTOT_EMP_BY_MONTH':
			$RTOT->STBL_RTOT_EMP_BY_MONTH($_POST);
			break;
		case 'STBL_RTOT_EMP_SUMMARY_BY_MONTH':
			$RTOT->STBL_RTOT_EMP_SUMMARY_BY_MONTH($_POST);
			break;
		case 'STBL_RTOT_EMP_SUMMARY_BY_TEAM':
			$RTOT->STBL_RTOT_EMP_SUMMARY_BY_TEAM($_POST);
			break;
		case 'STBL_RTOT_EMP_SUMMARY_TIME_BY_TEAM':
			$RTOT->STBL_RTOT_EMP_SUMMARY_TIME_BY_TEAM($_POST);
			break;
		case 'STBL_LIST_GROUP':
			$RTOT->STBL_LIST_GROUP($_POST);
			break;
		case 'STBL_EMP_INS':
			$RTOT->STBL_EMP_INS($_POST);
			break;
		case 'STBL_EMP_UPD':
			$RTOT->STBL_EMP_UPD($_POST);
			break;
		case 'STBL_EMP_UPD_OUT':
			$RTOT->STBL_EMP_UPD_OUT($_POST);
			break;
		case 'STBL_BUS_EMP_BY_MONTH':
			$RTOT->STBL_BUS_EMP_BY_MONTH($_POST);
			break;
		case 'STBL_SEC_SOLDER_MS':
			$SOLDER->STBL_SEC_SOLDER_MS($_POST);
			break;
		case 'STBL_SEC_SOLDER':
			$SOLDER->STBL_SEC_SOLDER($_POST);
			break;
		case 'STBL_INC_SOLDER_MS':
			$SOLDER->STBL_INC_SOLDER_MS($_POST);
			break;
		case 'STBL_UPD_SOLDER_MS':
			$SOLDER->STBL_UPD_SOLDER_MS($_POST);
			break;
		case 'STBL_DEL_SOLDER_MS':
			$SOLDER->STBL_DEL_SOLDER_MS($_POST);
			break;
		case 'STBL_SOLDER_LIST':
			$SOLDER->STBL_SOLDER_LIST($_POST);
			break;
	}
?>
