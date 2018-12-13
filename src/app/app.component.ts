import { Component, OnInit } from '@angular/core';
import { ConfigService } from './service/config.service';
import { Config } from './config/config';
import { DownloaderService } from './service/downloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  config: Config;
  constructor(private configService: ConfigService, private downloaderService: DownloaderService){
  }

  ngOnInit(){
    this.configService.getConfig().subscribe((data:Config) =>{
      this.config = { ...data };
      this.download();
   }, 
   (error)=> {
     console.log(error);
   });
    
  }

  download(){
   const fileName = this.config.textfile;
    this.downloaderService.getTextFile(fileName).subscribe(content => {
      console.log(content);
    });
  }
}
