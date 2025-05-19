import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareCategoryEditComponent } from './welfare-category-edit.component';

describe('WelfareCategoryEditComponent', () => {
  let component: WelfareCategoryEditComponent;
  let fixture: ComponentFixture<WelfareCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
