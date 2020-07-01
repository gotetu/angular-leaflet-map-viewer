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
  
  /**
   * 地図初期設定.
   */
  initMap() {
    this.map = L.map(this.mapId, {
      zoomControl: false
    }).setView([this.center[0],this.center[1]], 14);

    this.initLayer();
    this.initBaseLayer();
    this.initMapLayout();
  }

  /**
   * 初期表示レイヤを設定する.
   */
  initLayer() {
    if (this.urlTemplates.length > 0) {
      L.tileLayer(this.urlTemplates[0], {
        attribution: this.attributions[0]
      }).addTo(this.map);
    }
  }

  /**
   * ベースレイヤを設定する.
   */
  initBaseLayer() {
    let layerControl = L.control.layers(null,null,{position:"topleft"})
    for (let i = 0; i < this.urlTemplates.length; i++) {
      layerControl.addBaseLayer(
        L.tileLayer(this.urlTemplates[i], {
          attribution: this.attributions[i]
        }),this.layerNames[i]);
    }
    layerControl.addTo(this.map);
  }

  /**
   * 地図レイアウトを設定する.
   */
  initMapLayout() {
    // スケール表示（フィート表記：OFF）
    L.control.scale({imperial:false}).addTo(this.map);
    // ズームコントロール
    L.control.zoom({position:"bottomleft"}).addTo(this.map);
  }

}
