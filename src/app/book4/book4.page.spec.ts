import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book4Page } from './book4.page';

describe('Book4Page', () => {
  let component: Book4Page;
  let fixture: ComponentFixture<Book4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Book4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
