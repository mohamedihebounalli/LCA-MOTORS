import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCheryCarFormComponent } from './add-chery-car-form.component';

describe('AddCheryCarFormComponent', () => {
  let component: AddCheryCarFormComponent;
  let fixture: ComponentFixture<AddCheryCarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCheryCarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCheryCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
