import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatAfterSalesServiceDashboardComponent } from './treat-after-sales-service-dashboard.component';

describe('TreatAfterSalesServiceDashboardComponent', () => {
  let component: TreatAfterSalesServiceDashboardComponent;
  let fixture: ComponentFixture<TreatAfterSalesServiceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatAfterSalesServiceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatAfterSalesServiceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
