import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StopLivePreviewService{
  constructor(private http: HttpClient){}

  stopLivePreview(data):Observable<stopLivePreviewVirb> {
    return this.http.post<stopLivePreviewVirb>("http://192.168.0.1/virb", data)
  }
}
export interface stopLivePreviewVirb {
  result: number;
  media: Media;
  url: string;
}

export interface Media {
  type: string;
  url: string;
  thumbUrl: string;
  name: string;
}
