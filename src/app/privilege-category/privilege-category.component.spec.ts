import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegeCategoryComponent } from './privilege-category.component';

describe('PrivilegeCategoryComponent', () => {
  let component: PrivilegeCategoryComponent;
  let fixture: ComponentFixture<PrivilegeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
