import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelanganaComponent } from './telangana.component';

describe('TelanganaComponent', () => {
  let component: TelanganaComponent;
  let fixture: ComponentFixture<TelanganaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelanganaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelanganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
