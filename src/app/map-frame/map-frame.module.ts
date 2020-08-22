import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapFrameComponent } from './map-frame/map-frame.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [MapFrameComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    MapFrameComponent,
    CommonModule,
  ]
})
export class MapFrameModule { }
