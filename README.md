# SortSimulation

[![Build Status](https://travis-ci.org/pfolta/SortSimulation.svg)](https://travis-ci.org/pfolta/SortSimulation)

[SortSimulation](https://peterfolta.net/software/sortsimulation) is an educational Java application that visualizes and compares sorting algorithms. I created it to improve understanding of how the different sorting algorithms work and develop an intuition for runtime differences.

[Image]

More information for end users can be found on the [project's website](http://www.peterfolta.net/software/sortsimulation).

## How to Contribute

Thank you for your interest in SortSimulation! To contribute, please create a fork of this repository first. Once you have added your changes, please send a [pull request](https://help.github.com/articles/using-pull-requests/#fork--pull).

Keep reading to find out more about how to build SortSimulation and this repository is structured.

## Repository Structure

```
SortSimulation/
+--doc/                 [Deprecated] Source files for the documentation.
+--res/                 [Deprecated] Additional resource files.
+--src/                 All source files.
   +---main/            Main source files for SortSimulation.
   +---test/            The SortSimulation test suite.
+--target/              [Generated] Build output directory for Maven.
   +---dist/            [Generated] The destination folder for SortSimulation distributions.
   +---reports/         [Generated] Reports directory for Javadoc and test reports.
+--build.bat            Windows batch script for building SortSimulation.
+--build.sh             Shell script for building SortSimulation.
+--pom.xml              The Maven build script.
```

## How To Build

### Requirements

You'll need a Java SE JDK Version 8. I've tested it with Oracle's JDK but a free JDK might work as well.

You'll also need Apache Maven (version 3.3.3 or above).

### Building SortSimulation

There are two ready-to-run scripts available that will make building SortSimulation as easy as possible for you.

1. Simply run `build.sh` or `build.bat` from the project root directory.
2. Select the platform and architecture you want to build for.
3. The final product can be found under `/target/dist`.

### Building with Maven

If you prefer to build SortSimulation directly with Maven, this is what you need to know.

#### Maven Profiles

SortSimulation's build is platform dependent because it uses the [SWT Standard Widget Toolkit](https://www.eclipse.org/swt/). Building for different platforms using Maven is realized by using different profiles. Currently, the following platforms are supported by SortSimulation:

Profile        | Platform | Architecture
---------------| ---------| ------------
`linux-x86`    | Linux    |  32-bit
`linux-x86_64` | Linux    | 64-bit
`mac-x86_64`   | OS X     | 64-bit
`win32`        | Windows  | 32-bit
`win64`        | Windows  | 64-bit

To build SortSimulation with Maven, replace `<profile>` with the platform profile you want to build it for and run the following command:

```
mvn -P<profile> clean validate compile test package verify
```

### Auto Generated Reports

- JavaDoc API Documentation can be found under `/target/reports/javadoc`.
- JaCoCo Test Coverage Reports are located under `/target/reports/test-coverage`.

## More Links

- [Project Website](https://peterfolta.net/software/sortsimulation)
- [SortSimulation CI](https://travis-ci.org/pfolta/SortSimulation)
- [Copyright and License](LICENSE.md)
- [Older Releases](ftp://ftp.peterfolta.net/repositories/sortsimulation/)

---

Copyright (C) 2008-2016 Peter Folta. All rights reserved.