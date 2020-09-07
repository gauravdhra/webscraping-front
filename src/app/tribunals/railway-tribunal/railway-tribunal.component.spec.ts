import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwayTribunalComponent } from './railway-tribunal.component';

describe('RailwayTribunalComponent', () => {
  let component: RailwayTribunalComponent;
  let fixture: ComponentFixture<RailwayTribunalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailwayTribunalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailwayTribunalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
