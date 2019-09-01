import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai3Phan1Component } from './bai3-phan1.component';

describe('Bai3Phan1Component', () => {
  let component: Bai3Phan1Component;
  let fixture: ComponentFixture<Bai3Phan1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai3Phan1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai3Phan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
