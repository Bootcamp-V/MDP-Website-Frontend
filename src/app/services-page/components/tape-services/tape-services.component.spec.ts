import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeServicesComponent } from './tape-services.component';

describe('TapeServicesComponent', () => {
  let component: TapeServicesComponent;
  let fixture: ComponentFixture<TapeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapeServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
