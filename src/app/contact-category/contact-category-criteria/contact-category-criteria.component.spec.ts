import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCategoryCriteriaComponent } from './contact-category-criteria.component';

describe('ContactCategoryCriteriaComponent', () => {
  let component: ContactCategoryCriteriaComponent;
  let fixture: ComponentFixture<ContactCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
