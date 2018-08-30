var wsUri = "ws://localhost:40000";

function init() {
	kojakWebSocket();
}

function kojakWebSocket() {
	websocket = new WebSocket(wsUri);
	websocket.onopen = function(evt) {
		onOpen(evt)
	};
	websocket.onclose = function(evt) {
		onClose(evt)
	};
	websocket.onmessage = function(evt) {
		onMessage(evt)
	};
	websocket.onerror = function(evt) {
		onError(evt)
	};
}

function doSend(message) {
	if (message.includes('action:start')) {
		$('#huellaModal').modal('show');
	}

	console.log("SENT: " + message);
	websocket.send(message);
}
function keepAlive() { 
    var timeout = 20000;  
    if (websocket.readyState == websocket.OPEN) {  
    	websocket.send('ping');  
    }  
    timerId = setTimeout(keepAlive, timeout);  
}  
function cancelKeepAlive() {  
    if (timerId) {  
        clearTimeout(timerId);  
    }  
}

function onOpen(evt) {
	$("#errorBD").hide();
	console.log("CONNECTED");
	keepAlive();
}

function onClose(evt) {
	console.log("DISCONNECTED");
	$("#errorBD").show();
}
function onError(evt) {
	$("#errorBD").show();
	console.log(evt);
	console.log(evt.data);
}

var prevEvent = '';

var binmenIz;
var binanIz;
var binmedIz;
var bininIz;
var binpulIz;
var binpulDer;
var bininDer;
var binmedDer;
var binanDer;
var binmenDer;

function onMessage(evt) {
	if (typeof evt.data === 'string') {
		console.log('RESPONSE: ' + evt.data);
		if (evt.data == 'action:snapshot') {

		}
		if (evt.data.includes("error")) {
			console.log("error:" + evt.data);
		}
		if (evt.data.includes('action:snapshot:result')) {
			$('#huellaModal').modal('hide');
		}
		prevEvent = evt.data;

	} else {

		if (lastAtcionRequest === 'twoThumbs') {
			if (prevEvent === 'action:snapshot:result:segment:0') {
				var streamedImage = URL.createObjectURL(evt.data);
				$('#puIz').attr("src", streamedImage);
				binpulIz = evt.data;
			}
			if (prevEvent === 'action:snapshot:result:segment:1') {
				var streamedImage = URL.createObjectURL(evt.data);
				$('#puDer').attr("src", streamedImage);
				binpulDer = evt.data;
			}

		}
		if (lastAtcionRequest === 'leftFour') {
			if (prevEvent === 'action:snapshot:result:segment:0') {
				var streamedImage = URL.createObjectURL(evt.data);
				$('#menIz').attr("src", streamedImage);
				binmenIz = evt.data;
			}
			if (prevEvent === 'action:snapshot:result:segment:1') {
				var streamedImage = URL.createObjectURL(evt.data);
				$('#anIz').attr("src", streamedImage);
				binanIz = evt.data;
			}
			if (prevEvent === 'action:snapshot:result:segment:2') {
				var streamedImage = URL.createObjectURL(evt.data);
				$('#medIz').attr("src", streamedImage);
				binmedIz = evt.data;
			}
			if (prevEvent === 'action:snapshot:result:segment:3') {
				var streamedImage = URL.createObjectURL(evt.data);
				$('#inIz').attr("src", streamedImage);
				bininIz = evt.data;
			}

		}
		if (lastAtcionRequest === 'rightFour') {
			if (prevEvent === 'action:snapshot:result:segment:0') {
				var streamedImage = URL.createObjectURL(evt.data);
				$('#inDer').attr("src", streamedImage);
				bininDer = evt.data;
			}
			if (prevEvent === 'action:snapshot:result:segment:1') {
				var streamedImage = URL.createObjectURL(evt.data);
				$('#medDer').attr("src", streamedImage);
				binmedDer = evt.data;
			}
			if (prevEvent === 'action:snapshot:result:segment:2') {
				var streamedImage = URL.createObjectURL(evt.data);
				$('#anDer').attr("src", streamedImage);
				binanDer = evt.data;
			}
			if (prevEvent === 'action:snapshot:result:segment:3') {
				var streamedImage = URL.createObjectURL(evt.data);
				$('#menDer').attr("src", streamedImage);
				binmenDer = evt.data;
			}

		}
		if (lastAtcionRequest === 'dedo1'
				&& prevEvent === 'action:snapshot:result:segment:0') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#menIz').attr("src", streamedImage);
			binmenIz = evt.data;
		}
		if (lastAtcionRequest === 'dedo2'
				&& prevEvent === 'action:snapshot:result:segment:0') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#anIz').attr("src", streamedImage);
			binanIz = evt.data;
		}
		if (lastAtcionRequest === 'dedo3'
				&& prevEvent === 'action:snapshot:result:segment:0') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#medIz').attr("src", streamedImage);
			binmedIz = evt.data;
		}
		if (lastAtcionRequest === 'dedo4'
				&& prevEvent === 'action:snapshot:result:segment:0') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#inIz').attr("src", streamedImage);
			bininIz = evt.data;
		}
		if (lastAtcionRequest === 'dedo5'
				&& prevEvent === 'action:snapshot:result:segment:0') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#puIz').attr("src", streamedImage);
			binpulIz = evt.data;
		}
		if (lastAtcionRequest === 'dedo6'
				&& prevEvent === 'action:snapshot:result:segment:0') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#puDer').attr("src", streamedImage);
			binpulDer = evt.data;
		}
		if (lastAtcionRequest === 'dedo7'
				&& prevEvent === 'action:snapshot:result:segment:0') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#inDer').attr("src", streamedImage);
			bininDer = evt.data;
		}
		if (lastAtcionRequest === 'dedo8'
				&& prevEvent === 'action:snapshot:result:segment:0') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#medDer').attr("src", streamedImage);
			binmedDer = evt.data;
		}
		if (lastAtcionRequest === 'dedo9'
				&& prevEvent === 'action:snapshot:result:segment:0') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#anDer').attr("src", streamedImage);
			binanDer = evt.data;
		}
		if (lastAtcionRequest === 'dedo10'
				&& prevEvent === 'action:snapshot:result:segment:0') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#menDer').attr("src", streamedImage);
			binmenDer = evt.data;
		}
		if (prevEvent === 'action:snapshot:simpleframe') {
			var streamedImage = URL.createObjectURL(evt.data);
			var oldImage = $('#myCanvas').attr("src");
			$('#myCanvas').attr("src", streamedImage);
			URL.revokeObjectURL(oldImage);
		}
	}

}

function urltoblob(url) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'blob';
	xhr.onload = function(e) {
		if (this.status == 200) {
			return this.response;
			// myBlob is now the blob that the object URL pointed to.
		}
	};
}
$(function() {
	$("#errorBD").hide();
	init();
});

var lastAtcionRequest = '';

$('#btnIniciarTwoThumbs').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:twoThumbs');
	lastAtcionRequest = 'twoThumbs';

});

$('#btnIniciar4Left').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:leftFour');
	lastAtcionRequest = 'leftFour';

});
$('#btnIniciar4Right').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:rightFour');
	lastAtcionRequest = 'rightFour';
});

$('#btnIniciar1').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:oneThumb');
	lastAtcionRequest = 'dedo1';
});
$('#btnIniciar2').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:oneThumb');
	lastAtcionRequest = 'dedo2';
});
$('#btnIniciar3').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:oneThumb');
	lastAtcionRequest = 'dedo3';
});
$('#btnIniciar4').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:oneThumb');
	lastAtcionRequest = 'dedo4';
});
$('#btnIniciar5').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:oneThumb');
	lastAtcionRequest = 'dedo5';
});
$('#btnIniciar6').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:oneThumb');
	lastAtcionRequest = 'dedo6';
});
$('#btnIniciar7').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:oneThumb');
	lastAtcionRequest = 'dedo7';
});
$('#btnIniciar8').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:oneThumb');
	lastAtcionRequest = 'dedo8';
});
$('#btnIniciar9').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:oneThumb');
	lastAtcionRequest = 'dedo9';
});
$('#btnIniciar10').click(function() {
	$('#myCanvas').attr("src", "../dist/img/loading.gif");
	doSend('action:start:oneThumb');
	lastAtcionRequest = 'dedo10';
});

$('#canclarCaptura').click(function() {
	doSend('action:stop');
	$('#huellaModal').modal('hide');
});

$("#guardarHuellas").click(
		function() {

			var formData = new FormData();
			var scans = 0;
			if (typeof $("#menIz").attr("src") !== "undefined") {
				formData.append("menIz", binmenIz);
				scans =scans +1;
			}

			if (typeof $("#anIz").attr("src") !== "undefined") {
				formData.append("anIz", binanIz);
				scans =scans +1;
			}
			if (typeof $("#medIz").attr("src") !== "undefined") {
				formData.append("medIz", binmedIz);
				scans =scans +1;
			}
			if (typeof $("#inIz").attr("src") !== "undefined") {
				formData.append("inIz", bininIz);
				scans =scans +1;
			}
			if (typeof $("#puIz").attr("src") !== "undefined") {
				formData.append("puIz", binpulIz);
				scans =scans +1;
			}
			if (typeof $("#puDer").attr("src") !== "undefined") {
				formData.append("puDer", binpulDer);
				scans =scans +1;
			}
			if (typeof $("#inDer").attr("src") !== "undefined") {
				formData.append("inDer", bininDer);
				scans =scans +1;
			}
			if (typeof $("#medDer").attr("src") !== "undefined") {
				formData.append("medDer", binmedDer);
				scans =scans +1;
			}
			if (typeof $("#anDer").attr("src") !== "undefined") {
				formData.append("anDer", binanDer);
				scans = scans+1;
			}
			if (typeof $("#menDer").attr("src") !== "undefined") {
				formData.append("menDer", binmenDer);
				scans = scans+1;
			}
			formData.append("id", id);
			formData.append("txtobservaciones", $("#txtobservaciones").val());
			var faltan = 10-scans;
			if (faltan == 0) {
				mostrarMensajeInfo("Guardando huellas..","");
				$.ajax({
					url : './PostFingerPrints',
					data : formData,
					processData : false,
					contentType : false,
					type : 'POST',
					success : function(data) {
						window.location = '?p=pages/perfilPaciente.jsp?id='
								+ id;

					}
				});
			} else {
				
				if (confirm("Faltan tomar " + faltan
						+ " huella(s). Se reemplazaran las huellas existentes. Desea guardar de todos modos? ")) {
					formData.append("id", id);
					formData.append("txtobservaciones", $("#txtobservaciones")
							.val());

					mostrarMensajeInfo("Guardando huellas..","");

					$.ajax({
						url : './PostFingerPrints',
						data : formData,
						processData : false,
						contentType : false,
						type : 'POST',
						success : function(data) {
							window.location = '?p=pages/perfilPaciente.jsp?id='
									+ id;

						}
					});
					
				}
				;
			}

		});