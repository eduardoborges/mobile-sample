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

function setup-ios(){
  # create variables
  CERTIFICATE_PATH=$RUNNER_TEMP/build_certificate.p12
  DEV_CERTIFICATE_PATH=$RUNNER_TEMP/build_dev_certificate.p12
  PP_PATH=$RUNNER_TEMP/build_pp.mobileprovision
  KEYCHAIN_PATH=$RUNNER_TEMP/app-signing.keychain-db

  # import certificate and provisioning profile from secrets
  echo -n "$BUILD_CERTIFICATE_BASE64" | base64 --decode -o $CERTIFICATE_PATH
  echo -n "$BUILD_DEV_CERTIFICATE_BASE64" | base64 --decode -o $DEV_CERTIFICATE_PATH
  echo -n "$BUILD_PROVISION_PROFILE_BASE64" | base64 --decode -o $PP_PATH


  # create temporary keychain
  security create-keychain -p "$KEYCHAIN_PASSWORD" $KEYCHAIN_PATH
  security set-keychain-settings -lut 21600 $KEYCHAIN_PATH
  security unlock-keychain -p "$KEYCHAIN_PASSWORD" $KEYCHAIN_PATH

  # import certificate to keychain
  security import $CERTIFICATE_PATH -P "$P12_PASSWORD" -A -t cert -f pkcs12 -k $KEYCHAIN_PATH
  security list-keychain -d user -s $KEYCHAIN_PATH
  security import $DEV_CERTIFICATE_PATH -P "$P12_PASSWORD" -A -t cert -f pkcs12 -k $KEYCHAIN_PATH
  security list-keychain -d user -s $KEYCHAIN_PATH

  # apply provisioning profile
  mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
  cp $PP_PATH ~/Library/MobileDevice/Provisioning\ Profiles
}

function ios-build(){
  echo "📱 Building iOS...";
  ios-archive;
  ios-export;
}

# General Stuff

function start(){
  # Clean
  echo "🧹 Cleaning watchman...";
  npx watchman watch-del $(pwd) >> /dev/null;
  echo "🚀 Starting Metro...";
  npx react-native start;
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
  jest src --passWithNoTests;
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