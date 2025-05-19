import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareCategoryListComponent } from './welfare-category-list.component';

describe('WelfareCategoryListComponent', () => {
  let component: WelfareCategoryListComponent;
  let fixture: ComponentFixture<WelfareCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
