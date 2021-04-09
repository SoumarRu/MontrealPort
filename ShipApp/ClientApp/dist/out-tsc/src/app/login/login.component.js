import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(formBuilder, loginService, router) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
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
    CreateUser(user) {
        this.loginService.connectUser(user).subscribe((data) => {
            this.router.navigate(['/home']);
        });
    }
    get username() { return this.userForm.get(this.formUsername); }
    get password() { return this.userForm.get(this.formPassword); }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map