package com.teknotech.idpacientes.drivers;

import java.awt.datatransfer.SystemFlavorMap;
import java.util.ArrayList;
import java.util.List;

import javax.print.Doc;
import javax.print.DocFlavor;
import javax.print.DocPrintJob;
import javax.print.PrintException;
import javax.print.PrintService;
import javax.print.PrintServiceLookup;
import javax.print.SimpleDoc;
import javax.print.attribute.PrintServiceAttribute;
import javax.print.attribute.standard.PrinterName;

public class ZebraHC100Driver {

	
	public List<String> listarImpresoras(){
		List<String> impresoras = new ArrayList<String>();
		 PrintService psZebra = null;
         String sPrinterName = null;
         PrintService[] services = PrintServiceLookup.lookupPrintServices(null, null);
         
         for (int i = 0; i < services.length; i++) {

             PrintServiceAttribute attr = services[i].getAttribute(PrinterName.class);
             sPrinterName = ((PrinterName) attr).getValue();
             if(sPrinterName.contains("HC100"))
             impresoras.add(sPrinterName);
            
         }
         
         return impresoras;
		
	}
	
	public void imprimirPulsera(String printerName, String pacienteHash, String pacienteDNI, String pacienteHC, String nombreApellidoPaciente, String fechaNac) throws PrintException{
		PrintService psZebra = null;
        String sPrinterName = null;
        PrintService[] services = PrintServiceLookup.lookupPrintServices(null, null);
        
        for (int i = 0; i < services.length; i++) {

            PrintServiceAttribute attr = services[i].getAttribute(PrinterName.class);
            sPrinterName = ((PrinterName) attr).getValue();
            
            //printerName de la lista de impresoras conectadas por usb, hacer un servicio con esto!
            if (sPrinterName.toLowerCase().contains(printerName)) {
                psZebra = services[i];
                System.out.println(psZebra);
                break;
            }
        }

        if (psZebra == null) {
           throw new PrintException("Zebra printer not found.");
        }
        
        DocPrintJob job = psZebra.createPrintJob();

		
		
		String s = "${^XA~TA000~JSN^LT0^MNM^MTD^PON^PMN^LH0,0^JMA^PR2,2~SD21^JUS^LRN^CI0^XZ^XA^MMT^PW300^LL3300^LS0^BY260,260^FT287,2431^BXB,10,200,0,0,1,_^FH\\^FD"+pacienteHash+"^FS^FT98,1905^A0B,75,74^FH\\^FDDNI: "+pacienteDNI+"^FS^FT166,1905^A0B,42,40^FH\\^FDNHC: "+pacienteHC+"^FS^FT218,1905^A0B,42,40^FH\\^FD"+nombreApellidoPaciente+"^FS^FT270,1905^A0B,42,40^FH\\^FDFN: "+fechaNac+"^FS^PQ1,0,1,Y^XZ}$";

        byte[] by = s.getBytes();
        DocFlavor flavor = DocFlavor.BYTE_ARRAY.AUTOSENSE;
        Doc doc = new SimpleDoc(by, flavor, null);
        job.print(doc, null);

	}

}
