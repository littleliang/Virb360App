import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StartRecService{
  constructor(private http: HttpClient){}

  startRec(data):Observable<StartRec> {
    return this.http.post<StartRec>("http://192.168.0.1/virb", data)
  }
}
export interface StartRec {
  result: number;
  media: Media;
}

interface Media {
  type: string;
  url: string;
  thumbUrl: string;
  name: string;
}
