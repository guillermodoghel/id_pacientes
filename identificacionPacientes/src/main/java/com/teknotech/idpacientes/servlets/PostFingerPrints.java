package com.teknotech.idpacientes.servlets;

import java.io.IOException;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.apache.commons.io.IOUtils;

import com.teknotech.idpacientes.dao.GenericDAO;
import com.teknotech.idpacientes.entities.User;
import com.teknotech.idpacientes.utils.StringUtils;

/**
 * Servlet implementation class PostFingerPrints
 */
@WebServlet("/sec/PostFingerPrints")
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 100, // 100 MB
		maxFileSize = 1024 * 1024 * 100, // 100 MB
		maxRequestSize = 1024 * 1024 * 150 // 150 MB
)

public class PostFingerPrints extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final String TYPE = "W";

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public PostFingerPrints() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		User u = ((User) request.getSession().getAttribute("loggedUser"));

		if (!u.getRole().contains("W")) {
			response.sendError(403);

		} else {

			byte[] menIz = new byte[0];
			byte[] anIz = new byte[0];
			byte[] medIz = new byte[0];
			byte[] inIz = new byte[0];
			byte[] pulIz = new byte[0];
			byte[] pulDer = new byte[0];
			byte[] inDer = new byte[0];
			byte[] medDer = new byte[0];
			byte[] anDer = new byte[0];
			byte[] menDer = new byte[0];
			String id = "";
			String txtobservaciones = "";

			for (Part part : request.getParts()) {
				switch (part.getName()) {
				case "id":
					id = StringUtils.getStringFromInputStream(part.getInputStream());
					break;
				case "txtobservaciones":
					txtobservaciones = StringUtils.getStringFromInputStream(part.getInputStream());
					break;
				case "menIz":
					menIz = IOUtils.toByteArray(part.getInputStream());
					break;
				case "anIz":
					anIz = IOUtils.toByteArray(part.getInputStream());
					break;
				case "medIz":
					medIz = IOUtils.toByteArray(part.getInputStream());
					break;
				case "inIz":
					inIz = IOUtils.toByteArray(part.getInputStream());
					break;
				case "puIz":
					pulIz = IOUtils.toByteArray(part.getInputStream());
					break;
				case "puDer":
					pulDer = IOUtils.toByteArray(part.getInputStream());
					break;
				case "inDer":
					inDer = IOUtils.toByteArray(part.getInputStream());
					break;
				case "medDer":
					medDer = IOUtils.toByteArray(part.getInputStream());
					break;
				case "anDer":
					anDer = IOUtils.toByteArray(part.getInputStream());
					break;
				case "menDer":
					menDer = IOUtils.toByteArray(part.getInputStream());
					break;
				}
			}
			try {
				GenericDAO dao = new GenericDAO();
				dao.uploadPianito(menIz, anIz, medIz, inIz, pulIz, pulDer, inDer, medDer, anDer, menDer, id,
						txtobservaciones);

				// new BiometricAdapter().bioMatch(id);

			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
