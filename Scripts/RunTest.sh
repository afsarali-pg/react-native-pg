#!/bin/bash
set -ex

ls -lrt


rm -rf node_modules
npm i -g npm-upgrade
npm i y18n

npm install -g @wdio/cli
# npm i appium-uiautomator2-driver

npm install
wdio run ./wdio.conf.js
# npm install
# npm run wdio