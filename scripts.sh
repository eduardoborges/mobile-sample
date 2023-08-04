#!/bin/bash

function start(){
  npx react-native start
}

function android(){
  if [ $1 == "build" ]; then
    echo "Building Android...";
    build-android $2;
  else
    echo "Running Android...";
    npx react-native run-android;
  fi
}

function ios(){
  if [[ $1 == "build" ]]; then
    echo "Building iOS...";
    build-ios;
  else
    echo "Running iOS...";
    npx react-native run-ios;
  fi
}

function build-ios(){
  cd ios;

  xcrun xcodebuild archive \
    -workspace "MyApp.xcworkspace" \
    -scheme "MyApp" \
    -configuration Release \
    -sdk iphoneos \
    -derivedDataPath ./build/DerivedData \
    -archivePath ./build/MyApp.xcarchive \
    -allowProvisioningUpdates \
    -allowProvisioningDeviceRegistration;

  xcrun xcodebuild \
    -exportArchive \
    -exportOptionsPlist ExportOptions.plist \
    -archivePath ./build/MyApp.xcarchive \
    -exportPath ./build/MyApp.ipa \
    -allowProvisioningUpdates \
    -allowProvisioningDeviceRegistration;
}

function build-android(){
  cd android;
  if [[ $1 == "aab" ]]; then
    echo "Building Bundle AAB...";
    ./gradlew bundleRelease;
  else
    echo "Building APK...";
    ./gradlew assembleRelease;
  fi
}

function lint(){
  npx eslint src --ext .js,.jsx;
}

function test(){
  jest src;
}

function postinstall(){
  # macOS only
  if [[ "$OSTYPE" == "darwin"* ]]; then
    npx react-native setup-ios-permissions
    cd ios && pod install && cd ..;
  fi
}

func=$1
args=${@:2}

eval $func $args