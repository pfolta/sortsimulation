/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2015 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.1
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			LicenseDialog.java
 * Created:			2014/3/21
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
import net.peterfolta.sortsimulation.main.Main;

import org.eclipse.swt.SWT;
import org.eclipse.swt.browser.Browser;
import org.eclipse.swt.browser.LocationEvent;
import org.eclipse.swt.browser.LocationListener;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.program.Program;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Shell;

public class LicenseDialog {
	
	private Shell licenseShell;
	
	private GridLayout gridLayout;
	private GridData gridData;
	private FillLayout fillLayout;
	
	private Composite browserComposite;
	private Browser browser;
	private Button closeButton;
	
	private int locationCounter = 0;
	
	public LicenseDialog(Shell parent) {
		licenseShell = new Shell(parent, SWT.DIALOG_TRIM | SWT.APPLICATION_MODAL);
		
		gridLayout = new GridLayout();
		gridLayout.marginHeight = 10;
		gridLayout.marginWidth = 10;
		gridLayout.verticalSpacing = 0;
		
		licenseShell.setText("GNU General Public License");
		licenseShell.setLayout(gridLayout);
		licenseShell.setBackgroundMode(SWT.INHERIT_DEFAULT);
		
		gridData = new GridData();
		gridData.horizontalAlignment = GridData.FILL;
		gridData.verticalAlignment = GridData.FILL;
		gridData.grabExcessHorizontalSpace = true;
		gridData.grabExcessVerticalSpace = true;
		
		fillLayout = new FillLayout();
		fillLayout.marginHeight = 0;
		fillLayout.marginWidth = 0;
		fillLayout.spacing = 0;
		
		browserComposite = new Composite(licenseShell, SWT.BORDER);
		browserComposite.setLayoutData(gridData);
		browserComposite.setLayout(fillLayout);
		
		browser = new Browser(browserComposite, SWT.NONE);
		browser.setUrl(ResourceLoader.getHTMLLicense());
		browser.addListener(SWT.MenuDetect, new Listener() {
			public void handleEvent(Event event) {
				event.doit = false;
			}
		});
		browser.addLocationListener(new LocationListener() {
			public void changed(LocationEvent event) {
			}

			public void changing(LocationEvent event) {
				/*
				 * This snippet prevents links from being opened within the browser component and launches the system browser instead
				 */
				if (locationCounter == 0) {
					locationCounter++;
				} else {
					event.doit = false;
					Program.launch(event.location);
				}
			}
		});
		
		gridData = new GridData();
		gridData.grabExcessHorizontalSpace = true;
		gridData.horizontalAlignment = GridData.END;
		gridData.minimumWidth = 100;
		gridData.verticalAlignment = GridData.FILL;
		gridData.verticalIndent = 10;
		
		closeButton = new Button(licenseShell, SWT.PUSH);
		closeButton.setFocus();
		closeButton.setLayoutData(gridData);
		closeButton.setText(Main.language.getTranslationContent("OK"));
		closeButton.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				licenseShell.close();
			}
		});
		
		licenseShell.setDefaultButton(closeButton);
		licenseShell.setMinimumSize(700, 450);
		licenseShell.pack();
		
		Main.getGUI().centerShellOnParent(licenseShell, parent);
		
		licenseShell.open();
	}
	
}