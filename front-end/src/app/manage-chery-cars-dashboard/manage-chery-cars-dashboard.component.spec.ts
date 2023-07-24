import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCheryCarsDashboardComponent } from './manage-chery-cars-dashboard.component';

describe('ManageCheryCarsDashboardComponent', () => {
  let component: ManageCheryCarsDashboardComponent;
  let fixture: ComponentFixture<ManageCheryCarsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCheryCarsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCheryCarsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
