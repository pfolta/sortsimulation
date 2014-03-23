/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			Color.java
 * Created:			2014/03/22
 * Last modified:	2014/03/23
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

public enum Color {
	BLUE(0, 0, 255, "Blue", "blue_16.png"),
	BROWN(139, 69, 19, "Brown", "brown_16.png"),
	CYAN(0, 255, 255, "Cyan", "cyan_16.png"),
	FUCHSIA(255, 0, 255, "Fuchsia", "fuchsia_16.png"),
	YELLOW(255, 255, 0, "Yellow", "yellow_16.png"),
	GREEN(34, 139, 34, "Green", "green_16.png"),
	RED(255, 0, 0, "Red", "red_16.png"),
	BLACK(0, 0, 0, "Black", "black_16.png");
	
	private final org.eclipse.swt.graphics.Color color;
	private final String translationKey;
	private final String icon;
	
	Color(int red, int green, int blue, String translationKey, String icon) {
		this.color = new org.eclipse.swt.graphics.Color(null, red, green, blue);
		this.translationKey = translationKey;
		this.icon = icon;
	}
	
	public org.eclipse.swt.graphics.Color getColor() {
		return color;
	}
	
	public String getTranslationKey() {
		return translationKey;
	}
	
	public String getTranslation() {
		return Main.language.getTranslationContent(getTranslationKey());
	}
	
	public String getIcon() {
		return icon;
	}
}