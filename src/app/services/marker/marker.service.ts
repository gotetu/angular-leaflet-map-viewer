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
//  private targetUrl = 'https://eventapp.city.kawasaki.jp/data/api/v1/events';
  private targetUrl = '/assets/events.json';
  constructor(private http: HttpClient) { }

  /**
   * �C�x���g���i�y�[�W�j���擾����.
   * @remakrs
   * �G���[�n���h�����O�����͌����_�ł͖�����.
   * @returns �C�x���g���i�y�[�W�j
   */
  getEventPage(): Observable<EventPage> {
    return this.http.get<EventPage>(this.targetUrl);
  }

}
