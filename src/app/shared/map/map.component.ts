import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map:any;
  private mapUrl: string = 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png';
  @Input() mapId = 'mapid';
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // Musashi-Kosugi station.
    const lat = 35.5766335;
    const lon = 139.6572773;
    this.initMap(lat,lon);
  }
  initMap(lat: number, lon: number) {
    this.map = L.map(this.mapId).setView([lat, lon], 14);
    L.tileLayer(this.mapUrl, {
      attribution: ''
    }).addTo(this.map);
  }

}
