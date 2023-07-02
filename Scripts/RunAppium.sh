#!/bin/bash
set -ex
npm install -g appium@next
# appium driver install xcuitest
# appium driver install espresso

appium -v
appium driver install uiautomator2@2.0.1
appium --base-path /wd/hub --log appium.log &>/dev/null &