import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book3Page } from './book3.page';

describe('Book3Page', () => {
  let component: Book3Page;
  let fixture: ComponentFixture<Book3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Book3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
