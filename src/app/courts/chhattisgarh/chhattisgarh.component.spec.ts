import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChhattisgarhComponent } from './chhattisgarh.component';

describe('ChhattisgarhComponent', () => {
  let component: ChhattisgarhComponent;
  let fixture: ComponentFixture<ChhattisgarhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChhattisgarhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChhattisgarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
