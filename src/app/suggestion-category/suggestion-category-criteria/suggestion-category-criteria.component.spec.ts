import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionCategoryCriteriaComponent } from './suggestion-category-criteria.component';

describe('SuggestionCategoryCriteriaComponent', () => {
  let component: SuggestionCategoryCriteriaComponent;
  let fixture: ComponentFixture<SuggestionCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
