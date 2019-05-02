# Cordova-Device-Plugin Example

This application is just to demonstrate how to use the device-account plugin.

## Build

To build this application you will need to run a series of commands.

Firstly, add the Android platform to the project

```bash
ionic cordova platform add android
```

It's always important to run this command whenever you make changes to the project in order for those changes to take effect.

```bash
ionic cordova prepare android
```

Ensure you run the project on an Android device. The getPermissions() function will work for Android 8.0+

```bash
ionic cordova run android --device
```
