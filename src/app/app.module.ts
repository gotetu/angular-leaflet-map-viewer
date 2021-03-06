import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { MarkerService } from './services/marker/marker.service';
import {MapFrameModule} from './map-frame/map-frame.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    MapFrameModule,
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
