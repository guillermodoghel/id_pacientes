package com.teknotech.idpacientes.dao;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import com.teknotech.idpacientes.utils.PropertyLoader;


public class DatabaseManager {




  /*********************** db MYSQL ************************************/
 
  protected static final String MYSQL_DRIVER = "com.mysql.jdbc.Driver";
  protected static final String MYSQL_CONNECTION =
      "jdbc:mysql://"+PropertyLoader.getInstance().getDBHost()+
      ":"+PropertyLoader.getInstance().getDBPort()+"/"+
          PropertyLoader.getInstance().getDBName()+"?profileSQL=false";
  protected static final String MYSQL_USER = PropertyLoader.getInstance().getDBUser();
  protected static final String MYSQL_PASS = PropertyLoader.getInstance().getDBPass();
  
  /*********************** fin db MYSQL ************************************/
  

  protected String getQuery(String file) throws IOException {
    InputStream is = getClass().getClassLoader().getResourceAsStream(file);
    BufferedReader reader = new BufferedReader(new InputStreamReader(is));

    String line = null;
    StringBuilder stringBuilder = new StringBuilder();
    String ls = System.getProperty("line.separator");

    try {
      while ((line = reader.readLine()) != null) {
        stringBuilder.append(line);
        stringBuilder.append(ls);
      }

      return stringBuilder.toString();
    } finally {
      reader.close();
    }
  }




}
