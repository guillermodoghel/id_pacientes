package com.teknotech.idpacientes.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.teknotech.idpacientes.dao.GenericDAO;
import com.teknotech.idpacientes.entities.User;

/**
 * Servlet implementation class GetPacientes
 */
@WebServlet("/sec/GetPacientes")
public class GetPacientes extends HttpServlet {
  private static final long serialVersionUID = 1L;

  protected void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    response.setContentType("application/json");
    PrintWriter out = response.getWriter();
    try {
    	
  User u =((User)request.getSession().getAttribute("loggedUser"));
    	
    	
        out.print(new GenericDAO().getPacientes(request.getParameter("length"),
                request.getParameter("start"), request.getParameter("search[value]"),
                u.getRole().contains("W")
          		  
          		  ));
    	
    	

      out.flush();
    } catch (ClassNotFoundException | SQLException e) {

      e.printStackTrace();
    }


  }


}
