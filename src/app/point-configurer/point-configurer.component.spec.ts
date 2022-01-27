import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointConfigurerComponent } from './point-configurer.component';

describe('PointConfigurerComponent', () => {
  let component: PointConfigurerComponent;
  let fixture: ComponentFixture<PointConfigurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointConfigurerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointConfigurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
