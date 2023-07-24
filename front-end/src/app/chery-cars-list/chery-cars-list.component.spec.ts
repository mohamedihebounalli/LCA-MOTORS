import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheryCarsListComponent } from './chery-cars-list.component';

describe('CheryCarsListComponent', () => {
  let component: CheryCarsListComponent;
  let fixture: ComponentFixture<CheryCarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheryCarsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheryCarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
