<div id="page-wrapper">

	<div
		style="display: flex; justify-content: center; align-items: center; /* position: absolute; */ /* bottom: 0; */ /* width: 100%; */ height: 550px;">

		<div class="alert alert-success" style="width: 450px; display: flex;">
			<i class="fa fa-qrcode fa-5"
				style="font-size: 70px; padding-right: 10px; padding-top: 10px;"></i>
			<h1 class="blink_me" style="padding-right: 10px; padding-top: 0px;">Escanee la pulsera..</h1>
		</div>

	</div>
</div>


<script>
	function blinker() {
		$('.blink_me').fadeOut(500);
		$('.blink_me').fadeIn(500);
	}

	setInterval(blinker, 1000);
</script>