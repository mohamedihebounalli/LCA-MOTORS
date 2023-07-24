import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUsedCarFormComponent } from './update-used-car-form.component';

describe('UpdateUsedCarFormComponent', () => {
  let component: UpdateUsedCarFormComponent;
  let fixture: ComponentFixture<UpdateUsedCarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUsedCarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUsedCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
