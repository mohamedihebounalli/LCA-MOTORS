import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSalesServiceFormComponent } from './after-sales-service-form.component';

describe('AfterSalesServiceFormComponent', () => {
  let component: AfterSalesServiceFormComponent;
  let fixture: ComponentFixture<AfterSalesServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterSalesServiceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterSalesServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
