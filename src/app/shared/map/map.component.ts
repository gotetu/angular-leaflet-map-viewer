import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';

import { MapConfig } from 'src/app/config/map-config';
import { MarkerService } from 'src/app/services/marker/marker.service';

import {EventPage} from 'src/app/services/marker/eventmap.city.kawasaki.events.model';

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
  constructor({center, layerNames, urlTemplates, attributions} : MapConfig,
    private marker: MarkerService) {
    this.center = center;
    this.layerNames = layerNames;
    this.urlTemplates = urlTemplates;
    this.attributions = attributions;
  }

  ngOnInit(): void {
    const iconRetinaUrl = 'src/assets/marker-icon-2x.png';
    const iconUrl = 'src/assets/marker-icon.png';
    const shadowUrl = 'src/assets/marker-shadow.png';
    const iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;
  }
  ngAfterViewInit() {
    this.initMap();
    this.marker.getEventPage().subscribe(data => this.plotEventPage(data));
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

  /**
   * イベント情報をプロットする.
   * @remakrs
   * 本来であればMapComponentsの処理ではないが、暫定的に。
   */
  plotEventPage(eventPage: EventPage) {
    for (const event of eventPage.event_data) {
      L.marker([event.place_lat, event.place_lon],
        {title: `${event.title}`}).addTo(this.map);
    }
  }

}
