import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyMarketingEditComponent } from './policy-marketing-edit.component';

describe('PolicyMarketingEditComponent', () => {
  let component: PolicyMarketingEditComponent;
  let fixture: ComponentFixture<PolicyMarketingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyMarketingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyMarketingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
