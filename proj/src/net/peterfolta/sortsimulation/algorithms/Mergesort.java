/*
 * Mergesort.java
 * Copyright (C) 2008-2009 Peter Folta. All rights reserved.
 * 
 * Version: 1.2.1
 * Created: 2008-11-30
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

public class Mergesort {
	
	private int[] a;
	private int[] b;
	private int n;
	
	private boolean interrupted = false;
	
	public void sort(int[] a, final int index) {
		this.a = a;
		n = a.length;
		b = new int[n];
		mergesort(0, n-1, index);
	}
	
	private void mergesort(int lo, int hi, final int index) {
		if(lo < hi) {
			int m = (lo + hi) / 2;
			mergesort(lo, m, index);
			mergesort(m+1, hi, index);
			merge(lo, m, hi, index);
		}
	}
	
	private void merge(int lo, int m, int hi, final int index) {
		int i = lo;
		int j = hi;
		int k = lo;
		
		while(i <= m) {
			b[k++] = a[i++];
		}
		
		while(j > m) {
			b[k++] = a[j--];
		}
		
		i = lo;
		j = hi;
		k = lo;
		
		while(i <= j && !interrupted) {
			if(b[i] <= b[j]) {
				a[k++] = b[i++];
			} else {
				a[k++] = b[j--];
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
	}

}