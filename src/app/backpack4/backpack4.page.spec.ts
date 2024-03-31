import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Backpack4Page } from './backpack4.page';

describe('Backpack4Page', () => {
  let component: Backpack4Page;
  let fixture: ComponentFixture<Backpack4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Backpack4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
