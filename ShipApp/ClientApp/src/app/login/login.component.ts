import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  formUsername: string;
  formPassword: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.formUsername = 'username';
    this.formPassword = 'password';

    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    // A ajouter au future hashed password
    const user = this.userForm.value;
    this.CreateUser(user);
  }

  CreateUser(user: User) {
    this.loginService.connectUser(user).subscribe(
      (data) => {
        this.router.navigate(['/home']);
      });
  }

  get username() { return this.userForm.get(this.formUsername); }
  get password() { return this.userForm.get(this.formPassword); }
}
