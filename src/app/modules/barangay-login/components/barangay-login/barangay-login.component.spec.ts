import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangayLoginComponent } from './barangay-login.component';

describe('BarangayLoginComponent', () => {
  let component: BarangayLoginComponent;
  let fixture: ComponentFixture<BarangayLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarangayLoginComponent]
    });
    fixture = TestBed.createComponent(BarangayLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
