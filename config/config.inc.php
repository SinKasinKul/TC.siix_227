<?php
/*-----------Developer--------------
Mr.Kasin Kuljiang
e-mail : kasin.kulj@gmail.com
tel : 088-2722205
*/
/*-----------CONNECT ORACLE ST--------------*/
define('DB_USER_OCI', 'prones');
define('DB_PASSWORD_OCI', 'prones');
define('DB_NAME_OCI', "192.168.1.12:1521/ORCL"); //ORCLE USE SID
//define('DB_NAME_OCI', "PRONES"); ORCLE USER SERVICE NAME
define('DB_CHARSET_OCI', "AL32UTF8");
/*--------------------------------------*/

/*-----------CONNECT ORACLE GTMS--------*/
define('DB_USER_OCI_GTMS', 'siix');
define('DB_PASSWORD_OCI_GTMS', 'siix');
define('DB_NAME_OCI_GTMS', "200.100.100.16:1521/PRONES"); //ORCLE USE SID
//define('DB_NAME_OCI_GTMS', "PRONES200"); ORCLE USER SERVICE NAME
define('DB_CHARSET_OCI_GTMS', "AL32UTF8");
/*--------------------------------------*/

/*-----------CONNECT MYSQL--------------*/
define('DB_HOST_MYSQL', 'localhost');
define('DB_USER_MYSQL', 'root');
define('DB_PASSWORD_MYSQL', 'siix2016');
//define('DB_PASSWORD_MYSQL', 'silom1234');
define('DB_NAME_MYSQL', 'siix');
/*--------------------------------------*/

/*-----CONNECT MICROSOFT_SQL SATO------*/
define('DB_HOST_MSSQL', '200.100.100.227');
define('DB_USER_MSSQL', 'sa');
define('DB_PASSWORD_MSSQL', 'siix@123456');
define('DB_NAME_MSSQL_TEST', 'TEST_check_serial');
define('DB_NAME_MSSQL', 'Siix_check_serial');

define('DB_HOST_MSSQL_228', '200.100.100.228');
define('DB_NAME_MSSQL_QA', 'QualityData');

define('DB_HOST_MSSQL_226', '200.100.100.226');
define('DB_USER_MSSQL_226', 'sa');
define('DB_PASSWORD_MSSQL_226', 'siix@123456');
define('DB_NAME_MSSQL_226', 'STBL_RT_OT');

define('DB_HOST_MSSQL_228', '200.100.100.228');
define('DB_USER_MSSQL_228', 'sa');
define('DB_PASSWORD_MSSQL_228', 'siix@123456');
define('DB_NAME_MSSQL_228', 'STBL_MAIN');

define('DB_HOST_MSSQL_229', '200.100.100.229');
define('DB_USER_MSSQL_229', 'sa');
define('DB_PASSWORD_MSSQL_229', 'siix@123456');
define('DB_NAME_MSSQL_229', 'Siix_check_serial');
/*-------------------------------------*/

/*-----CONNECT MICROSOFT_SQL SATO------
define('DB_HOST_MSSQL', '192.168.1.28');
define('DB_USER_MSSQL', 'sa');
define('DB_PASSWORD_MSSQL', 'Sato12345');
define('DB_NAME_MSSQL', 'SSCS');
-------------------------------------*/

/*-----------SET MAIL-------------------*/
define('SMTP_SERVER', 'smtp.siix.co.th');
define('SMTP_PORT', '25');
define('TIMEOUT', '30');
define('MAIL_USER', 'it-team@siix.co.th');
define('MAIL_PASS', 'Q1al1so2');
define('MAIL_HOST', '61.47.85.194');
/*--------------------------------------*/

/*----------Config E-mail Alert----------*/
define('MAIL_GROUP', 'scm@siix.co.th');
define('MAIL_SUBJECT', 'Alert Seiban Shortage');
/*---------------------------------------*/

/*----------Config Company----------*/
define('HEADER_NAME', 'Innovation');
define('HEADER_NAME_MRP', 'MRP Packaging');
define('HEADER_NAME_II', 'THAI SIIX CO.,LTD.');
//define('SIGNATURE', 'UEhBLUptNWljM0E3Sm01aWMzQTdKbTVpYzNBN1EyOXdlWEpwWjJoMEptTnZjSGs3SURJd01UWWdVMGxKV0NCQ1FVNUhTMDlMSUVOUExpeE1WRVF1SUNadVluTndPeUJRYjNkbGNpQkNlU0JKVkNCTFlYTnBiaTVyZFd4QWMybHBlQzVqYnk1MGFDWnVZbk53T3p3dmNENA');
define('KEY', ' VTJsc2VB');
/*---------------------------------------*/

/*---------------PATH----------------*/
define('CLS', 'class/');
define('PHP', '.php');
define('UTILITY','Utility'.PHP);
/*-----------------------------------*/

/*----------Class Connect & Main-------------*/
define('OCI', CLS.'connect_oci'.PHP);
define('MSSQL', CLS.'connect_mssql'.PHP);
define('MSSQL226', CLS.'connect_mssql226'.PHP);
define('MSSQL228', CLS.'connect_mssql228'.PHP);
define('MSSQL229', CLS.'connect_mssql229'.PHP);
define('MYSQL', CLS.'connect_mysql'.PHP);
define('ES', CLS.'connect_entry_sheet'.PHP);
define('LOGIN', CLS.'Check_login'.PHP);
define('MAIL', CLS.'mail-lib'.PHP);
define('CSV', CLS.'csv'.PHP);
define('EXCEL', CLS.'PHPExcel'.PHP);
define('MPDF', CLS.'mpdf/mpdf'.PHP);
define('INCTCPDF', CLS.'tcpdf/tcpdf_include'.PHP);
define('TCPDF', CLS.'tcpdf'.PHP);
define('UTIL', CLS.UTILITY);
define('LOG', CLS.'log'.PHP);
/*------------------------------------*/

/*---------------RATE STD--------------*/
define('RATE_JPY', '0.37');
define('RATE_USD', '35');
define('RATE_THB', '1');
define('RATE_EUR', '38');
define('TH_VAT', '7');
/*------------------------------------*/

/*----------Extra-------------*/
define('EXTRA', '75');
/*------------------------------------*/

define('UP','../');

/*----------------LogFile-------------*/
define('LOGFILE','tmp/scmlog.txt');
/*------------------------------------*/

/*-------------ORCL----------------*/
define('BEGIN','BEGIN');
define('ORCL_STK_CHK_STS','SIN_STK_CHK_STS');
/*---------------------------------*/

class siix
{
  public static function Chkapplication()
  {
      /*$chk_S = substr(SIGNATURE,EXTRA + 37,RATE_THB);
      $chk_i = substr(SIGNATURE,EXTRA + 80,RATE_THB);
      $chk_l = substr(SIGNATURE,EXTRA - 32,RATE_THB);
      $chk_X = substr(SIGNATURE,EXTRA + 3,RATE_THB);
      $siix = $chk_S.$chk_i.$chk_l.$chk_X;*/

      $key =  'Silx';
      //if($siix == $key){
        $log = array(OCI,MSSQL,MSSQL228,MSSQL229,MSSQL226,MYSQL,ES,LOGIN,CSV,EXCEL,MAIL,MPDF,INCTCPDF,TCPDF,UTIL);
        return $log;
      //}
  }
}

?>
