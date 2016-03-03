/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            Array.java
 * Created:         2016-02-14
 * Author:          Peter Folta <mail@peterfolta.net>
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

package net.peterfolta.sortsimulation.util;

public final class ArrayUtil {

    // Suppress default constructor for noninstantiability.
    private ArrayUtil() {
        throw new AssertionError();
    }

    /**
     * Copies contents of an integer array a into an integer array b,
     * given a and b are the same size.
     *
     * @param   a       Source array.
     * @param   b       Target array.
     */
    public static void copy(int[] a, int[] b) {
        if (a.length != b.length) {
            throw new IllegalArgumentException("ArrayUtil lengths do not match");
        }

        System.arraycopy(a, 0, b, 0, a.length);
    }

    /**
     * Swaps two elements in an integer array.
     *
     * @param   array   ArrayUtil that contains elements.
     * @param   i       Index of first element to be swapped.
     * @param   j       Index of second element to be swapped.
     */
    public static void swap(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

}