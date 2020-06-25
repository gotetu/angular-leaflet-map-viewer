import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';

import { MapConfig } from 'src/app/config/map-config';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map:any;
  urlTemplate: string;
  center: number[];
  @Input() mapId = 'mapid';
  constructor({center, urlTemplate} : MapConfig) {
    this.center = center;
    this.urlTemplate = urlTemplate;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.initMap();
  }
  initMap() {
    this.map = L.map(this.mapId).setView([this.center[0],this.center[1]], 14);
    L.tileLayer(this.urlTemplate, {
      attribution: ''
    }).addTo(this.map);
  }

}
