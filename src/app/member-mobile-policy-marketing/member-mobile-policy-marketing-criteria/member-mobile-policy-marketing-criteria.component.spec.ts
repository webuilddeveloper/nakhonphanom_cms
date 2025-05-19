import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMobilePolicyMarketingCriteriaComponent } from './member-mobile-policy-marketing-criteria.component';

describe('MemberMobilePolicyMarketingCriteriaComponent', () => {
  let component: MemberMobilePolicyMarketingCriteriaComponent;
  let fixture: ComponentFixture<MemberMobilePolicyMarketingCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMobilePolicyMarketingCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMobilePolicyMarketingCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
