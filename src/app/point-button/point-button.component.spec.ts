import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointButtonComponent } from './point-button.component';

describe('PointButtonComponent', () => {
  let component: PointButtonComponent;
  let fixture: ComponentFixture<PointButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
