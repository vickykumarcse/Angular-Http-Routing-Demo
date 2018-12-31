import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }
  confirm(message?:string): Observable<boolean>{
    const confirm = window.confirm(message || "Are you sure?");
    console.log(confirm);
    return of(confirm);
  }

}
