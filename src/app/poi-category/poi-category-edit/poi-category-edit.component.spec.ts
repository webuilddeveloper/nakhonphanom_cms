import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiCategoryEditComponent } from './poi-category-edit.component';

describe('PoiCategoryEditComponent', () => {
  let component: PoiCategoryEditComponent;
  let fixture: ComponentFixture<PoiCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
