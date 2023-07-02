#!/bin/bash
set -ex

ls -lrt

npm install -g @wdio/cli
npx wdio --help
npm install
npm run wdio