/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			CreateArray.java
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

import net.peterfolta.sortsimulation.common.enums.FillMode;

public class CreateArray {
	
	public CreateArray(FillMode mode) {
		Main.array = new int[Main.settings.getSimultaneousSimulations()][Data.LENGTH_OF_ARRAY];
		
		switch(mode) {
			case RANDOM:
				for(int i = 0; i < Main.array[0].length; i++) {
					boolean insert = true;
					int tmp = (int) (Math.random() * Main.array[0].length + 1);
					
					for(int j = 0; j < i; j++) {
						if(Main.array[0][j] == tmp) {
							i--;
							insert = false;
							break;
						}
					}
					
					if(insert) {
						for(int j = 0; j < Main.array.length; j++) {
							Main.array[j][i] = tmp;
						}
					}
				}
				
				break;
			case INVERSE:
				for(int i = 0; i < Main.array[0].length; i++) {
					int tmp = Main.array[0].length - i;
					
					for(int j = 0; j < Main.array.length; j++) {
						Main.array[j][i] = tmp;
					}
				}
				
				break;
			case ALMOST_SORTED:
				for(int i = 0; i < Main.array[0].length; i++) {
					Main.array[0][i] = i+1;
				}
				
				for(int i = 0; i < Main.array[0].length; i++) {
					int a = (int) (Math.random() * Main.array[0].length);
				//	int b = (int) (Math.random() * Main.array[0].length);
					int b;
					
					if(a > 3) {
						b = a - 3;
					} else {
						b = a + 3;
					}
					
					int tmp = Main.array[0][a];
					Main.array[0][a] = Main.array[0][b];
					Main.array[0][b] = tmp;
				}
				
				for(int i = 0; i < Main.array[0].length; i++) {					
					for(int j = 1; j < Main.array.length; j++) {
						Main.array[j][i] = Main.array[0][i];
					}
				}
				
				break;
			case PRESORTED:
				for(int i = 0; i < Main.array[0].length; i++) {
					Main.array[0][i] = i+1;
					
					for(int j = 1; j < Main.array.length; j++) {
						Main.array[j][i] = Main.array[0][i];
					}
				}
				
				break;
		}
	}

}