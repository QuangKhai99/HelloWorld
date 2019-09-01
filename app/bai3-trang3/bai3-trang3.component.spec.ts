import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai3Trang3Component } from './bai3-trang3.component';

describe('Bai3Trang3Component', () => {
  let component: Bai3Trang3Component;
  let fixture: ComponentFixture<Bai3Trang3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai3Trang3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai3Trang3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
