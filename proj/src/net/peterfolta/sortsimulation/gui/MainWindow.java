/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2015 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.1
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			MainWindow.java
 * Created:			2008/11/29
 * Last modified:	2015/3/8
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

import net.peterfolta.sortsimulation.common.Color;
import net.peterfolta.sortsimulation.common.ImageTools;
import net.peterfolta.sortsimulation.common.Platform;
import net.peterfolta.sortsimulation.common.ResourceLoader;
import net.peterfolta.sortsimulation.common.enums.Delay;
import net.peterfolta.sortsimulation.common.enums.FillMode;
import net.peterfolta.sortsimulation.common.enums.SortingAlgorithms;
import net.peterfolta.sortsimulation.main.CreateArray;
import net.peterfolta.sortsimulation.main.Data;
import net.peterfolta.sortsimulation.main.Main;
import net.peterfolta.sortsimulation.main.Simulation;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.PaintEvent;
import org.eclipse.swt.events.PaintListener;
import org.eclipse.swt.events.ShellEvent;
import org.eclipse.swt.events.ShellListener;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.program.Program;
import org.eclipse.swt.widgets.Canvas;
import org.eclipse.swt.widgets.ColorDialog;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Menu;
import org.eclipse.swt.widgets.MenuItem;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.ToolBar;
import org.eclipse.swt.widgets.ToolItem;

public class MainWindow {
	
	private Display display;
	public Shell mainShell;
	private GridLayout gridLayout;
	private GridData gridData;
	
	private Label hintLabel;
	private Label[] sortLabel;
	private Canvas[] sortCanvas;
	public Combo[] sortCombo;
	
	private Menu mainMenu;
	private Menu simulationMenu;
	private Menu settingsMenu;
	private Menu fillModeMenu;
	private Menu delayMenu;
	private Menu languageMenu;
	private Menu helpMenu;
	
	private MenuItem simulation;
	private MenuItem startSimulation;
	private MenuItem stopSimulation;
	private MenuItem resetCanvas;
	private MenuItem exit;
	private MenuItem settings;
	private MenuItem fillModeItem;
	private MenuItem[] fillMode;
	private MenuItem delayItem;
	private MenuItem[] delay;
	private MenuItem language;
	private MenuItem[] languages;
	private MenuItem background;
	private MenuItem color;
	private MenuItem help;
	private MenuItem helpItem;
	private MenuItem licenseItem;
	private MenuItem websiteItem;
	private MenuItem about;
	
	private ToolBar toolBar;
	
	private ToolItem toolStartSimulation;
	private ToolItem toolStopSimulation;
	private ToolItem toolResetCanvas;
	
	public Simulation simulationThread;
	
	public MainWindow(Display display) {
		this.display = display;
		
		mainShell = new Shell(display, SWT.TITLE | SWT.MIN | SWT.CLOSE);
		simulationThread = new Simulation();
		
		gridLayout = new GridLayout();
		gridLayout.numColumns = Main.settings.getSimultaneousSimulations();
		gridLayout.makeColumnsEqualWidth = true;
		
		mainShell.setImages(Data.APP_ICONS);
		mainShell.setText(Data.APP_NAME);
		mainShell.setSize(640, 480);
		mainShell.setFullScreen(false);
		mainShell.setLayout(gridLayout);
		mainShell.addShellListener(new ShellListener() {
			public void shellActivated(ShellEvent event) {
				for (int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
					repaintCanvas(i);
				}
			}

			public void shellClosed(ShellEvent event) {
				Main.exit(0);
			}

			public void shellDeactivated(ShellEvent event) {
			}

			public void shellDeiconified(ShellEvent event) {
			}

			public void shellIconified(ShellEvent event) {
			}
		});
		
		if (Platform.isMac()) {
			new CocoaSystemMenu(display.getSystemMenu(), mainShell);	
		}
		
		createMenu();
		createToolBar();
		
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.verticalIndent = 5;
		gridData.horizontalSpan = Main.settings.getSimultaneousSimulations();
		
		hintLabel = new Label(mainShell, SWT.WRAP);
		hintLabel.setLayoutData(gridData);
		
		sortLabel = new Label[Main.settings.getSimultaneousSimulations()];
		sortCanvas = new Canvas[Main.settings.getSimultaneousSimulations()];
		sortCombo = new Combo[Main.settings.getSimultaneousSimulations()];
		
		for (int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
			gridData = new GridData(GridData.FILL_HORIZONTAL);
			gridData.verticalIndent = 5;
			
			sortLabel[i] = new Label(mainShell, SWT.NONE);
			sortLabel[i].setLayoutData(gridData);
		}
		
		for (int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
			final int fi = i;
			gridData = new GridData(GridData.FILL_BOTH);
			gridData.minimumHeight = 3 * Data.LENGTH_OF_ARRAY + 4;
			gridData.minimumWidth = 2 * Data.LENGTH_OF_ARRAY + 4;
			
			sortCanvas[i] = new Canvas(mainShell, SWT.BORDER | SWT.NO_BACKGROUND);
			sortCanvas[i].setLayoutData(gridData);
			sortCanvas[i].addPaintListener(new PaintListener() {
				public void paintControl(PaintEvent event) {
					Image bufferImage = new Image(Display.getCurrent(), event.width, event.height);
					GC bufferGC = new GC(bufferImage);
					
					drawNumber(bufferGC, fi);
					event.gc.drawImage(bufferImage, 0, 0);
					
					bufferImage.dispose();
				}
			});
		}
		
		for (int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
			final int fi = i;
			gridData = new GridData(GridData.FILL_HORIZONTAL);
			
			sortCombo[i] = new Combo(mainShell, SWT.READ_ONLY);
			sortCombo[i].setItems(SortingAlgorithms.getTranslations());
			sortCombo[i].setLayoutData(gridData);
			sortCombo[i].select(i);
			sortCombo[i].addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					sortLabel[fi].setText(Main.language.getTranslationContent("Algorithm").replaceAll("%1", String.valueOf(fi+1)) + ":\n" + SortingAlgorithms.values()[sortCombo[fi].getSelectionIndex()].getTranslation());
				}
			});
		}
		
		setCaptions();
		
		mainShell.pack();
		
		Main.getGUI().centerShellOnPrimaryMonitor(mainShell);
		
		mainShell.open();
		
		Main.getGUI().getSplashScreen().fadeOut();
	}
	
	public void repaintCanvas(int index) {
		sortCanvas[index].redraw();
	}
	
	private void drawNumber(GC gc, int index) {
		int height		= sortCanvas[index].getSize().y;
		int width		= sortCanvas[index].getSize().x;
		int lineHeight	= height / Main.array[index].length;
		int lineWidth	= (width - Data.LENGTH_OF_ARRAY) / Data.LENGTH_OF_ARRAY;
		
		gc.setBackground(Main.settings.getBackground());
		gc.fillRectangle(0, 0, width, height);
		
		gc.setBackground(Main.settings.getColor().getColor());
		
		for (int i = 0; i < Data.LENGTH_OF_ARRAY; i++) {
			gc.fillRectangle((lineWidth * (i)) + i, height - (Main.array[index][i] * lineHeight), 1, height);
		}
	}
	
	private void createMenu() {
		if (Platform.isMac()) {
			mainMenu = display.getMenuBar();
		} else {
			mainMenu = new Menu(mainShell, SWT.BAR);
			mainShell.setMenuBar(mainMenu);			
		}
		
		simulation = new MenuItem(mainMenu, SWT.CASCADE);
		
		simulationMenu = new Menu(simulation);
		simulation.setMenu(simulationMenu);
		
		startSimulation = new MenuItem(simulationMenu, SWT.PUSH);
		startSimulation.setAccelerator(SWT.CR);
		startSimulation.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				simulationThread.startSimulation();
			}
		});
		
		stopSimulation = new MenuItem(simulationMenu, SWT.PUSH);
		stopSimulation.setAccelerator(SWT.ESC);
		stopSimulation.setEnabled(false);
		stopSimulation.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				simulationThread.stopSimulation();
			}
		});
		
		new MenuItem(simulationMenu, SWT.SEPARATOR);
		
		resetCanvas = new MenuItem(simulationMenu, SWT.PUSH);
		resetCanvas.setAccelerator(SWT.MOD1 | 'N');
		resetCanvas.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				new CreateArray(Main.settings.getFillMode());
				
				for (int i = 0; i < sortCanvas.length; i++) {
					sortCanvas[i].redraw();
				}
			}
		});
		
		/*
		 * Do not create "Exit" Menu Item on Mac
		 */
		if (!Platform.isMac()) {
			new MenuItem(simulationMenu, SWT.SEPARATOR);
			
			exit = new MenuItem(simulationMenu, SWT.PUSH);
			exit.setImage(ResourceLoader.loadImage(display, "exit_16x16.png"));
			exit.setAccelerator(SWT.ALT | SWT.F4);
			exit.addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					Main.exit(0);
				}
			});			
		}
		
		settings = new MenuItem(mainMenu, SWT.CASCADE);
		
		settingsMenu = new Menu(settings);
		settings.setMenu(settingsMenu);
		
		fillModeItem = new MenuItem(settingsMenu, SWT.CASCADE);
		
		fillModeMenu = new Menu(fillModeItem);
		fillModeItem.setMenu(fillModeMenu);
		
		fillMode = new MenuItem[FillMode.values().length];
		
		for (int i = 0; i < fillMode.length; i++) {
			final int fi = i;
			fillMode[i] = new MenuItem(fillModeMenu, SWT.RADIO);
			fillMode[i].addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					Main.settings.setFillMode(FillMode.values()[fi]);
					resetCanvas();
				}
			});
			fillMode[i].setAccelerator(SWT.MOD1 | FillMode.values()[i].getShortcut());
			
			if (Main.settings.getFillMode() == FillMode.values()[i]) {
				fillMode[i].setSelection(true);
			}
		}
		
		delayItem = new MenuItem(settingsMenu, SWT.CASCADE);
		
		delayMenu = new Menu(delayItem);
		delayItem.setMenu(delayMenu);
		
		delay = new MenuItem[Delay.values().length];
		
		for (int i = 0; i < delay.length; i++) {
			final int fi = i;
			delay[i] = new MenuItem(delayMenu, SWT.RADIO);
			delay[i].addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					Main.settings.setDelay(Delay.values()[fi]);
				}
			});
			delay[i].setAccelerator(SWT.MOD1 | SWT.MOD2 | Delay.values()[i].getShortcut());
			
			if (Main.settings.getDelay() == Delay.values()[i]) {
				delay[i].setSelection(true);
			}
		}
		
		new MenuItem(settingsMenu, SWT.SEPARATOR);
		
		language = new MenuItem(settingsMenu, SWT.CASCADE);
		
		languageMenu = new Menu(language);
		language.setMenu(languageMenu);
		
		languages = new MenuItem[Main.settings.getLanguageAmount()];
		
		for (int i = 0; i < languages.length; i++) {
			final int fi = i;
			languages[i] = new MenuItem(languageMenu, SWT.RADIO);
			languages[i].setText(Main.settings.getLanguageNativeNames()[i]);
			languages[i].addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					Main.settings.setCurrentLanguage(Main.settings.getLanguageNames()[fi]);
					Main.changeLanguage();
				}
			});
			
			if (i == Main.settings.getCurrentLanguageIndex()) languages[i].setSelection(true);
		}
		
		new MenuItem(settingsMenu, SWT.SEPARATOR);
		
		background = new MenuItem(settingsMenu, SWT.CASCADE);
		background.setImage(ImageTools.createColorField(display, Main.settings.getBackground()));
		background.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				ColorDialog dlg = new ColorDialog(mainShell);
				dlg.setRGB(Main.settings.getBackground().getRGB());
				dlg.setText(Main.language.getTranslationContent("ChooseBackgroundColor"));
				
				RGB rgb = dlg.open();
				
				if (rgb != null) {
					Main.settings.setBackground(new Color(rgb.red, rgb.green, rgb.blue));
					background.setImage(ImageTools.createColorField(display, Main.settings.getBackground()));
				}
			}
		});
		
		color = new MenuItem(settingsMenu, SWT.CASCADE);
		color.setImage(ImageTools.createColorField(display, Main.settings.getColor().getColor()));
		color.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				ColorDialog dlg = new ColorDialog(mainShell);
				dlg.setRGB(Main.settings.getColor().getColor().getRGB());
				dlg.setText(Main.language.getTranslationContent("ChooseColor"));
				
				RGB rgb = dlg.open();
				
				if (rgb != null) {
					Main.settings.setColor(new Color(rgb.red, rgb.green, rgb.blue));
					color.setImage(ImageTools.createColorField(display, Main.settings.getColor().getColor()));
				}
			}
		});
		
		help = new MenuItem(mainMenu, SWT.CASCADE);
		
		helpMenu = new Menu(help);
		help.setMenu(helpMenu);
		
		helpItem = new MenuItem(helpMenu, SWT.PUSH);
		helpItem.setAccelerator(SWT.F1);
		helpItem.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				Program.launch("file:///" + System.getProperty("user.dir") + "/res/doc/documentation_" + Main.settings.getLanguageNames()[Main.settings.getCurrentLanguageIndex()].toLowerCase() + ".pdf");
			}
		});
		
		licenseItem = new MenuItem(helpMenu, SWT.PUSH);
		licenseItem.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				Main.getGUI().showLicenseDialog(mainShell);
			}
		});
		
		websiteItem = new MenuItem(helpMenu, SWT.PUSH);
		websiteItem.setAccelerator(SWT.SHIFT | SWT.F1);
		websiteItem.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				Program.launch(Data.APP_URL);
			}
		});
		
		/*
		 * Do not create "About" Menu Item on Mac
		 */
		if (!Platform.isMac()) {
			new MenuItem(helpMenu, SWT.SEPARATOR);
			
			about = new MenuItem(helpMenu, SWT.PUSH);
			about.setImage(ResourceLoader.loadImage(display, "about_16x16.png"));
			about.addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					Main.getGUI().showAboutDialog(mainShell);
				}
			});
		}
		
		/*
		 * Do not add Menu Icons on Mac
		 */
		if (!Platform.isMac()) {
			startSimulation.setImage(ResourceLoader.loadImage(display, "start_16x16.png"));
			stopSimulation.setImage(ResourceLoader.loadImage(display, "stop_16x16.png"));
			resetCanvas.setImage(ResourceLoader.loadImage(display, "refresh_16x16.png"));
			
			fillModeItem.setImage(ResourceLoader.loadImage(display, "fillmode_16x16.png"));
			delayItem.setImage(ResourceLoader.loadImage(display, "delay_16x16.png"));
			language.setImage(ResourceLoader.loadImage(display, "languages_16x16.png"));
			for (int i = 0; i < languages.length; i++) {
				languages[i].setImage(ResourceLoader.loadImage(display, Main.settings.getLanguageNames()[i].toLowerCase() + "_16x16.png"));
			}
			
			helpItem.setImage(ResourceLoader.loadImage(display, "help_16x16.png"));
			licenseItem.setImage(ResourceLoader.loadImage(display, "license_16x16.png"));
			websiteItem.setImage(ResourceLoader.loadImage(display, "globe_16x16.png"));
		}
	}
	
	private void createToolBar() {
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.horizontalSpan = Main.settings.getSimultaneousSimulations();
		
		if (Platform.isMac()) {
			toolBar = mainShell.getToolBar();
		} else {
			toolBar = new ToolBar(mainShell, SWT.FLAT);
			toolBar.setLayoutData(gridData);			
		}
		
		toolStartSimulation = new ToolItem(toolBar, SWT.PUSH);
		toolStartSimulation.setImage(ResourceLoader.loadImage(display, "start_22x22.png"));
		toolStartSimulation.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				simulationThread.startSimulation();
			}
		});
		
		toolStopSimulation = new ToolItem(toolBar, SWT.PUSH);
		toolStopSimulation.setImage(ResourceLoader.loadImage(display, "stop_22x22.png"));
		toolStopSimulation.setEnabled(false);
		toolStopSimulation.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				simulationThread.stopSimulation();
			}
		});
		
		new ToolItem(toolBar, SWT.SEPARATOR);
		
		toolResetCanvas = new ToolItem(toolBar, SWT.PUSH);
		toolResetCanvas.setImage(ResourceLoader.loadImage(display, "refresh_22x22.png"));
		toolResetCanvas.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				resetCanvas();
			}
		});
	}
	
	public void startSimulation() {
		startSimulation.setEnabled(false);
		stopSimulation.setEnabled(true);
		toolStartSimulation.setEnabled(false);
		toolStopSimulation.setEnabled(true);
		resetCanvas.setEnabled(false);
		toolResetCanvas.setEnabled(false);
		
		for (int i = 0; i < fillMode.length; i++) {
			fillMode[i].setEnabled(false);
		}
		
		for (int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
			sortCombo[i].setEnabled(false);
		}
	}
	
	public void stopSimulation() {
		startSimulation.setEnabled(true);
		stopSimulation.setEnabled(false);
		toolStartSimulation.setEnabled(true);
		toolStopSimulation.setEnabled(false);
		resetCanvas.setEnabled(true);
		toolResetCanvas.setEnabled(true);
		
		for (int i = 0; i < fillMode.length; i++) {
			fillMode[i].setEnabled(true);
		}
		
		for (int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
			sortCombo[i].setEnabled(true);
		}
	}
	
	private void resetCanvas() {
		new CreateArray(Main.settings.getFillMode());
		
		for (int i = 0; i < sortCanvas.length; i++) {
			sortCanvas[i].redraw();
		}
	}
	
	public void setCaptions() {
		hintLabel.setText(Main.language.getTranslationContent("UsageHint").replaceAll("%1", String.valueOf(Main.settings.getSimultaneousSimulations())));
		
		for (int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
			int selection = sortCombo[i].getSelectionIndex();
			sortLabel[i].setText(Main.language.getTranslationContent("Algorithm").replaceAll("%1", String.valueOf(i+1)) + ":\n" + SortingAlgorithms.values()[selection].getTranslation());
			sortCombo[i].setItems(SortingAlgorithms.getTranslations());
			sortCombo[i].select(selection);
		}
		
		simulation.setText(Main.language.getTranslationContent("Simulation"));
		startSimulation.setText(Main.language.getTranslationContent("StartSimulation") + "\t" + Main.language.getTranslationContent("Return"));
		stopSimulation.setText(Main.language.getTranslationContent("StopSimulation") + "\t" + Main.language.getTranslationContent("Esc"));
		resetCanvas.setText(Main.language.getTranslationContent("ResetFields") + "\t" + Main.language.getTranslationContent("Ctrl") + "+N");
		
		settings.setText(Main.language.getTranslationContent("Settings"));
		fillModeItem.setText(Main.language.getTranslationContent("FillMode"));
		
		for (int i = 0; i < fillMode.length; i++) {
			fillMode[i].setText(FillMode.values()[i].getTranslation() + "\t" + Main.language.getTranslationContent("Ctrl") + "+" + FillMode.values()[i].getShortcut());
		}
		
		delayItem.setText(Main.language.getTranslationContent("Speed"));
		
		for (int i = 0; i < delay.length; i++) {
			delay[i].setText(Delay.values()[i].getTranslation() + "\t" + Main.language.getTranslationContent("Ctrl") + "+" + Main.language.getTranslationContent("Shift") + "+" + Delay.values()[i].getShortcut());
		}
		
		language.setText(Main.language.getTranslationContent("Language"));
		background.setText(Main.language.getTranslationContent("Background"));
		color.setText(Main.language.getTranslationContent("Color"));
		
		help.setText(Main.language.getTranslationContent("Help"));
		helpItem.setText(Main.language.getTranslationContent("Documentation") + "...\tF1");
		licenseItem.setText(Main.language.getTranslationContent("License") + "...");
		websiteItem.setText(Main.language.getTranslationContent("Website") + "\t" + Main.language.getTranslationContent("Shift") + "+F1");
		
		toolStartSimulation.setText(Main.language.getTranslationContent("StartSimulation"));
		toolStartSimulation.setToolTipText(Main.language.getTranslationContent("StartSimulation") + " (" + Main.language.getTranslationContent("Return") + ")");
		toolStopSimulation.setText(Main.language.getTranslationContent("StopSimulation"));
		toolStopSimulation.setToolTipText(Main.language.getTranslationContent("StopSimulation") + " (" + Main.language.getTranslationContent("Esc") + ")");
		toolResetCanvas.setText(Main.language.getTranslationContent("ResetFields"));
		toolResetCanvas.setToolTipText(Main.language.getTranslationContent("ResetFields") + " (" + Main.language.getTranslationContent("Ctrl") + "+N)");
		
		if (!Platform.isMac()) {
			exit.setText(Main.language.getTranslationContent("Exit") + "\t" + Main.language.getTranslationContent("Alt") + "+F4");
			about.setText(Main.language.getTranslationContent("About").replaceAll("%1", Data.APP_NAME));
		}
		
		mainShell.layout();
	}

}