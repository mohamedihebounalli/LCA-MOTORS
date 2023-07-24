import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSalesFormComponent } from './plan-sales-form.component';

describe('PlanSalesFormComponent', () => {
  let component: PlanSalesFormComponent;
  let fixture: ComponentFixture<PlanSalesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanSalesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanSalesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
