import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SikkimComponent } from './sikkim.component';

describe('SikkimComponent', () => {
  let component: SikkimComponent;
  let fixture: ComponentFixture<SikkimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SikkimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SikkimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
