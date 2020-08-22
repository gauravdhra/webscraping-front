import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllahabadComponent } from './allahabad.component';

describe('AllahabadComponent', () => {
  let component: AllahabadComponent;
  let fixture: ComponentFixture<AllahabadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllahabadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllahabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
