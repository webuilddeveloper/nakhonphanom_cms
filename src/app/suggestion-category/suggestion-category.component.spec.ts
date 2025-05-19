import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionCategoryComponent } from './suggestion-category.component';

describe('SuggestionCategoryComponent', () => {
  let component: SuggestionCategoryComponent;
  let fixture: ComponentFixture<SuggestionCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
