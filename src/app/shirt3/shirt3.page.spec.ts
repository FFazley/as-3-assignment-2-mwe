import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Shirt3Page } from './shirt3.page';

describe('Shirt3Page', () => {
  let component: Shirt3Page;
  let fixture: ComponentFixture<Shirt3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Shirt3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
