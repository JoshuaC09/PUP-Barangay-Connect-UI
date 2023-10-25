import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlotterComponent } from './blotter.component';

describe('BlotterComponent', () => {
  let component: BlotterComponent;
  let fixture: ComponentFixture<BlotterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlotterComponent]
    });
    fixture = TestBed.createComponent(BlotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
