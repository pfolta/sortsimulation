/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2015 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.1
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Delay.java
 * Created:			2014/3/22
 * Last modified:	2015/10/2
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

package net.peterfolta.sortsimulation.common.enums;

import net.peterfolta.sortsimulation.main.Main;

public enum Delay {
	
	VERY_LONG_DELAY(250, "VerySlow", '1'),
	LONG_DELAY(100, "Slow", '2'),
	MIDDLE_DELAY(25, "Medium", '3'),
	SHORT_DELAY(5, "Fast", '4'),
	VERY_SHORT_DELAY(1, "VeryFast", '5');
	
	private final int delay;
	private final String translationKey;
	private final char shortcut;
	
	Delay(int delay, String translationKey, char shortcut) {
		this.delay = delay;
		this.translationKey = translationKey;
		this.shortcut = shortcut;
	}
	
	public int getDelay() {
		return delay;
	}
	
	public String getTranslationKey() {
		return translationKey;
	}
	
	public String getTranslation() {
		return Main.language.getTranslationContent(getTranslationKey());
	}
	
	public char getShortcut() {
		return shortcut;
	}
	
}