import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCategoryEditComponent } from './training-category-edit.component';

describe('TrainingCategoryEditComponent', () => {
  let component: TrainingCategoryEditComponent;
  let fixture: ComponentFixture<TrainingCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
