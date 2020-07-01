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
   * �n�}�����ݒ�.
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
   * �����\�����C����ݒ肷��.
   */
  initLayer() {
    if (this.urlTemplates.length > 0) {
      L.tileLayer(this.urlTemplates[0], {
        attribution: this.attributions[0]
      }).addTo(this.map);
    }
  }

  /**
   * �x�[�X���C����ݒ肷��.
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
   * �n�}���C�A�E�g��ݒ肷��.
   */
  initMapLayout() {
    // �X�P�[���\���i�t�B�[�g�\�L�FOFF�j
    L.control.scale({imperial:false}).addTo(this.map);
    // �Y�[���R���g���[��
    L.control.zoom({position:"bottomleft"}).addTo(this.map);
  }

}
