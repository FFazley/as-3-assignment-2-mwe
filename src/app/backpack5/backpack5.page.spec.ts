import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Backpack5Page } from './backpack5.page';

describe('Backpack5Page', () => {
  let component: Backpack5Page;
  let fixture: ComponentFixture<Backpack5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Backpack5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
