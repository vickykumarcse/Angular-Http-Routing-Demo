import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  comparePlainObject(obj1:Object, obj2:Object): boolean{
    let same:boolean =  true;
    for(let prop in obj1){
      if(obj1.hasOwnProperty(prop) && obj1[prop] !== obj2[prop]){
        same = false;
        break;
      }
    }
    return same;
  }
}
