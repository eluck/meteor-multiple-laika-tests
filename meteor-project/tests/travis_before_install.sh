#!/bin/sh

#configuring the system
wget https://raw.github.com/eluck/meteor-multiple-laika-tests/meteor-project/tests/travis_befor_install.sh

#install meteor
curl https://install.meteor.com | /bin/sh

#installing laika
npm install -g laika
