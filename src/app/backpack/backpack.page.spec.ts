import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackpackPage } from './backpack.page';

describe('BackpackPage', () => {
  let component: BackpackPage;
  let fixture: ComponentFixture<BackpackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BackpackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
