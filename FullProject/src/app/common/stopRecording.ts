import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StopRecService{
  constructor(private http: HttpClient){}

  stopRec(data):Observable<StopRec> {
    return this.http.post<StopRec>("http://192.168.0.1/virb", data)
  }
}
export interface StopRec {
  result: number;
  media: Media;
}

interface Media {
  type: string;
  url: string;
  thumbUrl: string;
  name: string;
}
