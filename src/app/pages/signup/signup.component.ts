import {Component} from '@angular/core';
import {EventHandlerService} from '../../service/eventHandler.service';
import {UserService} from '../../service/user.service';
import {UserCreationContext} from '../../model/context/UserCreationContext';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isPasswordVisible = false;

  constructor(
    private userService: UserService,
    private eventHandler: EventHandlerService,
  ) {
  }

  register(firstName: string, lastName: string, email: string, password: string): void {
    this.userService.register(new UserCreationContext(firstName, lastName, email, password))
      .then(() => {
        this.eventHandler.handleSuccess('User registered successfully');
      })
      .catch(() => {
        this.eventHandler.handleError('Invalid credentials');
      });
  }

  changeVisibility = () => {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
