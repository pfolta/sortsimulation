/*
 * SortSimulation - A visual representation of sorting algorithms
 * Copyright (C) 2008-2016 Peter Folta. All rights reserved.
 *
 * Project:         SortSimulation
 * Version:         2.1.0
 * Website:         http://www.peterfolta.net/software/sortsimulation
 *
 * File:            Manifest.java
 * Created:         2016-02-13
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

import com.jcabi.manifests.Manifests;

public final class Manifest {

    // Suppress Default Constructor for Noninstantiability
    private Manifest() {
        throw new AssertionError();
    }

    public static String getApplicationCopyright() {
        String applicationCopyright = null;

        try {
            applicationCopyright = Manifests.read("Application-Copyright");
        } catch (IllegalArgumentException exception) {
            applicationCopyright = "APPLICATION_COPYRIGHT";
        }

        return applicationCopyright;
    }

    public static String getApplicationDescription() {
        String applicationDescription = null;

        try {
            applicationDescription = Manifests.read("Application-Description");
        } catch (IllegalArgumentException exception) {
            applicationDescription = "APPLICATION_DESCRIPTION";
        }

        return applicationDescription;
    }

    public static String getApplicationUrl() {
        String applicationUrl = null;

        try {
            applicationUrl = Manifests.read("Application-Url");
        } catch (IllegalArgumentException exception) {
            applicationUrl = "APPLICATION_URL";
        }

        return applicationUrl;
    }

    public static String getBuildArch() {
        return Manifests.read("Build-Arch");
    }

    public static String getBuildNumber() {
        String buildNumber = null;

        try {
            buildNumber = Manifests.read("Build-Number");
        } catch (IllegalArgumentException exception) {
            buildNumber = "BUILD_NUMBER";
        }

        return buildNumber;
    }

    public static String getBuildNumberShort() {
        return Manifests.read("Build-Number-Short");
    }

    public static String getBuildOsName() {
        return Manifests.read("Build-Os-Name");
    }

    public static String getBuildPlatform() {
        return Manifests.read("Build-Platform");
    }

    public static String getBuildTime() {
        return Manifests.read("Build-Time");
    }

    public static String getImplementationTitle() {
        return Manifests.read("Implementation-Title");
    }

    public static String getImplementationVendor() {
        return Manifests.read("Implementation-Vendor");
    }

    public static String getImplementationVendorId() {
        return Manifests.read("Implementation-Vendor-Id");
    }

    public static String getImplementationVersion() {
        return Manifests.read("Implementation-Version");
    }

}