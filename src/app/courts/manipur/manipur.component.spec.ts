import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipurComponent } from './manipur.component';

describe('ManipurComponent', () => {
  let component: ManipurComponent;
  let fixture: ComponentFixture<ManipurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
