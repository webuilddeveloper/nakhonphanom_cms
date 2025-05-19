import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareCategoryCriteriaComponent } from './welfare-category-criteria.component';

describe('WelfareCategoryCriteriaComponent', () => {
  let component: WelfareCategoryCriteriaComponent;
  let fixture: ComponentFixture<WelfareCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
