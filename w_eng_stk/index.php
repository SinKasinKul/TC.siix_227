<?php require_once('../header_main_w.php');?>
<script type="text/javascript">
var Section;
</script>
<body>
<div id="Main">
    <ul>
        <li style="color: #006600; font-weight: bold;">Stock Engineer</li>
        <li style="color: #006600; font-weight: bold;">Master</li>
        <li style="color: #006600; font-weight: bold;">History</li>
        <li style="color: #006600; font-weight: bold;">Auto Alter Order</li>
        <li style="color: #006600; font-weight: bold;">Summary by month</li>
    </ul>
    <div>
          <?php require_once('html/index.html');?>
    </div>
    <div>
          <?php require_once('html/Master.html');?>
    </div>
    <div>
          <?php require_once('html/History.html');?>
    </div>
    <div>
          <?php require_once('html/Order.html');?>
    </div>
    <div>
          <?php require_once('html/Summary.html');?>
    </div>
</div>
<?php require_once('../footer.php');?>
</body>
<div id="successNoti"><div id='vTXTsuccess'></div></div>
<div id="failedNoti"><div id='vTXTFailed'></div></div>

<div id="EngLogin">
    <div id="windowHeader">
        <span>Stock Spare Parts</span>
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
<script type="text/javascript" src="js/widgets/History.js"></script>
<script type="text/javascript" src="js/widgets/MainStock.js"></script>
<script type="text/javascript" src="js/widgets/TypeMaster.js"></script>
<script type="text/javascript" src="js/widgets/ItemMaster.js"></script>
<script type="text/javascript" src="js/widgets/Order.js"></script>
<script type="text/javascript" src="js/widgets/Summary.js"></script>
