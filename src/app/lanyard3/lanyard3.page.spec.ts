import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lanyard3Page } from './lanyard3.page';

describe('Lanyard3Page', () => {
  let component: Lanyard3Page;
  let fixture: ComponentFixture<Lanyard3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lanyard3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
