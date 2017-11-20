import { Injectable } from '@angular/core';
import { User } from './../models/user';


@Injectable()
export class AuthService {

  auth:boolean = false;
  user:User;
  constructor() {
    if(localStorage.getItem('token')) {
      this.auth =  true;
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }


}
