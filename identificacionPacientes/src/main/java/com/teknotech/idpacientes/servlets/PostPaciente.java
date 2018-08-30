package com.teknotech.idpacientes.servlets;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.apache.commons.io.IOUtils;

import com.machinezoo.sourceafis.FingerprintTemplate;
import com.teknotech.idpacientes.dao.GenericDAO;
import com.teknotech.idpacientes.utils.StringUtils;

/**
 * Servlet implementation class PostPaciente
 */
@WebServlet("/sec/PostPaciente")
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 1, // 1 MB
		maxFileSize = 1024 * 1024 * 10, // 10 MB
		maxRequestSize = 1024 * 1024 * 15 // 15 MB
)
public class PostPaciente extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public PostPaciente() {
		super();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		byte[] fotoHumano = new byte[0];
		byte[] fotodocumento = new byte[0];
		byte[] huellaImage = new byte[0];
		byte[] huella = new byte[0];
		byte[] huellaB = new byte[0];
		byte[] huellaC = new byte[0];
		byte[] huellaD = new byte[0];
		String esDesconocido = "";
		String dni = "";
		String nombre = "";
		String apellido = "";
		String txtFechaNac = "";
		String id = "";
		String huellaDedo = "";
		String nhc = "";
		String txtobservaciones = "";

		for (Part part : request.getParts()) {
			switch (part.getName()) {
			case "esDesconocido":
				esDesconocido = StringUtils.getStringFromInputStream(part.getInputStream());
			case "dni":
				dni = StringUtils.getStringFromInputStream(part.getInputStream());
				break;
			case "nhc":
				nhc = StringUtils.getStringFromInputStream(part.getInputStream());
				break;
			case "txtobservaciones":
				txtobservaciones = StringUtils.getStringFromInputStream(part.getInputStream());
				break;
			case "nombre":
				nombre = StringUtils.getStringFromInputStream(part.getInputStream());
				break;
			case "apellido":
				apellido = StringUtils.getStringFromInputStream(part.getInputStream());
				break;
			case "txtFechaNac":
				txtFechaNac = StringUtils.getStringFromInputStream(part.getInputStream());
				break;
			case "humano":
				fotoHumano = IOUtils.toByteArray(part.getInputStream());
				break;
			case "documento":
				fotodocumento = IOUtils.toByteArray(part.getInputStream());
				break;
			case "id":
				id = StringUtils.getStringFromInputStream(part.getInputStream());
				break;
			case "huella":
				huella = IOUtils.toByteArray(part.getInputStream());
				break;
			case "huellaB":
				huellaB = IOUtils.toByteArray(part.getInputStream());
				break;
			case "huellaC":
				huellaC = IOUtils.toByteArray(part.getInputStream());
				break;
			case "huellaD":
				huellaD = IOUtils.toByteArray(part.getInputStream());
				break;
			case "huellaImage":
				huellaImage = IOUtils.toByteArray(part.getInputStream());
				break;
			case "huellaDedo":
				huellaDedo = StringUtils.getStringFromInputStream(part.getInputStream());
				break;
			}
		}

		try {
			if (id.equals("")) {
				if(esDesconocido.equals("NN")) {
					nombre = "DESCONOCIDO";
				}
				Long pcId = new GenericDAO().ponerPaciente(fotoHumano, fotodocumento, esDesconocido, dni, nombre,
						apellido, txtFechaNac, huella, huellaDedo,nhc,txtobservaciones);
				response.getWriter().write(pcId.toString());
				
				if(huella.length != 0 && huellaB.length != 0 && huellaC.length != 0 & huellaD.length != 0) {
					FingerprintTemplate templateA = new FingerprintTemplate(huella);
					FingerprintTemplate templateB = new FingerprintTemplate(huellaB);
					FingerprintTemplate templateC = new FingerprintTemplate(huellaC);
					FingerprintTemplate templateD = new FingerprintTemplate(huellaD);
					
					new GenericDAO().ponerHuelasPaciente(templateA.json(), templateB.json(), templateC.json(), templateD.json(), pcId, Long.parseLong(huellaDedo));
				}
			} else {
				new GenericDAO().updatePaciente(id, fotoHumano, fotodocumento, esDesconocido, dni, nombre, apellido,
						txtFechaNac,huellaImage, huellaDedo,nhc,txtobservaciones);
				
				response.getWriter().write(id.toString());
				
				if(huella.length != 0 && huellaB.length != 0 && huellaC.length != 0 & huellaD.length != 0) {
					FingerprintTemplate templateA = new FingerprintTemplate(huella);
					FingerprintTemplate templateB = new FingerprintTemplate(huellaB);
					FingerprintTemplate templateC = new FingerprintTemplate(huellaC);
					FingerprintTemplate templateD = new FingerprintTemplate(huellaD);
					
					new GenericDAO().ponerHuelasPaciente(templateA.json(), templateB.json(), templateC.json(), templateD.json(), Long.parseLong(id), Long.parseLong(huellaDedo));
				}				
			}

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}

	}

}
