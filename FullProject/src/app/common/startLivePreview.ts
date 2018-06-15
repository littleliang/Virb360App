import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StartLivePreviewService{
  constructor(private http: HttpClient){}

  startLivePreview(data):Observable<startLivePreviewVirb> {
    return this.http.post<startLivePreviewVirb>("http://192.168.0.1/virb", data)
  }
}
export interface startLivePreviewVirb {
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
