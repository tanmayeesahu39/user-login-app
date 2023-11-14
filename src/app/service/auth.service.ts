import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setToken (email: string): void {
    localStorage.setItem('token', email);
  }

  public getToken (): string {
   
    return localStorage.getItem('token')!;
  }


  public removeToken (): void {
   
    localStorage.removeItem('token')!;
  }

}
