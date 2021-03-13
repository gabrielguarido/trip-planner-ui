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

// Components
import {AppComponent} from './app.component';
import {AppLoginComponent} from './pages/login/app.login.component';

// Services
import {AuthService} from './service/auth.service';
import {EventHandlerService} from './service/eventHandler.service';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
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
  ],
  exports: [
    ToastModule,
  ],
  providers: [
    AuthService,
    EventHandlerService,
    MessageService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
