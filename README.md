# React Native Plantly

Start with a blank template
```
pnpm create expo-app plantly -t
```

# Linting
Set up eslint
```
npx expo lint
```
eslint.config.js created 

## Setup packages
```bash
npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-native
```

# Start the project
```bash
npx expo start
```

# Expo Router
File-based navigation
[Docs for installing nav](https://kadikraman.github.io/intermediate-react-native-v2-course/docs/navigation/4-1-install-navigation/)

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

Safe area allows you to put only in the visible area of the phone
React navigation gives deep linking for free. It's implicit for the filesystem. Deep linking is native to the filesystem way of defining the routes

## Entry point
expo/AppEntry.js will require the app for you when defining it in `package.json`
Mobile app will listen to a particular keyword. scheme `plantly` is what allows your OS to share to an app
e.g. you might see `open with` a browser. multiple browser apps are registered 

## React native web 
This is optional
```bash
npx expo install react-native-web react-dom
```

## Layout
It will use the native defaults for the components. So android may look different from ios

# Bottom Tabs
- add a new file
Changing tabs to stack will allow the bottom bar navigation to show by default

Screens exist as soon as they are part of the filesystem. 
If I left out the tab definitions, it will default to all. We define the tabs so we can define options. Add header buttons, titles etc

# Icons
Find [icons](https://icons.expo.fyi/Index)

# State management
Async storage can be used to persist data across app launches
State management libs will use async storage under the hood. 
[Example](https://kadikraman.github.io/intermediate-react-native-v2-course/docs/navigation/4-5-state-management/)

## Persistent with Async Storage
[Lecture](https://kadikraman.github.io/intermediate-react-native-v2-course/docs/navigation/4-6-data-persistance)

# Pressable
Touchable Opacity
[Example](https://kadikraman.github.io/intermediate-react-native-v2-course/docs/custom-button/)

## Haptics
[Implementation](https://kadikraman.github.io/intermediate-react-native-v2-course/docs/custom-button/#add-haptic-feedback) 

## Animated
You can do reanimated for animating the buttons. Checkout the react conf app for an example of how they did this.

# Linear Gradient

# Modals
Need to be defined at the same level as the content we want it to be above

# Image Picker
Expo Image Picker to allow for picking an image from the gallery
If using the camera, you have to request permissions, first.

# Dynamic Routes
https://kadikraman.github.io/intermediate-react-native-v2-course/docs/dynamic-routes


# Building
npx expo install expo-dev-client
npx expo prebuild --platform ios
npx expo prebuild --platform android

Run on the ios simulator after generating a dev build
```bash
npx expo run:ios
```
You can connect android via usb and then it will upload the app

# EAS
Expo Application Services
Cloud service for build RN apps

Check who you're logged in as
```bash
eas whoami
```

Init the project for use with eas
```bash
eas init
```
