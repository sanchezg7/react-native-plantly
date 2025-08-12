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
```bash
npx expo run:android
```
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

[Dashboard](https://expo.dev/accounts/gsanc.tech)


Configure the build with eas
```bash
eas build:configure
```

Trigger a dev build for Android on eas
```bash
eas build --profile=development --platform=android
```

# Splash screen
[Figma](https://www.figma.com/community/file/1155362909441341285/expo-app-icon-splash)

> The splash screen is a 1284 × 2778 png
Recall that native projects are ephemeral and they are throw away. We can generate the ios and android folder.

# Orbit
Allow to install an apk and ipa to simulator, emulator or physical device. [Site](https://expo.dev/orbit)
```bash
brew install expo-orbit
```

# Custom Font
[Default font](https://kadikraman.github.io/intermediate-react-native-v2-course/docs/custom-font/) are there but you can load custom fonts

## Runtime
You can load the font at runtime. This is for custom font for use in expo go. It loads async at run time
You can use the splash screen to load the font

## Build time
You can use the expo-font plugin instead if you want
With a development build you can use expo-font to load the font

---
Google fonts has an expansive font library. You can use that for smaller projects.

Example of Caveat font
expo exposes google fonts in a specific library
```bash
pnpm i expo-font @expo-google-fonts/caveat
```

Add the config plugin to include the config file in the native projects. Do this in app.json
You can put the .ttf file in the assets folder if it's custom and not through node modules

# Making changes
Making changes and mods are through plugins and mods. Prebuild will modify ios and android folders
Javascript functions are exposed to change the native code.
Expo go aren't availabe in expo go. You have to use development build for that.


