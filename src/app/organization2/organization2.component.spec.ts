import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Organization2Component } from './organization2.component';

describe('Organization2Component', () => {
  let component: Organization2Component;
  let fixture: ComponentFixture<Organization2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Organization2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Organization2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
