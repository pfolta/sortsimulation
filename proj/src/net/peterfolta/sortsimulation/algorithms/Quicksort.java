/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Quicksort.java
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

package net.peterfolta.sortsimulation.algorithms;

import net.peterfolta.sortsimulation.common.ArrayTools;
import net.peterfolta.sortsimulation.main.Main;

public class Quicksort {
	
	private boolean interrupted = false;
	
	private void quicksort(int[] a, int bottom, int top, final int index) {
		int i = bottom;
		int j = top;
		int middle = (bottom + top) / 2;
		int x = a[middle];
		
		do {
			while(a[i] < x && !interrupted) i++;
			while(a[j] > x && !interrupted) j--;
			
			if(i <= j) {
				ArrayTools.swap(a, i, j);
				i++;
				j--;
			}
			
			try {
				Thread.sleep(Main.settings.getDelay().getDelay());
			} catch (InterruptedException exception) {
				interrupted = true;
				break;
			}
			
			Main.getGUI().getDisplay().asyncExec(new Runnable() {
				public void run() {
					Main.getGUI().getMainWindow().repaintCanvas(index);
				}
			});
		} while(i <= j && !interrupted);
		
		if(!interrupted) {
			if(bottom < j) quicksort(a, bottom, j, index);
			if(i < top) quicksort(a, i, top, index);
		}
	}
	
	public void sort(int[] a, final int index) {
		quicksort(a, 0, a.length-1, index);
	}

}