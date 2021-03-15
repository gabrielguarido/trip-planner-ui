import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {EventHandlerService} from '../../service/eventHandler.service';
import {AuthenticationContext} from '../../model/context/AuthenticationContext';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.css']
})
export class AppLoginComponent implements OnInit {
  isPasswordVisible = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private eventHandler: EventHandlerService,
  ) {
  }

  login(email: string, password: string): void {
    this.authService.login(new AuthenticationContext(email, password))
      .then(() => {
        this.router.navigate(['/plans']);
      })
      .catch(error => {
        this.eventHandler.handleError(error.toString());
      });
  }

  ngOnInit(): void {
    localStorage.clear();
  }

   changeVisibility = () => {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
