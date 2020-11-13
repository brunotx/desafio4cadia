import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';
import { User } from '../model/user';
import { AccountService } from './account.service';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private router: Router) { }

    login(userModel: User) {
        Parse.User.logIn(userModel.username, userModel.password).then((user) => {
            localStorage.setItem('sessionToken', user.attributes.sessionToken);
            this.router.navigateByUrl('/dashboard/account/home/' + user.id);
        }).catch(error => {
            if (typeof document !== 'undefined') { document.write(`Error while logging in user: ${JSON.stringify(error)}`); }
            console.error('Error while logging in user', error);
        })
    }
}
