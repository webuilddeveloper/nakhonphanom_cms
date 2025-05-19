import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCategoryListComponent } from './contact-category-list.component';

describe('ContactCategoryListComponent', () => {
  let component: ContactCategoryListComponent;
  let fixture: ComponentFixture<ContactCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
