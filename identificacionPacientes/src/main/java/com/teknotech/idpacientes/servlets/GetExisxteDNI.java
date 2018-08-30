package com.teknotech.idpacientes.servlets;
 
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.teknotech.idpacientes.dao.GenericDAO;

/**
 * Servlet implementation class GetExisxteDNI
 */
@WebServlet("/sec/GetExisteDNI")
public class GetExisxteDNI extends HttpServlet {
  private static final long serialVersionUID = 1L;
  
  /**
   * @see HttpServlet#HttpServlet()
   */
  public GetExisxteDNI() {
    super();
    // TODO Auto-generated constructor stub
  }

  /**
   * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
   */
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {

    
    response.setContentType("application/json");
    PrintWriter out = response.getWriter();
    try {
      out.print(new GenericDAO().existeDNI(request.getParameter("dni")));
      out.flush();
    } catch (ClassNotFoundException | SQLException e) {

      e.printStackTrace();
    }
  }


}
