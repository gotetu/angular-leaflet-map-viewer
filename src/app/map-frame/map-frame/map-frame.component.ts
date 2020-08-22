import {Component, Input, OnInit} from '@angular/core';
import {MapConfig} from '../../config/map-config';

@Component({
  selector: 'app-map-frame',
  templateUrl: './map-frame.component.html',
  styleUrls: ['./map-frame.component.css']
})
export class MapFrameComponent implements OnInit {
  center: number[];

  constructor({center}: MapConfig) {
    this.center = center;
  }

  ngOnInit(): void {
  }

}
