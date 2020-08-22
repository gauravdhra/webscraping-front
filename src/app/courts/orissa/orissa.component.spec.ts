import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrissaComponent } from './orissa.component';

describe('OrissaComponent', () => {
  let component: OrissaComponent;
  let fixture: ComponentFixture<OrissaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrissaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrissaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
