import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComplaintsBookComponent } from './image-complaints-book.component';

describe('ImageComplaintsBookComponent', () => {
  let component: ImageComplaintsBookComponent;
  let fixture: ComponentFixture<ImageComplaintsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageComplaintsBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageComplaintsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
