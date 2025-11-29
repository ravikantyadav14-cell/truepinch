# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Server & Security

This repo includes an example Cloud Functions folder `functions/` and `firestore.rules` sample rules.

- Deploy functions:
  1. Install firebase-tools globally: `npm install -g firebase-tools`
  2. Authenticate: `firebase login`
  3. From repo root: `cd functions && npm ci`
  4. Deploy: `firebase deploy --only functions`  (ensure your Firebase project is set)

- Deploy rules:
  `firebase deploy --only firestore:rules`

CI notes:
- GitHub Actions will run lint and tests. If you want to auto-deploy functions from CI, set the `FIREBASE_TOKEN` secret in GitHub repo settings.


### Running function unit tests locally
From the repo root:
1. Install function deps:
   cd functions
   npm ci
2. Run tests:
   npm test

CI will run the same tests for PRs.
