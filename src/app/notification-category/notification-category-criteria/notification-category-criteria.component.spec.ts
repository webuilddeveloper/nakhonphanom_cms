import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCategoryCriteriaComponent } from './notification-category-criteria.component';

describe('NotificationCategoryCriteriaComponent', () => {
  let component: NotificationCategoryCriteriaComponent;
  let fixture: ComponentFixture<NotificationCategoryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCategoryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCategoryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
