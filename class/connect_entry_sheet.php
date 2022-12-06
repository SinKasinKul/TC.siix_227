<?php

/**
* Connect batabase
*/
class connect_entry_sheet
{

	private $serverName = DB_HOST_ES;
	private $user= DB_USER_ES;
	private $Password = DB_PASSWORD_ES;
	private $dbName = DB_NAME_ES;

	private function mysqli_connect($serverName="",$user="",$Password="",$dbName=""){
			$connnect = new mysqli($serverName,$user,$Password,$dbName);
			return $connnect;
	}

	public function mysqli()
	{
		$server = $this->serverName;
		$user = $this->user;
		$Password = $this->Password;
		$db = $this->dbName;
		$connnect = $this->mysqli_connect($server,$user,$Password,$db);
		return $connnect;
	}

	public static function DB()
	{
		$conDB = NEW connect_entry_sheet;
	  	$DB= $conDB->mysqli();
	  	$DB->query("SET NAMES utf8");
	  	if(!$DB){
	  		return printf("Errormessage: %s\n", $mysqli->error);
	  	}else{
	  		return $DB;
	  	}
	}
}
?>
