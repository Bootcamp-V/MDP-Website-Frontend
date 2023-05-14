import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingPlanComponent } from './consulting-plan.component';

describe('ConsultingPlanComponent', () => {
  let component: ConsultingPlanComponent;
  let fixture: ComponentFixture<ConsultingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
