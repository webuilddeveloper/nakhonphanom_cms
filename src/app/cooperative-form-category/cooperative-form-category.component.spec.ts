import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeFormCategoryComponent } from './cooperative-form-category.component';

describe('CooperativeFormCategoryComponent', () => {
  let component: CooperativeFormCategoryComponent;
  let fixture: ComponentFixture<CooperativeFormCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativeFormCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativeFormCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
