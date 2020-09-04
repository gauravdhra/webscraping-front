import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenTribunalComponent } from './green-tribunal.component';

describe('GreenTribunalComponent', () => {
  let component: GreenTribunalComponent;
  let fixture: ComponentFixture<GreenTribunalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenTribunalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenTribunalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
