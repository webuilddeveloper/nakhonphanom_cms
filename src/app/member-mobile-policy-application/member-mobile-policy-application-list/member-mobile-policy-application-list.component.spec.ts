import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMobilePolicyApplicationListComponent } from './member-mobile-policy-application-list.component';

describe('MemberMobilePolicyApplicationListComponent', () => {
  let component: MemberMobilePolicyApplicationListComponent;
  let fixture: ComponentFixture<MemberMobilePolicyApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMobilePolicyApplicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMobilePolicyApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
