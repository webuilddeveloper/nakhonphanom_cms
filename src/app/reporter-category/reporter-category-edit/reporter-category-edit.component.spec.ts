import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterCategoryEditComponent } from './reporter-category-edit.component';

describe('ReporterCategoryEditComponent', () => {
  let component: ReporterCategoryEditComponent;
  let fixture: ComponentFixture<ReporterCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
