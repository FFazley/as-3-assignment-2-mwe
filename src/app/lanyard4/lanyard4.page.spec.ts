import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lanyard4Page } from './lanyard4.page';

describe('Lanyard4Page', () => {
  let component: Lanyard4Page;
  let fixture: ComponentFixture<Lanyard4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lanyard4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
