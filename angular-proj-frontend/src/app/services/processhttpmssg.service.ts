import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }

  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {
      // console.log("Here in 1");
      errMsg = error.error.message;
    } else {
      // console.log("Here in 2" + `$(error.message)`);
      if(`${error.error.err}` !== undefined)
        errMsg = `${error.error.err}`;
      else{
        errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
      }
    }
    
    return throwError(errMsg);
  }
}
