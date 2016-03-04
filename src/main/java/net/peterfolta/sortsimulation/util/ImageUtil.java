/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            ImageUtil.java
 * Created:         2016-03-03
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

import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Display;

public final class ImageUtil {

    // Suppress default constructor for noninstantiability.
    private ImageUtil() {
        throw new AssertionError();
    }

    /**
     * Generates a rectangular image filled with the provided color.
     * If the border is greater than zero, the color indicator will include a black solid border with the specified
     * strength.
     *
     * @param   display                         SWT Display.
     * @param   color                           Color to fill indicator.
     * @param   width                           Width of the indicator image.
     * @param   height                          Height of the indicator image.
     * @param   border                          Thickness of border.
     * @see     org.eclipse.swt.graphics.Color
     * @see     org.eclipse.swt.graphics.Image
     */
    public static Image createColorIndicator(Display display, Color color, int width, int height, int border) {
        Image image = new Image(display, width, height);

        GC gc = new GC(image);

        // Fill Color Indicator
        gc.setBackground(color);
        gc.fillRectangle(0, 0, width, height);

        gc.dispose();

        // Add Border
        addBorder(image, display.getSystemColor(SWT.COLOR_BLACK), SWT.LINE_SOLID, border);

        return image;
    }

    /**
     * Draws a rectangular border with the specified color and thickness onto the provided Image object.
     *
     * @param   image                           Image to add border to.
     * @param   borderColor                     Color of the border.
     * @param   borderStyle                     Style of the border. Possible values are
     *                                          - SWT.LINE_SOLID        ―――――――――――――――――――
     *                                          - SWT.LINE_DOT          · · · · · · · · · ·
     *                                          - SWT.LINE_DASH         ― ― ― ― ― ― ― ― ― ―
     *                                          - SWT.LINE_DASHDOT      ― · ― · ― · ― · ― ·
     *                                          - SWT.LINE_DASHDOTDOT   ― · · ― · · ― · · –
     * @param   borderWidth                     Stroke width of the border in pixels.
     * @return                                  Image with added border.
     * @see     org.eclipse.swt.graphics.Color
     * @see     org.eclipse.swt.graphics.Image
     */
    public static Image addBorder(Image image, Color borderColor, int borderStyle, int borderWidth) {
        if (borderWidth < 0) {
            throw new IllegalArgumentException("Border Thickness (" + borderWidth + ") negative");
        }

        if (borderWidth > 0) {
            GC gc = new GC(image);

            gc.setForeground(borderColor);
            gc.setLineStyle(borderStyle);
            gc.setLineWidth(borderWidth);

            int x1 = borderWidth / 2;
            int y1 = borderWidth / 2;
            int x2 = image.getBounds().width - borderWidth;
            int y2 = image.getBounds().height - borderWidth;

            gc.drawRectangle(x1, y1, x2, y2);

            gc.dispose();
        }

        return image;
    }

}