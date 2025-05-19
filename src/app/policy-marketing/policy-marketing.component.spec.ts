import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyMarketingComponent } from './policy-marketing.component';

describe('PolicyMarketingComponent', () => {
  let component: PolicyMarketingComponent;
  let fixture: ComponentFixture<PolicyMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
