/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            Simulation.java
 * Created:         2008-11-29
 * Author:          Peter Folta <mail@peterfolta.net>
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
import net.peterfolta.sortsimulation.gui.GUI;

public class Simulation extends Thread {

    private SortingAlgorithms algorithm;
    private int index;
    private int[] a;

    private Simulation[] simulations;

    public void run() {
        algorithm.createSortable();
        Sortable sortable = algorithm.getSortable();
        sortable.sort(a, index);

        GUI.getInstance().getDisplay().asyncExec(() -> GUI.getInstance().getMainWindow().repaintCanvas(index));

        finished();
    }

    private synchronized void finished() {
        boolean finished = true;

        for (int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
            if (i != index) {
                try {
                    if (GUI.getInstance().getMainWindow().simulationThread.simulations[i].isAlive()) {
                        finished = false;
                    }
                } catch (Exception exception) {
                    exception.printStackTrace();
                }
            }
        }

        if (finished) {
            GUI.getInstance().getDisplay().asyncExec(() -> GUI.getInstance().getMainWindow().stopSimulation());
        }
    }

    public void startSimulation() {
        GUI.getInstance().getMainWindow().startSimulation();

        simulations = new Simulation[Main.settings.getSimultaneousSimulations()];

        for (int i = 0; i < simulations.length; i++) {
            simulations[i] = new Simulation();
            simulations[i].a = Main.array[i];
            simulations[i].algorithm = SortingAlgorithms.values()[GUI.getInstance().getMainWindow().sortCombo[i].getSelectionIndex()];
            simulations[i].index = i;
            simulations[i].start();
        }
    }

    public void stopSimulation() {
        for (Simulation simulation : simulations) {
            simulation.interrupt();
        }

        GUI.getInstance().getMainWindow().stopSimulation();
    }

}