<?php
class FAC 
{
    function STBL_FAC_MAIN($frm){
        $DB = connect_mssql229::DB();
        $FAC_TYPE = $frm['FAC_TYPE'];
        $FAC_Number = $frm['FAC_Number'];
        $FAC_Location = $frm['FAC_Location'];
        $FAC_Contact = $frm['FAC_Contact'];
        $FAC_Detail = $frm['FAC_Detail'];
        $stmt = "EXEC [STBL_FACILITY_REQ].[dbo].[STBL_FAC_MAIN] ?, ?, ?, ?, ?";
        $params = array(
        array($FAC_TYPE, SQLSRV_PARAM_IN),
        array($FAC_Number, SQLSRV_PARAM_IN),
        array($FAC_Location, SQLSRV_PARAM_IN),
        array($FAC_Contact, SQLSRV_PARAM_IN),
        array($FAC_Detail, SQLSRV_PARAM_IN)
        );
        $query = sqlsrv_query( $DB, $stmt, $params);
        $d = Utility::jsonMSSQL($query);
    }
}
?>