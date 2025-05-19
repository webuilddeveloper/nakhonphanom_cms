import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegeCategoryCriteriaComponent } from './privilege-category-criteria.component';

describe('PrivilegeCategoryCriteriaComponent', () => {
  let component: PrivilegeCategoryCriteriaComponent;
  let fixture: ComponentFixture<PrivilegeCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegeCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegeCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
