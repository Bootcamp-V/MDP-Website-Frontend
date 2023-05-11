import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilePathComponent } from './agile-path.component';

describe('AgilePathComponent', () => {
  let component: AgilePathComponent;
  let fixture: ComponentFixture<AgilePathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgilePathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgilePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
