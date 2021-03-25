import { Component, OnInit, Inject, Optional } from '@angular/core';
import { RegisterUser } from '../share/User';
import { AuthServiceService } from "../services/auth-service.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  user = new RegisterUser('', '', '', false);

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.user.email = "abcd@email.com";
    this.user.username = "abcd";
    this.user.password = "1234678";
    this.authService.signUp(this.user)
    .subscribe(res => {
      if(res.success){


      }else{
        console.log(res);
      }
    },(error) => {
      console.log(error);
    })
    
  }

}
