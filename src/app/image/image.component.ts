import { Component, OnInit } from '@angular/core';
import { ImageService } from "src/app/service/image.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  imageToShow: any;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImage().subscribe(result =>{
      console.log(result);
      this.createImageFromBlob(result);
    }
    );
  }

  createImageFromBlob(image: Blob) {
     let reader = new FileReader();
     reader.addEventListener("load", () => {
       console.log(reader.result)
        this.imageToShow = reader.result;
     }, false);
  
     if (image) {
        reader.readAsDataURL(image);
     }
  }

}
