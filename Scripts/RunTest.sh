#!/bin/bash
set -ex

ls -lrt
cd ..
ls -lrt
npm install
npm run wdio