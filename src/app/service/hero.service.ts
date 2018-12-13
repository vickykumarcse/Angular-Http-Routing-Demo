import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../hero/hero.model';
import { Config } from '../config/config';
import { ConfigService } from './config.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  config: Config;
  constructor(private http: HttpClient, private configService: ConfigService) { }

  ngOnInit(){
    this.configService.getConfig().subscribe((data:Config) =>{
      this.config = { ...data };
      console.log(this.config);
   }, 
   (error)=> {
     console.log(error);
   });
  }

  addHero(hero:Hero){
    const url = this.config.heroesUrl;
    this.http.post(url, hero, httpOptions).subscribe((result) =>{
      console.log(result);
    }
    );
  }
}
