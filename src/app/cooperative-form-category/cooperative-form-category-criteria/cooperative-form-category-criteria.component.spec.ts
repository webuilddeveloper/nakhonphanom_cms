import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeFormCategoryCriteriaComponent } from './cooperative-form-category-criteria.component';

describe('CooperativeFormCategoryCriteriaComponent', () => {
  let component: CooperativeFormCategoryCriteriaComponent;
  let fixture: ComponentFixture<CooperativeFormCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativeFormCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativeFormCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
