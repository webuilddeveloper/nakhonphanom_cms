import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMobilePolicyApplicationComponent } from './member-mobile-policy-application.component';

describe('MemberMobilePolicyApplicationComponent', () => {
  let component: MemberMobilePolicyApplicationComponent;
  let fixture: ComponentFixture<MemberMobilePolicyApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMobilePolicyApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMobilePolicyApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
