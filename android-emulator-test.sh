#!/bin/sh

ADB="/Users/runner/Library/Android/sdk/platform-tools/adb"

function reset_emulator() {
	echo "Attempt to close any system dialogs"
	$ADB shell am broadcast -a android.intent.action.CLOSE_SYSTEM_DIALOGS

	echo "Send keystroke Arrow Right"
	sleep 3; $ADB shell input keyevent 22
	echo "Send keystroke Arrow Right again"
	sleep 3; $ADB shell input keyevent 22
	echo "Send keystroke Enter to press a button on the dialog"
	sleep 3; $ADB shell input keyevent 66

	echo "Lock orientation"
	$ADB shell settings put system accelerometer_rotation 1
}

reset_emulator

$ADB install app/pg.apk
