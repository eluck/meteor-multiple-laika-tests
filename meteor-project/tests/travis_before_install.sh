#!/bin/sh

#install meteor
curl https://install.meteor.com | /bin/sh

#installing npm dependencies
npm install -g laika coffee-script eluck/shelljs
