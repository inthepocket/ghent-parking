# Parking App
This React Native app is meant to be used for several workshops. It is a small,
but fully functional app, that displays the availabilities of parkings in the
center of the city of Ghent.

This app currently supports 2 ways to fetch that data:
* A static way, via the `data/parkings.json` file
* A dynamic way, by using **Firebase** as a proxy

The data itself is made available by the city of Ghent, licensed under the
terms of the [Modellicentie Gratis Hergebruik](https://overheid.vlaanderen.be/sites/default/files/documenten/ict-egov/licenties/hergebruik/modellicentie_gratis_hergebruik_v1_0.html):
https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime

## Prerequisites

- node.js 8
- yarn

## Setup

1. Run `yarn install`.
2. Test the app (via the [Expo](https://expo.io/) app): `yarn start`. (Or use a simulator, by running `yarn run ios` or `yarn run android`).

## Firebase setup
The Firebase setup actually uses 2 components:
* The app will read the database and reflect any changes in real-time.
* A node.js script (`scripts/pushDataToFirebase.js`) will publish new data to Firebase every 10s.

In order to use the application with Firebase, please follow these steps:

1. Create a new [Firebase project](https://console.firebase.google.com)
2. Create a new **Realtime Database**
3. In the `rules` tab, specify these rules:
```
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```
  This will make the database readable for anyone that has access
  to it, but requires users to be authenticated in order to write.
4. Go to **Authentication** and add a user with the following credentials:
    - email: `demo@inthepocket.com`
    - password: `firebase`

  This account will be used by the import script to authenticate itself.
5. Now go to **Project Settings** and select the option to add a webapp to Firebase. Copy these settings over to the `config/firebase.json` file.
6. Run `yarn run firebase`. This command will execute the import script (located at `scripts/pushDataToFirebase`).
7. If that succeeds, start the app by simply running `yarn start`

**Tip:** To test and see real-time updates, stop the script and simply adjust values in the Firebase database.

## License
This application is licensed under the term of the [MIT license](LICENSE).
