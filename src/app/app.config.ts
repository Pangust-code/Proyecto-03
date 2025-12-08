import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { getAnalytics } from "firebase/analytics";


import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCfkAzXiFRKoIJd0cIL28Kp7ETnr2Bml6U",
  authDomain: "angular-icc-ppw-11f0d.firebaseapp.com",
  projectId: "angular-icc-ppw-11f0d",
  storageBucket: "angular-icc-ppw-11f0d.firebasestorage.app",
  messagingSenderId: "343305880336",
  appId: "1:343305880336:web:4a03a7651caea3b0c31b95",
  measurementId: "G-SPNE7ETVVG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
