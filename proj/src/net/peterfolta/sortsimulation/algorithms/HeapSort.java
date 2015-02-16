/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2015 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.1
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Heapsort.java
 * Created:			2008/11/29
 * Last modified:	2015/2/16
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
import net.peterfolta.sortsimulation.common.interfaces.Sortable;
import net.peterfolta.sortsimulation.main.Main;

public class HeapSort implements Sortable {
	
	private boolean interrupted = false;
	
	private void sift(int[] a, int l, int r, final int index) {
		int i;
		int j;
		int x;
		
		i = l;
		x = a[l];
		j = 2 * i + 1;
		
		if ((j < r) && (a[j+1] > a[j])) {
			j++;
		}
		
		while ((j <= r) && (a[j] > x) && !interrupted) {
			a[i] = a[j];
			i = j;
			j = j*2+1;
			
			if ((j < r) && (a[j+1] > a[j])) {
				j++;
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
		}
		
		a[i] = x;
	}
	
	public void sort(int[] a, final int index) {
		int l;
		int r;
		
		for (l = (a.length - 2) / 2; l >= 0 && !interrupted; l--) {
			sift(a, l, a.length-1, index);
		}
		
		for (r = a.length - 1; r > 0 && !interrupted; r--) {
			ArrayTools.swap(a, 0, r);
			sift(a, 0, r-1, index);
		}
	}

}