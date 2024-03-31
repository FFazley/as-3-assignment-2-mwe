import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Backpack3Page } from './backpack3.page';

describe('Backpack3Page', () => {
  let component: Backpack3Page;
  let fixture: ComponentFixture<Backpack3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Backpack3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
