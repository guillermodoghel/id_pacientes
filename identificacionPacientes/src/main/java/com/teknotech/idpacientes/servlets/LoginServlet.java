package com.teknotech.idpacientes.servlets;

import java.io.IOException;
import java.sql.SQLException;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.teknotech.idpacientes.dao.GenericDAO;
import com.teknotech.idpacientes.entities.User;

@WebServlet("/Login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger log = Logger.getLogger(LoginServlet.class.getName());

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String struser = request.getParameter("usuario");
		String strpass = request.getParameter("password");

		log.info("Usuario: " + struser);
		log.info("Password: " + strpass);
		User user = validarUsuario(struser, strpass);
		if (user != null) {
			log.info("logeado Correctamente");
			HttpSession session = request.getSession();
			session.setAttribute("loggedUser", user);
			response.sendError(HttpServletResponse.SC_OK);
		} else {
			log.info("Error de logeo");
			response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Usuario y/o clave  incorrectos");
		}

	}

	private User validarUsuario(String user, String pass) {

		try {
			return new GenericDAO().login(user, pass);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			
			e.printStackTrace();
			
		}
		return null;
	}

}
