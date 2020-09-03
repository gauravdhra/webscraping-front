import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnaComponent } from './patna.component';

describe('PatnaComponent', () => {
  let component: PatnaComponent;
  let fixture: ComponentFixture<PatnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
