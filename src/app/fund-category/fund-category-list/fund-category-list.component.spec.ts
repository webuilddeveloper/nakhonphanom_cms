import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCategoryListComponent } from './fund-category-list.component';

describe('FundCategoryListComponent', () => {
  let component: FundCategoryListComponent;
  let fixture: ComponentFixture<FundCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
