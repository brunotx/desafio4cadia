import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private router: Router) { }

  signIn(userModel: User) {
    const user = new Parse.User();
    user.set('username', userModel.username);
    user.set('email', userModel.email);
    user.set('phone', userModel.phone);
    user.set('password', userModel.password);

    user.signUp().then((user) => {
      this.router.navigateByUrl('login');
    }).catch(error => {
      if (typeof document !== 'undefined') { document.write(`Error while signing up user: ${JSON.stringify(error)}`); }
      console.error('Error while signing up user', error);
    });
  }
}
