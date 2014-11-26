#!/bin/sh

which node
pwd
echo switching to meteor-project
cd meteor-project
laika tests/integration-tests -t 10000 &&
laika tests/performance-tests -t 10000
