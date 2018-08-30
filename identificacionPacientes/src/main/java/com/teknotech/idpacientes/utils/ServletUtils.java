package com.teknotech.idpacientes.utils;

import java.io.UnsupportedEncodingException;

import org.json.JSONArray;
import org.json.JSONObject;

public class ServletUtils {
  public static String JSONObjectToUTFResponse(JSONObject o) throws UnsupportedEncodingException {
    return new String(o.toString().getBytes(), "UTF-8").toUpperCase();
  }
  public static String JSONObjectToUTFResponseNoUppercase(JSONObject o) throws UnsupportedEncodingException {
    return new String(o.toString().getBytes(), "UTF-8");
  }
  public static String JSONArrayToUTFResponseNoUppercase(JSONArray o) throws UnsupportedEncodingException {
    return new String(o.toString().getBytes(), "UTF-8");
  }
  public static String JSONArrayToUTFResponse(JSONArray o) throws UnsupportedEncodingException {
    return new String(o.toString().getBytes(), "UTF-8").toUpperCase();
  }
}
