/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            MathTest.java
 * Created:         2016-02-19
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

import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;

import static org.junit.Assert.assertTrue;

public class MathTest {

    @Test
    public void testConstructorIsPrivate() throws NoSuchMethodException {
        Constructor constructor = Array.class.getDeclaredConstructor();
        assertTrue("Constructor is not private", Modifier.isPrivate(constructor.getModifiers()));
    }

    @Test(expected = AssertionError.class)
    public void testConstructorCannotBeInstantiatedViaReflection() throws NoSuchMethodException, IllegalAccessException, InstantiationException, AssertionError {
        try {
            Constructor constructor = Math.class.getDeclaredConstructor();
            constructor.setAccessible(true);
            constructor.newInstance();
        } catch (InvocationTargetException invocationTargetException) {
            throw ((AssertionError) invocationTargetException.getCause());
        }
    }

    @Test(expected = IllegalArgumentException.class)
    public void testRandomThrowsExceptionWhenMinGreaterThanMax() {
        Math.random(5, 3);
    }

    @Test
    public void testRandomNumberConformsWithLowerBoundary() {
        int min = -30;
        int max = 50;

        int random = Math.random(min, max);
        assertTrue("Generated number is smaller than min value", (random >= min));
    }

    @Test
    public void testRandomNumberConformsWithUpperBoundary() {
        int min = -30;
        int max = 50;

        int random = Math.random(min, max);
        assertTrue("Generated number is greater than max value", (random <= max));
    }

}