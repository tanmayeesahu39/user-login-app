import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.removeToken();
    this.router.navigateByUrl('login');
  }
}
