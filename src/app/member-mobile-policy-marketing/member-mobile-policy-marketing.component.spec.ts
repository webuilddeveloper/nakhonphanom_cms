import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMobilePolicyMarketingComponent } from './member-mobile-policy-marketing.component';

describe('MemberMobilePolicyMarketingComponent', () => {
  let component: MemberMobilePolicyMarketingComponent;
  let fixture: ComponentFixture<MemberMobilePolicyMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMobilePolicyMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMobilePolicyMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
