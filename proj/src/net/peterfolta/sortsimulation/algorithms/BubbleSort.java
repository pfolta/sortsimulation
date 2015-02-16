/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2015 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.1
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Bubblesort.java
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

public class BubbleSort implements Sortable {
	
	private boolean interrupted = false;
	
	public void sort(int[] a, final int index) {
		for (int i = a.length-1; i >= 0 && !interrupted; i--) {
			for (int j = 0; j <= i-1 && !interrupted; j++) {
				if (a[j] > a[j+1]) {
					ArrayTools.swap(a, j, j+1);
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
		}
	}

}