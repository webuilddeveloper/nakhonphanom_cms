import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningCategoryListComponent } from './warning-category-list.component';

describe('WarningCategoryListComponent', () => {
  let component: WarningCategoryListComponent;
  let fixture: ComponentFixture<WarningCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
