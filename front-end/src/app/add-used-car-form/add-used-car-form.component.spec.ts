import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsedCarFormComponent } from './add-used-car-form.component';

describe('AddUsedCarFormComponent', () => {
  let component: AddUsedCarFormComponent;
  let fixture: ComponentFixture<AddUsedCarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsedCarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUsedCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
