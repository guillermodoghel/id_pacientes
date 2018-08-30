package BiometricsSDK;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;

import javax.imageio.ImageIO;

import com.teknotech.idpacientes.dao.GenericDAO;

public class BiometricAdapter {
	
	public void bioMatch(String id) throws ClassNotFoundException, SQLException, IOException {
		
	GenericDAO dao = new GenericDAO();
	HashMap paciente = dao.getPaciente(id);
	CFingerPrint m_finger1 = new CFingerPrint();
	CFingerPrint m_finger2 = new CFingerPrint();
	BufferedImage m_bimage1 = new BufferedImage(m_finger1.FP_IMAGE_WIDTH, m_finger1.FP_IMAGE_HEIGHT,
			BufferedImage.TYPE_INT_RGB);
	BufferedImage m_bimage2 = new BufferedImage(m_finger2.FP_IMAGE_WIDTH, m_finger2.FP_IMAGE_HEIGHT,
			BufferedImage.TYPE_INT_RGB);

	
	
	 m_bimage1=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("huellaAdmision")));
	 m_bimage2=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("huellaAdmision")));
	 
	 switch ((String)paciente.get("huellaAdmisionTipo")) {
		case "6":
			m_bimage2=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("pulgarderecho")));
			break;
		case "5":
			m_bimage2=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("pulgarizquierdo")));
			break;
		case "4":
			m_bimage2=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("indicederecho")));
			break;
		case "7":
			m_bimage2=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("indiceizquierdo")));
			break;
		case "3":
			m_bimage2=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("medioderecho")));
			break;
		case "8":
			m_bimage2=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("medioizquierdo")));
			break;
		case "2":
			m_bimage2=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("anularderecho")));
			break;
		case "9":
			m_bimage2=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("anularizquierdo")));
			break;
		case "1":
			m_bimage2=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("meniqueizquierdo")));
			break;
		case "10":
			m_bimage2=ImageIO.read(new ByteArrayInputStream((byte[]) paciente.get("meniquederecho")));
			break;
		}
	 
	 
	  double finger1[] = new double[m_finger1.FP_TEMPLATE_MAX_SIZE];
	  double finger2[] = new double[m_finger2.FP_TEMPLATE_MAX_SIZE];
	  
	  m_finger1.setFingerPrintImage(m_bimage1) ;
	  m_finger2.setFingerPrintImage(m_bimage2) ;
	  
	  finger1=m_finger1.getFingerPrintTemplate();
	  finger2=m_finger2.getFingerPrintTemplate();
	
	
	 
	 dao.uploadBiometricValidation(id,  Double.toString(m_finger1.Match(finger1 , finger2,65,false)));
}
}
