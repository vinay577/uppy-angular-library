import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UppyAngularModule } from 'projects/uppy-angular/src/lib/uppy-angular.module';
//import { UppyAngularModule } from 'uppy-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UppyAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
