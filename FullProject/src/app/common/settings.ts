import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SettingsService{
  constructor(private http: HttpClient){}

  settings(data):Observable<SettingsVirb> {
    return this.http.post<SettingsVirb>("http://192.168.0.1/virb", data)
  }
}
export interface SettingsVirb {
  result: number;
  media: Media;
}

export interface Media {
  type: string;
  url: string;
  thumbUrl: string;
  name: string;
}
