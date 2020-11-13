import { Component } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'SxPYfJFi2HC7oirlujUuULIyU5uRtTbB4SOF9ZA4', // This is your Application ID
      'qvx3ShGOliX65ZV4lyM1m0gxfkN3zC3VZYZ3YWPd', // This is your Javascript key
    );
  }

}
