<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<!------------------------------------- CSS IMPORTS -------------------------------------------->

<!-- Bootstrap Core CSS -->
<link href="../bower_components/bootstrap/dist/css/bootstrap.min.css"
	rel="stylesheet">

<!-- Font Awesome CSS -->
<link href="../bower_components/font-awesome/css/font-awesome.min.css"
	rel="stylesheet" type="text/css">
	
<link href="../bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css"
	rel="stylesheet" />

<link href="../bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker-standalone.css"
	rel="stylesheet" />

<link href="../bower_components/datatables/media/css/jquery.dataTables.min.css" rel="stylesheet" />

<!-- Custom CSS -->
<link href="../dist/css/sb-admin-2.css" rel="stylesheet">


<!------------------------------------- END CSS IMPORTS --------------------------------------->

<!------------------------------------- JS IMPORTS -------------------------------------------->

<!-- jQuery -->
<script src="../bower_components/jquery/dist/jquery.min.js"></script>



<!-- Bootstrap Core JavaScript -->
<script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>


<script src="../bower_components/underscore/underscore-min.js"></script>

<!-- jQuery.printElement -->
<script src="../bower_components/jQuery.print/jQuery.print.js"></script>
<script src="../bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="../dist/js/transition.js"></script>
<script type="text/javascript" src="../dist/js/collapse.js"></script>

<script type="text/javascript" src="../bower_components/moment/min/moment-with-locales.min.js"></script>
<script>
	moment.locale('es');
</script>

<!-- datetimepicker -->
<script src="../bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>

<!-- Custom Theme JavaScript -->
<script src="../dist/js/sb-admin-2.js"></script>





<!-- messages JavaScript -->
<script src="../dist/js/messages.js"></script>

<!-- Custom Functions JS -->
<script src="../dist/js/WillyUtils.js"></script>

<!-- index JavaScript -->
<script src="../dist/js/sec/index.js"></script>

<!------------------------------------- END JS IMPORTS ------------------------------------------>
<!------------------------------------- DEFAULT PAGE -------------------------------------------->
<%
  String pageToDisplay = request.getParameter("p");
  if (pageToDisplay == null) {
    pageToDisplay = "pages/altaPaciente.jsp";
  }
%>
<!------------------------------------- END DEFAULT PAGE ---------------------------------------->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="icon" type="image/png" href="favicon.png">
<title>ID Pacientes</title>
</head>
<body>

	<div id="wrapper">
		<nav class="navbar navbar-default navbar-static-top" role="navigation"
			style="margin-bottom: 0"> 
			<%@include file="header.jsp"%>
			<%@include file="menu.jsp"%> 
		</nav>
		<jsp:include page="<%=pageToDisplay%>" flush="true" />	
	</div>
</body>
</html>