/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			GUI.java
 * Created:			2013/10/30
 * Last modified:	2014/03/21
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

package net.peterfolta.sortsimulation.gui;

import org.eclipse.swt.widgets.Display;

public class GUI extends Thread {
	
	private static Display display;
	
	private SplashScreen splashScreen;
	private MainWindow mainWindow;
	
	public void run() {
		display = getDisplay();
		showSplashScreen();
		
		while(!display.isDisposed()) {
			if(!display.readAndDispatch()) {
				display.sleep();
			}
		}
	}
	
	public Display getDisplay() {
		if(display == null) {
			display = new Display();
		}
		
		return display;
	}
	
	public SplashScreen getSplashScreen() {
		return splashScreen;
	}
	
	public MainWindow getMainWindow() {
		return mainWindow;
	}
	
	public void showSplashScreen() {
		splashScreen = new SplashScreen(display);
	}
	
	public void showMainWindow() {
		mainWindow = new MainWindow(display);
	}
	
	public void die() {
		display.dispose();
	}

}