import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient) { }

  /**
   * �}�[�J�[��\������.
   * @param map �}�b�v���
   */
  makeMarker(map: L.Map) {
    const lat = 35.5746825;
    const lon = 139.66261699999995;
    L.marker([lat, lon]).addTo(map);
  }
}
