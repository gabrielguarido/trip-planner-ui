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

// Components
import {AppComponent} from './app.component';
import {AppLoginComponent} from './pages/login/app.login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {NavbarComponent} from './pages/navbar/navbar.component';
import {PlanComponent} from './pages/plan/plan.component';

// Services
import {AuthService} from './service/auth.service';
import {EventHandlerService} from './service/eventHandler.service';
import {MessageService} from 'primeng/api';
import {UserService} from './service/user.service';
import {PlanService} from './service/plan.service';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    SignupComponent,
    NavbarComponent,
    PlanComponent,
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
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
