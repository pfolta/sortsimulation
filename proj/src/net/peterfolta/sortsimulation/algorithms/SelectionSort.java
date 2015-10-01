/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2015 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.1
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Selectionsort.java
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
import net.peterfolta.sortsimulation.gui.GUI;
import net.peterfolta.sortsimulation.main.Main;

public class SelectionSort implements Sortable {
	
	private boolean interrupted = false;
	
	public void sort(int[] a, final int index) {
		for (int i = 0; i < a.length && !interrupted; i++) {
			for (int j = i+1; j < a.length && !interrupted; j++) {
				if (a[j] < a[i]) {
					ArrayTools.swap(a, i, j);
				}
				
				try {
					Thread.sleep(Main.settings.getDelay().getDelay());
				} catch (InterruptedException exception) {
					interrupted = true;
					break;
				}
				
				GUI.getInstance().getDisplay().asyncExec(new Runnable() {
					public void run() {
						GUI.getInstance().getMainWindow().repaintCanvas(index);
					}
				});
			}
		}
	}

}