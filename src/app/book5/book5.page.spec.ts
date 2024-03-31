import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book5Page } from './book5.page';

describe('Book5Page', () => {
  let component: Book5Page;
  let fixture: ComponentFixture<Book5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Book5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
