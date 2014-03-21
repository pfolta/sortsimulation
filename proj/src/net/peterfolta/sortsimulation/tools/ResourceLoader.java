/*
 * ResourceLoader.java
 * Copyright (C) 2008-2009 Peter Folta. All rights reserved.
 * 
 * Version: 1.2.1
 * Created: 2008-12-14
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

package net.peterfolta.sortsimulation.tools;

import net.peterfolta.sortsimulation.main.Main;

import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Display;


public class ResourceLoader {
	
	public static Image loadImage(Display display, String filename) {
		Image tmp = null;
		
		try {
			tmp = new Image(display, "res/img/" + filename);
		} catch(Exception exception) {
			Main.exit(3);
		}
		
		return tmp;
	}

}