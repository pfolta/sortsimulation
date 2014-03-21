/*
 * Quicksort.java
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

package net.peterfolta.sortsimulation.algorithms;

import net.peterfolta.sortsimulation.main.Main;

public class Quicksort {
	
	private boolean interrupted = false;
	
	private void quicksort(int[] a, int bottom, int top, final int index) {
		int tmp;
		int i = bottom;
		int j = top;
		int middle = (bottom + top) / 2;
		int x = a[middle];
		
		do {
			while(a[i] < x) i++;
			while(a[j] > x) j--;
			
			if(i <= j) {
				tmp = a[i];
				a[i] = a[j];
				a[j] = tmp;
				i++;
				j--;
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