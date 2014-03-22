/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Data.java
 * Created:			2008/11/29
 * Last modified:	2014/03/22
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

import net.peterfolta.sortsimulation.common.ResourceLoader;

import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Display;

public class Data {
	
	/*
	 * GENERAL PROGRAM INFORMATION
	 */
	
	public static final String APP_NAME = "SortSimulation";
	
	public static final String APP_DESCRIPTION = "A visual representation of sorting algorithms";
	
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
		Main.language.getTranslationContent("Cocktailsort"),
		Main.language.getTranslationContent("Gnomesort"),
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
	
	public static final Color[] BACKGROUNDS = {
		new Color(null, 255, 255, 255),
		new Color(null, 192, 192, 192),
		new Color(null, 0, 0, 0)
	};
	
	public static final int LENGTH_OF_ARRAY = 100;
	
}