import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCategoryComponent } from './fund-category.component';

describe('FundCategoryComponent', () => {
  let component: FundCategoryComponent;
  let fixture: ComponentFixture<FundCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
