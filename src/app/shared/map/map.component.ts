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
  center: number[];
  layerNames: string[];
  urlTemplates: string[];
  attributions: string[];
  @Input() mapId = 'mapid';
  constructor({center, layerNames, urlTemplates, attributions} : MapConfig) {
    this.center = center;
    this.layerNames = layerNames;
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
    let layerControl = L.control.layers();
    for (let i = 0; i < this.urlTemplates.length; i++) {
      layerControl.addBaseLayer(
        L.tileLayer(this.urlTemplates[i], {
          attribution: this.attributions[i]
        }),this.layerNames[i]);
    }
    layerControl.addTo(this.map);

  }

}
