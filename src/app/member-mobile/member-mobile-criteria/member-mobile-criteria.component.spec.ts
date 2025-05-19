import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMobileCriteriaComponent } from './member-mobile-criteria.component';

describe('MemberMobileCriteriaComponent', () => {
  let component: MemberMobileCriteriaComponent;
  let fixture: ComponentFixture<MemberMobileCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMobileCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMobileCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
