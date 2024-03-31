import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Shirt4Page } from './shirt4.page';

describe('Shirt4Page', () => {
  let component: Shirt4Page;
  let fixture: ComponentFixture<Shirt4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Shirt4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
