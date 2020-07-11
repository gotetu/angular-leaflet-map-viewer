import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';

import { EventPage } from './eventmap.city.kawasaki.events.model';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  private eventPage: EventPage;
  private targetUrl = 'https://eventapp.city.kawasaki.jp/data/api/v1/events';
  constructor(private http: HttpClient) { }

  /**
   * イベント情報（ページ）を取得する.
   * @remakrs
   * エラーハンドリング処理は現時点では未実装.
   * @returns イベント情報（ページ）
   */
  getEventPage(): Observable<EventPage> {
    return this.http.get<EventPage>(this.targetUrl);
  }

  /**
   * マーカーを表示する.
   * @param map マップ情報
   */
  makeMarker(map: L.Map) {
    const lat = 35.5746825;
    const lon = 139.66261699999995;
    L.marker([lat, lon]).addTo(map);
  }
}
