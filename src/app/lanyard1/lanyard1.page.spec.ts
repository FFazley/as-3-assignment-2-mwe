import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lanyard1Page } from './lanyard1.page';

describe('Lanyard1Page', () => {
  let component: Lanyard1Page;
  let fixture: ComponentFixture<Lanyard1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lanyard1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
