import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import * as Parse from 'parse';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private route: ActivatedRoute) { }


    canActivate() {
        const userToken = localStorage.getItem('sessionToken');
        if (userToken !== undefined && userToken !== null) {
            return true;
        }
        this.router.navigateByUrl('');
        return false;
    }
}
