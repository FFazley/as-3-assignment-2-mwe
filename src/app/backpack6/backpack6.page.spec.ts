import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Backpack6Page } from './backpack6.page';

describe('Backpack6Page', () => {
  let component: Backpack6Page;
  let fixture: ComponentFixture<Backpack6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Backpack6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
