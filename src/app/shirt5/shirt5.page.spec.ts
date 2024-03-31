import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Shirt5Page } from './shirt5.page';

describe('Shirt5Page', () => {
  let component: Shirt5Page;
  let fixture: ComponentFixture<Shirt5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Shirt5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
