#!/bin/bash
set -ex
npm install -g appium@next
# appium driver install xcuitest
# appium driver install espresso

appium -v
appium --base-path /wd/hub --log appium.log &>/dev/null &