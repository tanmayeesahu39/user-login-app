import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}



  

}
