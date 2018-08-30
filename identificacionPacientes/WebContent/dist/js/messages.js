function mostrarMensajeAlerta(titulo, mensaje){
	mostrarMensaje(titulo, mensaje,"warning");
}

function mostrarMensajeExito(titulo, mensaje){
	mostrarMensaje(titulo, mensaje,"success");
}

function mostrarMensajeInfo(titulo, mensaje){
	mostrarMensaje(titulo, mensaje,"info");
}

function mostrarMensajeError(titulo, mensaje){
	mostrarMensaje(titulo, mensaje,"error");
}

function mostrarMensaje(titulo, mensaje, tipoMensaje) {
	$('html, body').scrollTop(0);
	$.get("./messages/"+tipoMensaje+"Message.jsp").done(function(data) {
		var messageid = "errormessage" + makeid();

		data = data.replace("$titulo", titulo);
		data = data.replace("$mensaje", mensaje);
		data = data.replace("errormessage", messageid);

		$(".navbar-header").before(data);

		$("#" + messageid).alert();
		$("#" + messageid).fadeTo(5000, 500).slideUp(2500, function() {
			$("#" + messageid).alert('close');
			$("#" + messageid).remove();
		});
	});
}


function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 16; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}