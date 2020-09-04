import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribunalsHeaderComponent } from './tribunals-header.component';

describe('TribunalsHeaderComponent', () => {
  let component: TribunalsHeaderComponent;
  let fixture: ComponentFixture<TribunalsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribunalsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribunalsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
