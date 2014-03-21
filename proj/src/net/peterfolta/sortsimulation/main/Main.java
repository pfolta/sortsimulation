/*
 * Main.java
 * Copyright (C) 2008-2009 Peter Folta. All rights reserved.
 * 
 * Version: 1.2.1
 * Created: 2008-11-29
 * Website: http://www.peterfolta.de/software/sortsimulation
 * 
 * SortSimulation is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
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
		settings = new Settings();
		language = new Language();
		
		if(args.length != 0) {
			try {
				int simultaneous = Integer.parseInt(args[0]);
				settings.setSimultaenousSimulations(simultaneous);
			} catch(Exception exception) {
			}
		}
		
		new CreateArray(Data.FILL_RANDOM);
		
		gui = new GUI();
		gui.start();
	}
	
	public static void exit(int status) {
		/*
		 * Exit status codes:
		 * 
		 * 0 Everything ok, normal exit
		 * 1 Incompatible JVM
		 * 2 Error reading/parsing language file (may be corrupt or missing)
		 */
		
		switch(status) {
		case 1:
			new CustomMessageBox(new Shell(), "FATAL ERROR:\n\nThe currently installed JVM is incompatible with " + Data.APP_NAME + ".\nPlease verify your JVM version is greater or equal than the required version.\n\nRequired JVM version: \nCurrent JVM version: \n\nError-Code: 1", Data.APP_NAME, SWT.ICON_ERROR, SWT.OK);
			break;
		case 2:
			new CustomMessageBox(new Shell(), "FATAL ERROR:\n\nFailed to read or parse language file(s). The file(s) may be corrupt or missing.\n\nError-Code: 2", Data.APP_NAME, SWT.ICON_ERROR, SWT.OK);
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