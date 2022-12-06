<?php require_once('../header_main_w.php');?>
<body>
  <div id="Main">
      <ul>
          <li style="color: #006600; font-weight: bold;">Stock</li>
          <li style="color: #006600; font-weight: bold;">Plan</li>
      </ul>
      <div>
            <?php require_once('html/stock.html');?>
      </div>
      <div>
            <?php require_once('html/Plan.html');?>
      </div>
  </div>
<?php require_once('footer.php');?>
</body>
<script type="text/javascript" src="js/widgets/stock.js"></script>
<script type="text/javascript" src="js/widgets/plan.js"></script>
<!--script type="text/javascript" src="js/widgets/bar_tran_final.js"></script-->
