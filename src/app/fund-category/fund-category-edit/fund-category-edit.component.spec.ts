import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCategoryEditComponent } from './fund-category-edit.component';

describe('FundCategoryEditComponent', () => {
  let component: FundCategoryEditComponent;
  let fixture: ComponentFixture<FundCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
