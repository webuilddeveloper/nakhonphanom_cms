import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCategoryCriteriaComponent } from './knowledge-category-criteria.component';

describe('KnowledgeCategoryCriteriaComponent', () => {
  let component: KnowledgeCategoryCriteriaComponent;
  let fixture: ComponentFixture<KnowledgeCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
