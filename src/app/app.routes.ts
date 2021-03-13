import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLoginComponent} from './pages/login/app.login.component';

export const routes: Routes = [
  {path: '', component: AppLoginComponent},
  {path: 'login', component: AppLoginComponent},
];

export const AppRoutes: ModuleWithProviders<any> = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
