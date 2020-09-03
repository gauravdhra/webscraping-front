import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UttarakhandComponent } from './uttarakhand.component';

describe('UttarakhandComponent', () => {
  let component: UttarakhandComponent;
  let fixture: ComponentFixture<UttarakhandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UttarakhandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UttarakhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
