import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import * as Parse from 'parse';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private route: ActivatedRoute) { }

    getUser() {
        console.log(this.route.snapshot);
        // const User = Parse.Object.extend('User');
        // const query = new Parse.Query(User);
        // query.equalTo("objectId", "myCustomKey1Value");
        // query.find().then((results) => {
        //     // You can use the "get" method to get the value of an attribute
        //     // Ex: response.get("<ATTRIBUTE_NAME>")
        //     if (typeof document !== 'undefined') document.write(`ParseObjects found: ${JSON.stringify(results)}`);
        //     console.log('ParseObjects found:', results);
        // }, (error) => {
        //     if (typeof document !== 'undefined') document.write(`Error while fetching ParseObjects: ${JSON.stringify(error)}`);
        //     console.error('Error while fetching ParseObjects', error);
        // });
    }

    canActivate() {
        this.getUser();
        // const userToken = localStorage.getItem('sessionToken');
        // if ()
        return true;
    }
}
