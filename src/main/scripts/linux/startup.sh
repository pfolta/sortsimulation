#!/bin/sh
BASEDIR=$(dirname "$0")
cd $BASEDIR
exec java -jar SortSimulation.jar $1