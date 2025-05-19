import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMobilePolicyMarketingListComponent } from './member-mobile-policy-marketing-list.component';

describe('MemberMobilePolicyMarketingListComponent', () => {
  let component: MemberMobilePolicyMarketingListComponent;
  let fixture: ComponentFixture<MemberMobilePolicyMarketingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMobilePolicyMarketingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMobilePolicyMarketingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
