<?php

/**
 * Move_file
 */
class Batch
{

  public function FunctionName($value='')
  {
    date_default_timezone_set("Asia/Bangkok");
    $DATE = date('Ymd');
    $TIME = date('Hi');
    $m = date('Hi',strtotime('-1 minutes',strtotime($TIME)));
    $varcmd = $DATE.$m;
  
    $cmd = 'XCOPY \\\\10.0.106.101\d$\Traceability_File_Output\\'.$varcmd.'*.DAT D:\TEST_MOVE_LOG_PSES\NewFolder';

    echo exec($cmd);
  }
}
/*copy \\10.0.106.101\d$\Traceability_File_Output\20190530*.DAT D:\TEST_MOVE_LOG_PSES*/
 ?>
