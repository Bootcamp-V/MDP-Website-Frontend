import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTextOrganizationMapComponent } from './container-text-organization-map.component';

describe('ContainerTextOrganizationMapComponent', () => {
  let component: ContainerTextOrganizationMapComponent;
  let fixture: ComponentFixture<ContainerTextOrganizationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTextOrganizationMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerTextOrganizationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
