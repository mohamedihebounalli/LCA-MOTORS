import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCheryCarFormComponent } from './update-chery-car-form.component';

describe('UpdateCheryCarFormComponent', () => {
  let component: UpdateCheryCarFormComponent;
  let fixture: ComponentFixture<UpdateCheryCarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCheryCarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCheryCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
