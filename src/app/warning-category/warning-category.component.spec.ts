import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningCategoryComponent } from './warning-category.component';

describe('WarningCategoryComponent', () => {
  let component: WarningCategoryComponent;
  let fixture: ComponentFixture<WarningCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
