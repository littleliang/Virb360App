import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CameraComponent } from './camera/camera.component';
import { SettingsComponent } from './settings/settings.component';
import { LibraryComponent } from './library/library.component';
import { PictureService } from './common/snapPicture';
import { GalleryService } from './common/gallery';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    CameraComponent,
    SettingsComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'camera', component: CameraComponent},
      { path: 'library', component: LibraryComponent},
      { path: 'settings', component: SettingsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: "**", component: PageNotFoundComponent}
    ], { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    PictureService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }