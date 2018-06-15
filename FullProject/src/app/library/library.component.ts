import { Component, OnInit } from '@angular/core';
import { GalleryService, GalleryVirb, Media  } from "../common/gallery";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  //pictures : Media;
  currentPicture : Media;
  teller : number;
  
  constructor(private galleryService:GalleryService) { }

  gallery(){
    this.teller=0;
    this.galleryService.gallery({"command":"mediaList"}).subscribe(data =>{
      this.currentPicture = data.media[this.teller];
    })
  }
  left(){
    if(this.teller>0){
      this.teller--;
      this.galleryService.gallery({"command":"mediaList"}).subscribe(data =>{
        this.currentPicture = data.media[this.teller];
      })    
    }
  }
  right(){
    if(this.currentPicture[this.teller+1]=!null){
      this.teller++;
      this.galleryService.gallery({"command":"mediaList"}).subscribe(data =>{
        this.currentPicture = data.media[this.teller];
      })    
    }
  }

  ngOnInit() {
  }
}