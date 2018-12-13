import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DownloaderService {

  constructor(private http: HttpClient) { }

  getTextFile(filename: string) {
    return this.http.get(filename, {responseType: 'text'}).pipe(
      tap( // Log the result or error
        data => this.log(filename, data),
        error => this.logError(filename, error)
      )
    );
  }

  log(name:any, data:any){
    ///console.log(name, data)
  }
  logError(name:any, error:any){
    console.error(name, error)
  }
}
