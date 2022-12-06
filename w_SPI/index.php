<?php require_once('../header_main_w.php');?>
<body>
<div id='main_Tabs'>
          <?php require_once('html/main.html');?>
</div>
<?php require_once('../footer.php');?>
</body>
<div id="Notification">
  <div>Message: <span id="MessageNoti" style="font-weight: bold;"></span></div>
</div>

<div id="EngLogin">
    <div id="windowHeader">
        <span>Defect QA</span>
    </div>
    <div style="overflow: hidden;">

      <table width="100%" height="100%" class="table table-striped table-bordered table-hover">
            <tr>
                 <td align="right" bgcolor="#CCCCCC" valign='center'><B>EmpCode:</B></td>
                 <td><input type="password" id='User' size="34"/></td>
            </tr>
      </table>

    </div>
  </div>

<script type="text/javascript" src="js/Utility.js"></script>
<script type="text/javascript" src="js/widgets/spi_confirm.js"></script>
<!--script type="text/javascript" src="js/widgets/bar_tran_final.js"></script-->
