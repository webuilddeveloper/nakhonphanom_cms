import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningCategoryCriteriaComponent } from './warning-category-criteria.component';

describe('WarningCategoryCriteriaComponent', () => {
  let component: WarningCategoryCriteriaComponent;
  let fixture: ComponentFixture<WarningCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
