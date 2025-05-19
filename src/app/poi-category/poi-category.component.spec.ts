import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiCategoryComponent } from './poi-category.component';

describe('PoiCategoryComponent', () => {
  let component: PoiCategoryComponent;
  let fixture: ComponentFixture<PoiCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
