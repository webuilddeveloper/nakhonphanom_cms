import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeFormCategoryListComponent } from './cooperative-form-category-list.component';

describe('CooperativeFormCategoryListComponent', () => {
  let component: CooperativeFormCategoryListComponent;
  let fixture: ComponentFixture<CooperativeFormCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativeFormCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativeFormCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
