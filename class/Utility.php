<?php
class Utility{

	public static function Bourbon($l)
	{
		foreach ($l as $key) {
			require_once($key);
		}
	}

	/**
	 * สร้างรูปแบบรหัส  Digit_Format
	 * @return string รหัส  Digit_Format
	 * @param string $value = ตัวเลข
	 * @param int $dig = จำนวนหลักที่ต้องการ
	 * @access public
	 */
	function Digit_Format($value,$dig){
		$str_value = $value;
		settype($str_value, "string");
		$len = strlen($str_value);
		$a = $dig - $len;
		if($a>0){
			$zeros = "";
			for ($i = 1; $i <= $a; $i++){
				$zeros .= "0";
			}
			$informat = $zeros . $value;
			return $informat;
		} else {
			return $value;
		}
	}

	/**
	 * ชื่อเดือนภาษาไทยจากเลขเดือน
	 * @return string ชื่อเดือนภาษาไทย
	 * @param int $month_number = เลขเดือน
	 * @access public
	 */
	function ThaiMonth($month_number){
		switch($month_number){
			case 1 :{
				return "มกราคม";
			}
			break;
			case 2 :{
				return "กุมภาพันธ์";
			}
			break;
			case 3 :{
				return "มีนาคม";
			}
			break;
			case 4 :{
				return "เมษายน";
			}
			break;
			case 5 :{
				return "พฤษภาคม";
			}
			break;
			case 6 :{
				return "มิถุนายน";
			}
			break;
			case 7 :{
				return "กรกฎาคม";
			}
			break;
			case 8 :{
				return "สิงหาคม";
			}
			break;
			case 9 :{
				return "กันยายน";
			}
			break;
			case 10 :{
				return "ตุลาคม";
			}
			break;
			case 11 :{
				return "พฤศจิกายน";
			}
			break;
			case 12 :{
				return "ธันวาคม";
			}
			break;
		}

	}

	/**
	 * เปลี่ยนวันที่จาก Y-m-d H:i:s  เป็น d/m/Y
	 * @return string รูปแบบวันที่ d/m/Y
	 * @param string $date_mysql รูปแบบวันที่ Y-m-d H:i:s
	 * @access public
	 */
	public static function MyDatetimeToDate($date_mysql){
		list($D,$T) = split(" ",$date_mysql);
		list($y,$m,$d) = split("-",$D);
		return "$d/$m/$y";
	}

	/**
	 * ตัดชื่อไฟล์จาก URL
	 * @return string ชื่อไฟล์
	 * @param string $url URL
	 * @access public
	 */
	public function ScriptNameFromURL($url){
		$ep_lnk = explode('/', $url);
		$cnt = count($ep_lnk);
		return $ep_lnk[$cnt-1];
	}
/*--------------------------------Methon Static-------------------------------------------------*/

	/**
	 * Generate Coderunning for primary key
	 * @return string code for primary key
	 * @param string $table,$value,$code
	 * @access public
	 */
	public static function GenCodeRunning($table,$value,$code)
	{
	$Utility = new Utility;
	$DB=connect_mysql::DB();
	//$_SESSION['company_code']='TSC';
	$RN = "$_SESSION[company_code]-$code".date("Y").date("m").date("d");
	$SQL = "SELECT * FROM $table where company_code='$_SESSION[company_code]'";
	$SQL .= " and $value like '$RN%' ";
	$SQL .= " order by $value desc";
    $result = $DB->query($SQL);
 	$row_cnt = $result->num_rows;
	    if ($row_cnt > 0) {
				$row = $result->fetch_assoc();
				$vat_no = intval(substr($row["$value"], -4));
				$ID = $Utility->Digit_Format($vat_no+1,4);
			} else {
				$ID = $Utility->Digit_Format(1,4);
			}
			$result->free();
			$ID = "$_SESSION[company_code]-$code".date("Y").date("m").date("d")."-".$ID;

		mysqli_close($DB);
		//echo "{\"response\":\"".$ID."\"}"; JASON
		return $ID;
	}

	/**
	 * Generate Coderunning for primary key Database Orcle
	 * @return string code for primary key
	 * @param string $table,$value,$code
	 * @access public
	 */
	public static function GenCodeRunningOCI($table,$value,$code)
	{
	$company = (isset($_SESSION['company_code'])=='' ? 'SIIX' :$_SESSION['company_code']);
	$Utility = new Utility;
	$DB=connect_oci::DB();
	$RN = "$company-$code".date("Y").date("m").date("d");
	$SQL = "SELECT * FROM $table where company_code='$company'";
	$SQL .= " and $value like '$RN%' ";
	$SQL .= " order by $value desc";
    $result = oci_parse($DB, $SQL);
	oci_execute($result);

	$SQL_NUMROW = "SELECT COUNT(*) AS NUMROW FROM $table where company_code='$company'";
	$SQL_NUMROW .= " and $value like '$RN%' ";
	$SQL_NUMROW .= " order by $value desc";
    $result_NUMROW = oci_parse($DB, $SQL_NUMROW);
	oci_execute($result_NUMROW);
	$row_NUMROW = oci_fetch_array($result_NUMROW, OCI_ASSOC+OCI_RETURN_NULLS);
 	$row_cnt = $row_NUMROW['NUMROW'];
	    if ($row_cnt > 0) {
				$row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS);
				$vat_no = intval(substr($row[$value], -4));
				$ID = $Utility->Digit_Format($vat_no+1,4);
			} else {
				$ID = $Utility->Digit_Format(1,4);
			}
			oci_free_statement($result);
			$ID = "$company-$code".date("Y").date("m").date("d")."-".$ID;
		oci_close($DB);
		//echo "{\"response\":\"".$ID."\"}"; JASON
		return $ID;
	}

	/**
	 * Generate Code for primary key
	 * @return string code for primary key
	 * @param string $table,$value,$code
	 * @access public
	 */
	public static function GenCode($table,$value,$code,$type='')
	{
	$DB=connect_mysql::DB();
	$Utility = new Utility;
    $charset = $DB->query("SET NAMES utf8");
	$RN = "$code".date("y").date("m");
	$SQL = "SELECT * FROM $table where company_code='$_SESSION[company_code]'";
	$SQL .= " and $value like '$RN%' ";
	$SQL .= " order by $value desc";
    $result = $DB->query($SQL);
 	$row_cnt = $result->num_rows;
	    if ($row_cnt > 0) {
				$row = $result->fetch_assoc();
				$vat_no = intval(substr($row["$value"], -4));
				$ID = $Utility->Digit_Format($vat_no+1,4);
			} else {
				$ID = $Utility->Digit_Format(1,4);
			}
			$result->free();
			$ID = "$code".date("y").date("m").'-'.$ID;

		mysqli_close($DB);
		switch ($type) {
			case "json":
				echo "{\"response\":\"".$ID."\"}";
				break;

			default:
				return $ID;
				break;
		}
	}

	/**
	 * Repsponse JSON Mysql insert,update,delete
	 * @return string JSON
	 * @param string $result
	 * @access public
	 */
	public static function CheckResult($result,$sql='')
	{
		if (!$result) {
			echo "{\"response\":\"false\"}";
			}else
			{
			echo "{\"response\":\"success\"}";
			}
	}

	/**
	 * Repsponse JSON Mysql insert,update,delete Database ORCLE
	 * @return string JSON
	 * @param string $result
	 * @access public
	 */
	public static function CheckResultOCI($Execute,$DB)
	{
		if($Execute)
		{
			if(oci_commit($DB)){ //*** Commit Transaction ***//
				echo "{\"response\":\"success\"}";
			}else{
				echo "{\"response\":\"false\"}";
			}

		}
		else
		{
			oci_rollback($DB); //*** RollBack Transaction ***//
			echo "{\"response\":\"false\"}";
		}
	}

	/**
	 * Repsponse data JSON for show on page
	 * @return string json_encode
	 * @param string $result,$sql
	 * @access public
	 */
	public static function json($result,$DB)
	{
		if ($result){
			$num = $result->num_rows;
			if ($num > 0) {
			$dataArray = array();

    		while($row = $result->fetch_assoc()){
             	 $data = $row;
                array_push($dataArray,$data);
         	}
				echo "{\"total\":$num,\"data\":".json_encode($dataArray)."}";
			}else{
				echo "{\"total\":$num,\"data\":false}";
			}
			$result->free();
		} else {
			echo "{\"total\":0,\"data\":false}"."<br>".mysqli_error($DB);
		}
	}

	/**
	 * Repsponse data JSON for show on page Database ORCLE
	 * @return string json_encode
	 * @param string $result,$sql
	 * @access public
	 */
	public static function jsonOci($stid,$DB)
	{
		ini_set("memory_limit","-1");
		$num = oci_num_rows($stid);
		if (!$stid) {
		    $e = oci_error($DB);
		    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
		    echo "{\"total\":$num,\"data\":false}";
		}else{
			$dataAll = array();
			while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
					$data=$row;
					array_push($dataAll,$data);
			}
			echo "{\"data\":".json_encode($dataAll)."}";
		}
	}

	/**
	 * Repsponse data JSON for show on page
	 * @return string json_encode
	 * @param string $result,$sql
	 * @access public
	 */
	public static function jsonMSSQL($result)
	{
		//if ($result){
			//$num = sqlsrv_num_rows($result);
			//if ($num > 0) {
			$dataArray = array();

    		while($row = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC)){
             	 $data = $row;
                array_push($dataArray,$data);
         	}
				echo "{\"response\":\"success\",\"data\":".json_encode($dataArray)."}";
		//	}else{
		//		echo "{\"response\":false}";
		// }

		//} else {
		//	echo "{\"total\":0,\"data\":false}";
	//	}
		/*if ($result){
			$num = mssql_num_rows($result);
			if ($num > 0) {
			$dataArray = array();

    		while($row = mssql_fetch_assoc($result)){
             	 $data = $row;
                array_push($dataArray,$data);
         	}
				echo "{\"total\":$num,\"data\":".json_encode($dataArray)."}";
			}else{
				echo "{\"total\":$num,\"data\":false}";
			}

		} else {
			echo "{\"total\":0,\"data\":false}"."<br>".mssql_get_last_message();
		}*/
	}

	/**
	*Check Code unique
	*
	*/
	public static function unique($table,$field,$value){
		$DB=connect_mysql::DB();
		$sql = "SELECT $field FROM $table ";
		$sql .= " WHERE $field='$value'";
		$charset = $DB->query("SET NAMES UTF8");
		$result = $DB->query($sql);
		$NumR = $result->num_rows;
		if (!$result) {
			return false;
		} else {
			return($NumR > 0 ? false : true);
			$result->free();
		}
		$DB->close();
	}

	/**
	*Check Code unique
	*
	*/
	public static function uniqueOCI($table,$field1,$value1,$field2='',$value2='',$field3='',$value3=''){

		$DB=connect_oci::DB();
		$sql = "SELECT COUNT($field1) AS numrow FROM $table ";
		$sql .= " WHERE $field1='$value1'";
		if($field2!='' && $value2!=''){
			$sql .= " AND $field2='$value2'";
		}
		if($field3!='' && $value3!=''){
			$sql .= " AND $field3='$value3'";
		};
		//echo $sql;
	    $result = oci_parse($DB, $sql);
		oci_execute($result);
		$row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS);
 		$NumR = $row['NUMROW'];
 		oci_free_statement($result);
		oci_close($DB);

		return($NumR > 0 ? false : true);
	}

	/**
	*Check Code unique check TRUR
	*
	*/
	public static function uniqueOciTRUE($table,$field1,$value1,$field2='',$value2='',$field3='',$value3=''){

		$DB=connect_oci::DB();
		$sql = "SELECT COUNT($field1) AS numrow FROM $table ";
		$sql .= " WHERE $field1='$value1'";
		if($field2!='' && $value2!=''){
			$sql .= " AND $field2='$value2'";
		}
		if($field3!='' && $value3!=''){
			$sql .= " AND $field3='$value3'";
		};
		//echo $sql;
	    $result = oci_parse($DB, $sql);
		oci_execute($result);
		$row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS);
 		$NumR = $row['NUMROW'];
 		oci_free_statement($result);
		oci_close($DB);

		return($NumR > 0 ? true : false);
	}

	/**
	*ตรวจสอบ Code ซ้ำ
	*
	*/
	public static function uniqueCheckTrue($table,$field,$value){
		$DB=connect_mysql::DB();
		$sql = "SELECT $field FROM $table ";
		$sql .= " WHERE $field='$value'";
		$charset = $DB->query("SET NAMES UTF8");
		$result = $DB->query($sql);
		$NumR = $result->num_rows;
		if (!$result) {
			return false;
		} else {
			return($NumR > 0 ? false : true);
			$result->free();
		}
		$DB->close();
	}

	/**
	*ตรวจสอบ ข้อมูลที่ต้องการลบว่ามี การใช้งานอยู่หรือไม้
	*
	*/
	public static function CheckTransition($table,$field,$value){
		$DB=connect_mysql::DB();
		$sql = "SELECT $field FROM $table ";
		$sql .= " WHERE $field='$value'";
		$charset = $DB->query("SET NAMES UTF8");
		$result = $DB->query($sql);
		$NumR = $result->num_rows;
		if (!$result) {
			return false;
		} else {
			return($NumR > 0 ? false : true);
			$result->free();
		}
		$DB->close();
	}

	/**
	*ตรวจสอบ สิทธิ์การแก้ไขแล้ะลบ ข้อมูล
	*/
	public static function checkaction($table,$field_1,$value_1,$field_2,$value_2){
		$DB=connect_mysql::DB();
		$sql = "SELECT $field_1,$field_2 FROM $table ";
		$sql .= " WHERE $field_1='$value_1' AND $field_2='$value_2'";
		$charset = $DB->query("SET NAMES UTF8");
		$result = $DB->query($sql);
		$NumR = $result->num_rows;
		if (!$result) {
			return false;
		} else {
			return($NumR > 0 ? true : false);
			$result->free();
		}
		$DB->close();
	}

	/**
	 * รูปแบบวันที่ไทยจากรูปแบบของ Y-m-d
	 * @return string รูปแบบวันที่ไทย
	 * @param string $date_mysql = วันที่ในรูปแบบ Y-m-d
	 * @access public
	 */
	public static function MyToThaiLongDate($date_mysql){
		$Utility = new Utility;
		list($y,$m,$d) = split("-",$date_mysql);
		$Y= $y + 543;
		$F = $Utility->ThaiMonth($m);
		return "$d  $F  พ.ศ.  $Y";
	}

/*---------------------คำนวนเวลา---------------*/
public function splitTime($time){ // เวลาในรูปแบบ มาตรฐาน 2006-03-27 21:39:12
	$timeArr["Y"]= substr($time,2,2);
	$timeArr["M"]= substr($time,5,2);
	$timeArr["D"]= substr($time,8,2);
	$timeArr["h"]= substr($time,11,2);
	$timeArr["m"]= substr($time,14,2);
	$timeArr["s"]= substr($time,17,2);
	return $timeArr;
	}

public static function dateDiv($t1,$t2){ // ส่งวันที่ที่ต้องการเปรียบเทียบ ในรูปแบบ มาตรฐาน 2006-03-27 21:39:12
	  $Utility = new Utility;
	  $t1Arr=$Utility->splitTime($t1);
	  $t2Arr=$Utility->splitTime($t2);

	  $Time1=mktime($t1Arr["h"], $t1Arr["m"], $t1Arr["s"], $t1Arr["M"], $t1Arr["D"], $t1Arr["Y"]);
	  $Time2=mktime($t2Arr["h"], $t2Arr["m"], $t2Arr["s"], $t2Arr["M"], $t2Arr["D"], $t2Arr["Y"]);
	  $TimeDiv=abs($Time2-$Time1);

	  $Time["D"]=intval($TimeDiv/86400); // จำนวนวัน
	  $Time["H"]=intval(($TimeDiv%86400)/3600); // จำนวน ชั่วโมง
	  $Time["M"]=intval((($TimeDiv%86400)%3600)/60); // จำนวน นาที
	  $Time["S"]=intval(((($TimeDiv%86400)%3600)%60)); // จำนวน วินาที
	 return $Time;
	}

public static function footer()
    {
      if(isset($_SESSION['USER_ID']) != ''){
       echo "<p>USER login: ".$_SESSION['USER_NAME'].' Dept: '.$_SESSION['DEPARTMENT'].' '.date('l,d F Y')."&nbsp;&nbsp;&nbsp;&reg;SIIX BANGKOK CO.,LTD. &nbsp;2016 &nbsp; E-mail:".$_SESSION["EMAIL"]."</p>";
      }else{
       echo "<p>".date('l,d F Y')." &nbsp;&nbsp;&nbsp;&reg;SIIX BANGKOK CO.,LTD. &nbsp;2016 Power By IT&nbsp;</p>";
      }
    }

public static function namemonth($value='')
    {
    	switch ($value) {
    		case '01':return "January";break;
    		case '02':return "February";break;
    		case '03':return "March";break;
    		case '04':return "April";break;
    		case '05':return "May";break;
    		case '06':return "June";break;
    		case '07':return "July";break;
    		case '08':return "Auguest";break;
    		case '09':return "September";break;
    		case '10':return "October";break;
    		case '11':return "November";break;
    		case '12':return "December";break;
    	}
    }

public static function selectMonth(){
    	echo "<option value='0'>Month</option>";
    	for($i=01;$i<=12;$i++){
    		if($i <10){
    			echo "<option value=\"0".$i."\">".Utility::namemonth($i)."</option>";
    		}else{
    			echo "<option value=\"".$i."\">".Utility::namemonth($i)."</option>";
    		}

		}
    }

	public static function ShowLogo($data) {
		    $b64_I = base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
		    $b64_II = base64_decode(str_pad(strtr($b64_I, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
		  	echo $b64_II;
		}

public static function selectYear(){
    	echo "<option value='0'>Year</option>";
    	$YearAll = date('Y');
    	$next_year = date('Y')+1;
    	for($i=2012;$i<=$YearAll;$i++){
			echo "<option value=\"".$i."\">".$i."</option>";
		}
		echo "<option value=\"".$next_year."\">".$next_year."</option>";
    }

		public static function model()
		    {
		    	echo "<option value=\"\">Model</option>";
		    	echo "<option value=\"AMF\">AMPS</option>";
		    	echo "<option value=\"AVF\">MEIC</option>";
					echo "<option value=\"BEF\">BENC</option>";
					echo "<option value=\"BNF\">BNGK</option>";
					echo "<option value=\"CIF\">CITC</option>";
					echo "<option value=\"CKF\">CKTC</option>";
					echo "<option value=\"DEA\">DEAP</option>";
					echo "<option value=\"DEF\">DEAN</option>";
					echo "<option value=\"DWF\">DWKT</option>";
					echo "<option value=\"ICF\">ICHK</option>";
					echo "<option value=\"IIV\">IITC</option>";
		    	echo "<option value=\"JVF\">JVCT</option>";
		    	echo "<option value=\"KNF\">KNTT</option>";
		    	echo "<option value=\"KOF\">KOIT</option>";
		    	echo "<option value=\"MAF\">MATC</option>";
		    	echo "<option value=\"MEF\">META</option>";
		    	echo "<option value=\"MHF\">MHIT(MHF)</option>";
		    	echo "<option value=\"MHI\">MHIT(MHI)</option>";
		    	echo "<option value=\"MIT\">MIKT</option>";
		    	echo "<option value=\"MMF\">MMTY</option>";
		    	echo "<option value=\"MTC\">MMTC</option>";
		    	echo "<option value=\"NCF\">NCTC</option>";
		    	echo "<option value=\"NIF\">NILT</option>";
		    	echo "<option value=\"NIK\">NIKT</option>";
		    	echo "<option value=\"NIG\">TNCT</option>";
		    	echo "<option value=\"NMF\">NAMK</option>";
		    	echo "<option value=\"OPF\">OTXS</option>";
		    	echo "<option value=\"PAF\">MEWT</option>";
		    	echo "<option value=\"SFF\">SIFN(SFF)</option>";
		    	echo "<option value=\"SFN\">SIFN(SFN)</option>";
		    	echo "<option value=\"SMF\">SEDH</option>";
		    	echo "<option value=\"SMS\">SMET</option>";
		    	echo "<option value=\"TAV\">TAPY</option>";
		    	echo "<option value=\"VTF\">VTEC</option>";
					echo "<option value=\"TEF\">TTET</option>";
					echo "<option value=\"TNF\">TNIC</option>";
		    	echo "<option value=\"TPF\">TPTC</option>";
		    	echo "<option value=\"TTF\">TRAN</option>";
		    	echo "<option value=\"USF\">USHN</option>";
		    	echo "<option value=\"YAF\">YECJ</option>";
		    	echo "<option value=\"YAT\">PAST</option>";
		    }

		    public static function model2()
		    {
		    	echo "<option value=\"\">Model</option>";
		    	echo "<option value=\"AMP\">AMPS</option>";
		    	echo "<option value=\"AVI\">MEIC</option>";
					echo "<option value=\"BNG\">BNGK</option>";
					echo "<option value=\"CIT\">CITC</option>";
					echo "<option value=\"CKT\">CKTC</option>";
					echo "<option value=\"DEA\">DEAN</option>";
					echo "<option value=\"DWK\">DWKT</option>";
					echo "<option value=\"ICK\">ICHK</option>";
		    	echo "<option value=\"IIT\">IITC</option>";
		    	echo "<option value=\"JVC\">JVCT</option>";
		    	echo "<option value=\"KNT\">KNTT</option>";
		    	echo "<option value=\"KOM\">KOIT</option>";
		    	echo "<option value=\"MAT\">META</option>";
		    	echo "<option value=\"MHI\">MHIT</option>";
		    	echo "<option value=\"MIK\">MIKT</option>";
		    	echo "<option value=\"MMS\">MMTC</option>";
		    	echo "<option value=\"NCT\">NCTC</option>";
		    	echo "<option value=\"NIP\">NILT</option>";
		    	echo "<option value=\"PAM\">MEWT</option>";
		    	echo "<option value=\"SFN\">SIFN</option>";
		    	echo "<option value=\"SMC\">SEDH</option>";
		    	echo "<option value=\"SUB\">SETI</option>";
		    	echo "<option value=\"TAP\">TAPY</option>";
		    	echo "<option value=\"VTF\">VTEC</option>";
		    	echo "<option value=\"TCP\">TCTC</option>";
		    	echo "<option value=\"TEC\">TTET</option>";
		    	echo "<option value=\"TPT\">TPTC</option>";
		    	echo "<option value=\"TTT\">TRAN</option>";
		    	echo "<option value=\"USN\">USHN</option>";
		    	echo "<option value=\"YAS\">YECJ</option>";
		    	echo "<option value=\"YSA\">YSA</option>";
		    }

public static function encode($string,$key) {
    $key = sha1($key);
    $strLen = strlen($string);
    $keyLen = strlen($key);
    for ($i = 0; $i < $strLen; $i++) {
        $ordStr = ord(substr($string,$i,1));
        if ($j == $keyLen) { $j = 0; }
        $ordKey = ord(substr($key,$j,1));
        $j++;
        $hash .= strrev(base_convert(dechex($ordStr + $ordKey),16,36));
    }
	    return $hash;
	}

public static function decode($string,$key) {
	    $key = sha1($key);
	    $strLen = strlen($string);
	    $keyLen = strlen($key);
	    for ($i = 0; $i < $strLen; $i+=2) {
	        $ordStr = hexdec(base_convert(strrev(substr($string,$i,2)),36,16));
	        if ($j == $keyLen) { $j = 0; }
	        $ordKey = ord(substr($key,$j,1));
	        $j++;
	        $hash .= chr($ordStr - $ordKey);
	    }
	    return $hash;
	}
/*--------------------------------------Upload file----------------------------------------------------------------------------*/

	/**
	*Show field in table database ORCLE
	*/
public static function showFieldOCI($result='')
	{
		echo "<table border=\"1\">\n";
		echo "<tr>";
		echo "<th>Name</th>";
		echo "<th>Type</th>";
		echo "<th>Length</th>";
		echo "</tr>\n";

		$ncols = oci_num_fields($result);

		for ($i = 1; $i <= $ncols; $i++) {
		    $column_name  = oci_field_name($result, $i);
		    $column_type  = oci_field_type($result, $i);
		    $column_size  = oci_field_size($result, $i);

		    echo "<tr>";
		    echo "<td>$column_name</td>";
		    echo "<td>$column_type</td>";
		    echo "<td>$column_size</td>";
		    echo "</tr>\n";
		}

		echo "</table>\n";
	}


public function outputJSON($msg, $status = 'error')
	{
	    die(json_encode(array(
	        'data' => $msg,
	        'status' => $status
	    )));
	}

public static function checkFileUpload($FILES)
	{
		$U = new Utility;
		// Check for errors
		if($FILES['error'] > 0){
		    $U->outputJSON('An error ocurred when uploading.');
		}

		/*if(!getimagesize($_FILES['filUpload']['tmp_name'])){
		    outputJSON('Please ensure you are uploading an image.');
		}*/

		// Check filetype
		if($FILES['type'] != ''){
			switch ($FILES['type']) {
				case 'application/vnd.ms-excel':
					# code...
					break;
				case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
					# code...
					break;
				case 'image/png':
					# code...
					break;

				default:
					$U->outputJSON('Unsupported filetype uploaded.'.'File type: '.$FILES['type']);
					break;
			}
		}

		// Check filesize
		if($FILES['size'] > 500000){
		    $U->outputJSON('File uploaded exceeds maximum upload size.');
		}

		// Check if the file exists
		if(file_exists('data_csv/' . $FILES['name'])){
		    $U->outputJSON('File with that name already exists.');
		}

		// Upload file
		if(!move_uploaded_file($FILES["tmp_name"],"data_csv/".$FILES["name"])){
		    $U->outputJSON('Error uploading file - check destination is writeable.');
		}else{
			$date_now = date('YmdHis');
			$file = "data_csv/".$FILES['name'];//member.csv
			$new_dir = "data_csv/complete/".$date_now."-".$FILES['name'];

			rename($file, $new_dir);
		}

		//Utility::uploadFile($FILES);
		// Success!
		$U->outputJSON('File uploaded successfully to "' . 'data_csv/' . $FILES['name'] . '".', 'success');
	}

	public function ExLoopWhere($value='')
	{

		$Sql .= " AND ( ";
		// Get array keys
		$arrayKeys = array_keys($array);
		// Fetch last array key
		$lastArrayKey = array_pop($arrayKeys);

		foreach($BuildArray  as $k => $data) {
		    $Sql .= "dbo.tb_building.cBuilding LIKE '%$data%'";
		    if ($k !== $lastArrayKey) {
		        $Sql .= " OR ";
		    }
		}

		$Sql .= ")";

	}
}
?>
