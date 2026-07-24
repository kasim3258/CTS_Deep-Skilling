import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  isLoggedIn = true;

  login(): void {
    this.isLoggedIn = false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}