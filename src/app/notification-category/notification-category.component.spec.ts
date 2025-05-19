import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCategoryComponent } from './notification-category.component';

describe('NotificationCategoryComponent', () => {
  let component: NotificationCategoryComponent;
  let fixture: ComponentFixture<NotificationCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
