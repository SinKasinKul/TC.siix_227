<?php require_once('../header_main_w.php');?>
<body>

<div id='main_Tabs'>
    <ul>
        <li style="color: #006600; font-weight: bold;">Traceability System</li>
    </ul>
    <div>
          <?php require_once('html/smtb_nal.html');?>
    </div>
</div>
<?php require_once('../footer.php');?>
</body>
<script type="text/javascript" src="js/Utility.js"></script>
<script type="text/javascript" src="js/widgets/ChkUser.js"></script>
<script type="text/javascript" src="js/widgets/smtb.js"></script>
<script type="text/javascript" src="js/widgets/bar_smtb.js"></script>


<div id="passwordIT">
    <div id="windowHeader">
        <span>SIIX Log SAMT A Scan</span>
    </div>
    <div style="overflow: hidden;">
      <form id="frmPWIT">
      <table width="100%" height="100%" class="table table-striped table-bordered table-hover">
            <tr>
                 <!--td align="right" bgcolor="#CCCCCC" valign='center'>User:</td-->
                 <td><B>USER :: </B><input type="text" id='User' size="34"/></td>
            </tr>
            <!--tr>
                 <td align="right" bgcolor="#CCCCCC">W/R:</td>
                 <td><input type="text" id='QRcode' size="34"/></td>
             </tr-->
            <tr align='center'>
                <td valign='center'><input id="SMTBLogin" type="button" value="Enter" class="btn text-muted text-center btn-success" size="10"/></td>
            </tr>
      </table>
      </form>
        </div>
  </div>
