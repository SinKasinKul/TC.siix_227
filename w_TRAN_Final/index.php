<?php require_once('../header_main_w.php');?>
<body>

<div id='main_Tabs'>
    <ul>
        <li style="color: #006600; font-weight: bold;">Traceability System</li>
    </ul>
    <div>
          <?php require_once('html/tran_fianl.html');?>
    </div>
</div>
<?php require_once('../footer.php');?>
</body>
<script type="text/javascript" src="js/Utility.js"></script>
<script type="text/javascript" src="js/widgets/ChkUser.js"></script>
<script type="text/javascript" src="js/widgets/tran_final.js"></script>
<!--script type="text/javascript" src="js/widgets/bar_tran_final.js"></script-->


<div id="passwordIT">
    <div id="windowHeader">
        <span>Trantron Final Scan</span>
    </div>
    <div style="overflow: hidden;">
      <form id="frmPWIT">
      <table width="100%" height="100%" class="table table-striped table-bordered table-hover">
            <tr>
                 <td align="right" bgcolor="#CCCCCC" valign='center'><B>User:</B></td>
                 <td><input type="text" id='User' size="34"/></td>
            </tr>
            <tr>
                 <td align="right" bgcolor="#CCCCCC"><B>W/R:</B></td>
                 <td><input type="text" id='WRctrl' size="34"/></td>
             </tr>
      </table>
      </form>
        </div>
  </div>
