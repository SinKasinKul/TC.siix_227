<?php
/**
* Connect MSsql
*/
class connect_mssql226
{

	private $hostName = DB_HOST_MSSQL_226;
	private $user= DB_USER_MSSQL_226;
	private $Password = DB_PASSWORD_MSSQL_226;
	private $dbName = DB_NAME_MSSQL_226;

	private function connect($hostName="",$user="",$Password="",$db=""){
			$serverName = $hostName;
			$connectionInfo = array( "Database"=>$db, "UID"=>$user, "PWD"=>$Password,"CharacterSet" => "UTF-8");
			$connnect = sqlsrv_connect($serverName, $connectionInfo);
			return $connnect;
	}

	public function mssql()
	{
		$hostName = $this->hostName;
		$user = $this->user;
		$Password = $this->Password;
		$db = $this->dbName;
		$connnect = $this->connect($hostName,$user,$Password,$db);
		return $connnect;
	}

	public static function DB()
	{
		$conDB = NEW connect_mssql226;
	  	$DB= $conDB->mssql();
	  	if (!$DB) {
		    die( print_r( sqlsrv_errors(), true));
		}else{
			return $DB;
		}
	}
}
?>
