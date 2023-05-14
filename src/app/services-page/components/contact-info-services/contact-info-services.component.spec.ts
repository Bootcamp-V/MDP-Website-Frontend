import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoServicesComponent } from './contact-info-services.component';

describe('ContactInfoServicesComponent', () => {
  let component: ContactInfoServicesComponent;
  let fixture: ComponentFixture<ContactInfoServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfoServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInfoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
