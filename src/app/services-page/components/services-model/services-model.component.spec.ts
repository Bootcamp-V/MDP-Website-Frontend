import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesModelComponent } from './services-model.component';

describe('ServicesModelComponent', () => {
  let component: ServicesModelComponent;
  let fixture: ComponentFixture<ServicesModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
