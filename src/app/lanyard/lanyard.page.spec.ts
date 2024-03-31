import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanyardPage } from './lanyard.page';

describe('LanyardPage', () => {
  let component: LanyardPage;
  let fixture: ComponentFixture<LanyardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LanyardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
