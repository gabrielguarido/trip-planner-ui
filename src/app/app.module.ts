// Modules
import {NgModule} from '@angular/core';
import {AppRoutes} from './app.routes';
import {BrowserModule} from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {RippleModule} from 'primeng/ripple';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CalendarModule} from 'primeng/calendar';
// Components
import {AppComponent} from './app.component';
import {AppLoginComponent} from './pages/login/app.login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {NavbarComponent} from './pages/navbar/navbar.component';
import {PlanComponent} from './pages/plan/plan.component';
import {PlanCreateComponent} from './pages/plan/create/plan-create.component';
// Services
import {AuthService} from './service/auth.service';
import {EventHandlerService} from './service/eventHandler.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {UserService} from './service/user.service';
import {PlanService} from './service/plan.service';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    SignupComponent,
    NavbarComponent,
    PlanComponent,
    PlanCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutes,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ToastModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    TableModule,
    TooltipModule,
    RippleModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    CalendarModule,
  ],
  exports: [
    ToastModule,
  ],
  providers: [
    AuthService,
    EventHandlerService,
    MessageService,
    UserService,
    PlanService,
    ConfirmationService,
    DialogService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
