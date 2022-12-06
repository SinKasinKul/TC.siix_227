<?php require_once('common.php');?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="../favicon/Vexels-Office-Document-search.ico">
<title>SIIX Innovation</title>
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="" name="description" />
  <meta content="" name="author" />

<script type="text/javascript" src="../scripts/jquery-1.11.1.min.js"></script>
<!--bootstrap -->
<link rel="stylesheet" href="../assets/plugins/bootstrap/css/bootstrap.css" />
<link rel="stylesheet" href="../assets/css/main.css" />
<link rel="stylesheet" href="../assets/css/theme.css" />
<link rel="stylesheet" href="../assets/css/MoneAdmin.css" />
<link rel="stylesheet" href="../assets/plugins/Font-Awesome/css/font-awesome.css" />
<link href="../assets/css/jquery-ui.css" rel="stylesheet" />

<link rel="stylesheet" href="../assets/plugins/uniform/themes/default/css/uniform.default.css" />
<link rel="stylesheet" href="../assets/plugins/inputlimiter/jquery.inputlimiter.1.0.css" />
<link rel="stylesheet" href="../assets/plugins/chosen/chosen.min.css" />
<link rel="stylesheet" href="../assets/plugins/colorpicker/css/colorpicker.css" />
<link rel="stylesheet" href="../assets/plugins/tagsinput/jquery.tagsinput.css" />
<link rel="stylesheet" href="../assets/plugins/daterangepicker/daterangepicker-bs3.css" />
<link rel="stylesheet" href="../assets/plugins/datepicker/css/datepicker.css" />
<link rel="stylesheet" href="../assets/plugins/timepicker/css/bootstrap-timepicker.min.css" />
<link rel="stylesheet" href="../assets/plugins/switch/static/stylesheets/bootstrap-switch.css" />
<!--End bootstrap -->

<!--jqwidgets -->
    <link rel="stylesheet" href="../jqwidgets/styles/jqx.base.css" type="text/css" />
    <link rel="stylesheet" href="../jqwidgets/styles/jqx.light.css" type="text/css" />
    <link rel="stylesheet" href="../jqwidgets/styles/jqx.web.css" type="text/css" />
    <link rel="stylesheet" href="../jqwidgets/styles/jqx.arctic.css" type="text/css" />
    <link rel="stylesheet" href="../jqwidgets/styles/jqx.fresh.css" type="text/css" />
    <link rel="stylesheet" href="../jqwidgets/styles/jqx.orange.css" type="text/css" />
    <link rel="stylesheet" href="../jqwidgets/styles/jqx.darkblue.css" type="text/css" />
    <link rel="stylesheet" href="../jqwidgets/styles/jqx.energyblue.css" type="text/css" />
    <link rel="stylesheet" href="../jqwidgets/styles/jqx.ui-sunny.css" type="text/css" />
    <link rel="stylesheet" href="../jqwidgets/styles/jqx.ui-redmond.css" type="text/css" />
    <script type="text/javascript" src="../jqwidgets/jqxcore.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxdata.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxdatatable.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxbuttons.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxscrollbar.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxlistbox.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxdropdownlist.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxmenu.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxinput.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxpasswordinput.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxgrid.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxgrid.columnsresize.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxgrid.filter.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxgrid.pager.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxgrid.sort.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxgrid.selection.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxpanel.js"></script>
    <script type="text/javascript" src="../jqwidgets/globalization/globalize.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxcalendar.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxdatetimeinput.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxcheckbox.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxgrid.aggregates.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxwindow.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxnotification.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxtabs.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxcombobox.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxloader.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxnumberinput.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxtextarea.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxchart.core.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxprogressbar.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxdraw.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxvalidator.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxdata.export.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxgrid.export.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxmaskedinput.js"></script>
    <script type="text/javascript" src="../jqwidgets/jqxchart.rangeselector.js"></script>
    <script type="text/javascript">
        var theme = 'fresh';
    </script>
<!--End ../jqwidgets -->

<!--My css -->
<link rel="stylesheet" href="../css/My.css" type="text/css" />
<!--link rel="stylesheet" href="../css/font-awesome.min.css" type="text/css" --/>
<!--End My css -->

</head>

<body id="body">
<table width="100%">
  <tr>
    <tr>
    <td width="50%" bgcolor="#0099FF" class="whileXXL" align="right" >&nbsp;&nbsp;&nbsp;Inspection Record</td>
    <td width="50%" bgcolor="#0099FF" class="white18" align="right" >&nbsp;&nbsp;&nbsp;<?=HEADER_NAME_II?></td>
    <!--login_page-->
  </tr>
  </tr>
</table>
<!--LOG OUT-->
<script type="text/javascript" src="../js/logout.js"></script>
<!--END LOG OUT-->
</body>
</html>
