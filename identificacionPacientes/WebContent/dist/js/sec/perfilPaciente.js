var wsUri = "ws://localhost:40000/";

$(function() {

	$("#errorBD").hide();
	$("#resultHuellaOk").hide();
	$("#resultHuellaNo").hide();
	zebraWebSocket();

	$("#validarHuellas").click(function() {
		console.log("validar huella");
		$('#modalHuella').modal('show');
		$("#resultHuellaOk").hide();
		$("#resultHuellaNo").hide();
		$("#messageVerification").html("Obteniendo huella");
		doSend("action:digitalpersona:capture");
		// validarHuella() ;
	});

	$("#imprimirPulsera").click(function() {
		printZpl(zplString, 'listadoImpresoraPulsera');
	});
	$("#imprimirEtiquetas").click(function() {
		for (i = 0; i < $("#cantidadEtiquetas").val(); i++) {
			printZpl(zplStringEtiqueta, 'listadoImpresoraEtiqueta');
		}

	});
	$("#imprimirPulseraRN").click(function() {
		printZpl(zplStringBebe, 'listadoImpresoraPulsera');
	});

	$('#aceptarHuellaOk').click(function() {
		$("#modalHuella").modal('hide');
		return false;
	});

	$('#aceptarHuellaNoOk').click(function() {
		$("#modalHuella").modal('hide');
		return false;
	});

	$('#reintentarHuella').click(function() {
		console.log('reintentar huella');
		console.log("validar huella");
		$('#modalHuella').modal('show');
		$("#resultHuellaOk").hide();
		$("#resultHuellaNo").hide();
		$("#messageVerification").html("Obteniendo huella");
		doSend("action:digitalpersona:capture");
		return false;
	});

	/* DEMO FILTRADO IMAGEN */

//	binarized = imageVision({
//		source : $("#huellaDemo").prop("src")
//	}).appendTo('.applyThreshold', true);
//	binarized.threshold(125);
//	binarized.threshold(binarized.getAdaptiveThreshold());
//
//	var canvas = $('.applyThreshold').children()[0];
//	var ctx = canvas.getContext('2d');
//	ctx.getImageData(0, 0, 500, 550).data
//
//	canvas.toBlob(function(blob) {
//		console.log(blob);
//		binHuella = blob;
//	}, 'image/png');
	/* DEMO FILTRADO IMAGEN */
});

function listarImpresorasPulsera() {

	var obj = new Object();
	obj.action = "list";
	obj.tipo = "pulseras";
	var string = JSON.stringify(obj);

	doSend(string);
}
function listarImpresorasEtiquetas() {
	var obj = new Object();
	obj.action = "list";
	obj.tipo = "etiquetas";
	var string = JSON.stringify(obj);

	doSend(string);
}

function printZpl(zplFinal, dedonde) {
	var obj = new Object();
	obj.action = "print";
	obj.printer = $("#" + dedonde).find('option:selected').val();
	obj.zpl = zplFinal;
	var string = JSON.stringify(obj);

	doSend(string);
}

function zebraWebSocket() {

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
	websocket.send(message);
}

var timerID = 0; 

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
	listarImpresorasPulsera();
	listarImpresorasEtiquetas();
	keepAlive();
}

function onClose(evt) {
	$("#errorBD").show();

}

function validarHuella() {
	$("#messageVerification").html("Obteniendo huella");
	console.log(pacID);
	console.log($("#selectDedo").val());
	console.log(binHuella);
	$("#messageVerification").html("Procesando imagen");

	$("#messageVerification")
			.html("Enviando huella al servidor para verificar");
	var formData = new FormData();
	formData.append("id", pacID);
	//formData.append("nrohuella", $("#selectDedo").val());
	formData.append("finger", binHuella);

	$.ajax({
		url : './PostValidateFingerPrint',
		data : formData,
		processData : false,
		contentType : false,
		type : 'POST',
		success : function(data) {
			console.log(data.score);
			$("#messageVerification").html("Huella analizada");
			if (data.match) {

				$("#resultHuellaOk").show();
				$("#resultHuellaNo").hide();
			} else {
				$("#resultHuellaOk").hide();
				$("#resultHuellaNo").show();
			}
		}
	});

}

var prevEvent = '';
var streamedImage;
var binHuella;
function isJson(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}
function onMessage(evt) {
	if (typeof evt.data === 'string') {
		console.log('RESPONSE: ' + evt.data);
		prevEvent = evt.data;

		if (isJson(evt.data)) {
			var data = JSON.parse(evt.data);
			var select = '';
			if (data.tipo == 'pulseras') {
				select = 'listadoImpresoraPulsera';
			} else {
				select = 'listadoImpresoraEtiqueta';
			}
			var prts = data.printers;
			for ( var k in prts) {
				$('#' + select).append(
						$('<option></option>').val(prts[k]).html(prts[k]));
			}

		}else{
			if (prevEvent === 'action:snapshot:result:error') {
				$("#modalHuella").modal('hide');
				mostrarMensajeError("ERROR","ha ocurrido un error");
			}
			if (prevEvent === 'action:snapshot:result:cancel') {
				$("#modalHuella").modal('hide');
			}
		}
	} else {
		if (prevEvent === 'action:snapshot:result:fullimage') {
			streamedImage = URL.createObjectURL(evt.data);
			binHuella = evt.data;
			validarHuella();
		}
	}
}

function onError(evt) {
	$("#errorBD").show();

}