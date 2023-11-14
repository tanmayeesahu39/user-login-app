import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  logedInUser?: User;
  constructor(private userService: UserService){}

  ngOnInit(): void {
    let email = localStorage.getItem('token');
    this.logedInUser = this.userService.getUsers().find(e => e.email==email);
  }

}
