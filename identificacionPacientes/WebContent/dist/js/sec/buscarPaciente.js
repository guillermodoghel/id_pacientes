$(document).ready(function() {
    tabla = $('#example').DataTable( {
    	"processing": true,
    	"language": {
    		"sProcessing":     "Procesando...",
    		"sLengthMenu":     "Mostrar _MENU_ registros",
    		"sZeroRecords":    "No se encontraron resultados",
    		"sEmptyTable":     "Ningún dato disponible en esta tabla",
    		"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    		"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
    		"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
    		"sInfoPostFix":    "",
    		"sSearch":         "Buscar:",
    		"sUrl":            "",
    		"sInfoThousands":  ",",
    		"sLoadingRecords": "Cargando...",
    		"oPaginate": {
    			"sFirst":    "Primero",
    			"sLast":     "Último",
    			"sNext":     "Siguiente",
    			"sPrevious": "Anterior"
    		},
    		"oAria": {
    			"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
    			"sSortDescending": ": Activar para ordenar la columna de manera descendente"
    		}
    	},
        "serverSide": true,
        "ordering": false,
        "pageLength": 50,
        "ajax": "./GetPacientes",
        columns: [
            { title: " " },
            { title: "ID" },
            { title: "NHC" },
            { title: "DNI" },
            { title: "Nombre" },
            { title: "Apellido" },
            { title: "Fecha de Nacimiento" }
            
        ]
    } );
    $(".dataTables_filter").css("float","left");
    $(".dataTables_length").css("float","right");
    
} );