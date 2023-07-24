import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagerDashboardComponent } from './sales-manager-dashboard.component';

describe('SalesManagerDashboardComponent', () => {
  let component: SalesManagerDashboardComponent;
  let fixture: ComponentFixture<SalesManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesManagerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
