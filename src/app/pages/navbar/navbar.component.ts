import {Component} from '@angular/core';
import {User} from '../../model/User';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items: MenuItem[];
  loggedUser: User;

  constructor(
    private router: Router
  ) {
    this.items = this.loadMenuItems();
    this.loggedUser = this.loadLoggedUser();
  }

  loadMenuItems(): MenuItem[] {
    return [
      {
        label: 'Sign Out', icon: 'pi pi-', command: () => {
          this.router.navigate(['/login']);
        }
      }
    ];
  }

  loadLoggedUser(): User {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  formatDisplayName(): string {
    return this.loggedUser.firstName ? this.loggedUser.firstName + ' ' + this.loggedUser.lastName : '';
  }
}
