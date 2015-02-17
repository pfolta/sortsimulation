/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2015 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.1
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			GUI.java
 * Created:			2013/10/30
 * Last modified:	2015/2/17
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

import net.peterfolta.sortsimulation.main.Data;

import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;

public class GUI {
	
	private Display display;
	
	private SplashScreen splashScreen;
	private MainWindow mainWindow;
	
	private AboutDialog aboutDialog;
	private LicenseDialog licenseDialog;
	
	public GUI() {
		Display.setAppName(Data.APP_NAME);
		Display.setAppVersion(Data.APP_VERSION);
		
		this.display = Display.getDefault();
	}
	
	public void start() {
		showSplashScreen();
		
		while (!display.isDisposed()) {
			if (!display.readAndDispatch()) {
				display.sleep();
			}
		}
	}
	
	public Display getDisplay() {
		return this.display;
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
	
	public void showAboutDialog(Shell parent) {
		if (aboutDialog == null || aboutDialog.getShell().isDisposed()) {
			aboutDialog = new AboutDialog(parent);
		} else {
			aboutDialog.getShell().forceActive();
		}
	}
	
	public void showLicenseDialog(Shell parent) {
		if (licenseDialog == null || licenseDialog.getShell().isDisposed()) {
			licenseDialog = new LicenseDialog(parent);
		} else {
			licenseDialog.getShell().forceActive();
		}
	}
	
	public void centerShellOnPrimaryMonitor(Shell shell) {
		int monitorWidth	= display.getPrimaryMonitor().getBounds().width;
		int monitorHeight	= display.getPrimaryMonitor().getBounds().height;
		
		int shellWidth 		= shell.getSize().x;
		int shellHeight 	= shell.getSize().y;
		
		int shellX			= (monitorWidth - shellWidth)/2;
		int shellY			= (monitorHeight - shellHeight)/2;
		
		shell.setLocation(shellX, shellY);
	}
	
	public void centerShellOnParent(Shell shell, Shell parent) {
		int parentX 		= parent.getBounds().x;
		int parentY			= parent.getBounds().y;
		int parentWidth		= parent.getBounds().width;
		int parentHeight	= parent.getBounds().height;
		
		int shellWidth 		= shell.getSize().x;
		int shellHeight 	= shell.getSize().y;
		
		int shellX			= parentX + (parentWidth - shellWidth)/2;
		int shellY			= parentY + (parentHeight - shellHeight)/2;
		
		shell.setLocation(shellX, shellY);
	}
	
	public void die() {
		getMainWindow().stopSimulation();
		
		display.dispose();
	}

}