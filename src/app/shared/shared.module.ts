import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MapComponent
  ],
  declarations: [
    MapComponent
  ],
})
export class SharedModule { }
