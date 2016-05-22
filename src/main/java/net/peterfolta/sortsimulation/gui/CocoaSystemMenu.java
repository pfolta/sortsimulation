/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            CocoaSystemMenu.java
 * Created:         2015-02-17
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

package net.peterfolta.sortsimulation.gui;

import net.peterfolta.sortsimulation.main.Main;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Menu;
import org.eclipse.swt.widgets.MenuItem;
import org.eclipse.swt.widgets.Shell;

public class CocoaSystemMenu {

    Menu systemMenu;
    Shell mainShell;

    public CocoaSystemMenu(Menu systemMenu, Shell mainShell) {
        if (systemMenu != null) {
            this.systemMenu = systemMenu;
            this.mainShell = mainShell;

            systemMenu.setEnabled(true);

            MenuItem aboutItem = getItem(SWT.ID_ABOUT);
            MenuItem quitItem = getItem(SWT.ID_QUIT);

            if (aboutItem != null) {
                aboutItem.addListener(SWT.Selection, event -> about());
            }

            if (quitItem != null) {
                quitItem.addListener(SWT.Selection, event -> quit());
            }

            disableItem(SWT.ID_PREFERENCES);
        }
    }

    private MenuItem getItem(int id) {
        MenuItem[] items = systemMenu.getItems();

        for (MenuItem item : items) {
            if (item.getID() == id) {
                return item;
            }
        }

        return null;
    }

    private void disableItem(int id) {
        MenuItem[] items = systemMenu.getItems();

        for (MenuItem item : items) {
            if (item.getID() == id) {
                item.setEnabled(false);
            }
        }
    }

    private void about() {
        GUI.getInstance().showAboutDialog(mainShell);
    }

    private void quit() {
        Main.exit(0);
    }

}