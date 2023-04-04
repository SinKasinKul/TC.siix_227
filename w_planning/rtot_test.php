<!DOCTYPE html>
<html lang="en">

<?php require_once('html/Header.html');?>

<body>

    <?php require_once('html/Preloader.html');?>


    <!--**********************************
        Main wrapper start
    ***********************************-->
    <div id="main-wrapper">

        <?php require_once('html/SubHerder.html');?>
        <?php require_once('html/Sidebar.html');?>

        <!--**********************************
            Main page Start
        ***********************************-->
        <?php
          if($_SESSION["UserName"] != ''){
            require_once('html/rtot/test.html');
          }
          else{
            require_once('html/pagelogin.html');
          }
        ?>
        <!--**********************************
            Main page end
        ***********************************-->

        <?php require_once('html/Footer.html');?>

    </div>
    <!--**********************************
        Main wrapper end
    ***********************************-->

</body>

</html>
