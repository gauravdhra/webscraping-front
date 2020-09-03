import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadrasComponent } from './madras.component';

describe('MadrasComponent', () => {
  let component: MadrasComponent;
  let fixture: ComponentFixture<MadrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
