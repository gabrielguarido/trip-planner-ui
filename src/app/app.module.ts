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

// Components
import {AppComponent} from './app.component';
import {AppLoginComponent} from './pages/login/app.login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {NavbarComponent} from './pages/navbar/navbar.component';

// Services
import {AuthService} from './service/auth.service';
import {EventHandlerService} from './service/eventHandler.service';
import {MessageService} from 'primeng/api';
import {UserService} from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    SignupComponent,
    NavbarComponent,
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
  ],
  exports: [
    ToastModule,
  ],
  providers: [
    AuthService,
    EventHandlerService,
    MessageService,
    UserService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
