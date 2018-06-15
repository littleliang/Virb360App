import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PictureService{
  constructor(private http: HttpClient){}

  snapPicture(data):Observable<ResultVirb> {
    return this.http.post<ResultVirb>("http://192.168.0.1/virb", data)
  }
}
export interface ResultVirb {
  result: number;
  media: Media;
}

interface Media {
  type: string;
  url: string;
  thumbUrl: string;
  name: string;
}
