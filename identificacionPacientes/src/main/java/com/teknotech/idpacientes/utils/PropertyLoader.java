package com.teknotech.idpacientes.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;



public class PropertyLoader {
  private static PropertyLoader instance = new PropertyLoader();

  private static Properties prop;

  private PropertyLoader() {
    try {
      prop = new Properties();
      InputStream input = null;
      if("PROD".equals(System.getProperty("WEBAPP_ENV"))) {
    	  	input = getClass().getClassLoader().getResourceAsStream("prod.config.properties");
      }else{
    	  input = getClass().getClassLoader().getResourceAsStream("dev.config.properties");
      }
      
      prop.load(input);
    } catch (IOException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
  }


  public static PropertyLoader getInstance() {
    return instance;
  }

  public static boolean getBiometricsMode() {
    return Boolean.parseBoolean(prop.getProperty("biometrics.mode"));

  }

  public static boolean getPhotoMode() {
    return Boolean.parseBoolean(prop.getProperty("photo.mode"));

  }

  public static String getTestMessage() {
    return prop.getProperty("test.message");

  }
  public static String getDBHost() {
    return prop.getProperty("db.host");
}
public static String getDBPort() {
    return prop.getProperty("db.port");
}
public static String getDBName() {
    return prop.getProperty("db.name");
}
public static String getDBUser() {
    return prop.getProperty("db.user");
}
public static String getDBPass() {
    return prop.getProperty("db.pass");
}
}
