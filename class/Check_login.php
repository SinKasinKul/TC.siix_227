<?php
class login{

		function check_login($frm){
		$DB=connect_mysql::DB();
		$USER_ID = $frm['Username'];
		$en_pwd = $frm['Password'];//base64_encode();
			$strSQL = "SELECT * FROM member WHERE USER_ID = '$USER_ID' AND PASSWORD = '$en_pwd'";
			$charset = $DB->query("SET NAMES utf8");
			$objQuery = $DB->query($strSQL);
			$objResult = $objQuery->fetch_assoc();

			if(!$objResult)
			{
					echo "{\"response\":\"false\"}";
			}
			else
			{
					$_SESSION["logon"]=true;
					$_SESSION["USER_ID"]=$objResult["USER_ID"];
					$_SESSION["USER_NAME"]=$objResult["USER_NAME"];
					$_SESSION["company_code"]=$objResult["COMPANY_CODE"];
					$_SESSION["DEPARTMENT"]=$objResult["DEPARTMENT"];
					$_SESSION["EMAIL"]=$objResult["EMAIL"];

					session_write_close();
					if($_SESSION["USER_ID"] != "")
					{
						echo "{\"response\":\"success\"}";
					}
			}
			$DB->close();
		}

	public static function showlogin($userID)
	{
		$l = new login;
		$button = $l->buttonLogout();
		if($userID!= "")
		{
			return $button;//$_SESSION["USER_NAME"]." ".$_SESSION["DEPARTMENT"]
		}
	}

	public static function userLogOut()
	{
		session_destroy();
		echo "{\"response\":\"success\"}";
	}

	public function buttonLogout()
	{
		echo"<div align=\"center\">
			  <table width=\"100%\" border=\"0\">
			    <tr>
			        <td width=\"100%\" align=\"center\">
			          <button class=\"btn text-muted text-center btn-danger\" type=\"submit\" onclick=\"logOut();\"><i class=\"icon-signout icon-1x\"></i></button>
			        </td>
			    </tr>
			  </table>
			  </div>";
	}

	public function checkStatusLogin()
	{
		if(isset($_SESSION["USER_ID"])==""){
			echo '<script language="javascript">';
			echo 'alert("Cann\'t Enter Please login!!!!!!");';
			echo "window.location='../login_page.php';";
			echo '</script>';
		}
	}

	public static function footer()
    {
			$signature = "CopyrightÂ© 2019 Thai SIIX CO.,LTD.   Power By Innovation Kasin.Kuljiang@siix-global.com";//key::KeySignature(SIGNATURE);
       return $signature;
    }

    public function loginAD($frm)
    {
    	$username = $frm["username"];
		$pass = $frm["password"];

		if($username !=null and $pass !=null)
		{
		$server = " 192.168.1.40"; //siix-st
		$user = $frm["username"]."@siix-st.com";
		// connect to active directory
		$ad = ldap_connect($server);
			if(!$ad)
			{
				die("Connect not connect to ".$server);
				// include("chk_login_db.php");
				echo "ŕą„ŕ¸ˇŕą?ŕ¸Şŕ¸˛ŕ¸ˇŕ¸˛ŕ¸Łŕ¸–ŕ¸•ŕ¸´ŕ¸”ŕ¸•ŕą?ŕ¸­ server ŕ¸ˇŕ¸«ŕ¸˛ŕ¸Ąŕ¸±ŕ¸˘ŕą€ŕ¸žŕ¸·ŕą?ŕ¸­ŕ¸•ŕ¸Łŕ¸§ŕ¸?ŕ¸Şŕ¸­ŕ¸šŕ¸Łŕ¸«ŕ¸±ŕ¸Şŕ¸śŕą?ŕ¸˛ŕ¸™ŕą„ŕ¸”ŕą‰";
				exit();
			} else {
				$b = @ldap_bind($ad,$user,$pass);
				if(!$b) {
					die("<br><br>
					<div align='center'> ŕ¸—ŕą?ŕ¸˛ŕ¸™ŕ¸?ŕ¸Łŕ¸­ŕ¸?ŕ¸Łŕ¸«ŕ¸±ŕ¸Şŕ¸śŕą?ŕ¸˛ŕ¸™ŕ¸śŕ¸´ŕ¸”ŕ¸žŕ¸Ąŕ¸˛ŕ¸”
					<br>
					</div>
					<meta http-equiv='refresh' content='3 ;url=index.php'>");
				} else {

					//login ŕ¸śŕą?ŕ¸˛ŕ¸™ŕą?ŕ¸Ąŕą‰ŕ¸§ŕ¸ˇŕ¸˛ŕ¸—ŕ¸łŕą„ŕ¸Łŕ¸?ŕą‡ŕ¸§ŕą?ŕ¸˛ŕą„ŕ¸›
					session_start();

				}

				echo "<script type=text/javascript>";
				echo "alert('ŕ¸˘ŕ¸´ŕ¸™ŕ¸”ŕ¸µŕ¸•ŕą‰ŕ¸­ŕ¸™ŕ¸Łŕ¸±ŕ¸š ')";
				echo "</script>";
				echo "<meta http-equiv='refresh' content='0 ;url= index.php?case_i=13'>";
				exit();
			}

		}

	}
}
?>
