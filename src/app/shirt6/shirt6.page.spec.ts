import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Shirt6Page } from './shirt6.page';

describe('Shirt6Page', () => {
  let component: Shirt6Page;
  let fixture: ComponentFixture<Shirt6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Shirt6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
