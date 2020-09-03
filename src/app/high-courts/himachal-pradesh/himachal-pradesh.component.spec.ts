import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HimachalPradeshComponent } from './himachal-pradesh.component';

describe('HimachalPradeshComponent', () => {
  let component: HimachalPradeshComponent;
  let fixture: ComponentFixture<HimachalPradeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HimachalPradeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HimachalPradeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
