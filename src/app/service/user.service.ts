import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private users: User[] = [];
  private loggedInUser!: User;

  private secreatQuestions: Array<String> = [
    'Which company laptop you first used?',
    'What is your favourite movie?',
    'Who is your favourite actor?',
    'What city were you born in?'
  ];

  constructor() { 
    
    this.addSampleUser();
  }

  addSampleUser() {
    
    let user = new User();
    user.name = "Tanmayee";
    user.email = "tanmayeesahu39@gmail.com";
    user.password = "Welcome@1";
    user.question = this.getSecreatQuestions()[2];
    user.answer = "SRK";
    this.users.push(user);
  }

  public saveUser (user: User): void {
    let qus = user.question;
    user.question = this.getSecreatQuestions()[(Number(qus))]
    this.users.push(user);
  }

  public getUsers (): User[] {
    return this.users;
  }

  public getSecreatQuestions() : String[] {
    return this.secreatQuestions;
  }

  public getLoggedInUser (): User {
    return this.loggedInUser;
  }

  public setLoggedInUser (user: User): void {
    this.loggedInUser = user;
  }
}
