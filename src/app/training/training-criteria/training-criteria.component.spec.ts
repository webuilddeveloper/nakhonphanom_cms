import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCriteriaComponent } from './training-criteria.component';

describe('TrainingCriteriaComponent', () => {
  let component: TrainingCriteriaComponent;
  let fixture: ComponentFixture<TrainingCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
