import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lanyard2Page } from './lanyard2.page';

describe('Lanyard2Page', () => {
  let component: Lanyard2Page;
  let fixture: ComponentFixture<Lanyard2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lanyard2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
