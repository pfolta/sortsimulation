/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2015 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.1
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Data.java
 * Created:			2008/11/29
 * Last modified:	2015/3/8
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

import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Display;

public class Data {
	
	/*
	 * GENERAL PROGRAM INFORMATION
	 */
	
	public static final String APP_NAME = "SortSimulation";
	
	public static final String APP_DESCRIPTION = "A visual representation of sorting algorithms";
	
	public static final String APP_VERSION = "2.0.1 Alpha";
	
	public static final String APP_PFID = "pfID-1425805491";
	
	public static final String APP_COPYRIGHT_HOLDER = "Peter Folta";
	
	public static final String APP_COPYRIGHT_YEAR = "2008-2015";
	
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
		ResourceLoader.loadImage(Display.getCurrent(), "icon_48x48.png"),
		ResourceLoader.loadImage(Display.getCurrent(), "icon_64x64.png")
	};
	
	/*
	 * PROGRAM SPECIFIC CONSTANTS
	 */
	
	public static final int LENGTH_OF_ARRAY = 100;
	
}