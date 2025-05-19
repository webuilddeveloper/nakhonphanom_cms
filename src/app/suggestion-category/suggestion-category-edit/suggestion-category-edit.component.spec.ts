import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionCategoryEditComponent } from './suggestion-category-edit.component';

describe('SuggestionCategoryEditComponent', () => {
  let component: SuggestionCategoryEditComponent;
  let fixture: ComponentFixture<SuggestionCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
