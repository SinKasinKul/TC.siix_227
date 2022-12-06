<?php
ini_set('session.save_path',realpath(dirname($_SERVER['DOCUMENT_ROOT']) . '/TC.siix/session'));
ini_set('session.gc_probability', 1);
session_start();
set_time_limit(1500);
ini_set("memory_limit","2500M");
error_reporting(E_ERROR | E_PARSE/*E_ALL & ~E_NOTICE*/);
date_default_timezone_set("Asia/Bangkok");
/*------------------------------------------*/
define('CONFIG', 'config/');
define('INC', 'config.inc.php');
require_once(CONFIG.INC);
/*------------------------------------------*/
$siix = siix::Chkapplication();
/*------------------------------------------*/
if(!$siix)
	{
		echo "<h1>Signature Not Match!!!</h1>";
	}
	else
	{
		foreach ($siix as $link)
	   {
	     require_once($link);
	   }
	}
/*----------------------------------------*/

?>
