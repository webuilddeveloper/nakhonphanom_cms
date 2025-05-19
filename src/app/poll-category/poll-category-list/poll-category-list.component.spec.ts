import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCategoryListComponent } from './poll-category-list.component';

describe('PollCategoryListComponent', () => {
  let component: PollCategoryListComponent;
  let fixture: ComponentFixture<PollCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
