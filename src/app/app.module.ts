import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DeviceDetectorModule } from 'ngx-device-detector';

import { PictureGridComponent } from './components/picture-grid/picture-grid.component';
import { PictureComponent } from './components/picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureGridComponent,
    PictureComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
