/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			AboutDialog.java
 * Created:			2008/11/29
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

import net.peterfolta.sortsimulation.main.Data;
import net.peterfolta.sortsimulation.main.Main;
import net.peterfolta.sortsimulation.tools.ResourceLoader;

import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.program.Program;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Link;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Shell;

public class AboutDialog {
	
	private Display display;
	private Shell aboutShell;
	
	private GridLayout gridLayout;
	private GridData gridData;
	
	private Label versionLabel;
	private Label authorsInfoLabel;
	private Label authorsLabel;
	private Label contributorsInfoLabel;
	private Label contributorsLabel;
	private Label copyrightLabel;
	private Link websiteLink;
	
	private Composite buttonComposite;
	private Button licenseButton;
	private Button closeButton;
	
	public AboutDialog(Shell parent) {
		display = Main.getGUI().getDisplay();
		aboutShell = new Shell(parent, SWT.DIALOG_TRIM | SWT.APPLICATION_MODAL);
		
		gridLayout = new GridLayout();
		gridLayout.marginHeight = 25;
		gridLayout.marginWidth = 25;
		gridLayout.verticalSpacing = 3;
		
		aboutShell.setText(Data.APP_NAME);
		aboutShell.setBackgroundImage(ResourceLoader.loadImage(display, "about_550x300.png"));
		aboutShell.setLayout(gridLayout);
		aboutShell.setBackgroundMode(SWT.INHERIT_DEFAULT);
		
		gridData = new GridData();
		gridData.verticalIndent = 75;
		
		versionLabel = new Label(aboutShell, SWT.NONE);
		versionLabel.setText(Main.language.getTranslationContent("Version").replaceAll("%1", Data.APP_VERSION) + " · " + Data.APP_PFID);
		versionLabel.setForeground(new Color(display, 255, 255, 255));
		versionLabel.setLayoutData(gridData);
		
		gridData = new GridData();
		
		copyrightLabel = new Label(aboutShell, SWT.NONE);
		copyrightLabel.setText(Main.language.getTranslationContent("Copyright").replaceAll("%1", Data.APP_COPYRIGHT_YEAR).replaceAll("%2", Data.APP_COPYRIGHT_HOLDER));
		copyrightLabel.setForeground(new Color(display, 255, 255, 255));
		copyrightLabel.setLayoutData(gridData);
		
		gridData = new GridData();
		
		websiteLink = new Link(aboutShell, SWT.NONE);
		websiteLink.setText("<A>" + Data.APP_URL + "</A>");
		websiteLink.setLayoutData(gridData);
		websiteLink.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				Program.launch(Data.APP_URL);
			}
		});
		
		gridData = new GridData();
		gridData.verticalIndent = 15;
		
		authorsInfoLabel = new Label(aboutShell, SWT.NONE);
		authorsInfoLabel.setText(Main.language.getTranslationContent("Authors"));
		authorsInfoLabel.setFont(new Font(display, authorsInfoLabel.getFont().getFontData()[0].getName(), authorsInfoLabel.getFont().getFontData()[0].getHeight(), SWT.BOLD));
		authorsInfoLabel.setForeground(new Color(display, 255, 255, 255));
		authorsInfoLabel.setLayoutData(gridData);
		
		String authors = "";
		for(int i = 0; i < Data.APP_AUTHORS.length; i++) {
			authors += Data.APP_AUTHORS[i] + " · ";
		}
		authors = authors.substring(0, authors.length()-3);
		
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		
		authorsLabel = new Label(aboutShell, SWT.WRAP);
		authorsLabel.setText(authors);
		authorsLabel.setForeground(new Color(display, 255, 255, 255));
		authorsLabel.setLayoutData(gridData);
		
		gridData = new GridData();
		gridData.verticalIndent = 15;
		
		contributorsInfoLabel = new Label(aboutShell, SWT.NONE);
		contributorsInfoLabel.setText(Main.language.getTranslationContent("Contributors"));
		contributorsInfoLabel.setFont(new Font(display, contributorsInfoLabel.getFont().getFontData()[0].getName(), contributorsInfoLabel.getFont().getFontData()[0].getHeight(), SWT.BOLD));
		contributorsInfoLabel.setForeground(new Color(display, 255, 255, 255));
		contributorsInfoLabel.setLayoutData(gridData);
		
		String contributors = "";
		for(int i = 0; i < Data.APP_CONTRIBUTORS.length; i++) {
			contributors += Data.APP_CONTRIBUTORS[i] + " · ";
		}
		contributors = contributors.substring(0, contributors.length()-3);
		
		gridData = new GridData(GridData.FILL_HORIZONTAL | GridData.FILL_VERTICAL);
		
		contributorsLabel = new Label(aboutShell, SWT.WRAP);
		contributorsLabel.setText(contributors);
		contributorsLabel.setForeground(new Color(display, 255, 255, 255));
		contributorsLabel.setLayoutData(gridData);
		
		gridData = new GridData();
		gridData.grabExcessHorizontalSpace = true;
		gridData.horizontalAlignment = GridData.END;
		gridData.minimumWidth = 100;
		
		gridLayout = new GridLayout();
		gridLayout.horizontalSpacing = 10;
		gridLayout.marginHeight = 0;
		gridLayout.marginWidth = 0;
		gridLayout.numColumns = 2;
		
		buttonComposite = new Composite(aboutShell, SWT.NONE);
		buttonComposite.setLayout(gridLayout);
		buttonComposite.setLayoutData(gridData);
		
		licenseButton = new Button(buttonComposite, SWT.PUSH);
		licenseButton.setLayoutData(gridData);
		licenseButton.setText(Main.language.getTranslationContent("License"));
		licenseButton.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				new LicenseDialog(aboutShell);
			}
		});
		
		gridData = new GridData();
		gridData.grabExcessHorizontalSpace = true;
		gridData.minimumWidth = 100;
		
		closeButton = new Button(buttonComposite, SWT.PUSH);
		closeButton.setFocus();
		closeButton.setLayoutData(gridData);
		closeButton.setText(Main.language.getTranslationContent("OK"));
		closeButton.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				aboutShell.close();
			}
		});
		
		aboutShell.setDefaultButton(closeButton);
		aboutShell.setSize(550, 350);
		aboutShell.setLocation((display.getPrimaryMonitor().getBounds().width - aboutShell.getSize().x) / 2, (display.getPrimaryMonitor().getBounds().height - aboutShell.getSize().y) / 2);
		aboutShell.open();
	}
	
}