import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegeCategoryListComponent } from './privilege-category-list.component';

describe('PrivilegeCategoryListComponent', () => {
  let component: PrivilegeCategoryListComponent;
  let fixture: ComponentFixture<PrivilegeCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegeCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegeCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
