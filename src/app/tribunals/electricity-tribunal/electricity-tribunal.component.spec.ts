import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityTribunalComponent } from './electricity-tribunal.component';

describe('ElectricityTribunalComponent', () => {
  let component: ElectricityTribunalComponent;
  let fixture: ComponentFixture<ElectricityTribunalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityTribunalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityTribunalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
