import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyCFouSRuRXclPgNTc4hEXCnqrTmMGpJeG0',
      authDomain: 'activite-angular-oc.firebaseapp.com',
      databaseURL: 'https://activite-angular-oc.firebaseio.com',
      projectId: 'activite-angular-oc',
      storageBucket: 'activite-angular-oc.appspot.com',
      messagingSenderId: '194770011080'
    };
    firebase.initializeApp(config);
  }
}
