import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';

registerLocaleData(localePt);

const firebaseConfig = {
  apiKey: "AIzaSyBcRYdYzVxUN_HxTL8HbJ3UiRrtUN_O9SU",
  authDomain: "produtos-504f3.firebaseapp.com",
  projectId: "produtos-504f3",
  storageBucket: "produtos-504f3.firebasestorage.app",
  messagingSenderId: "545622033069",
  appId: "1:545622033069:web:e764e8026cf676c8f4fc24"
};



bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, MatSidenavModule),
    provideNoopAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(APP_ROUTES),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
  .catch(err => console.error(err));
