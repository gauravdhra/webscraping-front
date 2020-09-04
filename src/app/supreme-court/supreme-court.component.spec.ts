import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupremeCourtComponent } from './supreme-court.component';

describe('SupremeCourtComponent', () => {
  let component: SupremeCourtComponent;
  let fixture: ComponentFixture<SupremeCourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupremeCourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupremeCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
