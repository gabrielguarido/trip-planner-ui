import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {EventHandlerService} from '../../service/eventHandler.service';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.css']
})
export class AppLoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private eventHandler: EventHandlerService,
  ) {
  }

  login(email: string, password: string): void {
    this.auth.login(email, password)
      .then(() => {
        this.eventHandler.handleSuccess('It worked!!!');
      })
      .catch(error => {
        this.eventHandler.handleError(error.toString());
      });
  }

  ngOnInit(): void {
    localStorage.clear();
  }
}
