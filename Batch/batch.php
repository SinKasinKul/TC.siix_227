<?php

/**
 * Move_file
 */
class Batch
{

  public function BatchPSESFN()
  {
    date_default_timezone_set("Asia/Bangkok");
    $DATE = date('Ymd');
    $FNServer = "\\\\10.0.102.226\\rireki\RIREKI\\";
    $TCServer = "\\\\200.100.100.227\\TEST_MOVE_FN_PSES";

    $cmd = 'XCOPY '.$FNServer.'*'.$DATE.'.TXT '.$TCServer.' /Y';
    $cmd2 = 'net use \\10.0.102.226\\rireki\\RIREKI siix /USER:tc';
    exec($cmd2);
    echo "{\"result\":\"".exec($cmd)."\",\"Detail\":\"".$DATE."\"}";

  }
}
/*copy \\10.0.106.101\d$\Traceability_File_Output\20190530*.DAT D:\TEST_MOVE_LOG_PSES*/

$Batch = new Batch;
$Batch->BatchPSESFN();
 ?>
