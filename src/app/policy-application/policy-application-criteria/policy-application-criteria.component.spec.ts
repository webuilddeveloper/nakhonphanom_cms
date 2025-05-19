import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyApplicationCriteriaComponent } from './policy-application-criteria.component';

describe('PolicyApplicationCriteriaComponent', () => {
  let component: PolicyApplicationCriteriaComponent;
  let fixture: ComponentFixture<PolicyApplicationCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyApplicationCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyApplicationCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
