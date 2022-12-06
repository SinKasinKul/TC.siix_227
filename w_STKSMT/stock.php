<?php require_once('../header_main_w.php');?>
<body>
  <div id='main_Tabs'>
      <ul>
          <li style="color: #006600; font-weight: bold;">Stock SMT ALL</li>
          <li style="color: #006600; font-weight: bold;">Stock SMT By Status</li>
      </ul>
      <div>
            <?php require_once('html/stock.html');?>
      </div>
      <div>
            <?php require_once('html/stockByStatus.html');?>
      </div>
  </div>
<?php require_once('footer.php');?>
</body>
<script type="text/javascript" src="js/widgets/stock.js"></script>
<script type="text/javascript" src="js/widgets/stockByStatus.js"></script>
