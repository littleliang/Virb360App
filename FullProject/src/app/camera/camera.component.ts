import { Component, OnInit } from '@angular/core';
import { PictureService } from '../common/snapPicture';
import { StartRecService } from '../common/startRecording';
import { StopRecService } from '../common/stopRecording';
import { StartLivePreviewService, Media} from '../common/startLivePreview';
import { StopLivePreviewService, Media as MediaStop} from '../common/stopLivePreview';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
  providers:[PictureService, StartRecService, StopRecService, StartLivePreviewService, StopLivePreviewService]
})
export class CameraComponent implements OnInit {
  livePreview : string;

  constructor(private pictureService:PictureService, private StartRecService:StartRecService, private StopRecService:StopRecService, private StartLivePreviewService:StartLivePreviewService, private StopLivePreviewService:StopLivePreviewService) {}

  picture(){
    this.pictureService.snapPicture({"command":"snapPicture"}).subscribe()
  }
  StartRec(){
    this.StartRecService.startRec({"command":"startRecording"}).subscribe()
  }
  StopRec(){
    this.StopRecService.stopRec({"command":"stopRecording"}).subscribe()
  }
  StartLiveView(){
    this.StartLivePreviewService.startLivePreview({"command":"livePreview","streamType":"rtp","MaxResolutionVertical":"720","liveStreamActive":"1"}).subscribe(data =>{
      this.livePreview = data.url
      console.log(data.url)
      console.log(this.livePreview)
    })
  }
  StopLiveView(){
    this.StopLivePreviewService.stopLivePreview({"command":"livePreview","streamType":"rtp","MaxResolutionVertical":"720","liveStreamActive":"0"}).subscribe(data =>{
      this.livePreview = ""
      console.log(data.url)
    })
    
  }

  ngOnInit() {
  }
}