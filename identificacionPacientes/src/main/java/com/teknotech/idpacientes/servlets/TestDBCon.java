package com.teknotech.idpacientes.servlets;

import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.teknotech.idpacientes.dao.GenericDAO;
import com.teknotech.idpacientes.utils.PropertyLoader;

/**
 * Servlet implementation class TestDBCon
 */
@WebServlet("/TestDBCon")
public class TestDBCon extends HttpServlet {
  private static final long serialVersionUID = 1L;

  /**
   * @see HttpServlet#HttpServlet()
   */
  public TestDBCon() {
    super();
    // TODO Auto-generated constructor stub
  }

  /**
   * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
   */
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    // TODO Auto-generated method stub
    StringBuffer messageToHash = new StringBuffer();
    try {

      messageToHash.append("TEST TIMESTAMP:" + new Date() + "\n");
      messageToHash.append("========================= APP SETUP  =============================\n");
      messageToHash.append("Local IP: "+ request.getLocalAddr()+"\n");
      messageToHash.append("Remote IP: "+ request.getRemoteAddr()+"\n");
      messageToHash.append(PropertyLoader.getInstance().getTestMessage() + "\n");
      messageToHash
          .append("Biometrics mode: " + PropertyLoader.getInstance().getBiometricsMode() + "\n");
      messageToHash
          .append("Photo mode: " + PropertyLoader.getInstance().getPhotoMode() + "\n");
      messageToHash.append("========================= DB DIAGNOSTIC ==========================\n");
      messageToHash.append("DB Host: " + PropertyLoader.getInstance().getDBHost() + "\n");
      messageToHash.append("DB Port: " + PropertyLoader.getInstance().getDBPort() + "\n");
      messageToHash.append("DB Name: " + PropertyLoader.getInstance().getDBName() + "\n");
      messageToHash.append("DB User: " + PropertyLoader.getInstance().getDBUser() + "\n");
      new GenericDAO().conectarMysql();
      messageToHash.append("DB Conection: OK\n");

    } catch (Exception e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
      messageToHash.append(e.getMessage());
    }
    response.getWriter().append(messageToHash);
   
    try {
      MessageDigest md;
      md = MessageDigest.getInstance("SHA-256");
      md.update(messageToHash.toString().getBytes("UTF-8"));
      byte[] digest = md.digest();
      response.getWriter().append("-----BEGIN SHA-256 CHECKSUM-----\n");
      response.getWriter().append( String.format("%064x", new java.math.BigInteger(1, digest)));
      response.getWriter().append("\n-----END SHA-256 CHECKSUM-----\n");
     
    } catch (NoSuchAlgorithmException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }


   
    

  }

}
