import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCategoryComponent } from './poll-category.component';

describe('PollCategoryComponent', () => {
  let component: PollCategoryComponent;
  let fixture: ComponentFixture<PollCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
