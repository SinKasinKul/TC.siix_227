<?php require_once('common.php');
$U = New Utility;
if($_FILES['file']['name'] != '')
{
  $date_now = date('YmdHis');
  $test = explode('.', $_FILES['file']['name']);
  $extension = end($test);
  $name = $_FILES['file']['name'];

  // Check filesize
  if($FILES['size'] > 500000){
    $U->outputJSON('File uploaded exceeds maximum upload size.');
  }

  // Check if the file exists
  if(file_exists('picture/CURRENT_CONDITION/' . $_FILES['file']['name'])){
    $U->outputJSON('File with that name already exists.');
  }
  else
  {
    $location = 'picture/CURRENT_CONDITION/'.$name;
    move_uploaded_file($_FILES['file']['tmp_name'], $location);
    $U->outputJSON('Upload complete.','Success');
  }
}
?>
