import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCategoryListComponent } from './training-category-list.component';

describe('TrainingCategoryListComponent', () => {
  let component: TrainingCategoryListComponent;
  let fixture: ComponentFixture<TrainingCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
