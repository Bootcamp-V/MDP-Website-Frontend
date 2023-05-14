import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileBusinessTransComponent } from './agile-business-trans.component';

describe('AgileBusinessTransComponent', () => {
  let component: AgileBusinessTransComponent;
  let fixture: ComponentFixture<AgileBusinessTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgileBusinessTransComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgileBusinessTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
