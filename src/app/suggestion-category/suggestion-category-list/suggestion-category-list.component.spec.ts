import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionCategoryListComponent } from './suggestion-category-list.component';

describe('SuggestionCategoryListComponent', () => {
  let component: SuggestionCategoryListComponent;
  let fixture: ComponentFixture<SuggestionCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
