import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Config } from '../config/config';
const configUrl:string = 'assets/config.json';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private 
  constructor(private http: HttpClient) { }

  /*HttpResponse version
  getConfig():Observable<HttpResponse<Config>>{
    return this.http.get<Config>(this.configUrl, {observe: 'response'}).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }
  */
  getConfig():Observable<Config>{
    return this.http.get<Config>(configUrl).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
