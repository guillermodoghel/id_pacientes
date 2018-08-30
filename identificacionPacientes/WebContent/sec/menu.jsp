<%@page import=" com.teknotech.idpacientes.entities.User"%>
<!-- MetisMenu CSS -->
<link href="../bower_components/metisMenu/dist/metisMenu.min.css"
	rel="stylesheet">

<!-- Metis Menu Plugin JavaScript -->
<script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>


<div class="navbar-default sidebar" role="navigation">
	<div class="sidebar-nav navbar-collapse">
		<ul class="nav" id="side-menu">
			<li><a href=".?p=pages/altaPaciente.jsp"><i
					class="fa  fa-user-plus fa-fw fa-2x" id="linkAlta"></i> Alta paciente</a></li>
			<li><a href=".?p=pages/buscarPaciente.jsp"><i
					class="fa  fa-users fa-fw fa-2x" id="linkAlta"></i> Listado de pacientes</a></li>
					
					
		<%
		if(((User) session.getAttribute("loggedUser")).getRole().contains("D")){
		%>							
			<li><a href=".?p=pages/altaPaciente.jsp"><i
					class="fa  fa-user fa-fw fa-2x" id="linkAlta"></i> Visitas</a></li>
		<li><a href=".?p=pages/scanCode.jsp"><i
					class="fa  fa-qrcode fa-fw fa-2x" id="linkAlta"></i> Lector 2D</a></li>
		<li><a href=".?p=pages/reporteEjemploDos.jsp"><i
					class="fa  fa-tachometer fa-fw fa-2x" id="linkAlta"></i> Cuado de mando demo</a></li>		
		<li><a href=".?p=pages/reporteEjemplo.jsp"><i
					class="fa  fa-line-chart fa-fw fa-2x" id="linkAlta"></i> Reporte demo</a></li>
		<%} %>						
		</ul>
	</div>
	<!-- /.sidebar-collapse -->
</div>