package com.teknotech.idpacientes.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.teknotech.idpacientes.drivers.ZebraHC100Driver;

/**
 * Servlet implementation class ListImpresoras
 */
@WebServlet("/ListImpresoras")
public class ListImpresoras extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		JSONArray jsArray = new JSONArray(new ZebraHC100Driver().listarImpresoras());
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		out.print(jsArray);
		out.flush();

	}

}
