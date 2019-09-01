import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai3Trang1Component } from './bai3-trang1.component';

describe('Bai3Trang1Component', () => {
  let component: Bai3Trang1Component;
  let fixture: ComponentFixture<Bai3Trang1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai3Trang1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai3Trang1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
