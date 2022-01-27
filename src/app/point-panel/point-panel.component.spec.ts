import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointPanelComponent } from './point-panel.component';

describe('PointPanelComponent', () => {
  let component: PointPanelComponent;
  let fixture: ComponentFixture<PointPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
