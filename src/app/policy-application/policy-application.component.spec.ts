import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyApplicationComponent } from './policy-application.component';

describe('PolicyApplicationComponent', () => {
  let component: PolicyApplicationComponent;
  let fixture: ComponentFixture<PolicyApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
