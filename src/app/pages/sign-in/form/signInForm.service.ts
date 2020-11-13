import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignInForm } from './signIn.form';

@Injectable({
    providedIn: 'root'
})
export class SignInFormService {


    private signInForm: BehaviorSubject<FormGroup | undefined>;
    public signInForm$: Observable<FormGroup>;

    constructor(private fb: FormBuilder) {

    }

    public init() {
        this.signInForm = new BehaviorSubject(this.fb.group(
            new SignInForm()
        ));

        this.signInForm$ = this.signInForm.asObservable();
    }

    public reset() {
        this.signInForm.next(this.fb.group(
            new SignInForm()));
    }

    public destroy(): void {
        this.signInForm.next(undefined);
    }
}
