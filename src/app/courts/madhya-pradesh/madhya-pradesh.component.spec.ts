import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadhyaPradeshComponent } from './madhya-pradesh.component';

describe('MadhyaPradeshComponent', () => {
  let component: MadhyaPradeshComponent;
  let fixture: ComponentFixture<MadhyaPradeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadhyaPradeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadhyaPradeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
