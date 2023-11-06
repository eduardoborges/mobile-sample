# Mobile Sample

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/mobile-sample/blob/master/LICENSE)

Mobile Sample is a repository for a sample app developed in React Native. The aim of this project is to provide a starting point for creating mobile applications using the React Native framework.

## Table of content
- [Mobile Sample](#mobile-sample)
  * [Getting Started](#getting-started)
  * [Avaliable Scripts](#avaliable-scripts)
  + [Now what?](#now-what)
- [Troubleshooting](#troubleshooting)

## Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Avaliable Scripts

```sh
  # Start
  npm start # for start metro server, you can start android or ios from here

  # IOS
  npm run ios
  npm run ios archive # for archive
  npm run ios export # for export ipa
  npm run ios build # for both archive and export ipa

  # Android
  npm run android
  npm run android build # for apk
  npm run android build aab # for aab

  # Common
  npm run lint # for lint
  npm run test # for test
  npm run types # for type check

  # Environtment
  npm run env staging # for staging
  npm run env production # for production
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
