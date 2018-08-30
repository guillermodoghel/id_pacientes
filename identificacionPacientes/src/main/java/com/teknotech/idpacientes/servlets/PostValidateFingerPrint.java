package com.teknotech.idpacientes.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.SQLException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.apache.commons.io.IOUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import com.machinezoo.sourceafis.FingerprintMatcher;
import com.machinezoo.sourceafis.FingerprintTemplate;
import com.teknotech.idpacientes.dao.GenericDAO;
import com.teknotech.idpacientes.utils.StringUtils;

/**
 * Servlet implementation class PostValidateFingerPrint
 */
@WebServlet("/sec/PostValidateFingerPrint")
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 100, // 100 MB
		maxFileSize = 1024 * 1024 * 100, // 100 MB
		maxRequestSize = 1024 * 1024 * 150 // 150 MB
)
public class PostValidateFingerPrint extends HttpServlet {
	private static final long serialVersionUID = 1L;
	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public PostValidateFingerPrint() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		byte[] finger = new byte[0];
		String id = "";
		String nrohuella = "";
		for (Part part : request.getParts()) {
			switch (part.getName()) {
			case "id":
				id = StringUtils.getStringFromInputStream(part.getInputStream());
				break;
//			case "nrohuella":
//				nrohuella = StringUtils.getStringFromInputStream(part.getInputStream());
//				break;
			case "finger":
				finger = IOUtils.toByteArray(part.getInputStream());
				break;
			}
		}
		GenericDAO dao = new GenericDAO();
		try {
//			HashMap<String, Object> data = dao.getPaciente(id);
//			byte[] probeImage = new byte[0];
//			probeImage= (byte[]) data.get("huellaAdmision");
//			switch (nrohuella) {
//			case "1":
//				probeImage = (byte[]) data.get("meniqueizquierdo");
//				break;
//			case "2":
//				probeImage = (byte[]) data.get("anularizquierdo");
//				break;
//			case "3":
//				probeImage = (byte[]) data.get("medioizquierdo");
//				break;
//			case "4":
//				probeImage = (byte[]) data.get("indiceizquierdo");
//				break;
//			case "5":
//				probeImage = (byte[]) data.get("pulgarizquierdo");
//				break;
//			case "6":
//				probeImage = (byte[]) data.get("pulgarderecho");
//				break;
//			case "7":
//				probeImage = (byte[]) data.get("indicederecho");
//				break;
//			case "8":
//				probeImage = (byte[]) data.get("medioderecho");
//				break;
//			case "9":
//				probeImage = (byte[]) data.get("anularderecho");
//				break;
//			case "10":
//				probeImage = (byte[]) data.get("meniquederecho");
//				break;
//			}

			JSONArray templates = dao.getPacienteHuellasTemplates(Long.parseLong(id));
			
			FingerprintTemplate probe = new FingerprintTemplate(finger);
			FingerprintMatcher matcher = new FingerprintMatcher(probe);
			
			double high = 0;
			double score =0;
			for(int i = 0; i < templates.length(); i++){
				
		         score = matcher.match(new FingerprintTemplate(templates.getString(i)));
		        if (score > high) {
		            high = score;
		        }
			}
		    boolean match = score >= 10;
	
			
			JSONObject jOb = new JSONObject();
			jOb.put("score", score);
			jOb.put("match", match);


		
			PrintWriter out = response.getWriter();
			
			response.setContentType("application/json");
			out.print(jOb);
			out.flush();
			
			

		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
