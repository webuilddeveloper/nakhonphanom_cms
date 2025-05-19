import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterCategoryListComponent } from './reporter-category-list.component';

describe('ReporterCategoryListComponent', () => {
  let component: ReporterCategoryListComponent;
  let fixture: ComponentFixture<ReporterCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
