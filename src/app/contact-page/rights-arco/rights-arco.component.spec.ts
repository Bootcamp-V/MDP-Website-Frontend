import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsArcoComponent } from './rights-arco.component';

describe('RightsArcoComponent', () => {
  let component: RightsArcoComponent;
  let fixture: ComponentFixture<RightsArcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsArcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightsArcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
