$("#btnLogin").click(function() {
	mostrarMensajeInfo("Ingresando..","");
	$.post("Login", $("#formLogin").serialize(), function() {
	}).done(function() {
		window.location.href = './sec';
	}).fail(function(e) {
		mostrarMensajeError("Error "+e.responseJSON.status, e.responseJSON.reason);
	});
});
$(function() {
	$('form').each(function() {
		$(this).find('input').keypress(function(e) {
			// Enter pressed?
			if (e.which == 10 || e.which == 13) {
				mostrarMensajeInfo("Ingresando..","");
				$.post("Login", $("#formLogin").serialize(), function() {
				}).done(function() {
					window.location.href = './sec';
				}).fail(function(e) {
					mostrarMensajeError("Error "+e.responseJSON.status, e.responseJSON.reason);
				});
			}
		});
	});
});