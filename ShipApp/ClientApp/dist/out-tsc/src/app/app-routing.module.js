import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShipsComponent } from './ships/ships.component';
import { ShipAddEditComponent } from './ship-add-edit/ship-add-edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ShipsComponent,
        pathMatch: 'full'
    },
    {
        path: 'add',
        component: ShipAddEditComponent
    },
    {
        path: 'ship/edit/:id',
        component: ShipAddEditComponent
    },
    { path: '**', redirectTo: '/' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map