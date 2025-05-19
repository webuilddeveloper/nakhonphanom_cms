import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareCategoryComponent } from './welfare-category.component';

describe('WelfareCategoryComponent', () => {
  let component: WelfareCategoryComponent;
  let fixture: ComponentFixture<WelfareCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
