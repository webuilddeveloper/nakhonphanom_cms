import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCriteriaComponent } from './notification-criteria.component';

describe('NotificationCriteriaComponent', () => {
  let component: NotificationCriteriaComponent;
  let fixture: ComponentFixture<NotificationCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
