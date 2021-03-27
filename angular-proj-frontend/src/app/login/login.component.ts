import { Component, OnInit } from '@angular/core';
import { User } from '../share/User';
import { AuthServiceService } from "../services/auth-service.service";
import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthServiceService ],
})
@Injectable()
export class LoginComponent implements OnInit {

  
  user = new User('', '');
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("heheh")
    this.user.username = "Saarthack";
    this.user.password = "12345678";

    this.authService.login(this.user)
    .subscribe(res => {
     
      if(res.success){
        console.log("Success");
        
      }else{
        console.log(res);
      }
    },(error) => {
      console.log(error);
    })
  }
  

}
