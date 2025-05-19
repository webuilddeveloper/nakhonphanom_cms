import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMobileComponent } from './member-mobile.component';

describe('MemberMobileComponent', () => {
  let component: MemberMobileComponent;
  let fixture: ComponentFixture<MemberMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
