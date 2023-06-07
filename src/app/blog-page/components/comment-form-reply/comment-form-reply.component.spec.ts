import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormReplyComponent } from './comment-form-reply.component';

describe('CommentFormReplyComponent', () => {
  let component: CommentFormReplyComponent;
  let fixture: ComponentFixture<CommentFormReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentFormReplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentFormReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
