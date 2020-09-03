import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JammuKashmirComponent } from './jammu-kashmir.component';

describe('JammuKashmirComponent', () => {
  let component: JammuKashmirComponent;
  let fixture: ComponentFixture<JammuKashmirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JammuKashmirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JammuKashmirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
