import { Component, OnInit } from '@angular/core';
import { ImageService } from "src/app/service/image.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  numArr = Array.from(Array(100), (_,x) => x);
  imageToShow: any;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    
  }


}
