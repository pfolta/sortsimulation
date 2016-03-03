/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            MathUtil.java
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

import java.util.concurrent.ThreadLocalRandom;

public final class MathUtil {

    // Suppress default constructor for noninstantiability.
    private MathUtil() {
        throw new AssertionError();
    }

    /**
     * Generates a pseudo-random number between min and max, inclusive.
     *
     * @param   min                                     Minimum value.
     * @param   max                                     Maximum value. Must be greater than or equal to min.
     * @return                                          Random between min and max, inclusive.
     * @see     java.util.concurrent.ThreadLocalRandom
     */
    public static int random(int min, int max) {
        if (min > max) {
            throw new IllegalArgumentException("Min Value (" + min + ") > Max Value (" + max + ")");
        }

        return ThreadLocalRandom.current().nextInt(min, max + 1);
    }

}