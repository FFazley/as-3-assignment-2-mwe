import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Backpack2Page } from './backpack2.page';

describe('Backpack2Page', () => {
  let component: Backpack2Page;
  let fixture: ComponentFixture<Backpack2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Backpack2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
