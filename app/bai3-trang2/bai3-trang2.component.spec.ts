import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai3Trang2Component } from './bai3-trang2.component';

describe('Bai3Trang2Component', () => {
  let component: Bai3Trang2Component;
  let fixture: ComponentFixture<Bai3Trang2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai3Trang2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai3Trang2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
