#!/bin/bash
set -ex

ls -lrt

# npm i -g npm-upgrade
# npm i y18n

rm -rf node_modules
npm i -g npm-upgrade
npm i y18n

npm install -g @wdio/cli


npm install
wdio run ./wdio.conf.js
# npm install
# npm run wdio