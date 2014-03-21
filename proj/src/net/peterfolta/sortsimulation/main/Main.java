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
 * Last modified:	2014/03/21
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

import net.peterfolta.sortsimulation.gui.GUI;
import net.peterfolta.sortsimulation.tools.CustomMessageBox;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Shell;

public class Main {
	
	private static GUI gui;
	
	public static Settings settings;
	public static Language language;
	
	public static int[][] array;
	
	public static void main(String[] args) {
		printStartUpNotice();
		checkJVM();
		
		settings = new Settings();
		language = new Language();
		
		if(args.length != 0) {
			try {
				int simultaneous = Integer.parseInt(args[0]);
				settings.setSimultaenousSimulations(simultaneous);
			} catch(Exception exception) {
				exit(3);
			}
		}
		
		new CreateArray(Data.FILL_RANDOM);
		
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
	
	public static void exit(int status) {
		/*
		 * Exit status codes:
		 * 
		 * 0 Normal shutdown
		 * 1 Incompatible JVM
		 * 2 Missing or corrupted resource files
		 * 3 Invalid program arguments
		 */
		
		switch(status) {
		case 1:
			new CustomMessageBox(new Shell(), "The currently installed Java Runtime is incompatible with " + Data.APP_NAME + ".\nPlease verify your Java Runtime version is greater than or equal to the required version.\n\nRequired JVM version: " + Data.APP_REQUIRED_JVM + "\nInstalled JVM version: " + System.getProperty("java.runtime.version") + "\n\nError: A fatal error has occured. Program will exit (0x" + Integer.toHexString(status) + ").", Data.APP_NAME, SWT.ICON_ERROR, SWT.OK);
			break;
		case 2:
			new CustomMessageBox(new Shell(), "Failed to read or parse resource file(s). The file(s) may be missing or corrupted.\n\nError: A fatal error has occured. Program will exit (0x" + Integer.toHexString(status) + ").", Data.APP_NAME, SWT.ICON_ERROR, SWT.OK);
			break;
		case 3:
			new CustomMessageBox(new Shell(), "Failed to parse program arguments: Unrecognized options or illegal arguments provided.\n\nError: A fatal error has occured. Program will exit (0x" + Integer.toHexString(status) + ").", Data.APP_NAME, SWT.ICON_ERROR, SWT.OK);
			break;
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
		
		Data.sortingAlgorithms = new String[] {
			Main.language.getTranslationContent("Bubblesort"),
			Main.language.getTranslationContent("Heapsort"),
			Main.language.getTranslationContent("Insertionsort"),
			Main.language.getTranslationContent("Mergesort"),
			Main.language.getTranslationContent("Quicksort"),
			Main.language.getTranslationContent("Selectionsort"),
			Main.language.getTranslationContent("Shellsort"),
		};
		
		Data.backgroundNames = new String[] {
			Main.language.getTranslationContent("White"),
			Main.language.getTranslationContent("Grey"),
			Main.language.getTranslationContent("Black")
		};
		
		Data.colorNames = new String[] {
			Main.language.getTranslationContent("Blue"),
			Main.language.getTranslationContent("Brown"),
			Main.language.getTranslationContent("Cyan"),
			Main.language.getTranslationContent("Fuchsia"),
			Main.language.getTranslationContent("Yellow"),
			Main.language.getTranslationContent("Green"),
			Main.language.getTranslationContent("Red"),
			Main.language.getTranslationContent("Black")
		};
		
		gui.getMainWindow().setCaptions();
	}
	
}