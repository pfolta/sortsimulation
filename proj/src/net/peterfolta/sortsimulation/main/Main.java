/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Main.java
 * Created:			2008/11/29
 * Last modified:	2014/03/24
 * Author:			Peter Folta <mail@peterfolta.net>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package net.peterfolta.sortsimulation.main;

import net.peterfolta.sortsimulation.common.enums.Delay;
import net.peterfolta.sortsimulation.common.enums.FillMode;
import net.peterfolta.sortsimulation.gui.CustomMessageBox;
import net.peterfolta.sortsimulation.gui.GUI;

import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;

public class Main {
	
	private static GUI gui;
	
	public static Settings settings;
	public static Language language;
	
	public static int[][] array;
	
	public static void main(String[] args) {
		printStartUpNotice();
		checkJVM();
		checkLibraries();
		
		settings = new Settings(Delay.MIDDLE_DELAY, new Color(Display.getCurrent(), 255, 255, 255), new Color(Display.getCurrent(), 0, 128, 255), FillMode.RANDOM, 3);
		language = new Language();
		
		if(args.length != 0) {
			try {
				int simultaneous = Integer.parseInt(args[0]);
				settings.setSimultaenousSimulations(simultaneous);
			} catch(Exception exception) {
				exit(4);
			}
		}
		
		new CreateArray(settings.getFillMode());
		
		gui = new GUI();
		gui.start();
	}
	
	private static void printStartUpNotice() {
		System.out.println(
			Data.APP_NAME + " - " + Data.APP_DESCRIPTION + "\n" +
			"Copyright (C) " + Data.APP_COPYRIGHT_YEAR + " " + Data.APP_COPYRIGHT_HOLDER + ". All rights reserved.\n" +
			"\n" +
			"This program is free software: you can redistribute it and/or modify\n" +
			"it under the terms of the GNU General Public License as published by\n" +
			"the Free Software Foundation, either version 3 of the License, or\n" +
			"(at your option) any later version.\n" +
			"\n" +
			"This program is distributed in the hope that it will be useful,\n" +
			"but WITHOUT ANY WARRANTY; without even the implied warranty of\n" +
			"MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n" +
			"GNU General Public License for more details.\n" +
			"\n" +
			"You should have received a copy of the GNU General Public License\n" +
			"along with this program.  If not, see <http://www.gnu.org/licenses/>.");
	}
	
	private static void checkJVM() {
		float required = Float.parseFloat(Data.APP_REQUIRED_JVM);
		float present = Float.parseFloat(System.getProperty("java.runtime.version").substring(0, 3));
		
		if(present < required) {
			exit(1);
		}
	}
	
	private static void checkLibraries() {
		try {
			Class.forName("org.jdom.Document");
			Class.forName("org.jdom.Element");
			Class.forName("org.jdom.input.SAXBuilder");
		} catch(ClassNotFoundException exception) {
			exit(2);
		}
	}
	
	/*
	 * Exit status codes:
	 * 
	 * 0 Normal shutdown
	 * 1 Incompatible JVM
	 * 2 Missing or corrupted libraries
	 * 3 Missing or corrupted resource files
	 * 4 Invalid program arguments
	 */
	public static void exit(int status) {
		String message = null;
		
		switch(status) {
			case 1:
				message = "The currently installed Java Runtime is incompatible with " + Data.APP_NAME + ".\nPlease verify your Java Runtime version is greater than or equal to the required version.\n\nRequired JVM version: " + Data.APP_REQUIRED_JVM + "\nInstalled JVM version: " + System.getProperty("java.runtime.version");
				break;
			case 2:
				message = "Failed to read or parse library file(s). The file(s) may be missing or corrupted.";
				break;
			case 3:
				message = "Failed to read or parse resource file(s). The file(s) may be missing or corrupted.";
				break;
			case 4:
				message = "Failed to parse program arguments: Unrecognized options or illegal arguments provided.";
				break;
		}
		
		if(status != 0) {
			new CustomMessageBox(new Shell(), message + "\n\nError: A fatal error has occured. Program will exit (0x" + Integer.toHexString(status) + ").", Data.APP_NAME, SWT.ICON_ERROR, SWT.OK);
		}
		
		try {
			getGUI().die();
		} catch(Exception exception) {
		}
		
		System.exit(status);
	}
	
	public static GUI getGUI() {
		return gui;
	}
	
	public static void changeLanguage() {
		language = new Language();
		
		gui.getMainWindow().setCaptions();
	}
	
}