import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProvidersService} from '../services/providers.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public router:Router,private loginservice:ProvidersService) { }

  ngOnInit() {

  }

  loginClick(loginForm){
    if(loginForm.value.email!="" && loginForm.value.password!=""){
      this.loginservice.CheckUserLogin((loginForm.value)).subscribe((LoginResponse) => {
        console.log(LoginResponse);
        if(LoginResponse!=null){
          localStorage.setItem('userID', LoginResponse.recordset[0].userid);
        this.router.navigate(['dashboard']);
        }
        else
        alert('credentials check...!');
      });
     
    }
    else{
      alert('please eneter');
    }
}

}
