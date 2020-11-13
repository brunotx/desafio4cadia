import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';
import { User } from '../model/user';
import { AccountService } from './account.service';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private router: Router) { }

    async getUser(userId: string) {
        let currentUser;
        const User = Parse.Object.extend('User');
        const query = new Parse.Query(User);
        query.equalTo('objectId', userId);
        await query.find().then((results) => {
            for (let i = 0; i < results.length; i++) {
                const element = results[i];
                const user = {
                    email: element.get('email'),
                    phone: element.get('phone'),
                    username: element.get('username'),
                    id: element.id
                };
                currentUser = user;
            }
        }, (error) => {
            if (typeof document !== 'undefined') document.write(`Error while fetching ParseObjects: ${JSON.stringify(error)}`);
            console.error('Error while fetching ParseObjects', error);
        });
        return currentUser;
    }
}
