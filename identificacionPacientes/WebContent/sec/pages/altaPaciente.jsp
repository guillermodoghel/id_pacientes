<%@page import="com.teknotech.idpacientes.utils.PropertyLoader"%>
<%@page import="com.teknotech.idpacientes.dao.GenericDAO"%>
<%@page import="org.apache.commons.codec.binary.Base64"%>
<%@page import="java.util.HashMap"%>

<!-- REFACTORIZAR ESTO -->
<script type="text/javascript">
	var id = '';
	var modo = '';
	var modoBiometrico =
		<%=PropertyLoader.getInstance().getBiometricsMode()%>
			;
	var modoFotografia =<%=PropertyLoader.getInstance().getBiometricsMode()%>;
</script>
<%
	boolean modoBiometrico = PropertyLoader.getInstance().getBiometricsMode();
	boolean modoFotografia = PropertyLoader.getInstance().getPhotoMode();
	boolean editar = false;
	String imageBase64humano = "";
	String imageBase64documento = "";
	String imageHuellaAdmision = "";
	String imageHuellaAdmisionTipo = "";
	HashMap<String, Object> data = new HashMap();
	if (request.getParameter("id") != null) {
		data = new GenericDAO().getPaciente((String) request.getParameter("id"));
		if (data == null) {
%>
Id invalido.

<%
	return;
		}
		imageBase64humano = new String(Base64.encodeBase64((byte[]) data.get("fotohumano")));
		imageBase64documento = new String(Base64.encodeBase64((byte[]) data.get("fotodocumento")));
		imageHuellaAdmision = new String(Base64.encodeBase64((byte[]) data.get("huellaAdmision")));
		imageHuellaAdmisionTipo = (String) data.get("huellaAdmisionTipo");
		String esdesconocido = (String) data.get("desconocido");
		editar = true;
%>

<script type="text/javascript">
	id = <%=request.getParameter("id")%>;
	modo = 'EDITAR';
	if(modo==='EDITAR'){
		var pacnhc = '<%=(String) data.get("nhc")%>';
		var pacDNI = '<%=(String) data.get("dni")%>';
		var pacNombre= '<%=(String) data.get("nombre")%>';
		var pacApellido ='<%=(String) data.get("apellido")%>';
		var pacFechNac = '<%=(String) data.get("fechanac")%>';
		var obvservacionesalta =  '<%=(String) data.get("obvservacionesalta")%>';
		var tipopac = '<%=esdesconocido%>';
		var huellaAdmisionTipo = '<%=imageHuellaAdmisionTipo%>';
		
	}
</script>

<%
	}
%>


<div id="page-wrapper">
	<div class="row">
		<div class="col-lg-12">
			<div id="errorBD">
				<br>
				<div class="alert alert-danger"
					style="text-align: center; visibility: hide;">
					ERROR DE COMUNICACION CON EL BROWSER DRIVER. ASEGURESE QUE ESTE EN
					EJECUCION Y <a href="javascript:location.reload();"
						class="alert-link">PRESIONE F5</a>.
				</div>
			</div>
		</div>
	</div>
	<div class="row page-header" style="margin-top: 0px;">
		<div class="col-lg-8">
			<%
				if (editar) {
			%>
			<h1>Editar paciente</h1>
			<%
				} else {
			%>
			<h1>Alta paciente</h1>
			<%
				}
			%>
		</div>
		<div class="col-lg-4" style="margin-top: 10px;">
			<button id="darAlta" type="button"
				class="btn btn-success btn-circle btn-xl" data-toggle="modal"
				data-target="" style="border-color: #2e8e2e; border-width: 4px;"
				id="btnTomarFotoDocumento">
				<i class="fa  fa-save"></i>
			</button>
			<label style="font-size: large;">Guardar</label>
		</div>
	</div>
	<div class="row">
		<form role="form" id="pacienteForm">
			<div class="col-lg-8">
				<div class="form-group">
					<div class="checkbox">
						<label class="radio-inline" style="font-size: large;"><input
							type="radio" name="chkPaciente" value="DNI" checked="checked">Presenta
							DNI</label> <label class="radio-inline" style="font-size: large;"><input
							type="radio" name="chkPaciente" value="NODNI">No presenta
							DNI</label> <label class="radio-inline" style="font-size: large;"><input
							type="radio" name="chkPaciente" value="NN">Paciente
							desconocido</label>
					</div>
				</div>
			</div>
			<div class="col-lg-5">
				<div class="form-group">
					<label>DNI (numero de documento)</label>
					<div class='input-group date' id='searchDNI'>
						<span class="input-group-addon" id="spanLupita"
							style="background-color: #d9edf7;"> <span id="lupitaDNI"
							class="fa fa-search"></span>
						</span> <input type="text" pattern="\d*" maxlength="12" class="form-control" id="dni" />
					</div>
				</div>
				<div class="form-group">
					<label>NHC (opcional)</label> <input type="text" pattern="\d*" maxlength="20"
						class="form-control" id="nhc" />
				</div>

				<div class="form-group">
					<label>Nombres</label> <input type='text' class="form-control"
						id="nombre">
				</div>
				<div class="form-group">
					<label>Apellidos</label> <input type='text' class="form-control"
						id="apellido">
				</div>
				<div class="form-group">
					<label>Fecha Nacimiento (dd/mm/aaaa)</label>
					<div class='input-group date' id='fechaNac'>
						<span class="input-group-addon"> <span
							class="glyphicon glyphicon-calendar"></span>
						</span> <input type='text' class="form-control" id="txtFechaNac" />
					</div>
				</div>
				<div class="form-group">
					<label>Observaciones (opcional)</label>
					<textarea rows="4" cols="150" class="form-control"
						id="txtobservaciones" /></textarea>
				</div>
			</div>
		</form>
		

		<div class="col-lg-4">
			<%
				if (modoFotografia) {
			%>
			<p>
			<div id="divBotonFotoHumano">
				<button type="button" class="btn btn-info btn-circle btn-xl"
					data-toggle="modal" data-target="" id="btnTomarFotoHumano">
					<i class="fa fa-user"></i>
				</button>
				<label style="font-size: large;">Fotografiar Persona</label>
			</div>
			</p>
			<p>
			<div id="divBotonFotoDNI">
				<button type="button" class="btn btn-info btn-circle btn-xl"
					data-toggle="modal" data-target="" id="btnTomarFotoDocumento">
					<i class="fa  fa-id-card-o"></i>
				</button>
				<label style="font-size: large;">Fotografiar Documento</label>
			</div>
			</p>

			<%
				}
			%>

			<%
				if (modoBiometrico) {
			%>
			<button id="btnTomarHuellaHumano"
				class="btn btn-info btn-circle btn-xl">
				<i class="fa fa-hand-o-up"></i>
			</button>
			<label style="font-size: large;">Tomar huella</label> </br>
			<p></p>
			<select id="selectDedo"
				style="margin-left: 70px; margin-bottom: 20px;">
				<option value="6">Pulgar Derecho</option>
				<option value="5">Pulgar Izquierdo</option>
				<option value="4">Indice Izquierdo</option>
				<option value="7">Indice Derecho</option>

				<option value="3">Medio Izquierdo</option>
				<option value="8">Medio Derecho</option>

				<option value="2">Anular Izquierdo</option>
				<option value="9">Anular Derecho</option>

				<option value="1">Menique Izquierdo</option>
				<option value="10">Menique Derecho</option>

			</select>

			<div class="row">
				<div class="panel panel-default"
					style="width: fit-content; margin-left: 75px;">
					<div class="panel-heading">Huella</div>
					<div class="panel-body">
						<div id="huella">
							<%
								if (!imageHuellaAdmision.equals("")) {
							%>
							<img id="huellaImg"
								src="data:image/png;base64,<%=imageHuellaAdmision%>" alt=""
								style="height: 120px; cursor: zoom-in;" />
							<%
								} else {
							%>
							<img id="huellaImg" style="height: 120px; width: 80px; cursor: zoom-in;" />
							<%
								}
							%>
							<img id="huellaImgDos"
								style="height: 120px; width: 80px; display: none;" /> <img
								id="huellaImgTres"
								style="height: 120px; width: 80px; display: none;" /> <img
								id="huellaImgCuatro"
								style="height: 120px; width: 80px; display: none;" />
						</div>
					</div>
				</div>
			</div>
			<%
				}
			%>
		</div>		
		<div class="col-lg-3">
			<%
				if (modoFotografia) {
			%>
			<div class="row" style="padding-left: 10%; padding-right: 10%;">
				<div class="panel panel-success">
					<div class="panel-heading">Foto Paciente</div>
					<div class="panel-body">
						<div id="humano" style="text-align: center;">
							<%
								if (!imageBase64humano.equals("")) {
							%>
							<img id="fotohumano"
								src="data:image/png;base64,<%=imageBase64humano%>" alt=""
								width="100%" style="cursor: zoom-in;">
							<%
								}
							%>
						</div>
					</div>
				</div>
			</div>
			<div class="row" style="padding-left: 10%; padding-right: 10%;">
				<div class="panel panel-info">
					<div class="panel-heading">Foto Documento</div>
					<div class="panel-body">
						<div id="documento" style="text-align: center;">
							<%
								if (!imageBase64documento.equals("")) {
							%>
							<img id="fotodocumento"
								src="data:image/png;base64,<%=imageBase64documento%>" alt=""
								width="100%" style="cursor: zoom-in;">
							<%
								}
							%>
						</div>
					</div>
				</div>
			</div>
			<%
				}
			%>
		</div>
	</div>
	<!------------------------------ +MODAL FOTO ------------------------------------>
	<div class="modal fade" id="modalFoto" tabindex="-1" role="dialog"
		aria-labelledby="exampleModalLongTitle" aria-hidden="true">
		<div class="modal-dialog" role="document"
			style="text-align: -webkit-center;">
			<div class="modal-content" style="width: 395px;">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Tomar foto</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body" style="TEXT-ALIGN: CENTER;">
					<video id="video" width="320" height="240" autoplay></video>
					<canvas id="canvas" width="320" height="240"></canvas>
					<div style="text-align: center; padding-top: 10px;">
						<button id="snap" class="btn btn-success btn-circle btn-xl">
							<i id="cameraIcon" class="fa fa-camera"></i>
						</button>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary"
						data-dismiss="modal">Cancelar</button>
					<button type="button" class="btn btn-primary btn-success"
						id="guardarFoto">Guardar</button>
				</div>
			</div>
		</div>
	</div>
	<!------------------------------ -MODAL FOTO ------------------------------------>
	<!-- ---------------------------- -MODAL IMAGEN ------------------------------------>
	<div class="modal fade" id="enlargeImageModal" tabindex="-1"
		role="dialog" aria-labelledby="enlargeImageModal" aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div class="modal-body" style="text-align: center;">
					<img src="" class="enlargeImageModalSource" style="height: 70%;">
				</div>
			</div>
		</div>
	</div>
	<!-- ---------------------------- -MODAL IMAGEN ------------------------------------>
	<!-- ---------------------------- +MODAL HUELLA ------------------------------------>
	<div class="modal fade" id="modalHuella" tabindex="-1" role="dialog"
		aria-labelledby="exampleModalLongTitle" aria-hidden="true">
		<!--
		<div class="modal-dialog" role="document">
			<div class="modal-content" style="width: 670px;">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Tomar
						Huella</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<img alt="" src="./../dist/img/fingerScan.gif">
				</div>

				<div class="modal-footer">
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
						aria-hidden="true">×</button>
					Por defecto se usa el pulgar derecho. En caso de no ser posible, <strong>seleccione
						el dedo que va a tomar.</strong> La validacion automatica depende de la
					calidad de las huellas. Dedos desgastados, poca presion sobre el
					sensor, o capturas desalineadas son algunos de los factores que
					pueden afectar la calidad y precision del analisis.
				</div>
				</div>
			</div>
		</div>
		-->
	</div>

	<!-- ---------------------------- -MODAL HUELLA ------------------------------------>
</div>



<!-- custom JavaScript -->
<script src="../dist/js/sec/altaPaciente.js"></script>
<script type="text/javascript">
	$(function() {
		$('img').on('click', function() {
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
		});
	});
</script>