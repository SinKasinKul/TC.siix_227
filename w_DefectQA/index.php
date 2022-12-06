<?php require_once('../header_main_qa.php');?>
<script type="text/javascript">
var Section;
</script>
<body>
<div id="Main">
    <ul>
        <li style="color: #006600; font-weight: bold;">Defect</li>
    </ul>
    <div>
          <?php require_once('html/index.html');?>
    </div>
</div>
<?php require_once('../footer.php');?>
</body>
<div id="successNoti"><div id='vTXTsuccess'></div></div>
<div id="failedNoti"><div id='vTXTFailed'></div></div>

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
