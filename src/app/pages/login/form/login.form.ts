import { FormControl, Validators } from '@angular/forms';

export class LoginForm {
    username: FormControl = new FormControl();
    password: FormControl = new FormControl();


    constructor() {
        this.username.setValidators(Validators.required);
        this.password.setValidators(Validators.required);
    }

}
