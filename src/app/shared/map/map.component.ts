import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';

import {MapConfig} from 'src/app/config/map-config';
import {MarkerService} from 'src/app/services/marker/marker.service';

import {EventPage} from 'src/app/services/marker/eventmap.city.kawasaki.events.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  map: any;
  layerNames: string[];
  urlTemplates: string[];
  attributions: string[];
  @Input() mapId = 'mapid';
  @Input() center = [0, 0];
  constructor({layerNames, urlTemplates, attributions}: MapConfig,
              private marker: MarkerService) {
    this.layerNames = layerNames;
    this.urlTemplates = urlTemplates;
    this.attributions = attributions;
  }

  ngOnInit(): void {
    const iconRetinaUrl = 'src/assets/marker-icon-2x.png';
    const iconUrl = 'src/assets/marker-icon.png';
    const shadowUrl = 'src/assets/marker-shadow.png';
    L.Marker.prototype.options.icon = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
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
    }).setView([this.center[0], this.center[1]], 14);

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
    const layerControl = L.control.layers(null, null, {position: 'topleft'});
    for (let i = 0; i < this.urlTemplates.length; i++) {
      layerControl.addBaseLayer(
        L.tileLayer(this.urlTemplates[i], {
          attribution: this.attributions[i]
        }), this.layerNames[i]);
    }
    layerControl.addTo(this.map);
    layerControl.addOverlay(
      L.layerGroup().addLayer(new L.Marker([35.5746824, 139.66261699999994]))
        .addLayer(new L.Marker([35.57467, 139.66261699999993]))
        .addLayer(new L.Marker([35.57466, 139.66261699999992]))
      , 'My MarkerLayer').addTo(this.map);
    layerControl.addOverlay(
      L.layerGroup().addLayer(new L.Marker([35.57465, 139.66261699999991]))
        .addLayer(new L.Marker([35.57464, 139.66261699999990]))
        .addLayer(new L.Marker([35.57463, 139.66261699999989]))
        .addLayer(new L.Marker([35.57462, 139.66261699999988]))
      , 'My MarkerLayer 2').addTo(this.map);
  }

  /**
   * 地図レイアウトを設定する.
   */
  initMapLayout() {
    // スケール表示（フィート表記：OFF）
    L.control.scale({imperial: false}).addTo(this.map);
    // ズームコントロール
    L.control.zoom({position: 'bottomleft'}).addTo(this.map);
  }

  /**
   * レイヤオブジェクトのプロット.
   *
   * @remarks
   * レイヤオブジェクトとは、Marker、Polygon等の図形オブジェクトの上位クラスである。
   *
   * @param layer レイヤオブジェクト
   */
  plotMarker(layer: L.Layer) {
    layer.addTo(this.map);
}
}
