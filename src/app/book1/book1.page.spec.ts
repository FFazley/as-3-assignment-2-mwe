import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book1Page } from './book1.page';

describe('Book1Page', () => {
  let component: Book1Page;
  let fixture: ComponentFixture<Book1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Book1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
