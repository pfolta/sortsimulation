/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Simulation.java
 * Created:			2008/11/29
 * Last modified:	2014/03/23
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

package net.peterfolta.sortsimulation.main;

import net.peterfolta.sortsimulation.common.enums.SortingAlgorithms;
import net.peterfolta.sortsimulation.common.interfaces.Sortable;

public class Simulation extends Thread {
	
	private SortingAlgorithms algorithm;
	private int index;
	private int[] a;
	
	private Simulation[] simulation;
	
	public void run() {
		algorithm.createSortable();
		Sortable sortable = algorithm.getSortable();
		sortable.sort(a, index);
		
		Main.getGUI().getDisplay().asyncExec(new Runnable() {
			public void run() {
				Main.getGUI().getMainWindow().repaintCanvas(index);
			}
		});

		finished();
	}
	
	private synchronized void finished() {
		boolean finished = true;
		for(int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
			if(i != index) {
				try {
					if(Main.getGUI().getMainWindow().simulationThread.simulation[i].isAlive()) {
						finished = false;
					}
				} catch(Exception exception) {
				}
			}
		}
		
		if(finished) {
			Main.getGUI().getDisplay().asyncExec(new Runnable() {
				public void run() {
					Main.getGUI().getMainWindow().stopSimulation();
				}
			});
		}
	}

	public void startSimulation() {
		Main.getGUI().getMainWindow().startSimulation();
		
		simulation = new Simulation[Main.settings.getSimultaneousSimulations()];
		
		for(int i = 0; i < simulation.length; i++) {
			simulation[i] = new Simulation();
			simulation[i].a = Main.array[i];
			simulation[i].algorithm = SortingAlgorithms.values()[Main.getGUI().getMainWindow().sortCombo[i].getSelectionIndex()];
			simulation[i].index = i;
			simulation[i].start();
		}
	}
	
	public void stopSimulation() {
		for(int i = 0; i < simulation.length; i++) {
			simulation[i].interrupt();
		}
		
		Main.getGUI().getMainWindow().stopSimulation();
	}

}