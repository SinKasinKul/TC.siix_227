<?php

class APIMQTT
{

  public function publishMQTT($value='')
  {
      $server  = "35.240.190.171"; //Server ip address
      $port  = 1883;
      $username = "";  //username ที่ได้สร้างไว้ตอนตั้งค่า MQTT Broker
      $password = "";  //password ที่ได้สร้างไว้ตอนตั้งค่า MQTT Broker
      $client_id = "Client-".rand();

      $Topic = $value['Topic'];
      $Msg =  $value['Msg'];

      $mqtt = new phpMQTT($server, $port, $client_id);

      if ($mqtt->connect(true, NULL, $username, $password)) {
       $mqtt->publish($Topic, $Msg, 0);
       $mqtt->close();
      } else {
          echo "{\"response\":\""."Time out!"."\"}";
      }
  }
}

?>
