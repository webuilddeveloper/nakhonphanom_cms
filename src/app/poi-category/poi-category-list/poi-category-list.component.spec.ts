import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiCategoryListComponent } from './poi-category-list.component';

describe('PoiCategoryListComponent', () => {
  let component: PoiCategoryListComponent;
  let fixture: ComponentFixture<PoiCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
