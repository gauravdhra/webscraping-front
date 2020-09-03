import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BombayComponent } from './bombay.component';

describe('BombayComponent', () => {
  let component: BombayComponent;
  let fixture: ComponentFixture<BombayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
