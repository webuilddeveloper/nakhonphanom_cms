import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiCategoryCriteriaComponent } from './poi-category-criteria.component';

describe('PoiCategoryCriteriaComponent', () => {
  let component: PoiCategoryCriteriaComponent;
  let fixture: ComponentFixture<PoiCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
