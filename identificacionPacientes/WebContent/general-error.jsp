<%@page import="org.json.JSONObject"%>
<%@ page contentType="application/json" pageEncoding="UTF-8"%>
<%
  JSONObject responseJson = new JSONObject();
  responseJson.put("status", request.getAttribute("javax.servlet.error.status_code"));
  responseJson.put("reason", request.getAttribute("javax.servlet.error.message"));
%>
<%=responseJson.toString()%>
