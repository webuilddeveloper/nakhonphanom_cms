import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionCriteriaComponent } from './suggestion-criteria.component';

describe('SuggestionCriteriaComponent', () => {
  let component: SuggestionCriteriaComponent;
  let fixture: ComponentFixture<SuggestionCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
