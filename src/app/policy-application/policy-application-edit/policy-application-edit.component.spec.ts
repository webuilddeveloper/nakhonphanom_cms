import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyApplicationEditComponent } from './policy-application-edit.component';

describe('PolicyApplicationEditComponent', () => {
  let component: PolicyApplicationEditComponent;
  let fixture: ComponentFixture<PolicyApplicationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyApplicationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyApplicationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
