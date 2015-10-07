/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2015 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.1
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Platform.java
 * Created:			2015/2/16
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

package net.peterfolta.sortsimulation.common;

public class Platform {
	
	public static boolean isMac() {
		if (System.getProperty("os.name").toLowerCase().startsWith("mac")) {
			return true;
		}
		
		return false;
	}
	
	public static boolean isLinux() {
		if (System.getProperty("os.name").toLowerCase().startsWith("linux")) {
			return true;
		}
		
		return false;
	}
	
	public static boolean isWindows() {
		if (System.getProperty("os.name").toLowerCase().startsWith("windows")) {
			return true;
		}
		
		return false;
	}
	
}