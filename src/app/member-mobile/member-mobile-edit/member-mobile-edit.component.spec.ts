import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMobileEditComponent } from './member-mobile-edit.component';

describe('MemberMobileEditComponent', () => {
  let component: MemberMobileEditComponent;
  let fixture: ComponentFixture<MemberMobileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMobileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMobileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
