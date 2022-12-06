<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Payment Demo</title>
</head>
<body>
<form id="payment-form" action="https://sandbox-cdnv3.chillpay.co/Payment/" method="post" role="form" class="form-horizontal">
<modernpay:widget id="modernpay-widget-container"
data-merchantid="M033476" data-amount="4000" data-orderno="00000001" data-customerid=<?=$_GET['customerid']?> 
data-mobileno="0882722205" data-clientip="203.146.110.52" data-routeno="1" data-currency="764"
data-description="Test Payment" data-apikey="mdEL9Oc2jJTusMygPDp5ZeXGto0VzatRHpuAOajfHDvqQKoYmLWjHB8Qp7FqD7cp">
</modernpay:widget>
<button type="submit" id="btnSubmit" value="Submit" class="btn">Payment</button>
</form>
<script async src="https://sandbox-cdnv3.chillpay.co/js/widgets.js?v=1.00" charset="utf-8"></script>
</body>
</html>
