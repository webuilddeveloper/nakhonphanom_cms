import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCategoryEditComponent } from './notification-category-edit.component';

describe('NotificationCategoryEditComponent', () => {
  let component: NotificationCategoryEditComponent;
  let fixture: ComponentFixture<NotificationCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
