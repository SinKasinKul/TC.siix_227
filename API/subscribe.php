<?php

require_once("MQTT.php");

$server  = "35.240.190.171"; //Server ip address
$port  = 1883;
$username = "";
$password = "";
$client_id = "Client-".rand();

$mqtt = new phpMQTT($server, $port, $client_id);
if( !$mqtt->connect(true, NULL, $username, $password) ) {
 exit(1);
}

$topics['test/topic'] = array("qos" => 0, "function" => "procmsg");
$mqtt->subscribe($topics, 0);

while($mqtt->proc()){

}

$mqtt->close();

function procmsg($topic, $msg){
  $log  = "Recieved at: " . date("Y-m-d H:i:s", time()) .":: Topic: {$topic}".' - '."Message: $msg".PHP_EOL;
  file_put_contents('/var/www/html/API/log/log_'.date("j.n.Y").'.log', $log, FILE_APPEND);
}
?>
