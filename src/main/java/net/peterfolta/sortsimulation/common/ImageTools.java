/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            ImageTools.java
 * Created:         2014-03-24
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

package net.peterfolta.sortsimulation.common;

import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Display;

public class ImageTools {

    public static Image createColorField(Display display, Color color) {
        int height = 16;
        int width = 16;

        Image colorField = new Image(display, width, height);
        GC colorFieldGC = new GC(colorField);

        colorFieldGC.setForeground(new Color(display, 0, 0, 0));
        colorFieldGC.drawRectangle(0, 0, width - 1, height - 1);

        colorFieldGC.setBackground(color);
        colorFieldGC.fillRectangle(1, 1, width - 2, height - 2);

        colorFieldGC.dispose();

        return colorField;
    }

}