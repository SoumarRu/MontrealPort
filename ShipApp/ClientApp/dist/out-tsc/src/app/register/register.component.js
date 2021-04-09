import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, loginService, router) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
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
    CreateUser(user) {
        this.loginService.connectUser(user).subscribe((data) => {
            this.router.navigate(['/home']);
        });
    }
    get username() { return this.userForm.get(this.formUsername); }
    get password() { return this.userForm.get(this.formPassword); }
    get email() { return this.userForm.get(this.formEmail); }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map