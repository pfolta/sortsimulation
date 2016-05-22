/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            ResourceLoader.java
 * Created:         2008-12-14
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

import net.peterfolta.sortsimulation.main.Main;

import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Display;

import java.net.URL;

public class ResourceLoader {

    public static Image loadImage(Display display, String filename) {
        Image image = null;

        try {
            URL fileURL = ClassLoader.getSystemClassLoader().getResource("img/" + filename);

            if (fileURL != null) {
                image = new Image(display, fileURL.getFile());
            }
        } catch (Exception exception) {
            exception.printStackTrace();

            Main.exit(3);
        }

        return image;
    }

    public static String getHTMLLicense() {
        return "file:///" + System.getProperty("user.dir") + "/doc/license.html";
    }

}