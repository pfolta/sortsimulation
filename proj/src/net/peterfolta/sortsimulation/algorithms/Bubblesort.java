/*
 * Bubblesort.java
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

public class Bubblesort {
	
	private boolean interrupted = false;
	
	public void sort(int[] a, final int index) {
		int tmp;
		
		for(int i = a.length-1; i >= 0; i--) {
			if(interrupted) {
				break;
			}
			
			for(int j = 0; j <= i-1; j++) {
				if(a[j] > a[j+1]) {
					tmp = a[j];
					a[j] = a[j+1];
					a[j+1] = tmp;
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

}