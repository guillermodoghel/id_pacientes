package cuadrodemando;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.SQLException;

import com.machinezoo.sourceafis.FingerprintMatcher;
import com.machinezoo.sourceafis.FingerprintTemplate;
import com.teknotech.idpacientes.dao.DatabaseManager;
import com.teknotech.idpacientes.dao.GenericDAO;


public class TestFinger {
  

  public static void main(String[] args) throws ClassNotFoundException, SQLException, IOException  {

	  byte[] probeImage = Files.readAllBytes(Paths.get("/Users/estoussel/Desktop/huella1.jpg"));
	  byte[] candidateImage  = Files.readAllBytes(Paths.get("/Users/estoussel/Desktop/huella4.jpg"));
	  FingerprintTemplate probe = new FingerprintTemplate(probeImage);
	  FingerprintTemplate candidate = new FingerprintTemplate(candidateImage);
	  
	  System.out.println(probe.json());
	  
	  
	  FingerprintMatcher matcher = new FingerprintMatcher(probe);
	  double score = matcher.match(candidate);
	  boolean match = score >= 40;
	  System.out.println("score "+score);
	  System.out.println("match "+match);
  }

  
}
