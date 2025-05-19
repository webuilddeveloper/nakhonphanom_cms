import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMobilePolicyApplicationCriteriaComponent } from './member-mobile-policy-application-criteria.component';

describe('MemberMobilePolicyApplicationCriteriaComponent', () => {
  let component: MemberMobilePolicyApplicationCriteriaComponent;
  let fixture: ComponentFixture<MemberMobilePolicyApplicationCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMobilePolicyApplicationCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMobilePolicyApplicationCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
