import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCategoryComponent } from './contact-category.component';

describe('ContactCategoryComponent', () => {
  let component: ContactCategoryComponent;
  let fixture: ComponentFixture<ContactCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
