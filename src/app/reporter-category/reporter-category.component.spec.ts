import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterCategoryComponent } from './reporter-category.component';

describe('ReporterCategoryComponent', () => {
  let component: ReporterCategoryComponent;
  let fixture: ComponentFixture<ReporterCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
