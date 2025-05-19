import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegeCategoryEditComponent } from './privilege-category-edit.component';

describe('PrivilegeCategoryEditComponent', () => {
  let component: PrivilegeCategoryEditComponent;
  let fixture: ComponentFixture<PrivilegeCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegeCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegeCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
