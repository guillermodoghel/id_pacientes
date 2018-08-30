<script type="text/javascript">
	var id =
<%=request.getParameter("id")%>
	;
</script>


<div id="page-wrapper">
	<div class="row">
	</br>
		<div class="col-lg-12">
			<div id="errorBD">
				<div class="alert alert-danger" style="text-align: center">
					ERROR DE COMUNICACION CON EL BROWSER DRIVER. ASEGURESE QUE ESTE EN
					EJECUCION Y <a href="javascript:location.reload();"
						class="alert-link">PRESIONE F5</a>.
				</div>
			</div>
		</div>
	</div>
	<div class="row page-header" style="margin-top: 0px;">
		<div class="col-lg-8">

			<h1>Tomar Huellas</h1>

		</div>
		<div class="col-lg-4" style="margin-top: 10px;">
			<button id="guardarHuellas" class="btn btn-success btn-circle btn-xl"
				style="border-color: #2e8e2e; border-width: 4px;">
				<i class="fa fa-save"></i>
			</button>
			<label style="font-size: large;">Guardar</label>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12">
			<table border="1" align="center">
				<tr>
					<th><img id="menIz" width="80" height="120"
						style="background: #ffffff" /></th>
					<th><img id="anIz" width="80" height="120"
						style="background: #ffffff" /></th>
					<th><img id="medIz" width="80" height="120"
						style="background: #ffffff" /></th>
					<th><img id="inIz" width="80" height="120"
						style="background: #ffffff" /></th>
					<th><img id="puIz" width="80" height="120"
						style="background: #ffffff" /></th>
					<th><img id="puDer" width="80" height="120"
						style="background: #ffffff" /></th>
					<th><img id="inDer" width="80" height="120"
						style="background: #ffffff" /></th>
					<th><img id="medDer" width="80" height="120"
						style="background: #ffffff" /></th>
					<th><img id="anDer" width="80" height="120"
						style="background: #ffffff" /></th>
					<th><img id="menDer" width="80" height="120"
						style="background: #ffffff" /></th>
				</tr>
				<tr>
					<td>
						<button id="btnIniciar1" type="button"
							class="btnIniciar btn btn-default btn-lg ">Menique Izq</button>
					</td>
					<td>
						<button id="btnIniciar2" type="button"
							class="btnIniciar btn btn-default btn-lg ">Anular Izq</button>
					</td>
					<td>
						<button id="btnIniciar3" type="button"
							class="btnIniciar btn btn-default btn-lg ">Medio Izq</button>
					</td>
					<td>
						<button id="btnIniciar4" type="button"
							class="btnIniciar btn btn-default btn-lg ">Indice Izq</button>
					</td>
					<td>
						<button id="btnIniciar5" type="button"
							class="btnIniciar btn btn-default btn-lg ">Pulgar Izq</button>
					</td>
					<td>
						<button id="btnIniciar6" type="button"
							class="btnIniciar btn btn-default btn-lg ">Pulgar Der</button>
					</td>
					<td>
						<button id="btnIniciar7" type="button"
							class="btnIniciar btn btn-default btn-lg ">Indice Der</button>
					</td>
					<td>
						<button id="btnIniciar8" type="button"
							class="btnIniciar btn btn-default btn-lg ">Medio Der</button>
					</td>
					<td>
						<button id="btnIniciar9" type="button"
							class="btnIniciar btn btn-default btn-lg ">Anular Der</button>
					</td>
					<td>
						<button id="btnIniciar10" type="button"
							class="btnIniciar btn btn-default btn-lg ">Meñique Der</button>
					</td>
				</tr>
				<tr>
					<td colspan="4">
						<button id="btnIniciar4Left" type="button" style="width: 100%"
							class="btnIniciar btn btn-default btn-lg ">Cuatro
							Izquierda</button>
					</td>
					<td colspan="2">
						<button id="btnIniciarTwoThumbs" type="button" style="width: 100%"
							class="btnIniciar btn btn-default btn-lg ">Dos Pulgares
						</button>
					</td>
					<td colspan="4">


						<button id="btnIniciar4Right" type="button" style="width: 100%"
							class="btnIniciar btn btn-default btn-lg ">Cuatro
							Derecha</button>
					</td>
				</tr>
			</table>
			<br> <br>
			<div class="form-group">
				<label>Observaciones (opcional)</label>
				<textarea rows="4" cols="150" class="form-control"
					id="txtobservaciones" /></textarea>

			</div>
		</div>
	</div>





	<!-- Modal -->
	<div class="modal fade" id="huellaModal" tabindex="-1" role="dialog"
		aria-labelledby="exampleModalLongTitle" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Toma de
						huellas</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body" style="text-align: center;">
					<img id="myCanvas" width="400" height="400"
						style="border: 1px solid #000000; background: #ffffff" /> </br>
				</div>
				<div class="modal-footer">
					<button type="button" id="canclarCaptura" class="btn btn-secondary"
						data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>



</div>
<script src="../dist/js/pianito.js"></script>