import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCategoryCriteriaComponent } from './fund-category-criteria.component';

describe('FundCategoryCriteriaComponent', () => {
  let component: FundCategoryCriteriaComponent;
  let fixture: ComponentFixture<FundCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
