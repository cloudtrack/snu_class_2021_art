# AWS-based Art Class Application

This is the code repository of [Creative Integrated Design 1](http://dcslab.snu.ac.kr/courses/2021f/project/)

## How to build and run from source

### Prerequisite: `Node.js`

Install `Node.js` LTS (Currently `14.18.0`). You can directly download `Node.js` from [the official website](https://nodejs.org/en/). However, it is recommended to use [`nvs`](https://github.com/jasongin/nvs) to manage the `Node.js` distribution on your machine.

To install `nvs`, simply run the following commands according to the OS of your local machine:

```shell
# Windows
choco install nvs
# Mac, Linux
export NVS_HOME="$HOME/.nvs"
git clone https://github.com/jasongin/nvs "$NVS_HOME"
. "$NVS_HOME/nvs.sh" install
```

After installation, restart a new terminal to verify installation by typing 

```shell
nvs --version
```

And then add `Node.js` LTS to `nvs` and activate it

```shell
# Add Node.js LTS to nvs
nvs add lts
# Activate LTS
nvs use lts
```

Optionally, you can add `Node.js` LTS to your `PATH` to avoid repetitively activate it

```shell
nvs link lts
```

Verify the activation of the correction `Node.js` by the following command

```shell
node --verison
```

which should print `v14.18.0`.

### Prerequisite: ionic framework

Install `ionic` framework *globalling* through `npm` or any other alternatives (`yarn`, `pnpm`...)

```shell
npm install -g @ionic/cli
```

Verify the installation by the following command

```shell
ionic --version
```

### Prerequisite: Android Studio (Android SDK)

Install [Android Studio](https://developer.android.com/studio). It has already included the Android SDK.

### Build and run the project

Clone the repo and navigate to the *root* direcotry of this repo

```shell
git clone https://github.com/cloudtrack/snu_class_2021_art.git
cd snu_class_2021_art
```

Since this is an Android application, add `android` as a target platform to `ionic capacitor`

```shell
ionic cap add android
```

Simply run the following command to build to Android platform

```shell
ionic cap build android
```

Open the directory `android` in Android Studio and click `run` to see the application running on an emulator

[Figure required]
