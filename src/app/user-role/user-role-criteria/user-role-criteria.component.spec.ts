import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleCriteriaComponent } from './user-role-criteria.component';

describe('UserRoleCriteriaComponent', () => {
  let component: UserRoleCriteriaComponent;
  let fixture: ComponentFixture<UserRoleCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoleCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
