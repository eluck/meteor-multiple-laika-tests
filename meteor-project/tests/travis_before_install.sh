#!/bin/sh

#install meteor
curl https://install.meteor.com | /bin/sh

#install global npm dependencies
npm install -g laika coffee-script eluck/shelljs

#install unit-testing npm dependencies
cd meteor-project/tests/unit-tests
npm install
