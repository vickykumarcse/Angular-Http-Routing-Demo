import { Component, OnInit } from '@angular/core';
import { ConfigService } from './service/config.service';
import { Config } from './config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  config: Config;
  constructor(){
  }

  ngOnInit(){
   
  }
}
