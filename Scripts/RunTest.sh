#!/bin/bash
set -ex

ls -lrt

npm install -g @wdio/cli
npx wdio --help
npm install
wdio run ./wdio.conf.js
# npm install
# npm run wdio