import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLoginComponent} from './pages/login/app.login.component';
import {SignupComponent} from './pages/signup/signup.component';

export const routes: Routes = [
  {path: '', component: AppLoginComponent},
  {path: 'login', component: AppLoginComponent},
  {path: 'signup', component: SignupComponent},
];

export const AppRoutes: ModuleWithProviders<any> = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
