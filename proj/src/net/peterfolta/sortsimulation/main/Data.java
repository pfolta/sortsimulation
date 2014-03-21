/*
 * Data.java
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

import net.peterfolta.sortsimulation.tools.ResourceLoader;

import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Display;


public class Data {
	
	/*
	 * GENERAL PROGRAM INFORMATION
	 */
	
	public static final String APP_NAME = "SortSimulation";
	
	public static final String APP_VERSION = "2.0.0";
	
	public static final String APP_PFID = "pfID-1395399330";
	
	public static final String APP_COPYRIGHT_HOLDER = "Peter Folta";
	
	public static final String APP_COPYRIGHT_YEAR = "2008-2014";
	
	public static final String APP_URL = "http://www.peterfolta.net/software/sortsimulation";
	
	public static final String[] APP_AUTHORS = {
		"Folta, Peter"
	};
	
	public static final String[] APP_CONTRIBUTORS = {
		"Allison, Chloë Louise",
		"Folta, Lucia Sonja",
		"Folta, Peter",
		"Müllner, Jan Sebastian"
	};
	
	public static final String APP_REQUIRED_JVM = "1.6";
	
	public static final Image[] APP_ICONS = {
		ResourceLoader.loadImage(Display.getCurrent(), "icon_16x16.png"),
		ResourceLoader.loadImage(Display.getCurrent(), "icon_32x32.png"),
		ResourceLoader.loadImage(Display.getCurrent(), "icon_64x64.png")
	};
	
	/*
	 * PROGRAM SPECIFIC CONSTANTS
	 */
	
	public static String[] sortingAlgorithms = {
		Main.language.getTranslationContent("Bubblesort"),
		Main.language.getTranslationContent("Heapsort"),
		Main.language.getTranslationContent("Insertionsort"),
		Main.language.getTranslationContent("Mergesort"),
		Main.language.getTranslationContent("Quicksort"),
		Main.language.getTranslationContent("Selectionsort"),
		Main.language.getTranslationContent("Shellsort"),
	};
	
	public static String[] backgroundNames = {
		Main.language.getTranslationContent("White"),
		Main.language.getTranslationContent("Grey"),
		Main.language.getTranslationContent("Black")
	};
	
	public static String[] colorNames = {
		Main.language.getTranslationContent("Blue"),
		Main.language.getTranslationContent("Brown"),
		Main.language.getTranslationContent("Cyan"),
		Main.language.getTranslationContent("Fuchsia"),
		Main.language.getTranslationContent("Yellow"),
		Main.language.getTranslationContent("Green"),
		Main.language.getTranslationContent("Red"),
		Main.language.getTranslationContent("Black")
	};
	
	public static final Color[] BACKGROUNDS = {
		new Color(null, 255, 255, 255),
		new Color(null, 192, 192, 192),
		new Color(null, 0, 0, 0)
	};
	
	public static final Color[] COLORS = {
		new Color(null, 0, 0, 255),
		new Color(null, 139, 69, 19),
		new Color(null, 0, 255, 255),
		new Color(null, 255, 0, 255),
		new Color(null, 255, 255, 0),
		new Color(null, 34, 139, 34),
		new Color(null, 255, 0, 0),
		new Color(null, 0, 0, 0)
	};
	
	public static final int LENGTH_OF_ARRAY = 100;
	
	public static final int VERY_SHORT_DELAY = 1;
	
	public static final int SHORT_DELAY = 5;
	
	public static final int MIDDLE_DELAY = 25;
	
	public static final int LONG_DELAY = 100;
	
	public static final int VERY_LONG_DELAY = 250;
	
	public static final int FILL_RANDOM = 0;
	
	public static final int FILL_INVERS = 1;
	
}