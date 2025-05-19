import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCategoryEditComponent } from './poll-category-edit.component';

describe('PollCategoryEditComponent', () => {
  let component: PollCategoryEditComponent;
  let fixture: ComponentFixture<PollCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
