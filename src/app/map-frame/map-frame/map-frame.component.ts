import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MapConfig} from '../../config/map-config';
import {MarkerService} from '../../services/marker/marker.service';
import {EventPage} from '../../services/marker/eventmap.city.kawasaki.events.model';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-frame',
  templateUrl: './map-frame.component.html',
  styleUrls: ['./map-frame.component.css']
})
export class MapFrameComponent implements OnInit, AfterViewInit {
  center: number[];

  constructor({center}: MapConfig,
              private markerService: MarkerService) {
    this.center = center;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.markerService.getEventPage().subscribe(data => this.plotEventPage(data));
  }
  /**
   * イベント情報をプロットする.
   * @remakrs
   * 本来であればMapComponentsの処理ではないが、暫定的に。
   */
  plotEventPage(eventPage: EventPage) {
    for (const event of eventPage.event_data) {
      L.marker([event.place_lat, event.place_lon],
        {title: `${event.title}`})
        .bindPopup(`${event.title}<br/>${event.content}`);
      /* html のテンプレート機能を使えば構造化された情報を楽に表示できるかもしれない */
    }
  }

}
