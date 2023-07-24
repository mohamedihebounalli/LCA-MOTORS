import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPurchaseFormComponent } from './car-purchase-form.component';

describe('CarPurchaseFormComponent', () => {
  let component: CarPurchaseFormComponent;
  let fixture: ComponentFixture<CarPurchaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPurchaseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPurchaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
