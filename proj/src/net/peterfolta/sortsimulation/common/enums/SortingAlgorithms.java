/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2014 Peter Folta. All rights reserved.
 * 
 * Project:			SortSimulation 
 * Version:			2.0.0
 * Website:			http://www.peterfolta.net/software/sortsimulation
 * 
 * File:			SortingAlgorithms.java
 * Created:			2014/03/23
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

import net.peterfolta.sortsimulation.algorithms.BubbleSort;
import net.peterfolta.sortsimulation.algorithms.CocktailSort;
import net.peterfolta.sortsimulation.algorithms.GnomeSort;
import net.peterfolta.sortsimulation.algorithms.HeapSort;
import net.peterfolta.sortsimulation.algorithms.InsertionSort;
import net.peterfolta.sortsimulation.algorithms.MergeSort;
import net.peterfolta.sortsimulation.algorithms.QuickSort;
import net.peterfolta.sortsimulation.algorithms.SelectionSort;
import net.peterfolta.sortsimulation.algorithms.ShellSort;
import net.peterfolta.sortsimulation.common.interfaces.Sortable;
import net.peterfolta.sortsimulation.main.Main;

public enum SortingAlgorithms {
	BUBBLESORT("Bubblesort", new BubbleSort()),
	COCKTAILSORT("Cocktailsort", new CocktailSort()),
	GNOMESORT("Gnomesort", new GnomeSort()),
	HEAPSORT("Heapsort", new HeapSort()),
	INSERTIONSORT("Insertionsort", new InsertionSort()),
	MERGESORT("Mergesort", new MergeSort()),
	QUICKSORT("Quicksort", new QuickSort()),
	SELECTIONSORT("Selectionsort", new SelectionSort()),
	SHELLSORT("Shellsort", new ShellSort());
	
	private final String translationKey;
	private Sortable sortable;
	
	SortingAlgorithms(String translationKey, Sortable sortable) {
		this.translationKey = translationKey;
		this.sortable = sortable;
	}
	
	public String getTranslationKey() {
		return translationKey;
	}
	
	public String getTranslation() {
		return Main.language.getTranslationContent(getTranslationKey());
	}
	
	public static String[] getTranslations() {
		String[] translations = new String[values().length];
		
		for(int i = 0; i < translations.length; i++) {
			translations[i] = Main.language.getTranslationContent(values()[i].getTranslationKey());
		}
		
		return translations;
	}
	
	public Sortable getSortable() {
		return sortable;
	}
	
	public void createSortable() {
		switch(this) {
			case BUBBLESORT:
				this.sortable = new BubbleSort();
				break;
			case COCKTAILSORT:
				this.sortable = new CocktailSort();
				break;
			case GNOMESORT:
				this.sortable = new GnomeSort();
				break;
			case HEAPSORT:
				this.sortable = new HeapSort();
				break;
			case INSERTIONSORT:
				this.sortable = new InsertionSort();
				break;
			case MERGESORT:
				this.sortable = new MergeSort();
				break;
			case QUICKSORT:
				this.sortable = new QuickSort();
				break;
			case SELECTIONSORT:
				this.sortable = new SelectionSort();
				break;
			case SHELLSORT:
				this.sortable = new ShellSort();
				break;
		}
	}
}