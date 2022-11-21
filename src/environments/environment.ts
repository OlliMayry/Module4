// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'newproject-3532b',
    appId: '1:116325335458:web:afe070287efdf66ffd72fb',
    storageBucket: 'newproject-3532b.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyBSCmuGIn2IffXRZOOHqEjdzDReT6O-vKc',
    authDomain: 'newproject-3532b.firebaseapp.com',
    messagingSenderId: '116325335458',
  },
  ticketmaster: {
    baseURL: 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=FI&apikey=Vl3rGMD8shGdbIT37Z1qYvgscwwQYbSG'
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
