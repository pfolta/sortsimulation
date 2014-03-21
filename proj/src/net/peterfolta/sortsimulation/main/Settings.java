/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Settings.java
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

package net.peterfolta.sortsimulation.main;

import java.io.File;
import java.util.Arrays;

import net.peterfolta.sortsimulation.main.Main;

import org.jdom.input.SAXBuilder;

public class Settings {
	
	private int delay;
	private int background;
	private int color;
	private int fillMode;
	private int simultaneousSimulations;
	
	private String currentlanguage;
	public String[] languageNames;
	private String[] languageNativeNames;
	
	public Settings() {
		delay = Data.MIDDLE_DELAY;
		background = 0;
		color = 0;
		fillMode = Data.FILL_RANDOM;
		simultaneousSimulations = 3;
		
		String[] tmp = new File("res/lng/").list();
		Arrays.sort(tmp);
		
		currentlanguage = "English";
		languageNames = new String[tmp.length];
		languageNativeNames = new String[tmp.length];
		
		for(int i = 0; i < tmp.length; i++) {
			try {
				languageNames[i] = new SAXBuilder().build("res/lng/" + tmp[i]).getRootElement().getChild("Information").getChild("LanguageName").getText();
				languageNativeNames[i] = new SAXBuilder().build("res/lng/" + tmp[i]).getRootElement().getChild("Information").getChild("NativeName").getText();
			} catch (Exception exception) {
				Main.exit(2);
			}
		}
	}
	
	public void changeBackground(int index) {
		background = index;
		
		Main.getGUI().getDisplay().asyncExec(new Runnable() {
			public void run() {
				for(int i = 0; i < simultaneousSimulations; i++) {
					Main.getGUI().getMainWindow().repaintCanvas(i);
				}
			}
		});
	}
	
	public void changeColor(int index) {
		color = index;
		
		Main.getGUI().getDisplay().asyncExec(new Runnable() {
			public void run() {
				for(int i = 0; i < simultaneousSimulations; i++) {
					Main.getGUI().getMainWindow().repaintCanvas(i);
				}
			}
		});
	}
	
	public int getFillMode() {
		return fillMode;
	}
	
	public void setFillMode(int fillMode) {
		if(fillMode == Data.FILL_INVERS || fillMode == Data.FILL_RANDOM) {
			this.fillMode = fillMode;
		}
	}
	
	public void setSimulationSpeed(int speed) {
		switch(speed) {
			case 0:
				delay = Data.VERY_LONG_DELAY;
				break;
			case 1:
				delay = Data.LONG_DELAY;
				break;
			case 2:
				delay = Data.MIDDLE_DELAY;
				break;
			case 3:
				delay = Data.SHORT_DELAY;
				break;
			case 4:
				delay = Data.VERY_SHORT_DELAY;
				break;
		}
	}
	
	public int getSimulationSpeed() {
		return delay;
	}
	
	public int getBackground() {
		return background;
	}
	
	public void setBackground(int background) {
		this.background = background;
	}
	
	public int getColor() {
		return color;
	}
	
	public void setColor(int color) {
		this.color = color;
	}
	
	public String getCurrentLanguage() {
		return currentlanguage;
	}
	
	public void setCurrentLanguage(String language) {
		this.currentlanguage = language;
	}
	
	public int getLanguageAmount() {
		return languageNames.length;
	}
	
	public String[] getLanguageNames() {
		return languageNames;
	}
	
	public String[] getLanguageNativeNames() {
		return languageNativeNames;
	}
	
	public int getCurrentLanguageIndex() {
		int index = 0;
		
		for(int i = 0; i < languageNames.length; i++) {
			if(languageNames[i].equals(currentlanguage)) index = i;
		}
		
		return index;
	}
	
	public void setSimultaenousSimulations(int simultaneous) {
		if(simultaneous > 1 && simultaneous < 8) {
			simultaneousSimulations = simultaneous;
		}
	}
	
	public int getSimultaneousSimulations() {
		return simultaneousSimulations;
	}

}