import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyMarketingListComponent } from './policy-marketing-list.component';

describe('PolicyMarketingListComponent', () => {
  let component: PolicyMarketingListComponent;
  let fixture: ComponentFixture<PolicyMarketingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyMarketingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyMarketingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
