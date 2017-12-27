// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAcskN07tIlV97Dl9NHYkoJQHAJAMnPMc8',
    authDomain: 'teste-afs.firebaseapp.com',
    databaseURL: 'https://teste-afs.firebaseio.com',
    projectId: 'teste-afs',
    storageBucket: 'teste-afs.appspot.com',
    messagingSenderId: '298126567132'
  }
};
