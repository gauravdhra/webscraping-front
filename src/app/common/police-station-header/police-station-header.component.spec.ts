import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceStationHeaderComponent } from './police-station-header.component';

describe('PoliceStationHeaderComponent', () => {
  let component: PoliceStationHeaderComponent;
  let fixture: ComponentFixture<PoliceStationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceStationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceStationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
