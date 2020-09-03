import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndhraPradeshComponent } from './andhra-pradesh.component';

describe('AndhraPradeshComponent', () => {
  let component: AndhraPradeshComponent;
  let fixture: ComponentFixture<AndhraPradeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndhraPradeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndhraPradeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
