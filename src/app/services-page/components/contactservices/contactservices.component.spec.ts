import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactservicesComponent } from './contactservices.component';

describe('ContactservicesComponent', () => {
  let component: ContactservicesComponent;
  let fixture: ComponentFixture<ContactservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
