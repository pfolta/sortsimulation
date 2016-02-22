#!/bin/sh
BASEDIR = `dirname $0`
cd $BASEDIR
exec java -d64 -XstartOnFirstThread -jar SortSimulation.jar $1