import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMobileListComponent } from './member-mobile-list.component';

describe('MemberMobileListComponent', () => {
  let component: MemberMobileListComponent;
  let fixture: ComponentFixture<MemberMobileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMobileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMobileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
