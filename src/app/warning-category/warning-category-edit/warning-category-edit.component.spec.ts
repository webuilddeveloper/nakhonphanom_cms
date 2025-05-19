import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningCategoryEditComponent } from './warning-category-edit.component';

describe('WarningCategoryEditComponent', () => {
  let component: WarningCategoryEditComponent;
  let fixture: ComponentFixture<WarningCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
