/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			ResourceLoader.java
 * Created:			2008/12/14
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

package net.peterfolta.sortsimulation.common;

import net.peterfolta.sortsimulation.main.Main;

import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Display;

public class ResourceLoader {
	
	public static Image loadImage(Display display, String filename) {
		Image tmp = null;
		
		try {
			tmp = new Image(display, "res/img/" + filename);
		} catch(Exception exception) {
			Main.exit(2);
		}
		
		return tmp;
	}
	
	public static String getHTMLLicense() {
		return "file:///" + System.getProperty("user.dir") + "/res/doc/license.html";
	}

}