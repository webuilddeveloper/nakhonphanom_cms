import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCategoryEditComponent } from './contact-category-edit.component';

describe('ContactCategoryEditComponent', () => {
  let component: ContactCategoryEditComponent;
  let fixture: ComponentFixture<ContactCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
