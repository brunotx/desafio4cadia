import { FormControl, Validators } from '@angular/forms';

export class SignInForm {
    username: FormControl = new FormControl();
    phone: FormControl = new FormControl();
    email: FormControl = new FormControl();
    password: FormControl = new FormControl();


    constructor() {
        this.username.setValidators(Validators.required);
        this.phone.setValidators(Validators.required);
        this.email.setValidators(Validators.required);
        this.password.setValidators(Validators.required);
    }

}
