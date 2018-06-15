import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GalleryService{
  constructor(private http: HttpClient){}

  gallery(data):Observable<GalleryVirb> {
    return this.http.post<GalleryVirb>("http://192.168.0.1/virb", data)
  }
}
export interface GalleryVirb {
  result: number;
  media: Media;
}

export interface Media {
  type: string;
  url: string;
  thumbUrl: string;
  name: string;
}
