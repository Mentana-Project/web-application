import { Routes } from '@angular/router';
import { LoginComponent } from './security/pages/login/login.component';
import { RegisterComponent } from './security/pages/register/register.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
