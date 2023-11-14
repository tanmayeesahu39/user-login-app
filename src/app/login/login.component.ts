import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Login } from '../model/login.model';
import { AuthService } from '../service/auth.service';
import { FormGroup,FormBuilder, Validators } from  '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginUser: Login = new Login;
  submitted = false;
  constructor(private userService: UserService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
     
      email : ['', Validators.required],
      password : ['', Validators.required,  Validators.length>6]
    
      
    });
  }

  login() {
    
    this.submitted = true;
    if(this.loginForm.invalid) {
      console.log("form has errors");
      return;
    }
    this.loginUser = this.loginForm.value;
    let result = this.userService.getUsers().find(e => e.email==this.loginUser.email && e.password==this.loginUser.password);
    if(result == undefined){
      alert("Either Email or password is incorrect");
    } else {
      this.authService.setToken(result.email.toString());
      this.router.navigateByUrl('dashboard');
    }
  }


}
