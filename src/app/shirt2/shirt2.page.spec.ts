import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Shirt2Page } from './shirt2.page';

describe('Shirt2Page', () => {
  let component: Shirt2Page;
  let fixture: ComponentFixture<Shirt2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Shirt2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
