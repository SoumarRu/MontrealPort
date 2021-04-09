import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { User } from '../models/user';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  formUsername : string;
  formEmail : string;
  formPassword : string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.formUsername = 'username';
    this.formEmail = 'email';
    this.formPassword = 'password';

    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    // A ajouter au future : hashed password
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
  get email() { return this.userForm.get(this.formEmail); }
}
