import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterCategoryCriteriaComponent } from './reporter-category-criteria.component';

describe('ReporterCategoryCriteriaComponent', () => {
  let component: ReporterCategoryCriteriaComponent;
  let fixture: ComponentFixture<ReporterCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
