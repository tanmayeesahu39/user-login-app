import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-togglenav',
  templateUrl: './togglenav.component.html',
  styleUrls: ['./togglenav.component.css']
})
export class TogglenavComponent {
  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.removeToken();
    this.router.navigateByUrl('login');
  }
}
