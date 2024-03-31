import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book6Page } from './book6.page';

describe('Book6Page', () => {
  let component: Book6Page;
  let fixture: ComponentFixture<Book6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Book6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
