import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeFormCategoryEditComponent } from './cooperative-form-category-edit.component';

describe('CooperativeFormCategoryEditComponent', () => {
  let component: CooperativeFormCategoryEditComponent;
  let fixture: ComponentFixture<CooperativeFormCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativeFormCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativeFormCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
