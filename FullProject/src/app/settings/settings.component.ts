import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SettingsService} from '../common/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [SettingsService]
})
export class SettingsComponent implements OnInit {
  constructor(private settingsService:SettingsService) {
    
   }

   form

   save(form: NgForm){
     this.form = form;
    this.settingsService.settings({"command":"updateFeature","feature": "video360Format" ,"value": this.form.value.lensMode }).subscribe()
    this.settingsService.settings({"command":"updateFeature","feature": "stitchDistance" ,"value": this.form.value.stitchDistance }).subscribe()
    this.settingsService.settings({"command":"updateFeature","feature": "videoMode" ,"value": this.form.value.videoMode }).subscribe()
    this.settingsService.settings({"command":"updateFeature","feature": "photoMode" ,"value": this.form.value.photoMode }).subscribe()
    this.settingsService.settings({"command":"updateFeature","feature": "selfTimer" ,"value": this.form.value.selfTimer }).subscribe()
    this.settingsService.settings({"command":"updateFeature","feature": "gps" ,"value": this.form.value.gps }).subscribe()
    this.settingsService.settings({"command":"status"})
    console.log(this.form.video360Format);
    console.log(this.form.value.stitchDistance);
    console.log(this.form.value.videoMode);
    console.log(this.form.value.photoMode);
    console.log(this.form.value.selfTimer);
    console.log(this.form.value.gps);
  }

  ngOnInit() {
  }
}