import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCategoryListComponent } from './knowledge-category-list.component';

describe('KnowledgeCategoryListComponent', () => {
  let component: KnowledgeCategoryListComponent;
  let fixture: ComponentFixture<KnowledgeCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
