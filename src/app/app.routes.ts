import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLoginComponent} from './pages/login/app.login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {PlanComponent} from './pages/plan/plan.component';
import {ExpenseComponent} from './pages/expense/expense.component';

export const routes: Routes = [
  {path: 'login', component: AppLoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'plans', component: PlanComponent},
  {path: 'expenses/:id', component: ExpenseComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'},
];

export const AppRoutes: ModuleWithProviders<any> = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
