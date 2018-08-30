package com.teknotech.idpacientes.dao;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Objects;

import org.json.JSONArray;
import org.json.JSONObject;

import com.teknotech.idpacientes.entities.User;
import com.teknotech.idpacientes.utils.StringUtils;

public class GenericDAO extends DatabaseManager {
	public boolean conectarMysql() throws ClassNotFoundException, SQLException {
		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		String query = "select 1";
		// getQuery("querys/MY_ProcedimientoXTurno.sql");

		Statement stmt = connection.createStatement();
		ResultSet rs = stmt.executeQuery(query);
		rs.next();
		int resultado = rs.getInt(1);

		rs.close();
		stmt.close();
		connection.close();

		if (resultado == 1)
			return true;
		return false;
	}

	public JSONObject getPacientes(String lenght, String start, String search, boolean edit)
			throws ClassNotFoundException, SQLException {

		JSONObject response = new JSONObject();

		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		String query = "select count(*) from paciente";

		PreparedStatement stmt = connection.prepareStatement(query);
		ResultSet rs = stmt.executeQuery();

		rs.next();
		int totalRecords = rs.getInt(1);
		rs.close();
		stmt.close();
		response.put("recordsTotal", totalRecords);

		query = "select count(*) from paciente WHERE CONCAT(id,nhc, nombre, apellido, fechanac, dni,hash) LIKE ?";

		stmt = connection.prepareStatement(query);
		stmt.setString(1, "%" + search + "%");
		rs = stmt.executeQuery();

		rs.next();
		int recordsFiltered = rs.getInt(1);
		rs.close();
		stmt.close();
		response.put("recordsFiltered", recordsFiltered);

		query = "select id,nhc, dni, nombre, apellido, fechanac from paciente WHERE CONCAT(id,nhc, nombre, apellido, fechanac, dni,hash) LIKE ? limit ? offset ? ";

		stmt = connection.prepareStatement(query);
		stmt.setString(1, "%" + search + "%");
		stmt.setInt(2, Integer.parseInt(lenght));
		stmt.setInt(3, Integer.parseInt(start));
		rs = stmt.executeQuery();
		JSONArray data = new JSONArray();
		while (rs.next()) {
			JSONArray fila = new JSONArray();
			String id = rs.getString(1);
			StringBuilder buttons = new StringBuilder(" <a href=\".\\?p=pages/perfilPaciente.jsp?id=" + id
					+ "\">   <button class=\"btn btn-success btn-circle btn-md\">\r\n    <i class=\"fa fa-search\"\r\n   ></i>\r\n</button></a>");

			if (edit) {
				buttons.append(" <a href=\".\\?p=pages/altaPaciente.jsp?id=" + id
						+ "\">   <button class=\"btn btn-info btn-circle btn-md\">\r\n    <i class=\"fa fa-pencil\"\r\n   ></i>\r\n</button></a>");
			}

			fila.put(buttons);

			fila.put(id);
			fila.put(rs.getString(2));
			fila.put(rs.getString(3));
			fila.put(rs.getString(4));
			fila.put(rs.getString(5));
			fila.put(rs.getString(6));
			data.put(fila);
		}
		response.put("data", data);

		return response;
	}

	public String existeDNI(String id) throws ClassNotFoundException, SQLException {
		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		String query = "select id from paciente where dni= ?";
		// getQuery("querys/MY_ProcedimientoXTurno.sql");
		PreparedStatement stmt = connection.prepareStatement(query);
		stmt.setString(1, id);
		ResultSet rs = stmt.executeQuery();

		boolean reult = rs.next();
		String idResultado = "-1";
		if (reult == true) {
			idResultado = rs.getString(1);
		}
		rs.close();
		stmt.close();
		connection.close();

		return idResultado;
	}

	public User login(String user, String pass) throws ClassNotFoundException, SQLException {
		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		String query = "select * from user where nombre= ?";
		// getQuery("querys/MY_ProcedimientoXTurno.sql");
		PreparedStatement stmt = connection.prepareStatement(query);
		stmt.setString(1, user);
		ResultSet rs = stmt.executeQuery();
		if (!rs.next()) {
			return null;
		}
		User u = new User();
		u.setName(rs.getString(2));
		u.setPassword(rs.getString(3));
		u.setRole(rs.getString(4));
		rs.close();
		stmt.close();
		connection.close();
		if (u.getPassword().toUpperCase().equals(pass.toUpperCase())) {
			return u;
		}

		return null;
	}

	public HashMap<String, Object> getPaciente(String id) throws ClassNotFoundException, SQLException {
		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		String query = "select * from paciente where id= ?";
		// getQuery("querys/MY_ProcedimientoXTurno.sql");
		PreparedStatement stmt = connection.prepareStatement(query);
		stmt.setInt(1, Integer.parseInt(id));
		ResultSet rs = stmt.executeQuery();

		if (!rs.next()) {
			return null;
		}

		HashMap<String, Object> cache = new HashMap<String, Object>();

		cache.put("id", rs.getString(1));
		cache.put("nombre", rs.getString(2));
		cache.put("apellido", rs.getString(3));
		cache.put("fechanac", rs.getString(4));
		cache.put("dni", rs.getString(5));

		cache.put("nhc", Objects.toString(rs.getString(6), ""));
		cache.put("obvservacionesalta", Objects.toString(rs.getString(7), ""));

		cache.put("hash", rs.getString(8));
		cache.put("fotohumano", StringUtils.notNullByteArray(rs.getBytes(9)));
		cache.put("fotodocumento", StringUtils.notNullByteArray(rs.getBytes(10)));
		cache.put("desconocido", rs.getString(11));

		cache.put("huellaAdmision", StringUtils.notNullByteArray(rs.getBytes(12)));
		cache.put("huellaAdmisionTipo", rs.getString(13));

		cache.put("matchhuellaadmision", rs.getInt(14));

		cache.put("pulgarderecho", StringUtils.notNullByteArray(rs.getBytes(15)));
		cache.put("pulgarizquierdo", StringUtils.notNullByteArray(rs.getBytes(16)));
		cache.put("indicederecho", StringUtils.notNullByteArray(rs.getBytes(17)));
		cache.put("indiceizquierdo", StringUtils.notNullByteArray(rs.getBytes(18)));
		cache.put("medioderecho", StringUtils.notNullByteArray(rs.getBytes(19)));
		cache.put("medioizquierdo", StringUtils.notNullByteArray(rs.getBytes(20)));
		cache.put("anularderecho", StringUtils.notNullByteArray(rs.getBytes(21)));
		cache.put("anularizquierdo", StringUtils.notNullByteArray(rs.getBytes(22)));
		cache.put("meniqueizquierdo", StringUtils.notNullByteArray(rs.getBytes(23)));
		cache.put("meniquederecho", StringUtils.notNullByteArray(rs.getBytes(24)));

		cache.put("obvservacioneshuella", Objects.toString(rs.getString(25), ""));
		rs.close();
		stmt.close();
		connection.close();

		return cache;
	}

	public void uploadPianito(byte[] menIz, byte[] anIz, byte[] medIz, byte[] inIz, byte[] pulIz, byte[] pulDer,
			byte[] inDer, byte[] medDer, byte[] anDer, byte[] menDer, String id, String txtobservaciones)
			throws ClassNotFoundException, SQLException, IOException {
		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		String query = getQuery("querys/UPLOADFINGERPRINTS.sql");
		PreparedStatement stmt = connection.prepareStatement(query);
		stmt.setBlob(1, new ByteArrayInputStream(menIz));
		stmt.setBlob(2, new ByteArrayInputStream(anIz));
		stmt.setBlob(3, new ByteArrayInputStream(medIz));
		stmt.setBlob(4, new ByteArrayInputStream(inIz));
		stmt.setBlob(5, new ByteArrayInputStream(pulIz));
		stmt.setBlob(6, new ByteArrayInputStream(pulDer));
		stmt.setBlob(7, new ByteArrayInputStream(inDer));
		stmt.setBlob(8, new ByteArrayInputStream(medDer));
		stmt.setBlob(9, new ByteArrayInputStream(anDer));
		stmt.setBlob(10, new ByteArrayInputStream(menDer));
		stmt.setString(11, txtobservaciones);
		stmt.setString(12, id);
		int affectedRows = stmt.executeUpdate();
		if (affectedRows == 0) {
			throw new SQLException("UPLOADING PIANITO failed, no rows affected.");
		}
		stmt.close();
		connection.close();

	}

	public void uploadBiometricValidation(String id, String score)
			throws ClassNotFoundException, SQLException, IOException {
		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		String query = getQuery("querys/UPLOADBIOMETRICVALIDATION.sql");
		PreparedStatement stmt = connection.prepareStatement(query);
		stmt.setString(1, score);
		stmt.setString(2, id);
		int affectedRows = stmt.executeUpdate();
		if (affectedRows == 0) {
			stmt.close();
			connection.close();
			throw new SQLException("UPLOADING PIANITO failed, no rows affected.");
		}

		stmt.close();
		connection.close();

	}

	public JSONArray getPacienteHuellasTemplates(Long id) throws ClassNotFoundException, SQLException, IOException {
		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		String query = "select * from huellasTemplates where pacienteid= ?";
		PreparedStatement stmt = connection.prepareStatement(query);
		stmt.setLong(1, id);
		
		ResultSet rs = stmt.executeQuery();

		rs.next();
		JSONArray response = new JSONArray();
		response.put(rs.getString("uno"));
		response.put(rs.getString("dos"));
		response.put(rs.getString("tres"));
		response.put(rs.getString("cuatro"));
		
		
		
		rs.close();
		stmt.close();
		
		return response;
	}

	public void ponerHuelasPaciente(String templateA, String templateB, String templateC, String templateD,
			Long pacienteId, Long dedoId) throws ClassNotFoundException, SQLException, IOException {
		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		String query = getQuery("querys/INSERTARHUELLASTEMPLATE.sql");
		PreparedStatement stmt = connection.prepareStatement(query);

		stmt.setLong(1, pacienteId);
		stmt.setLong(2, dedoId);
		stmt.setString(3, templateA);
		stmt.setString(4, templateB);
		stmt.setString(5, templateC);
		stmt.setString(6, templateD);

		int affectedRows = stmt.executeUpdate();

		if (affectedRows == 0) {
			stmt.close();
			connection.close();
			throw new SQLException("UPLOADING PIANITO failed, no rows affected.");
		}

		stmt.close();
		connection.close();

	}
	
	public void updateHuelasPaciente(String templateA, String templateB, String templateC, String templateD,
			Long pacienteId, Long dedoId) throws ClassNotFoundException, SQLException, IOException {
		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		String query = getQuery("querys/UPDATEHUELLASTEMPLATE.sql");
		PreparedStatement stmt = connection.prepareStatement(query);

		
		stmt.setLong(1, dedoId);
		stmt.setString(2, templateA);
		stmt.setString(3, templateB);
		stmt.setString(4, templateC);
		stmt.setString(5, templateD);
		stmt.setLong(6, pacienteId);
		int affectedRows = stmt.executeUpdate();

		if (affectedRows == 0) {
			stmt.close();
			connection.close();
			throw new SQLException("UPLOADING PIANITO failed, no rows affected.");
		}

		stmt.close();
		connection.close();

	}

	public Long ponerPaciente(byte[] fotoHumano, byte[] fotodocumento, String esDesconocido, String dni, String nombre,
			String apellido, String txtFechaNac, byte[] huella, String huellaDedo, String nhc, String txtobservaciones)
			throws ClassNotFoundException, SQLException, IOException, NoSuchAlgorithmException {

		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		MessageDigest md = MessageDigest.getInstance("SHA-256");

		md.update(((Long) System.currentTimeMillis()).toString().getBytes("UTF-8"));

		byte[] digest = md.digest();

		String query = getQuery("querys/INSERTARPACIENTE.sql");
		PreparedStatement stmt = connection.prepareStatement(query);

		stmt.setString(1, nombre.toUpperCase());
		stmt.setString(2, apellido.toUpperCase());
		stmt.setString(3, txtFechaNac);
		stmt.setString(4, dni);
		stmt.setString(5, String.format("%064x", new java.math.BigInteger(1, digest)));
		stmt.setString(6, esDesconocido);
		stmt.setBlob(7, new ByteArrayInputStream(fotoHumano));
		stmt.setBlob(8, new ByteArrayInputStream(fotodocumento));
		stmt.setBlob(9, new ByteArrayInputStream(huella));
		stmt.setString(10, huellaDedo);
		stmt.setString(11, nhc);
		stmt.setString(12, txtobservaciones.toUpperCase());

		int affectedRows = stmt.executeUpdate();
		if (affectedRows == 0) {
			throw new SQLException("Creating user failed, no rows affected.");
		}

		try (ResultSet generatedKeys = stmt.getGeneratedKeys()) {
			if (generatedKeys.next()) {
				Long id = generatedKeys.getLong(1);
				stmt.close();
				connection.close();
				return id;
			} else {
				throw new SQLException("Creating user failed, no ID obtained.");
			}
		}

	}

	public String updatePaciente(String id, byte[] fotoHumano, byte[] fotodocumento, String esDesconocido, String dni,
			String nombre, String apellido, String txtFechaNac, byte[] huella, String txthuellaDedo, String nhc,
			String txtobservaciones)
			throws ClassNotFoundException, SQLException, IOException, NoSuchAlgorithmException {

		Class.forName(MYSQL_DRIVER);
		Connection connection = null;
		connection = DriverManager.getConnection(MYSQL_CONNECTION, MYSQL_USER, MYSQL_PASS);

		String query = getQuery("querys/UPDATEPACIENTE.sql");
		PreparedStatement stmt = connection.prepareStatement(query);

		stmt.setString(1, nombre.toUpperCase());
		stmt.setString(2, apellido.toUpperCase());
		stmt.setString(3, txtFechaNac);
		stmt.setString(4, dni);
		stmt.setString(5, esDesconocido);
		stmt.setBlob(6, new ByteArrayInputStream(fotoHumano));
		stmt.setBlob(7, new ByteArrayInputStream(fotodocumento));

		stmt.setString(8, nhc);
		stmt.setString(9, txtobservaciones.toUpperCase());
		stmt.setBlob(10,  new ByteArrayInputStream(huella));
		stmt.setString(11, txthuellaDedo);
		stmt.setString(12, id);

		int affectedRows = stmt.executeUpdate();
		if (affectedRows == 0) {
			throw new SQLException("Creating user failed, no rows affected.");
		}

		stmt.close();
		connection.close();
		return id;

	}

}
