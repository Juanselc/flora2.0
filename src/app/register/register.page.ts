import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  implements OnInit {

  email: string;
  password: string;

  constructor(private authSvc: AuthService) { }

  ngOnInit() {}

  async onRegister(email, password){
    try{
       console.log(email, password);
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        console.log('user-->', user);
        //verifica email
      }
    }
    catch (error)
    {
      console.log('errro', error);
    }
  }

}
