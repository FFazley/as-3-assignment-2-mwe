import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lanyard5Page } from './lanyard5.page';

describe('Lanyard5Page', () => {
  let component: Lanyard5Page;
  let fixture: ComponentFixture<Lanyard5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lanyard5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
