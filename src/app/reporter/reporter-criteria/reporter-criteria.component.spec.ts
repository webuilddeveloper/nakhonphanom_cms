import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterCriteriaComponent } from './reporter-criteria.component';

describe('ReporterCriteriaComponent', () => {
  let component: ReporterCriteriaComponent;
  let fixture: ComponentFixture<ReporterCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
