import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LoginFormService } from './form/loginForm.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private loginFormService: LoginFormService,  private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginFormService.init();
    this.loginFormService.loginForm$.subscribe(
      (form) => { this.loginForm = form; }
    );
  }


  submit() {
    this.loginService.login(this.loginForm.value);
  }

}
