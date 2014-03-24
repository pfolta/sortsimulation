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
 * Last modified:	2014/03/24
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

import net.peterfolta.sortsimulation.common.enums.Delay;
import net.peterfolta.sortsimulation.common.enums.FillMode;

import org.eclipse.swt.graphics.Color;
import org.jdom.input.SAXBuilder;

public class Settings {
	
	private Delay delay;
	private Color background;
	private Color color;
	private FillMode fillMode;
	private int simultaneousSimulations;
	
	private String currentlanguage;
	public String[] languageNames;
	private String[] languageNativeNames;
	
	public Settings(Delay delay, Color background, Color color, FillMode fillMode, int simultaneousSimulations) {
		this.delay = delay;
		this.background = background;
		this.color = color;
		this.fillMode = fillMode;
		this.simultaneousSimulations = simultaneousSimulations;
		
		try {
			String[] tmp = new File("res/lng/").list();
			Arrays.sort(tmp);

			currentlanguage = "English";
			languageNames = new String[tmp.length];
			languageNativeNames = new String[tmp.length];
			
			for(int i = 0; i < tmp.length; i++) {
				languageNames[i] = new SAXBuilder().build("res/lng/" + tmp[i]).getRootElement().getChild("Information").getChild("LanguageName").getText();
				languageNativeNames[i] = new SAXBuilder().build("res/lng/" + tmp[i]).getRootElement().getChild("Information").getChild("NativeName").getText();
			}
		} catch(Exception exception) {
			Main.exit(2);
		}
	}
	
	public FillMode getFillMode() {
		return fillMode;
	}
	
	public void setFillMode(FillMode fillMode) {
		this.fillMode = fillMode;
	}
	
	public void setDelay(Delay delay) {
		this.delay = delay;
	}
	
	public Delay getDelay() {
		return delay;
	}
	
	public org.eclipse.swt.graphics.Color getBackground() {
		return background;
	}
	
	public void setBackground(org.eclipse.swt.graphics.Color background) {
		this.background = background;
		
		Main.getGUI().getDisplay().asyncExec(new Runnable() {
			public void run() {
				for(int i = 0; i < simultaneousSimulations; i++) {
					Main.getGUI().getMainWindow().repaintCanvas(i);
				}
			}
		});
	}
	
	public Color getColor() {
		return color;
	}
	
	public void setColor(Color color) {
		this.color = color;
		
		Main.getGUI().getDisplay().asyncExec(new Runnable() {
			public void run() {
				for(int i = 0; i < simultaneousSimulations; i++) {
					Main.getGUI().getMainWindow().repaintCanvas(i);
				}
			}
		});
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
	
	public void setSimultaenousSimulations(int simultaneous) throws Exception {
		if(simultaneous > 1 && simultaneous < 10) {
			simultaneousSimulations = simultaneous;
		} else {
			throw new Exception("Illegal amount of simultaneous simulations");
		}
	}
	
	public int getSimultaneousSimulations() {
		return simultaneousSimulations;
	}

}