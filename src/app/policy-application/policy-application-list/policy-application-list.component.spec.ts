import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyApplicationListComponent } from './policy-application-list.component';

describe('PolicyApplicationListComponent', () => {
  let component: PolicyApplicationListComponent;
  let fixture: ComponentFixture<PolicyApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyApplicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
