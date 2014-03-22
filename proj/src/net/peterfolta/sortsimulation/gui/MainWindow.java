/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			MainWindow.java
 * Created:			2008/11/29
 * Last modified:	2014/03/22
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

import net.peterfolta.sortsimulation.main.CreateArray;
import net.peterfolta.sortsimulation.main.Data;
import net.peterfolta.sortsimulation.main.Main;
import net.peterfolta.sortsimulation.main.Simulation;
import net.peterfolta.sortsimulation.tools.ResourceLoader;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.PaintEvent;
import org.eclipse.swt.events.PaintListener;
import org.eclipse.swt.events.ShellEvent;
import org.eclipse.swt.events.ShellListener;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.program.Program;
import org.eclipse.swt.widgets.Canvas;
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
	private Menu backgroundMenu;
	private Menu colorMenu;
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
	private MenuItem[] backgrounds;
	private MenuItem color;
	private MenuItem[] colors;
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
		mainShell.setLayout(gridLayout);
		mainShell.addShellListener(new ShellListener() {
			public void shellActivated(ShellEvent event) {
				for(int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
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
		
		for(int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
			gridData = new GridData(GridData.FILL_HORIZONTAL);
			gridData.verticalIndent = 5;
			
			sortLabel[i] = new Label(mainShell, SWT.NONE);
			sortLabel[i].setLayoutData(gridData);
		}
		
		for(int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
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
		
		for(int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
			final int fi = i;
			gridData = new GridData(GridData.FILL_HORIZONTAL);
			
			sortCombo[i] = new Combo(mainShell, SWT.READ_ONLY);
			sortCombo[i].setItems(Data.sortingAlgorithms);
			sortCombo[i].setLayoutData(gridData);
			sortCombo[i].select(i);
			sortCombo[i].addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					sortLabel[fi].setText(Main.language.getTranslationContent("Algorithm").replaceAll("%1", String.valueOf(fi+1)) + ":\n" + Data.sortingAlgorithms[sortCombo[fi].getSelectionIndex()]);
				}
			});
		}
		
		setCaptions();
		
		mainShell.pack();
		mainShell.setLocation((display.getPrimaryMonitor().getBounds().width - mainShell.getSize().x) / 2, (display.getPrimaryMonitor().getBounds().height - mainShell.getSize().y) / 2);
		mainShell.open();
		
		Main.getGUI().getSplashScreen().fadeOut();
	}
	
	public void repaintCanvas(int index) {
		sortCanvas[index].redraw();
	}
	
	private void drawNumber(GC gc, int index) {
		int height = sortCanvas[index].getSize().y;
		int width = sortCanvas[index].getSize().x;
		int lineHeight = height / Main.array[index].length;
		int lineWidth = (width - Data.LENGTH_OF_ARRAY) / Data.LENGTH_OF_ARRAY;
		
		gc.setBackground(Data.BACKGROUNDS[Main.settings.getBackground()]);
		gc.fillRectangle(0, 0, width, height);
		
		gc.setBackground(Data.COLORS[Main.settings.getColor()]);
		
		for(int i = 0; i < Data.LENGTH_OF_ARRAY; i++) {
			gc.fillRectangle((lineWidth * (i)) + i, height - (Main.array[index][i] * lineHeight), 1, height);
		}
	}
	
	private void createMenu() {
		mainMenu = new Menu(mainShell, SWT.BAR);
		mainShell.setMenuBar(mainMenu);
		
		simulation = new MenuItem(mainMenu, SWT.CASCADE);
		
		simulationMenu = new Menu(simulation);
		simulation.setMenu(simulationMenu);
		
		startSimulation = new MenuItem(simulationMenu, SWT.PUSH);
		startSimulation.setImage(ResourceLoader.loadImage(display, "start_16x16.png"));
		startSimulation.setAccelerator(SWT.CR);
		startSimulation.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				simulationThread.startSimulation();
			}
		});
		
		stopSimulation = new MenuItem(simulationMenu, SWT.PUSH);
		stopSimulation.setImage(ResourceLoader.loadImage(display, "stop_16x16.png"));
		stopSimulation.setAccelerator(SWT.ESC);
		stopSimulation.setEnabled(false);
		stopSimulation.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				simulationThread.stopSimulation();
			}
		});
		
		new MenuItem(simulationMenu, SWT.SEPARATOR);
		
		resetCanvas = new MenuItem(simulationMenu, SWT.PUSH);
		resetCanvas.setImage(ResourceLoader.loadImage(display, "refresh_16x16.png"));
		resetCanvas.setAccelerator(SWT.CTRL | 'N');
		resetCanvas.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				new CreateArray(Main.settings.getFillMode());
				
				for(int i = 0; i < sortCanvas.length; i++) {
					sortCanvas[i].redraw();
				}
			}
		});
		
		new MenuItem(simulationMenu, SWT.SEPARATOR);
		
		exit = new MenuItem(simulationMenu, SWT.PUSH);
		exit.setImage(ResourceLoader.loadImage(display, "exit_16x16.png"));
		exit.setAccelerator(SWT.ALT | SWT.F4);
		exit.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				System.exit(0);
			}
		});
		
		settings = new MenuItem(mainMenu, SWT.CASCADE);
		
		settingsMenu = new Menu(settings);
		settings.setMenu(settingsMenu);
		
		fillModeItem = new MenuItem(settingsMenu, SWT.CASCADE);
		fillModeItem.setImage(ResourceLoader.loadImage(display, "fillmode_16x16.png"));
		
		fillModeMenu = new Menu(fillModeItem);
		fillModeItem.setMenu(fillModeMenu);
		
		fillMode = new MenuItem[2];
		
		for(int i = 0; i < fillMode.length; i++) {
			final int fi = i;
			fillMode[i] = new MenuItem(fillModeMenu, SWT.RADIO);
			fillMode[i].addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					Main.settings.setFillMode(fi);
					resetCanvas();
				}
			});

			switch(i) {
				case 0:
					fillMode[i].setAccelerator(SWT.CTRL | 'R');
					fillMode[i].setSelection(true);
					break;
				case 1:
					fillMode[i].setAccelerator(SWT.CTRL | 'I');
					break;
			}
		}
		
		delayItem = new MenuItem(settingsMenu, SWT.CASCADE);
		delayItem.setImage(ResourceLoader.loadImage(display, "delay_16x16.png"));
		
		delayMenu = new Menu(delayItem);
		delayItem.setMenu(delayMenu);
		
		delay = new MenuItem[5];
		
		for(int i = 0; i < delay.length; i++) {
			final int fi = i;
			delay[i] = new MenuItem(delayMenu, SWT.RADIO);
			delay[i].addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					Main.settings.setSimulationSpeed(fi);
				}
			});
			
			switch(i) {
				case 0:
					delay[i].setAccelerator(SWT.CTRL | SWT.SHIFT | '1');
					break;
				case 1:
					delay[i].setAccelerator(SWT.CTRL | SWT.SHIFT | '2');
					break;
				case 2:
					delay[i].setAccelerator(SWT.CTRL | SWT.SHIFT | '3');
					delay[i].setSelection(true);
					break;
				case 3:
					delay[i].setAccelerator(SWT.CTRL | SWT.SHIFT | '4');
					break;
				case 4:
					delay[i].setAccelerator(SWT.CTRL | SWT.SHIFT | '5');
					break;
			}
		}
		
		new MenuItem(settingsMenu, SWT.SEPARATOR);
		
		language = new MenuItem(settingsMenu, SWT.CASCADE);
		language.setImage(ResourceLoader.loadImage(display, "languages_16x16.png"));
		
		languageMenu = new Menu(language);
		language.setMenu(languageMenu);
		
		languages = new MenuItem[Main.settings.getLanguageAmount()];
		
		for(int i = 0; i < languages.length; i++) {
			final int fi = i;
			languages[i] = new MenuItem(languageMenu, SWT.RADIO);
			languages[i].setImage(ResourceLoader.loadImage(display, Main.settings.getLanguageNames()[i].toLowerCase() + "_16x16.png"));
			languages[i].setText(Main.settings.getLanguageNativeNames()[i]);
			languages[i].addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					Main.settings.setCurrentLanguage(Main.settings.getLanguageNames()[fi]);
					Main.changeLanguage();
				}
			});
			
			if(i == Main.settings.getCurrentLanguageIndex()) languages[i].setSelection(true);
		}
		
		new MenuItem(settingsMenu, SWT.SEPARATOR);
		
		background = new MenuItem(settingsMenu, SWT.CASCADE);
		background.setImage(ResourceLoader.loadImage(display, "color_16x16.png"));
		
		backgroundMenu = new Menu(background);
		background.setMenu(backgroundMenu);
		
		backgrounds = new MenuItem[Data.BACKGROUNDS.length];
		
		for(int i = 0; i < backgrounds.length; i++) {
			final int fi = i;
			backgrounds[i] = new MenuItem(backgroundMenu, SWT.RADIO);
			backgrounds[i].setImage(ResourceLoader.loadImage(display, "background" + i + "_16x16.png"));
			backgrounds[i].addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					Main.settings.changeBackground(fi);
				}
			});
			
			if(i == Main.settings.getBackground()) backgrounds[i].setSelection(true);
		}
		
		color = new MenuItem(settingsMenu, SWT.CASCADE);
		color.setImage(ResourceLoader.loadImage(display, "color_16x16.png"));
		
		colorMenu = new Menu(color);
		color.setMenu(colorMenu);
		
		colors = new MenuItem[Data.COLORS.length];
		
		for(int i = 0; i < colors.length; i++) {
			final int fi = i;
			colors[i] = new MenuItem(colorMenu, SWT.RADIO);
			colors[i].setImage(ResourceLoader.loadImage(display, "color" + i + "_16x16.png"));
			colors[i].addListener(SWT.Selection, new Listener() {
				public void handleEvent(Event event) {
					Main.settings.changeColor(fi);
				}
			});
			
			if(i == Main.settings.getColor()) colors[i].setSelection(true);
		}
		
		help = new MenuItem(mainMenu, SWT.CASCADE);
		
		helpMenu = new Menu(help);
		help.setMenu(helpMenu);
		
		helpItem = new MenuItem(helpMenu, SWT.PUSH);
		helpItem.setImage(ResourceLoader.loadImage(display, "help_16x16.png"));
		helpItem.setAccelerator(SWT.F1);
		helpItem.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				Program.launch("file:///" + System.getProperty("user.dir") + "/res/doc/documentation_" + Main.settings.getLanguageNames()[Main.settings.getCurrentLanguageIndex()].toLowerCase() + ".pdf");
			}
		});
		
		licenseItem = new MenuItem(helpMenu, SWT.PUSH);
		licenseItem.setImage(ResourceLoader.loadImage(display, "license_16x16.png"));
		licenseItem.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				new LicenseDialog(mainShell);
			}
		});
		
		websiteItem = new MenuItem(helpMenu, SWT.PUSH);
		websiteItem.setAccelerator(SWT.SHIFT | SWT.F1);
		websiteItem.setImage(ResourceLoader.loadImage(display, "globe_16x16.png"));
		websiteItem.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				Program.launch(Data.APP_URL);
			}
		});
		
		new MenuItem(helpMenu, SWT.SEPARATOR);
		
		about = new MenuItem(helpMenu, SWT.PUSH);
		about.setImage(ResourceLoader.loadImage(display, "about_16x16.png"));
		about.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				new AboutDialog(mainShell);
			}
		});
	}
	
	private void createToolBar() {
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.horizontalSpan = Main.settings.getSimultaneousSimulations();
		
		toolBar = new ToolBar(mainShell, SWT.FLAT);
		toolBar.setLayoutData(gridData);
		
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
		
		for(int i = 0; i < fillMode.length; i++) {
			fillMode[i].setEnabled(false);
		}
		
		for(int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
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
		
		for(int i = 0; i < fillMode.length; i++) {
			fillMode[i].setEnabled(true);
		}
		
		for(int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
			sortCombo[i].setEnabled(true);
		}
	}
	
	private void resetCanvas() {
		new CreateArray(Main.settings.getFillMode());
		
		for(int i = 0; i < sortCanvas.length; i++) {
			sortCanvas[i].redraw();
		}
	}
	
	public void setCaptions() {
		hintLabel.setText(Main.language.getTranslationContent("UsageHint"));
		
		for(int i = 0; i < Main.settings.getSimultaneousSimulations(); i++) {
			int selection = sortCombo[i].getSelectionIndex();
			sortLabel[i].setText(Main.language.getTranslationContent("Algorithm").replaceAll("%1", String.valueOf(i+1)) + ":\n" + Data.sortingAlgorithms[selection]);
			sortCombo[i].setItems(Data.sortingAlgorithms);
			sortCombo[i].select(selection);
		}
		
		simulation.setText(Main.language.getTranslationContent("Simulation"));
		startSimulation.setText(Main.language.getTranslationContent("StartSimulation") + "\t" + Main.language.getTranslationContent("Return"));
		stopSimulation.setText(Main.language.getTranslationContent("StopSimulation") + "\t" + Main.language.getTranslationContent("Esc"));
		resetCanvas.setText(Main.language.getTranslationContent("ResetFields") + "\t" + Main.language.getTranslationContent("Ctrl") + "+N");
		exit.setText(Main.language.getTranslationContent("Exit") + "\t" + Main.language.getTranslationContent("Alt") + "+F4");
		settings.setText(Main.language.getTranslationContent("Settings"));
		fillModeItem.setText(Main.language.getTranslationContent("FillMode"));
		
		for(int i = 0; i < fillMode.length; i++) {
			switch(i) {
				case 0:
					fillMode[i].setText(Main.language.getTranslationContent("Randomly") + "\t" + Main.language.getTranslationContent("Ctrl") + "+R");
					break;
				case 1:
					fillMode[i].setText(Main.language.getTranslationContent("Inverse") + "\t" + Main.language.getTranslationContent("Ctrl") + "+I");
					break;
			}
		}
		
		delayItem.setText(Main.language.getTranslationContent("Speed"));
		
		for(int i = 0; i < delay.length; i++) {
			switch(i) {
				case 0:
					delay[i].setText(Main.language.getTranslationContent("VerySlow") + "\t" + Main.language.getTranslationContent("Ctrl") + "+" + Main.language.getTranslationContent("Shift") + "+1");
					break;
				case 1:
					delay[i].setText(Main.language.getTranslationContent("Slow") + "\t" + Main.language.getTranslationContent("Ctrl") + "+" + Main.language.getTranslationContent("Shift") + "+2");
					break;
				case 2:
					delay[i].setText(Main.language.getTranslationContent("Average") + "\t" + Main.language.getTranslationContent("Ctrl") + "+" + Main.language.getTranslationContent("Shift") + "+3");
					break;
				case 3:
					delay[i].setText(Main.language.getTranslationContent("Fast") + "\t" + Main.language.getTranslationContent("Ctrl") + "+" + Main.language.getTranslationContent("Shift") + "+4");
					break;
				case 4:
					delay[i].setText(Main.language.getTranslationContent("VeryFast") + "\t" + Main.language.getTranslationContent("Ctrl") + "+" + Main.language.getTranslationContent("Shift") + "+5");
					break;
			}
		}
		
		language.setText(Main.language.getTranslationContent("Language"));
		background.setText(Main.language.getTranslationContent("Background"));
		color.setText(Main.language.getTranslationContent("Color"));
		
		for(int i = 0; i < backgrounds.length; i++) {
			backgrounds[i].setText(Data.backgroundNames[i]);
		}
		
		for(int i = 0; i < colors.length; i++) {
			colors[i].setText(Data.colorNames[i]);
		}
		
		help.setText(Main.language.getTranslationContent("Help"));
		helpItem.setText(Main.language.getTranslationContent("Documentation") + "...\tF1");
		licenseItem.setText(Main.language.getTranslationContent("License") + "...");
		websiteItem.setText(Main.language.getTranslationContent("Website") + "\t" + Main.language.getTranslationContent("Shift") + "+F1");
		about.setText(Main.language.getTranslationContent("About").replaceAll("%1", Data.APP_NAME));
		
		toolStartSimulation.setText(Main.language.getTranslationContent("StartSimulation"));
		toolStartSimulation.setToolTipText(Main.language.getTranslationContent("StartSimulation") + " (" + Main.language.getTranslationContent("Return") + ")");
		toolStopSimulation.setText(Main.language.getTranslationContent("StopSimulation"));
		toolStopSimulation.setToolTipText(Main.language.getTranslationContent("StopSimulation") + " (" + Main.language.getTranslationContent("Esc") + ")");
		toolResetCanvas.setText(Main.language.getTranslationContent("ResetFields"));
		toolResetCanvas.setToolTipText(Main.language.getTranslationContent("ResetFields") + " (" + Main.language.getTranslationContent("Ctrl") + "+N)");
		
		mainShell.layout();
	}

}