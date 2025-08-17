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
For ios
```shell
npx expo prebuild --platform ios
```
For android
```shell
npx expo prebuild --platform android
```
For both and clean
```sh
npx expo prebuild --clean
```

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

For ios [find the postscript name](https://docs.expo.dev/develop/user-interface/fonts/#what-is-postscript-name-of-a-font)  of the font by bringing in the .ttf file in Font Book on mac.

# Making changes
Making changes and mods are through plugins and mods. Prebuild will modify ios and android folders
Javascript functions are exposed to change the native code.
Expo go isn't available in expo go. You have to use a development build for that.

# Quick Actions
[Quick Action Docs](https://kadikraman.github.io/intermediate-react-native-v2-course/docs/quick-action/)
Allows you to hold over the app icon and then perform a quick action.
For example, you can add a plant. 
```bash
pnpm i expo-quick-actions
```
Because it requires a change on app.json, you have to rebuild the native apps again

## iOS
Use [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols)

# Deep Linking
[Deep linking docs](https://kadikraman.github.io/intermediate-react-native-v2-course/docs/deep-linking/)
We can bind each screen/activity with an href with conventions provided by expo-router
We open up a specific screen based on the scheme (set up in `app.json`)

Open up with uri-scheme with ios
```sh
npx uri-scheme open plantly://plants/1 --ios
```

Note that this will not try to route this dynamic path if it doesn't exist. It will take you to the default home page.
You can also do this from safari in iOS.

Doing the same in android
```bash
npx uri-scheme open plantly://plants/1 --android
```

You can add this to make sure the index is added to the stack so that the user can go back
```javascript
export const unstable_settings = {
  // in this stack, if not rendering index directly, put index underneath. That way we get a back button if we deep linked to another page
  // it seems that iOS handles it fine and we need this for Android to behave the same
  initialRouteName: "index",
};
```
## Analytics

## Parameters
If you send an email that can deep link into the plant. You can trigger the watering of the plant by passing a parameter
```sh
npx uri-scheme open plantly://plants/1\?action=water --ios
```

This will provide it as a param in `useLocalSearchParams` that we can useEffect to trigger the action

Reference [plantId].tsx

To pass params to other screens:
```javascript
<Link href={{pathname: `plants/${plant.id}`, params: { action: "water" }}></Link>
```

You can use Universal and App linking for more secure approach of deep linking. It's more involved. It requires a hosted website that proves you own the domain. You would then register that domain in the app. That way, the app can verify it can handle that deeplink.

# Debugging 
`Cmd + m` to open up menu on Android
`Ctl + Cmd + z` to open up the menu on iOS

# Deploy
Apps need to be signed in order to prevent malicious applications. This is why they have a lot of measures to prove who you are and what you are trying to do. This is because there are a lot of implication if a malicious app gets to a device and is able to exploit functionality that could be costly to recover. Stealing banking credentials, taking unauthorized pictures, etc.

## Android 
You can find the android keystore in `android/app/build.gradle`
```gradle

    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
    }
```

Google now provides managed build signing so that you can recover the keystore if you lose it. It can now be recovered when google proves who you are.
You create an upload keystore to sign it; however, google will use the actual keystore to sign the app before it goes to the app store.

## iOS
There are three builds. There will be an app id. This was chosen when you ran prebuild initially. It needs to be globally unique. The provisioning profiles you make are tied to the app id.  
## dev build
You can only do it via xcode
These types of builds are still limited. Push notifications are not allowed, for example.

The dev cert and dev provision profile is needed.

## ad hoc
You can install on specific iOS devices. You can bind 100 devices at a time with the unique UDID to your ad hoc certificate which is bound to your account.

You will use the distribution certificate and ad hoc provisioning profile is needed.

## production build

# EAS build signing
EAS will sign the build for you
All builds with EAS cli will use the ad hoc certificate. You will need an apple developer account. This is because you need xcode to build it. 

```sh
➜  react-native-intermediate-plantly git:(main) eas build --profile=preview --platform=ios
(node:59222) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Resolved "preview" environment for the build. Learn more: https://docs.expo.dev/eas/environment-variables/#setting-the-environment-for-your-builds
No environment variables with visibility "Plain text" and "Sensitive" found for the "preview" environment on EAS.

✔ iOS app only uses standard/exempt encryption? Learn more: https://developer.apple.com/documentation/Security/complying-with-encryption-export-regulations … yes
No remote versions are configured for this project, buildNumber will be initialized based on the value from the local project.
✔ Initialized buildNumber with 1.
✔ Using remote iOS credentials (Expo server)

If you provide your Apple account credentials we will be able to generate all necessary build credentials and fully validate them.
This is optional, but without Apple account access you will need to provide all the missing values manually and we can only run minimal validation on them.
✔ Do you want to log in to your Apple account? … yes

› Log in to your Apple Developer account to continue
✔ Apple ID: … xxxx@xxxx.com
› The password is only used to authenticate with Apple and never stored on EAS servers
  Learn more: https://bit.ly/2VtGWhU
✔ Password (for xxxx@xxxx.com ): … ************
› Saving Apple ID password to the local Keychain
  Learn more: https://docs.expo.dev/distribution/security#keychain
✔ Logged in, verify your Apple account to continue
Two-factor Authentication (6 digit code) is enabled for gsanc.merch@pm.me. Learn more: https://support.apple.com/en-us/HT204915

✔ How do you want to validate your account? … device / sms
✔ Please enter the 6 digit code … 609591
✔ Valid code
✔ Logged in and verified
› Team xxxx (xxxxx)
› Provider xxxxx (xxxx)
✔ Bundle identifier registered com.gtechsynergy.plantly
✔ Synced capabilities: No updates
✔ Synced capability identifiers: No updates
✔ Fetched Apple distribution certificates
✔ Generate a new Apple Distribution Certificate? … yes
✔ Created Apple distribution certificate
✔ Created distribution certificate
✔ You don't have any registered devices yet. Would you like to register them now? … no
Failed to set up credentials.
Run 'eas device:create' to register your devices first
    Error: build command failed.

```

This might fail if you don't have Fastlane, which is what happened to me.

## Android

```bash
eas build --profile=preview --platform=android --local
...
...
You can find the build artifacts in /Users/gerardo/dev/learning/react-native-intermediate-plantly/build-1755394689121.apk
```

## Google Play Console
[My console](https://play.google.com/console/u/0/developers/8930772880144692195/app-list?onboardingflow=signup)

You can build this locally
```sh
You can find the build artifacts in /Users/xxx/dev/learning/react-native-intermediate-plantly/build-1755394689121.apk
```