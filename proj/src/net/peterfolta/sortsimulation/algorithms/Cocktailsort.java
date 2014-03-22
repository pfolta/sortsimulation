/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Cocktailsort.java
 * Created:			2014/03/22
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

package net.peterfolta.sortsimulation.algorithms;

import net.peterfolta.sortsimulation.main.Main;

public class Cocktailsort {
	
	private boolean interrupted = false;
	
	public void sort(int[] a, final int index) {
		int tmp;
		int start = -1;
		int end = a.length - 2;
		
		boolean swapped;
			
		do {
			swapped = false;
			start++;
			
			for(int i = start; i <= end && !interrupted; i++) {
				if(a[i] > a[i+1]) {
					tmp = a[i];
					a[i] = a[i+1];
					a[i+1] = tmp;
					swapped = true;
				}
				
				try {
					Thread.sleep(Main.settings.getSimulationSpeed());
				} catch (InterruptedException exception) {
					interrupted = true;
					break;
				}
				
				Main.getGUI().getDisplay().asyncExec(new Runnable() {
					public void run() {
						Main.getGUI().getMainWindow().repaintCanvas(index);
					}
				});
			}
			
			if(!swapped) {
				break;
			}
			
			swapped = false;
			end--;
			
			for(int i = end; i >= start && !interrupted; i--) {
				if(a[i] > a[i+1]) {
					tmp = a[i];
					a[i] = a[i+1];
					a[i+1] = tmp;
					swapped = true;
				}
				
				try {
					Thread.sleep(Main.settings.getSimulationSpeed());
				} catch (InterruptedException exception) {
					interrupted = true;
					break;
				}
				
				Main.getGUI().getDisplay().asyncExec(new Runnable() {
					public void run() {
						Main.getGUI().getMainWindow().repaintCanvas(index);
					}
				});
			}
		} while(swapped && !interrupted);
	}

}