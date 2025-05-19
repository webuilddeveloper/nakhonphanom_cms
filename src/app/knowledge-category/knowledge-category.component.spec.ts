import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCategoryComponent } from './knowledge-category.component';

describe('KnowledgeCategoryComponent', () => {
  let component: KnowledgeCategoryComponent;
  let fixture: ComponentFixture<KnowledgeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
