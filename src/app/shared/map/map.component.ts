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
  urlTemplates: string[];
  center: number[];
  attributions: string[];
  @Input() mapId = 'mapid';
  constructor({center, urlTemplates, attributions} : MapConfig) {
    this.center = center;
    this.urlTemplates = urlTemplates;
    this.attributions = attributions;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.initMap();
  }
  initMap() {
    this.map = L.map(this.mapId).setView([this.center[0],this.center[1]], 14);
    L.tileLayer(this.urlTemplates[0], {
      attribution: this.attributions[0]
    }).addTo(this.map)
  }

}
