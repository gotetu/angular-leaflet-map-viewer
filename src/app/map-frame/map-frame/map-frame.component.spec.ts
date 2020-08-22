import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFrameComponent } from './map-frame.component';

describe('MapFrameComponent', () => {
  let component: MapFrameComponent;
  let fixture: ComponentFixture<MapFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
