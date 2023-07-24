import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalManagerDashboardComponent } from './technical-manager-dashboard.component';

describe('TechnicalManagerDashboardComponent', () => {
  let component: TechnicalManagerDashboardComponent;
  let fixture: ComponentFixture<TechnicalManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalManagerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
