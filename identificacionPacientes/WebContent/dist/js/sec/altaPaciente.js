window.addEventListener("load", init, false);

$(function() {

	$("#errorBD").hide();
	// Elements for taking the snapshot
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var video = document.getElementById('video');
	var tipoFoto = "";

	var chkPaciente = "DNI";

	if (modo === 'EDITAR') {
		$("#dni").val(pacDNI);
		$("#nhc").val(pacnhc);
		$("#nombre").val(pacNombre);
		$("#apellido").val(pacApellido);
		$("#txtFechaNac").val(pacFechNac);
		$("#txtobservaciones").val(obvservacionesalta);
		$("#selectDedo").val(huellaAdmisionTipo);
		$("input[name=chkPaciente][value=" + tipopac + "]").prop("checked",
				true);
		if ($("input[name=chkPaciente]:checked").val() === "DNI") {
			chkPaciente = "DNI";
			$("#divBotonFotoDNI").show()
			$("input[type=text]").prop('disabled', false);
		}
		if ($("input[name=chkPaciente]:checked").val() === "NODNI") {
			chkPaciente = "NODNI";
			$("#divBotonFotoDNI").hide()
			$("input[type=text]").prop('disabled', false);
		}
		if ($("input[name=chkPaciente]:checked").val() === "NN") {
			chkPaciente = "NN";
			$("#divBotonFotoDNI").hide()
			$("input[type=text]").prop('disabled', true);
		}

	}

	$("#dni").keypress(function() {
		if ($("#dni").val().length % 2 == 1) {
			$("#lupitaDNI").addClass("mirror")
			$("#spanLupita").css("background-color", "#d9edf7");
		} else {
			$("#lupitaDNI").removeClass("mirror")
			$("#spanLupita").css("background-color", "#dff0d8");
		}
	});

	$('#dni').keyup(_.debounce(logicaInputDNI, 1500));
	function logicaInputDNI() {
		if ($("#dni").val().length >= 3) {
			mostrarMensajeInfo(
					"Buscando DNI. De encontrarse en la base, sera redirigido automaticamente al perfil del paciente.",
					"")
			$('#loadingEvent').show();
			jQuery.ajax({
				url : './GetExisteDNI?dni=' + $("#dni").val(),
				success : function(html) {
					if (html == "-1") {
						mostrarMensajeAlerta(
								"El DNI NO fue encontrado en la base de datos",
								"Puede continuar con el alta",
								" Redirigiendo hacia el perfil")
						$('#loadingEvent').hide();
					} else {
						mostrarMensajeExito("DNI ENCONTRADO!",
								" Redirigiendo hacia el perfil")
						window.location = '?p=pages/perfilPaciente.jsp?id='
								+ html;

					}
				}
			});
		}
	}

	$('input[type="radio"]').on('click change', function(e) {
		if ($("input[name=chkPaciente]:checked").val() === "DNI") {
			chkPaciente = "DNI";
			$("#divBotonFotoDNI").show()
			$("input[type=text]").prop('disabled', false);
			$("input[type=date]").prop('disabled', false);
			$("input[type=number]").prop('disabled', false);
		}
		if ($("input[name=chkPaciente]:checked").val() === "NODNI") {
			chkPaciente = "NODNI";
			$("#divBotonFotoDNI").hide()
			$("input[type=text]").prop('disabled', false);
			$("input[type=date]").prop('disabled', false);
			$("input[type=number]").prop('disabled', false);
		}
		if ($("input[name=chkPaciente]:checked").val() === "NN") {
			chkPaciente = "NN";
			$("#divBotonFotoDNI").hide()
			$("input[type=text]").prop('disabled', true);
			$("input[type=date]").prop('disabled', true);
			$("input[type=number]").prop('disabled', true);
		}
	});

	function validar() {
		var strError = "";
		if (chkPaciente === "DNI") {
			if ((!$.isNumeric($("#dni").val()))|| $("#dni").val()=="") {
				strError = strError.concat('<p>DNI invalido');
			}
			if (modo != 'EDITAR') {

				jQuery.ajax({
					url : './GetExisteDNI?dni=' + $("#dni").val(),
					success : function(html) {
						if (html != "-1") {
							strError = strError.concat('<p>DNI Existente.');
						}
					},
				});

			}

			if ($("#nombre").val() == '') {
				strError = strError.concat('<p>Nombre invalido');
			}
			if ($("#apellido").val() == '') {
				strError = strError.concat('<p>Apellido invalido');
			}
			if ($("#txtFechaNac").val() == '') {
				strError = strError
						.concat('<p>Fecha nacimiento invalida/ Formato DD/MM/AAAA');
			}
			if (typeof $("#fotohumano").attr("src") == "undefined"
					&& modoFotografia) {
				strError = strError.concat('<p>Tome una foto al paciente');
			}
			if (typeof $("#fotodocumento").attr("src") == "undefined"
					&& modoFotografia) {
				strError = strError.concat('<p>Tome una foto al documento');
			}
			if (typeof $("#huellaImg").attr("src") == "undefined"
					&& modoBiometrico) {
				strError = strError.concat('<p>Tome una huella');
			}

		}
		if (chkPaciente === "NODNI") {
			if ($("#nombre").val() != '') {
				if (modo != 'EDITAR') {

					jQuery
							.ajax({
								url : './GetExisteDNI?dni=' + $("#dni").val(),
								success : function(html) {
									if (html != "-1") {
										strError = strError
												.concat('<p>DNI Existente.');
									}
								},
							});

				}
			}
			
			if (typeof $("#fotohumano").attr("src") == "undefined"
					&& modoFotografia) {
				strError = strError.concat('<p>Tome una foto al paciente');
			}
			if (typeof $("#huellaImg").attr("src") == "undefined"
					&& modoBiometrico) {
				strError = strError.concat('<p>Tome una huella');
			}

		}
		if (chkPaciente === "NN") {
//			if (typeof $("#fotohumano").attr("src") == "undefined"
//					&& modoFotografia) {
//				strError = strError.concat('<p>Tome una foto al paciente');
//			}
//			if (typeof $("#huellaImg").attr("src") == "undefined"
//					&& modoBiometrico) {
//				strError = strError.concat('<p>Tome una huella');
//			}
		}

		if (strError != "") {
			mostrarMensajeError(
					'Complete correctamente la informacion del paciente',
					strError);
			return false;
		}
		return true;
	}

	$("#darAlta")
			.click(
					function() {

						if (validar()) {
							mostrarMensajeInfo("Dando resgistro de alta..", "");
							var formData = new FormData();

							formData.append("esDesconocido", $(
									"input[name=chkPaciente]:checked").val());
							formData.append("dni", $("#dni").val());
							formData.append("nombre", $("#nombre").val());
							formData.append("apellido", $("#apellido").val());
							formData.append("txtFechaNac", $("#txtFechaNac")
									.val());

							formData.append("nhc", $("#nhc").val());
							formData.append("txtobservaciones", $(
									"#txtobservaciones").val());

							if (typeof $("#fotohumano").attr("src") !== "undefined") {
								formData.append("humano", dataURItoBlob($(
										"#fotohumano").attr("src")));
							}

							if (typeof $("#fotodocumento").attr("src") !== "undefined") {
								formData.append("documento", dataURItoBlob($(
										"#fotodocumento").attr("src")));
							}

							if (typeof $("#huellaImg").attr("src") !== "undefined") {
								if(typeof binHuellaA !== "undefined"){
									formData.append("huella", binHuellaA);
								}
								if(typeof binHuellaB !== "undefined"){
									formData.append("huellaB", binHuellaB);
								}
								if(typeof binHuellaC !== "undefined"){
									formData.append("huellaC", binHuellaC);
								}
								if(typeof binHuellaD !== "undefined"){
									formData.append("huellaD", binHuellaD);
								}
								formData.append("huellaDedo", $('#selectDedo')
										.val());
								formData.append("huellaImage", dataURItoBlob($("#huellaImg").attr('src')));
							}

							if (modo == 'EDITAR') {
								formData.append("id", id);
							}

							$
									.ajax({
										url : './PostPaciente',
										data : formData,
										processData : false,
										contentType : false,
										type : 'POST',
										success : function(data) {
											window.location = '?p=pages/perfilPaciente.jsp?id='
													+ data;

										}
									});
						}

					});

	$("#guardarFoto").click(function() {
		var image = new Image();
		var nombreTag = "foto" + tipoFoto;
		image.id = nombreTag
		image.src = canvas.toDataURL();
		image.style = "width:100%;cursor: zoom-in;";
		if (document.getElementById(nombreTag) != null) {
			$("#" + nombreTag).remove();

		}
		document.getElementById(tipoFoto).appendChild(image);
		
		$('img').on('click', function() {
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
		});
		
		$('#modalFoto').modal('hide');
	});

	$("#btnTomarFotoHumano").click(function() {
		tipoFoto = "humano";
		$('#modalFoto').modal('show');
		$("#canvas").hide();
		$("#video").show();
		$("#cameraIcon").addClass("fa-camera");
		$("#cameraIcon").removeClass("fa-undo");
		$("#snap").removeClass("btn-warning");
		$("#snap").addClass("btn-success");
		// Get access to the camera!
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			// Not adding `{ audio: true }` since we only want video now
			navigator.mediaDevices.getUserMedia({
				video : true
			}).then(function(stream) {
				video.src = window.URL.createObjectURL(stream);
				video.play();
			});
		}
	});



	$("#btnTomarFotoDocumento").click(function() {
		tipoFoto = "documento";
		$("#cameraIcon").addClass("fa-camera");
		$("#cameraIcon").removeClass("fa-undo");
		$("#snap").removeClass("btn-warning");
		$("#snap").addClass("btn-success");
		$('#modalFoto').modal('show');
		$("#canvas").hide();
		$("#video").show();
		// Get access to the camera!
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			// Not adding `{ audio: true }` since we only want video now
			var hdConstraints = {
					video: { width: 320, height: 240 }
					};
			navigator.mediaDevices.getUserMedia(hdConstraints).then(function(stream) {
				video.src = window.URL.createObjectURL(stream);
				video.play();
			});
		}
	});

	var cameraStatus = false;
	document.getElementById("snap").addEventListener("click", function() {
		if (!cameraStatus) {
			context.drawImage(video, 0, 0, 320, 240);
			$("#video").hide();
			$("#canvas").show();
			$("#cameraIcon").removeClass("fa-camera");
			$("#cameraIcon").addClass("fa-undo");
			$("#snap").removeClass("btn-success");
			$("#snap").addClass("btn-warning");
			cameraStatus = !cameraStatus;
		} else {
			$("#video").show();
			$("#canvas").hide();
			$("#cameraIcon").addClass("fa-camera");
			$("#cameraIcon").removeClass("fa-undo");
			$("#snap").removeClass("btn-warning");
			$("#snap").addClass("btn-success");

			cameraStatus = !cameraStatus;
		}

	});

	$('#chkPaciente').change(function() {
		if ($(this).is(':checked')) {
			$("#dni").val("");
			$("#apellido").val("");
			$("#nombre").val("");
			$("#txtFechaNac").val("");
			$("#dni").attr('disabled', 'disabled');
			$("#apellido").attr('disabled', 'disabled');
			$("#nombre").attr('disabled', 'disabled');
			$("#txtFechaNac").attr('disabled', 'disabled');
			$("#nhc").attr('disabled', 'disabled');
		} else {
			$("#dni").removeAttr('disabled');
			$("#apellido").removeAttr('disabled');
			$("#nombre").removeAttr('disabled');
			$("#txtFechaNac").removeAttr('disabled');
			$("#nhc").removeAttr('disabled');
		}
	});

	$('#fechaNac').datetimepicker({
		locale : 'es',

		format : 'DD/MM/YYYY'

	});

});

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
	console.log("SENT: " + message);
	websocket.send(message);
}

var timeout;
function onOpen(evt) {
	$('#connectionStatus').css({
		'color' : 'green'
	});
	console.log("CONNECTED");
	$("#errorBD").hide();
	timeout = Math.floor(Date.now() / 1000);
	keepAlive();
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

function onClose(evt) {
	$('#connectionStatus').css({
		'color' : 'yellow'
	});
	console.log("DISCONNECTED");
	$("#errorBD").show();
	 console.log((Math.floor(Date.now() / 1000))-timeout);
	 console.log(Math.floor(Date.now() / 1000));
	
}

function onError(evt) {
	$('#connectionStatus').css({
		'color' : 'red'
	});
	console.log(evt);
	console.log(evt.data);
	$("#errorBD").show();

}
var prevEvent = '';
var binHuellaA;
var binHuellaB;
var binHuellaC;
var binHuellaD;

$("#btnTomarHuellaHumano").click(function() {
	$('#modalHuella').modal('show');
	
	doSend("action:digitalpersona:capture:enroll");
});

function onMessage(evt) {
	if (typeof evt.data === 'string') {
		console.log('RESPONSE: ' + evt.data);
		prevEvent = evt.data;
		if (prevEvent === 'action:snapshot:result:error') {
			$('#modalHuella').modal('hide');
			mostrarMensajeError("ERROR","ha ocurrido un error.");
		}
		if (prevEvent === 'action:snapshot:result:cancel') {
			$('#huellaImg').attr("src", "");
			$('#huellaImgDos').attr("src", "");
			$('#huellaImgTres').attr("src", "");
			$('#huellaImgCuatro').attr("src", "");
			$('#modalHuella').modal('hide');
		}
	} else {
		if (prevEvent === 'action:snapshot:result:fullimage:1') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#huellaImg').attr("src", streamedImage);
			binHuellaA = evt.data;
		}
		if (prevEvent === 'action:snapshot:result:fullimage:2') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#huellaImgDos').attr("src", streamedImage);
			binHuellaB = evt.data;
		}
		if (prevEvent === 'action:snapshot:result:fullimage:3') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#huellaImgTres').attr("src", streamedImage);
			binHuellaC = evt.data;
		}
		if (prevEvent === 'action:snapshot:result:fullimage:4') {
			var streamedImage = URL.createObjectURL(evt.data);
			$('#huellaImgCuatro').attr("src", streamedImage);
			binHuellaD = evt.data;
			$('#modalHuella').modal('hide');
		}
	}

}
