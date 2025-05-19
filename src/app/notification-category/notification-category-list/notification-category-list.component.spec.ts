import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCategoryListComponent } from './notification-category-list.component';

describe('NotificationCategoryListComponent', () => {
  let component: NotificationCategoryListComponent;
  let fixture: ComponentFixture<NotificationCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
