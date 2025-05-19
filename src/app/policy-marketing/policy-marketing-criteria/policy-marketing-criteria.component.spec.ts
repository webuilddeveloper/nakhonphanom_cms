import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyMarketingCriteriaComponent } from './policy-marketing-criteria.component';

describe('PolicyMarketingCriteriaComponent', () => {
  let component: PolicyMarketingCriteriaComponent;
  let fixture: ComponentFixture<PolicyMarketingCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyMarketingCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyMarketingCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
