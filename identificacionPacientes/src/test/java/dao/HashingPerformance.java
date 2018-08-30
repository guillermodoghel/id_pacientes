package dao;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class HashingPerformance {

  public static void main(String[] args)
      throws NoSuchAlgorithmException, UnsupportedEncodingException {
    // TODO Auto-generated method stub

    long init = System.currentTimeMillis();
    for (int i = 0; i < 1000000; i++) {
      MessageDigest md = MessageDigest.getInstance("SHA-256");


      md.update(((Long) System.currentTimeMillis()).toString().getBytes("UTF-8")); // Change this to
                                                                                   // "UTF-16" if
                                                                                   // needed
      byte[] digest = md.digest();

      String s = "sdfgdfsgs";
      String h = String.format("%064x", new java.math.BigInteger(1, digest));
      if (s.equals(h.toString())) {
        System.out.println("lalal");
      }
    }

    long end = System.currentTimeMillis();



    System.out.println(end - init);
//i3 7775s

  }

}
