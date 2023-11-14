import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { FormGroup,FormBuilder, Validators } from  '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  repassword?: String;
  registerUser: any = {
    name: '',
    email: '',
    password: '',
    repassword: '',
    question: '',
    answer: ''
  };
  secretQuestions?: Array<String>;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.secretQuestions = this.userService.getSecreatQuestions();
    this.registerForm = this.formBuilder.group({
      name : ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]],
    
      answer: ['', Validators.required,  Validators.length>2],
      question: ['', Validators.required]
    });
  }

  register() {
    debugger
    this.submitted = true;
    if(this.registerForm.invalid) {
      console.log("form has errors");
      return;
    }
    console.log("form is valid");
    this.registerUser = this.registerForm.value;
    console.log("form is valid", this.registerUser);
    this.userService.saveUser(this.registerUser);
    this.userService.getUsers().forEach(element => {
      console.log(element.name)
    });
    this.router.navigateByUrl('login');
  }



}
