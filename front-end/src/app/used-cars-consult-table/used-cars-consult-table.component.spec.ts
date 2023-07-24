import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedCarsConsultTableComponent } from './used-cars-consult-table.component';

describe('UsedCarsConsultTableComponent', () => {
  let component: UsedCarsConsultTableComponent;
  let fixture: ComponentFixture<UsedCarsConsultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedCarsConsultTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedCarsConsultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
