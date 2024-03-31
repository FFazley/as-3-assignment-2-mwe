import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Backpack1Page } from './backpack1.page';

describe('Backpack1Page', () => {
  let component: Backpack1Page;
  let fixture: ComponentFixture<Backpack1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Backpack1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
