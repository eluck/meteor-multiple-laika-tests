#!/bin/sh

cd meteor-project
laika tests/integration-testing -t 10000
laika tests/performance-testing -t 10000
