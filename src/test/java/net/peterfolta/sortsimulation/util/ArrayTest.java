/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            ArrayTest.java
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

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;
import java.util.Arrays;

import static org.junit.Assert.assertTrue;

public class ArrayTest {

    private int[] arrayA;

    @Before
    public void setup() {
        arrayA = new int[] { 1, 2, 3, 4, 5 };
    }

    @Test
    public void testConstructorIsPrivate() throws NoSuchMethodException {
        Constructor constructor = Array.class.getDeclaredConstructor();
        assertTrue("Constructor is not private", Modifier.isPrivate(constructor.getModifiers()));
    }

    @Test(expected = AssertionError.class)
    public void testConstructorCannotBeInstantiatedViaReflection() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, AssertionError {
        try {
            Constructor constructor = Array.class.getDeclaredConstructor();
            constructor.setAccessible(true);
            constructor.newInstance();
        } catch (InvocationTargetException invocationTargetException) {
            throw ((AssertionError) invocationTargetException.getCause());
        }
    }

    @Test
    public void testArraysAreEqual() {
        int[] arrayB = new int[5];

        Array.copy(arrayA, arrayB);
        assertTrue("Arrays are not equal", Arrays.equals(arrayA, arrayB));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCopyThrowsExceptionWhenTargetArrayIsSmaller() {
        int[] arrayB = new int[4];

        Array.copy(arrayA, arrayB);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCopyThrowsExceptionWhenTargetArrayIsLarger() {
        int[] arrayB = new int[6];

        Array.copy(arrayA, arrayB);
    }

    @Test
    public void testArrayElementsAreSwapped() {
        int i = 2;
        int j = 3;

        Array.swap(arrayA, i, j);
        int[] expected = new int[] {1, 2, 4, 3, 5};

        assertTrue("Swapped array does not match expected array", Arrays.equals(arrayA, expected));
    }

    @After
    public void teardown() {
        arrayA = null;
    }

}