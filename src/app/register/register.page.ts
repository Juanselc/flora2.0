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

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {}

  async onRegister(email, password){
    try{
       console.log(email, password);
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        //console.log('user-->', user);
        //verifica email
      }
    }
    catch (error)
    {
      console.log('errro', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }

}
