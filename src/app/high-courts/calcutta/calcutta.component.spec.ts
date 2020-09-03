import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcuttaComponent } from './calcutta.component';

describe('CalcuttaComponent', () => {
  let component: CalcuttaComponent;
  let fixture: ComponentFixture<CalcuttaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcuttaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcuttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
