import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  getImage():Observable<any>{
    const url = "https://picsum.photos/g/200/300"
    return this.http.get(url, { responseType: 'blob' });
  }
}
