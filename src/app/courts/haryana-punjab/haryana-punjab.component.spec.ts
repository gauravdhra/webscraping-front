import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaryanaPunjabComponent } from './haryana-punjab.component';

describe('HaryanaPunjabComponent', () => {
  let component: HaryanaPunjabComponent;
  let fixture: ComponentFixture<HaryanaPunjabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaryanaPunjabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaryanaPunjabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
