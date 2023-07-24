import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsedCarsDashboardComponent } from './manage-used-cars-dashboard.component';

describe('ManageUsedCarsDashboardComponent', () => {
  let component: ManageUsedCarsDashboardComponent;
  let fixture: ComponentFixture<ManageUsedCarsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUsedCarsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUsedCarsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
