/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            Settings.java
 * Created:         2008-11-29
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

package net.peterfolta.sortsimulation.main;

import java.io.File;
import java.util.Arrays;

import net.peterfolta.sortsimulation.common.Color;
import net.peterfolta.sortsimulation.common.enums.Delay;
import net.peterfolta.sortsimulation.common.enums.FillMode;
import net.peterfolta.sortsimulation.gui.GUI;

import org.jdom2.input.SAXBuilder;

public class Settings {

    private Delay delay;
    private Color background;
    private Color color;
    private FillMode fillMode;
    private int simultaneousSimulations;

    private String currentlanguage;
    private String[] languageNames;
    private String[] languageNativeNames;

    public Settings(Delay delay, Color background, Color color, FillMode fillMode, int simultaneousSimulations) {
        this.delay = delay;
        this.background = background;
        this.color = color;
        this.fillMode = fillMode;
        this.simultaneousSimulations = simultaneousSimulations;

        try {
            String[] languageFiles = new File(ClassLoader.getSystemClassLoader().getResource("lng/").toURI()).list();

            if (languageFiles != null) {
                Arrays.sort(languageFiles);

                currentlanguage = "English";
                languageNames = new String[languageFiles.length];
                languageNativeNames = new String[languageFiles.length];

                for (int i = 0; i < languageFiles.length; i++) {
                    languageNames[i] = new SAXBuilder().build(ClassLoader.getSystemClassLoader().getResource("lng/").toURI() + languageFiles[i]).getRootElement().getChild("Information").getChild("LanguageName").getText();
                    languageNativeNames[i] = new SAXBuilder().build(ClassLoader.getSystemClassLoader().getResource("lng/").toURI() + languageFiles[i]).getRootElement().getChild("Information").getChild("NativeName").getText();
                }
            }
        } catch (Exception exception) {
            exception.printStackTrace();

            Main.exit(2);
        }
    }

    public FillMode getFillMode() {
        return fillMode;
    }

    public void setFillMode(FillMode fillMode) {
        this.fillMode = fillMode;
    }

    public void setDelay(Delay delay) {
        this.delay = delay;
    }

    public Delay getDelay() {
        return delay;
    }

    public org.eclipse.swt.graphics.Color getBackground() {
        return background.getColor();
    }

    public void setBackground(Color background) {
        this.background = background;

        GUI.getInstance().getDisplay().asyncExec(() -> {
            for (int i = 0; i < simultaneousSimulations; i++) {
                GUI.getInstance().getMainWindow().repaintCanvas(i);
            }
        });
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;

        GUI.getInstance().getDisplay().asyncExec(() -> {
            for (int i = 0; i < simultaneousSimulations; i++) {
                GUI.getInstance().getMainWindow().repaintCanvas(i);
            }
        });
    }

    public String getCurrentLanguage() {
        return currentlanguage;
    }

    public void setCurrentLanguage(String language) {
        this.currentlanguage = language;
    }

    public int getLanguageAmount() {
        return languageNames.length;
    }

    public String[] getLanguageNames() {
        return languageNames;
    }

    public String[] getLanguageNativeNames() {
        return languageNativeNames;
    }

    public int getCurrentLanguageIndex() {
        int index = 0;

        for (int i = 0; i < languageNames.length; i++) {
            if (languageNames[i].equals(currentlanguage)) index = i;
        }

        return index;
    }

    public void setSimultaenousSimulations(int simultaneous) throws Exception {
        if (simultaneous > 1 && simultaneous < 10) {
            simultaneousSimulations = simultaneous;
        } else {
            throw new Exception("Illegal amount of simultaneous simulations");
        }
    }

    public int getSimultaneousSimulations() {
        return simultaneousSimulations;
    }

}