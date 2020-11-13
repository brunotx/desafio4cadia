import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignInService } from '../services/signIn.service';
import { SignInFormService } from './form/signInForm.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public signInForm: FormGroup;

  constructor(private signInFormService: SignInFormService, private signInService: SignInService) { }

  ngOnInit(): void {
    this.signInFormService.init();
    this.signInFormService.signInForm$.subscribe(
      (form) => { this.signInForm = form; }
    );
  }

  submit() {
    this.signInService.signIn(this.signInForm.value);
  }
}
