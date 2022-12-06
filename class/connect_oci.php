<?php

/**
* Connect batabase
*/
class connect_oci
{
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	//SIIX BKK
	private $user= DB_USER_OCI;
	private $Password = DB_PASSWORD_OCI;
	private $host = DB_NAME_OCI;
	private $charSet = DB_CHARSET_OCI;

	//SIIX GTMS
	private $user_GTMS= DB_USER_OCI_GTMS;
	private $Password_GTMS = DB_PASSWORD_OCI_GTMS;
	private $host_GTMS = DB_NAME_OCI_GTMS;
	private $charSet_GTMS = DB_CHARSET_OCI_GTMS;

	private function connect($user="",$Password="",$host="",$charSet=""){
			$connnect = oci_connect($user,$Password,$host,$charSet);
			return $connnect;
	}
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*-------------------------------SIIX BKK---------------------------------*/
	public function oci_SIIX()
	{
		$user = $this->user;
		$Password = $this->Password;
		$host = $this->host;
		$char = $this->charSet;
		$connnect = $this->connect($user,$Password,$host,$char);
		return $connnect;
	}
/*-------------------------------------------------------------------------*/

/*----------------------------SIIX GTMS-------------------------------------*/
	public function oci_GTMS()
	{
		$user = $this->user_GTMS;
		$Password = $this->Password_GTMS;
		$host = $this->host_GTMS;
		$charSet = $this->charSet_GTMS;
		$connnect = $this->connect($user,$Password,$host,$charSet);
		return $connnect;
	}
/*--------------------------------------------------------------------------*/

	public static function DB($type="")
	{
		$connect = NEW connect_oci;
		switch ($type) {
			case 'GTMS':
				$DB= $connect->oci_GTMS(); 
				  	if (!$DB) {
					    $m = oci_error();
					    trigger_error(htmlentities($m['message']), E_USER_ERROR);
					}else{
						return $DB;
					} 	
				break;

			default:
				$DB= $connect->oci_SIIX(); 
				  	if (!$DB) {
					    $m = oci_error();
					    trigger_error(htmlentities($m['message']), E_USER_ERROR);
					}else{
						return $DB;
					}
				break;
		}
	  	 	
	}
}
?>