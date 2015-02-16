/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2015 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.1
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			SplashScreen.java
 * Created:			2013/10/30
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

package net.peterfolta.sortsimulation.gui;

import net.peterfolta.sortsimulation.common.ResourceLoader;
import net.peterfolta.sortsimulation.main.Data;
import net.peterfolta.sortsimulation.main.Main;

import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Cursor;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.program.Program;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Link;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Shell;

public class SplashScreen {
	
	private Display display;
	private Shell splashShell;
	private GridLayout gridLayout;
	private GridData gridData;
	
	private Label versionLabel;
	private Label copyrightLabel;
	private Link websiteLink;
	
	public SplashScreen(Display display) {
		this.display = display;
		
		splashShell = new Shell(display, SWT.NO_TRIM | SWT.APPLICATION_MODAL | SWT.ON_TOP);
		
		gridLayout = new GridLayout();
		gridLayout.marginHeight = 25;
		gridLayout.marginWidth = 25;
		gridLayout.verticalSpacing = 0;
		
		splashShell.setAlpha(0);
		splashShell.setCursor(new Cursor(display, SWT.CURSOR_WAIT));
		splashShell.setText(Data.APP_NAME);
		splashShell.setImages(Data.APP_ICONS);
		splashShell.setBackgroundImage(ResourceLoader.loadImage(display, "splash_550x300.png"));
		splashShell.setLayout(gridLayout);
		splashShell.setBackgroundMode(SWT.INHERIT_DEFAULT);
		
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.horizontalAlignment = SWT.RIGHT;
		
		versionLabel = new Label(splashShell, SWT.NONE);
		versionLabel.setText(Main.language.getTranslationContent("Version").replaceAll("%1", Data.APP_VERSION) + " · " + Data.APP_PFID);
		versionLabel.setForeground(new Color(display, 255, 255, 255));
		versionLabel.setLayoutData(gridData);
		
		gridData = new GridData(GridData.FILL_VERTICAL);
		gridData.horizontalAlignment = SWT.CENTER;
		gridData.verticalAlignment = SWT.BOTTOM;
		
		copyrightLabel = new Label(splashShell, SWT.NONE);
		copyrightLabel.setText(Main.language.getTranslationContent("Copyright").replaceAll("%1", Data.APP_COPYRIGHT_YEAR).replaceAll("%2", Data.APP_COPYRIGHT_HOLDER));
		copyrightLabel.setForeground(new Color(display, 255, 255, 255));
		copyrightLabel.setLayoutData(gridData);
		
		gridData = new GridData();
		gridData.horizontalAlignment = SWT.CENTER;
		
		websiteLink = new Link(splashShell, SWT.NONE);
		websiteLink.setText("<A>" + Data.APP_URL + "</A>");
		websiteLink.setLayoutData(gridData);
		websiteLink.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				Program.launch(Data.APP_URL);
			}
		});
		
		splashShell.setSize(550, 300);
		
		Main.getGUI().centerShellOnPrimaryMonitor(splashShell);
		
		splashShell.open();
		splashShell.forceFocus();
		
		fadeIn();
	}
	
	private void fadeIn() {
		display.asyncExec(new Runnable() {
			public void run() {
				for (int i = 0; i <= 255; i++) {
					splashShell.setAlpha(i);
					splashShell.update();
					try {
						Thread.sleep(1);
					} catch (InterruptedException exception) {
					}
				}
				
				try {
					Thread.sleep(500);
				} catch (InterruptedException exception) {
				}
				
				Main.getGUI().showMainWindow();
			}
		});
	}
	
	public void fadeOut() {
		display.asyncExec(new Runnable() {
			public void run() {
				try {
					Thread.sleep(500);
				} catch (InterruptedException exception) {
				}
				
				for (int i = 255; i >= 0; i--) {
					splashShell.setAlpha(i);
					splashShell.update();
					try {
						Thread.sleep(1);
					} catch (InterruptedException exception) {
					}
				}
				
				splashShell.close();
			}
		});
	}
	
}