import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Shirt1Page } from './shirt1.page';

describe('Shirt1Page', () => {
  let component: Shirt1Page;
  let fixture: ComponentFixture<Shirt1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Shirt1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
