
<%@page import="com.teknotech.idpacientes.utils.PropertyLoader"%>
<%@page import="com.teknotech.idpacientes.utils.StringUtils"%>
<%@page import="com.teknotech.idpacientes.utils.FingerLabelUtil"%>
<%@page import="com.teknotech.idpacientes.dao.GenericDAO"%>
<%@page import="org.apache.commons.codec.binary.Base64"%>
<%@page import="java.util.HashMap"%>
<%@page import=" com.teknotech.idpacientes.entities.User"%>
<!-- Custom CSS -->
<link href="../dist/css/perfilPaciente.css" rel="stylesheet">

<div id="page-wrapper">
	<!-- REFACTORIZAR ESTO -->
	<%
		boolean modoBiometrico = PropertyLoader.getInstance().getBiometricsMode();
		boolean modoFotografia = PropertyLoader.getInstance().getPhotoMode();
		String imageBase64humano = "";
		String imageBase64documento = "";

		String imageHuellaAdmision = "";

		String huellaAdmision = "";

		String pulgarderecho = "";
		String pulgarizquierdo = "";
		String indicederecho = "";
		String indiceizquierdo = "";
		String medioderecho = "";
		String medioizquierdo = "";
		String anularderecho = "";
		String anularizquierdo = "";
		String meniqueizquierdo = "";
		String meniquederecho = "";

		HashMap<String, Object> data = new HashMap();
		if (request.getParameter("id") == null) {
	%>
	Id invalido.
	<%
		return;
		} else {
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
			huellaAdmision = (String) data.get("huellaAdmisionTipo");
			// 			pulgarderecho = new String(Base64.encodeBase64((byte[]) data.get("pulgarderecho")));
			// 			pulgarizquierdo = new String(Base64.encodeBase64((byte[]) data.get("pulgarizquierdo")));
			// 			indicederecho = new String(Base64.encodeBase64((byte[]) data.get("indicederecho")));
			// 			indiceizquierdo = new String(Base64.encodeBase64((byte[]) data.get("indiceizquierdo")));
			// 			medioderecho = new String(Base64.encodeBase64((byte[]) data.get("medioderecho")));
			// 			medioizquierdo = new String(Base64.encodeBase64((byte[]) data.get("medioizquierdo")));
			// 			anularderecho = new String(Base64.encodeBase64((byte[]) data.get("anularderecho")));
			// 			anularizquierdo = new String(Base64.encodeBase64((byte[]) data.get("anularizquierdo")));
			// 			meniqueizquierdo = new String(Base64.encodeBase64((byte[]) data.get("meniqueizquierdo")));
			// 			meniquederecho = new String(Base64.encodeBase64((byte[]) data.get("meniquederecho")));

		}
		String esdesconocido = (String) data.get("desconocido");
	%>
	<script type="text/javascript">
	<%if (esdesconocido.equals("NN")) {%>
	var pacHash= '<%=(String) data.get("hash")%>';
	var pacDNI = '-';
	var pacID= '<%=(String) data.get("id")%>';
	var pacNombre= 'Paciente Desconocido';
	var pacFechNac ='<%=(String) data.get("fechanac")%>';
	<%} else {%>
	var pacHash= '<%=(String) data.get("hash")%>';
	var pacDNI = '<%=(String) data.get("dni")%>';
	var pacID= '<%=(String) data.get("id")%>';
	var pacNombre= '<%=(String) data.get("nombre") + " " + (String) data.get("apellido")%>';
	var pacFechNac = '<%=(String) data.get("fechanac")%>';
	<%}%>
		var zplString = '&#36;{^XA~TA000~JSN^LT0^MNM^MTD^PON^PMN^LH0,0^JMA^PR2,2~SD21^JUS^LRN^CI0^XZ^XA^MMT^PW300^LL3300^LS0^BY260,260^FT287,2431^BXB,10,200,0,0,1,_^FH\\^FD'
				+ pacHash
				+ '^FS^FT98,1905^A0B,75,74^FH\\^FDDNI: '
				+ pacDNI
				+ '^FS^FT166,1905^A0B,42,40^FH\\^FDNID: '
				+ pacID
				+ '^FS^FT218,1905^A0B,42,40^FH\\^FD'
				+ pacNombre
				+ '^FS^FT270,1905^A0B,42,40^FH\\^FDFN: '
				+ pacFechNac
				+ '^FS^PQ1,0,1,Y^XZ}&#36;';

				
				var zplStringBebe = 	'&#36;{^XA~TA000~JSN^LT0^MNM^MTD^PON^PMN^LH0,0^JMA^PR2,2~SD21^JUS^LRN^CI0^XZ^XA^MMT^PW300^LL1800^LS0^BY260,260^FT281,1424^BXB,10,200,0,0,1,_^FH\\^FD'
				+ pacHash 
				+'^FS^FT80,1115^A0B,58,57^FH\\^FDDNI: '
				+pacDNI
				+'^FS^FT146,1112^A0B,44,40^FH\\^FDNID: '
				+pacID
				+'^FS^FT216,1112^A0B,42,40^FH\\^FD'
				+pacNombre
				+'^FS^FT276,1115^A0B,42,40^FH\\^FDFN: '
				+pacFechNac
				+'^FS^PQ1,0,1,Y^XZ}&#36;';
				
				
	

		var nomuno = ' ';
		var nomdos = ' ';
		var nomtres = ' ';
		if (pacNombre.split(" ")[0] !== undefined) {
			nomuno = pacNombre.split(" ")[0];
		}
		if (pacNombre.split(" ")[1] !== undefined) {
			nomdos = pacNombre.split(" ")[1];
		}
		if (pacNombre.split(" ")[2] !== undefined) {
			nomtres = pacNombre.split(" ")[2];
		}

		var epl = 'I8,A,001\n\n\n' + 'Q384,024\n' + 'q863\n' + 'rN\n' + 'S3\n'
				+ 'D7\n' + 'ZT\n' + 'JF\n' + 'OC1\n' + 'R235,0\n' + 'f100\n'
				+ 'N\n' + 'b10,210,D,h6,"'
				+ pacHash
				+ '"\n'
				+ 'b8,18,D,h6,"'
				+ pacHash
				+ '"\n'
				+ 'A173,214,0,2,2,2,N,"'
				+ pacDNI
				+ '"\n'
				+ 'A171,22,0,2,2,2,N,"'
				+ pacDNI
				+ '"\n'
				+ 'A172,88,0,4,1,1,N,"'
				+ nomuno
				+ '"\n'
				+ 'A172,110,0,4,1,1,N,"'
				+ nomdos
				+ '"\n'
				+ 'A172,132,0,4,1,1,N,"'
				+ nomtres
				+ '"\n'
				+ 'A173,247,0,2,2,2,N,"ID'
				+ pacID
				+ '"\n'
				+ 'A173,280,0,4,1,1,N,"'
				+ nomuno
				+ '"\n'
				+ 'A173,302,0,4,1,1,N,"'
				+ nomdos
				+ '"\n'
				+ 'A173,324,0,4,1,1,N,"'
				+ nomtres
				+ '"\n'
				+ 'A173,346,0,4,1,1,N,"'
				+ pacFechNac
				+ '"\n'
				+ 'A172,154,0,4,1,1,N,"'
				+ pacFechNac
				+ '"\n'
				+ 'A171,55,0,2,2,2,N,"ID' + pacID + '"\n' + 'P1\n';

		var zplStringEtiqueta = "" + epl + "";
	</script>
	<!-- REFACTORIZAR ESTO -->
	<div class="row">
		</br>
		<div class="col-lg-12">
			<div id="errorBD">
				<div class="alert alert-danger" style="text-align: center;visibility: hide;">
					ERROR DE COMUNICACION CON EL BROWSER DRIVER. ASEGURESE QUE ESTE EN
					EJECUCION Y <a href="javascript:location.reload();"
						class="alert-link">PRESIONE F5</a>.
				</div>
			</div>
		</div>
	</div>

	<div class="row page-header" style="margin-top: 0px;">
		<!-- DEMO FILTRO ESTO	
		
		<img id="huellaDemo" src="./../dist/img/huella2.jpg" />
		<figure class="applyThreshold">
			<canvas id="canvasHuellas"></canvas>
		</figure>
	 -->
		<div class="col-lg-8">
			<h1>Perfil del paciente</h1>
		</div>

		<div class="col-lg-4" style="margin-top: 10px;">
			<%
				if (((User) session.getAttribute("loggedUser")).getRole().contains("W")) {
			%>
			<button id="edit" class="btn btn-success btn-circle btn-xl">
				<i class="fa fa-pencil"
					onclick="window.location = '?p=pages/altaPaciente.jsp?id=<%=(String) data.get("id")%>'"></i>
			</button>
			<label style="font-size: large;">Editar Paciente</label>
			<%
				}
			%>
		</div>
	</div>

	<div class="row">
		<div class="col-sm-8">
			<div class="well profile">
				<div class="row">
					<div class="col-sm-12">
						<div class="col-xs-12 col-sm-4">
							<h3>
								ID: #<%=(String) data.get("id")%></h3>

							<%
								if (!data.get("nhc").equals("")) {
							%>
							<h3>
								NHC:
								<%=(String) data.get("nhc")%></h3>
							<%
								}
							%>
							<%
								if (esdesconocido.equals("NN")) {
							%>
							<h2>Paciente Desconocido</h2>
							<%
								} else {
							%>
							<h2><%=(String) data.get("nombre")%>
								<%=(String) data.get("apellido")%></h2>
							<h4>
								<p>
									<strong>Fecha de nacimiento: </strong>
									<%=(String) data.get("fechanac")%>
								</p>
								<p>
									<strong>DNI: </strong>
									<%=(String) data.get("dni")%>
								</p>
							</h4>
							<%
								}
							%>


						</div>
						<%
							if (modoFotografia) {
						%>
						<div class="col-xs-12 col-sm-4 text-center">

							<%
								if (imageBase64humano.equals("")) {
							%>
							<img src="./../dist/img/noProfile.jpg" alt=""
								class="img-circle img-responsive">
							<%
								} else {
							%>
							<a href="data:image/png;base64,<%=imageBase64humano%>"> <img
								src="data:image/png;base64,<%=imageBase64humano%>"
								style="border-radius: 9%;cursor: zoom-in;" alt="" class="img-responsive"></a>
							<%
								}
							%>
</div>
							<div class="col-xs-12 col-sm-4 text-center">

							<%
								if (imageBase64documento.equals("")) {
							%>
							No se subio foto del documento
							<%
								} else {
							%>
							<a href="data:image/png;base64,<%=imageBase64documento%>"> <img
								src="data:image/png;base64,<%=imageBase64documento%>"
								style="border-radius: 9%;cursor: zoom-in;" alt="" class="img-responsive">
							</a>
							<%
								}
							%>
						</div>
						<%
							}
						%>
					</div>

				</div>
				<div class="row" style="margin-top: 20px;">
					<div class="panel panel-success" style="margin-bottom: -10px;">
						<div class="panel-heading">Observaciones</div>
						<div class="panel-body">
							<p><%=(String) data.get("obvservacionesalta")%></p>
						</div>

					</div>
				</div>
			</div>
		</div>


		<div class="col-sm-4">

			<%
				if (modoBiometrico) {
			%>

			<%
				if (imageHuellaAdmision.equals("")) {

					} else {
			%>
			<div class="panel panel-default">
				<div class="panel-heading" style="    text-align: center;"><%=FingerLabelUtil.getPrint(huellaAdmision) %></div>
				<div class="panel-body" style="    text-align: center;">
					<a href="data:image/png;base64,<%=imageHuellaAdmision%>"> <img
						height="120" src="data:image/png;base64,<%=imageHuellaAdmision%>"
						alt="" style="cursor: zoom-in;">
					</a>
				</div>
				<div class="panel-footer">
						<button id="validarHuellas" class="btn btn-info btn-circle btn-xl">
							<i class="fa fa-hand-o-up"></i>
						</button>
						<label style="font-size: large;">Verificar huella</label> </br>
				</div>
			</div>

			<%
				}
			%>

			<%
				if (((User) session.getAttribute("loggedUser")).getRole().contains("W")) {
			%>
			<!-- REFACTORIZAR ESTO 
			<div class="contenedorDelBoton">

				<button id="snap" class="btn btn-info btn-circle btn-xl"
					onclick="window.location = '?p=pages/tomarHuellas.jsp?id=<%=(String) data.get("id")%>'">
					<i class="fa fa-hand-paper-o"></i>
				</button>
				<label style="font-size: large;">Tomar 10 huellas</label>
			</div>
			-->
			<%
				}
			%>

			<%
				}
			%>
		</div>


	</div>
	<div class="row">
		<div class="col-sm-12"></div>
	</div>
	<div class="row">
		<div class="col-sm-6">
			<div class="contenedorDelBoton">
				<div class="panel panel-info">
					<div class="panel-heading">Imprimir Pulseras</div>
					<div
						style="margin-bottom: 10px; margin-top: 10px; margin-left: 10px">
						<div class="col-sm-12">
							Impresora: <select id="listadoImpresoraPulsera"></select>
						</div>
					</div>
					<button id="imprimirPulsera" class="btn btn-primary btn-lg"
						style="margin-bottom: 20px; margin-left: 20px; margin-top: 20px;">
						<i class="fa fa-qrcode"></i> Imprimir pulsera adultos
					</button>



					<button id="imprimirPulseraRN" class="btn btn-info btn-lg"
						style="margin-bottom: 20px; margin-top: 20px;">
						<i class="fa fa-qrcode"></i> Imprimir pulsera pediatrica
					</button>

				</div>
			</div>
		</div>

		<div class="col-sm-6">
			<div class="contenedorDelBoton">

				<div class="panel panel-info">
					<div class="panel-heading">Imprimir Etiquetas</div>
					<div
						style="margin-bottom: 10px; margin-top: 10px; margin-left: 10px">
						<div class="col-sm-12">
							Impresora: <select id="listadoImpresoraEtiqueta"></select>
						</div>



					</div>
					<div class="row">
						<div class="col-sm-6">
							<div
								style="margin-bottom: 20px; margin-left: 20px; margin-top: 20px;">
								Cantidad: <select id="cantidadEtiquetas">
									<option value="1">2</option>
									<option value="2">4</option>
									<option value="3">6</option>
									<option value="4">8</option>
									<option value="5">10</option>
								</select>
							</div>
						</div>
						<div class="col-sm-6">
							<button id="imprimirEtiquetas"
								style="margin-bottom: 20px; margin-left: 24px; margin-top: 20px;"
								class="btn btn-primary btn-lg">
								<i class="fa fa-barcode"></i> Imprimir etiquetas
							</button>
						</div>

					</div>
				</div>
			</div>
		</div>


	</div>
	<div class="row"></div>
	<div class="row"></div>

</div>
<!-- ---------------------------- +MODAL HUELLA ------------------------------------>
<div class="modal fade" id="modalHuella" tabindex="-1" role="dialog"
	aria-labelledby="exampleModalLongTitle" aria-hidden="true">
	<div class="modal-dialog" role="document"
		style="text-align: -webkit-center;">
		<div class="modal-content" style="width: 395px;">
			<div class="modal-body">
				<div id=loading>
					<div id="messageVerification" class="h4"></div>
					<div style="text-align: center;">
						<img width="320" alt="" src="./../dist/img/fingerLoad.gif" />
					</div>
				</div>
				<div id=result>
					<div id="resultHuellaOk" class="alert alert-success">
						Huella validada correctamente. <br>
						<button type="button" id="aceptarHuellaOk" class="btn btn-success" style="margin-top: 10px;">Aceptar</button>
					</div>
					<div id="resultHuellaNo" class="alert alert-warning">
						No se pudo verificar automaticamente la huella. Intentar
						nuevamente? <br> 
						
						<button type="button" id="reintentarHuella" class="btn btn-warning" style="margin-top: 10px;">Reintentar</button>
						<button type="button" id="aceptarHuellaNoOk" class="btn btn-danger" style="margin-top: 10px;">Cancelar</button>
						
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

<!-- ---------------------------- -MODAL HUELLA ------------------------------------>
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
<!-- image to blob -->
<script src="../dist/js/jquery-image-blob.min.js"></script>
<script src="../dist/js/canvas-to-blob.js"></script>
<script src="../dist/js/imageVision.js"></script>
<!-- custom JavaScript -->
<script src="../dist/js/sec/perfilPaciente.js"></script>
<script type="text/javascript">
		$(function() {
			$('img').on('click', function() {
				$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
				$('#enlargeImageModal').modal('show');
			});
		});
	</script>