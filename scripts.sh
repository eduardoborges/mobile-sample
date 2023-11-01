#!/bin/bash

# Android Stuff
function android(){
  if [ $1 == "build" ]; then
    echo "🤖 Building Android...";
    build-android $2;
  else
    echo "🤖 Running Android...";
    npx react-native run-android;
  fi
}

function build-android(){
  cd android;
  if [[ $1 == "aab" ]]; then
    echo "📦 Building AAB...";
    ./gradlew bundleRelease;
  else
    echo "📦 Building APK...";
    ./gradlew assembleRelease;
  fi
}

# iOS Stuff
function ios(){
  case $1 in
    "build")
      build-ios;
      ;;
    "archive")
      ios-archive;
      ;;
    "export")
      ios-export;
      ;;
    *)
      npx react-native run-ios;
      ;;
  esac
}

function ios-archive(){
  cd ios;
  xcrun xcodebuild archive \
    -workspace "MyApp.xcworkspace" \
    -scheme "MyApp" \
    -configuration Release \
    -sdk iphoneos \
    -destination 'generic/platform=iOS' \
    -derivedDataPath ./build/DerivedData \
    -archivePath ./build/MyApp.xcarchive \
    -allowProvisioningUpdates \
    -allowProvisioningDeviceRegistration;
}

function ios-export(){
  echo "📦 Exporting iOS...";
  xcrun xcodebuild \
    -exportArchive \
    -exportOptionsPlist ExportOptions.plist \
    -archivePath ./build/MyApp.xcarchive \
    -exportPath ./build/MyApp.ipa \
    -allowProvisioningUpdates \
    -allowProvisioningDeviceRegistration;
}

function ios-build(){
  echo "📱 Building iOS...";
  ios-archive;
  ios-export;
}

# General Stuff

function start(){
  npx react-native start
}

function lint(){
  echo "🧹 Linting...";
  npx eslint ./src --ext .js,.jsx,.ts,.tsx;
}

function types(){
  echo "🧪 Checking types...";
  npx tsc --noEmit;
}

function test(){
  echo "🧪 Running tests...";
  jest src;
}

function env(){
  echo "🔧 Setting up env variables...";
  cp -n ./envs/.env.$1.json ./.env.json || true;
}

function prepare(){
  echo "🍃 Preparing environment...";
  echo "🪝 Install git hooks...";
  npx simple-git-hooks >> /dev/null;
  env development
  # macOS only
  # if [[ "$OSTYPE" == "darwin"* ]]; then
  #   # Install Homebrew
  # fi
}

func=$1
args=${@:2}

eval $func $args