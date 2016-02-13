/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            ShellSort.java
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

package net.peterfolta.sortsimulation.algorithms;

import net.peterfolta.sortsimulation.common.interfaces.Sortable;
import net.peterfolta.sortsimulation.gui.GUI;
import net.peterfolta.sortsimulation.main.Main;

public class ShellSort implements Sortable {

    private boolean interrupted = false;

    public void sort(int[] a, final int index) {
        int[] cols = {1391376, 463792, 198768, 86961, 33936, 13776, 4592, 1968, 861, 336, 112, 48, 21, 7, 3, 1};

        for (int i = 0; i < cols.length && !interrupted; i++) {
            int h = cols[i];

            for (int j = h; j < a.length && !interrupted; j++) {
                int k = j;
                int temp = a[k];

                while (k >= h && a[k - h] > temp && !interrupted) {
                    a[k] = a[k - h];
                    k = k - h;

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

                a[k] = temp;
            }
        }
    }

}