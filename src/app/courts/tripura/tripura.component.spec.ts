import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripuraComponent } from './tripura.component';

describe('TripuraComponent', () => {
  let component: TripuraComponent;
  let fixture: ComponentFixture<TripuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
