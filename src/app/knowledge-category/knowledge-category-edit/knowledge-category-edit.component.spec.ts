import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCategoryEditComponent } from './knowledge-category-edit.component';

describe('KnowledgeCategoryEditComponent', () => {
  let component: KnowledgeCategoryEditComponent;
  let fixture: ComponentFixture<KnowledgeCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
