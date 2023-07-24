import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheryCarsConsultTableComponent } from './chery-cars-consult-table.component';

describe('CheryCarsConsultTableComponent', () => {
  let component: CheryCarsConsultTableComponent;
  let fixture: ComponentFixture<CheryCarsConsultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheryCarsConsultTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheryCarsConsultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
