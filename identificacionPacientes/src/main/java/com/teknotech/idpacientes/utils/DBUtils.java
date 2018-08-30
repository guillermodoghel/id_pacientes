package com.teknotech.idpacientes.utils;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class DBUtils {
  
  public static JSONArray convertResultSetIntoJSONNoColumnNameSingleObject(ResultSet resultSet) throws SQLException{
   
    JSONArray jsonArray = new JSONArray();
    while (resultSet.next()) {
      jsonArray.put(resultSet.getObject(1));
    }
    return jsonArray;
  }
  
  
  public static JSONArray convertResultSetIntoJSONNoColumnName(ResultSet resultSet)
      throws JSONException, SQLException {
    JSONArray jsonArray = new JSONArray();
    while (resultSet.next()) {
      int total_rows = resultSet.getMetaData().getColumnCount();
      JSONArray obj = new JSONArray();
      for (int i = 0; i < total_rows; i++) {
        Object columnValue = resultSet.getObject(i + 1);
        // if value in DB is null, then we set it to default value
        if (columnValue == null) {
          columnValue = "-";
        }
        if (columnValue.equals("null")) {
          columnValue = "-";
        }

        obj.put(columnValue);
      }
      jsonArray.put(obj);
    }
    return jsonArray;
  }

  public static JSONArray convertResultSetIntoJSON(ResultSet resultSet)
      throws JSONException, SQLException {
    JSONArray jsonArray = new JSONArray();
    while (resultSet.next()) {
      int total_rows = resultSet.getMetaData().getColumnCount();
      JSONObject obj = new JSONObject();
      for (int i = 0; i < total_rows; i++) {
        String columnName = resultSet.getMetaData().getColumnLabel(i + 1).toLowerCase();
        Object columnValue = resultSet.getObject(i + 1);
        // if value in DB is null, then we set it to default value
        if (columnValue == null) {
          columnValue = "-";
        }
        if (columnValue.equals("null")) {
          columnValue = "-";
        }
        /*
         * Next if block is a hack. In case when in db we have values like price and price1 there's
         * a bug in jdbc - both this names are getting stored as price in ResulSet. Therefore when
         * we store second column value, we overwrite original value of price. To avoid that, i
         * simply add 1 to be consistent with DB.
         */
        if (obj.has(columnName)) {
          columnName += "1";
        }
        obj.put(columnName, columnValue);
      }
      jsonArray.put(obj);
    }
    return jsonArray;
  }

}
