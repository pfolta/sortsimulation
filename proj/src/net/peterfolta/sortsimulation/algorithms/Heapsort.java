/*
 * Heapsort.java
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

public class Heapsort {
	
	private boolean interrupted = false;
	
	private void sift(int[] a, int l, int r, final int index) {
		int i;
		int j;
		int x;
		
		i = l;
		x = a[l];
		j = 2 * i + 1;
		
		if((j < r) && (a[j+1] > a[j])) {
			j++;
		}
		
		while((j <= r) && (a[j] > x)) {
			a[i] = a[j];
			i = j;
			j = j*2+1;
			
			if((j < r) && (a[j+1] > a[j])) {
				j++;
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
		
		a[i] = x;
	}
	
	public void sort(int[] a, final int index) {
		int l;
		int r;
		int tmp;
		
		for(l = (a.length - 2) / 2; l >= 0; l--) {
			if(interrupted) {
				break;
			}
			
			sift(a, l, a.length-1, index);
		}
		
		for(r = a.length - 1; r > 0; r--) {
			if(interrupted) {
				break;
			}
			
			tmp = a[0];
			a[0] = a[r];
			a[r] = tmp;
			sift(a, 0, r-1, index);
		}
	}

}