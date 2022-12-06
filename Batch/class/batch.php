<?php

/**
 * Move_file
 */
class Batch
{

  public function BatchPanasonic($value='')
  {
    date_default_timezone_set("Asia/Bangkok");
    $DATE = date('YmdHi');
    $TIME = date('Hi');
    $min = -10;
    $m = date('YmdHi',strtotime($min.' minutes',strtotime($DATE)));
    $varcmd = $m;
    $varcmdSub = substr($varcmd,0,(strlen($varcmd)-1));
    $SmtServer = "\\\\10.0.106.101\d$\Traceability_File_Output\\";
    $TCServer = "D:\TEST_MOVE_LOG_PSES";

    $cmd = 'XCOPY '.$SmtServer.$varcmdSub.'*.DAT '.$TCServer.' /Y';

    echo "{\"result\":\"".exec($cmd)."\",\"Detail\":\"".$varcmdSub."\"}";

  }

  public function BatchPSESFN()
  {
    date_default_timezone_set("Asia/Bangkok");
    $DATE = date('Ymd');
    $FNServer = "\\\\10.0.111.166\\TEST_MOVE_FN_PSES\\";//"\\\\10.0.102.226\\rireki\\RIREKI\\";
    $TCServer = "D:\TEST_MOVE_FN_PSES";

    $cmd = 'XCOPY '.$FNServer.'*'.strval($DATE).'.txt '.$TCServer.' /Y';

    echo "{\"result\":\"".exec($cmd)."\",\"Detail\":\"".$DATE."\",\"Detail2\":\"".exec('net use \\10.0.111.166\TEST_MOVE_FN_PSES kasin /USER:siixnet\kasin.kul')."\"}";
    exec($cmd);
  }

}
 ?>
