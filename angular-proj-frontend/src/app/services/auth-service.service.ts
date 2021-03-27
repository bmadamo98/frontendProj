import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { baseUrl } from '../share/baseUrl';
import { ProcessHTTPMsgService } from './processhttpmssg.service';

interface AuthResponse {
  status: string;
  success: string;
  email: string,
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }
  signUp(user: any): Observable<any>{
    return this.http.post<AuthResponse>(baseUrl + 'users/signup', 
    {
      'username': user.username, 
      'password': user.password, 
      'userEmail': user.email
    }
    )
    .pipe(map(res => {
      console.log("In response");
      return {'success': true}
    }),
    
    catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  login(user: any): Observable<any>{
    return this.http.post<AuthResponse>(baseUrl + 'users/login', 
    {
      'username': user.username, 
      'password': user.password
    }
    )
    .pipe(map(res => {
      console.log("In response");
      return {'success': true}
    }),
    
    catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
