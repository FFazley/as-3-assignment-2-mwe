import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lanyard6Page } from './lanyard6.page';

describe('Lanyard6Page', () => {
  let component: Lanyard6Page;
  let fixture: ComponentFixture<Lanyard6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lanyard6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
