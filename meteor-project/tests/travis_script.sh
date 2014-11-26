#!/bin/sh

cd meteor-project/tests
laika integration-testing -t 10000
laika performance-testing -t 10000
