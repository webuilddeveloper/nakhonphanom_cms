import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCategoryCriteriaComponent } from './training-category-criteria.component';

describe('TrainingCategoryCriteriaComponent', () => {
  let component: TrainingCategoryCriteriaComponent;
  let fixture: ComponentFixture<TrainingCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
