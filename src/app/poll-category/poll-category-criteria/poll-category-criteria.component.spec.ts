import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCategoryCriteriaComponent } from './poll-category-criteria.component';

describe('PollCategoryCriteriaComponent', () => {
  let component: PollCategoryCriteriaComponent;
  let fixture: ComponentFixture<PollCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
