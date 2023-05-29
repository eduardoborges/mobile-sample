#!/bin/bash

function start(){
  npx watchman watch-del-all;
  npx react-native start
}

function android(){
  if [ $1 == "build" ]; then
    echo "Building Android...";
    build-android;
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
  xcodebuild -workspace "MyApp.xcworkspace" \
  -scheme "MyApp" -configuration Release \
  -sdk iphoneos -derivedDataPath build  \
  -allowProvisioningDeviceRegistration;
}

function build-android(){
  cd android && ./gradlew assembleRelease;
}

function lint(){
  npx eslint src --ext .js,.jsx;
}

function test(){
  jest src;
}

func=$1
args=${@:2}

eval $func $args