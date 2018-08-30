package com.teknotech.idpacientes.utils;

public class FingerLabelUtil {
	public static String getPrint(String id) {
		switch (id) {
		case "1":
			return "Menique Izquierdo";
		case "2":
			return "Anular Izquierdo";
		case "3":
			return "Medio Izquierdo";
		case "4":
			return "Indice Izquierdo";
		case "5":
			return  "Pulgar Izquierdo";
		case "6":
			return "Pulgar Derecho";
		case "7":
			return "Indice Derecho";
		case "8":
			return "Medio Derecho";
		case "9":
			return "Anular Derecho";
		case "10":
			return "Menique Derecho";
		}
		return null;
	}
}
