/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            ImageUtilTest.java
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
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.ImageData;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.swt.widgets.Display;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class ImageUtilTest {

    private Display display;
    private Color color;
    int width;
    int height;
    int border;

    private Image image;
    private Color borderColor;
    private int borderStyle;
    private int borderWidth;

    @Before
    public void setup() {
        display = Display.getDefault();
        color = new Color(display, 0, 128, 255);
        width = 16;
        height = 16;
        border = 1;

        image = new Image(display, width, height);
        borderColor = display.getSystemColor(SWT.COLOR_RED);
        borderStyle = SWT.BORDER_SOLID;
        borderWidth = 1;
    }

    @Test
    public void testConstructorIsPrivate() throws NoSuchMethodException {
        Constructor constructor = ImageUtil.class.getDeclaredConstructor();
        assertTrue("Constructor is not private", Modifier.isPrivate(constructor.getModifiers()));
    }

    @Test(expected = AssertionError.class)
    public void testConstructorCannotBeInstantiatedViaReflection() throws NoSuchMethodException, IllegalAccessException, InstantiationException, AssertionError {
        try {
            Constructor constructor = ImageUtil.class.getDeclaredConstructor();
            constructor.setAccessible(true);
            constructor.newInstance();
        } catch (InvocationTargetException invocationTargetException) {
            throw ((AssertionError) invocationTargetException.getCause());
        }
    }

    @Test
    public void testColorIndicatorIsNotNull() {
        Image colorIndicator = ImageUtil.createColorIndicator(display, color, width, height, border);

        assertNotNull("Color Indicator is null", colorIndicator);
    }

    @Test
    public void testColorIndicatorHasCorrectDimensions() {
        Image colorIndicator = ImageUtil.createColorIndicator(display, color, width, height, border);
        int width = colorIndicator.getBounds().width;
        int height = colorIndicator.getBounds().height;

        assertEquals("Color Indicator has incorrect width", this.width, width);
        assertEquals("Color Indicator has incorrect height", this.height, height);
    }

    @Test
    public void testColorIndicatorIsFilledWithCorrectColor() {
        Image colorIndicator = ImageUtil.createColorIndicator(display, color, width, height, border);
        ImageData imageData = colorIndicator.getImageData();

        for (int i = border; i < width - border; i++) {
            for (int j = border; j < height - border; j++) {
                int pixel = imageData.getPixel(i, j);
                RGB rgb = imageData.palette.getRGB(pixel);

                Color color = new Color(display, rgb);

                assertEquals("Pixel (" + i + ", " + j + ") has wrong color", this.color, color);
            }
        }
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddBorderThrowsExceptionWhenBorderWidthNegative() {
        ImageUtil.addBorder(image, borderColor, borderStyle, -1);
    }

    @Test
    public void testAddBorderDoesNotAlterImageDimensions() {
        Image expectedImage = new Image(display, image.getImageData());
        Image image = ImageUtil.addBorder(this.image, borderColor, borderStyle, borderWidth);

        int width = image.getBounds().width;
        int height = image.getBounds().height;
        int expectedWidth = expectedImage.getBounds().width;
        int expectedHeight = expectedImage.getBounds().height;

        assertEquals("Image has incorrect width", expectedWidth, width);
        assertEquals("Image has incorrect height", expectedHeight, height);
    }

    @Test
    public void testAddBorderDoesNotChangeImageWhenBorderEqualsZero() {
        Image expectedImage = new Image(display, image.getImageData());
        Image image = ImageUtil.addBorder(this.image, borderColor, borderStyle, 0);

        ImageData imageData = image.getImageData();
        ImageData expectedImageData = expectedImage.getImageData();

        for (int i = 0; i < width; i++) {
            for (int j = 0; j < height; j++) {
                int pixel = imageData.getPixel(i, j);
                int expectedPixel = expectedImageData.getPixel(i, j);

                assertEquals("Pixel (" + i + ", " + j + ") has changed", expectedPixel, pixel);
            }
        }
    }

    @After
    public void teardown() {
        display.dispose();
    }

}