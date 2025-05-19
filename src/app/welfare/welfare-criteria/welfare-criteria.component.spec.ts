import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareCriteriaComponent } from './welfare-criteria.component';

describe('WelfareCriteriaComponent', () => {
  let component: WelfareCriteriaComponent;
  let fixture: ComponentFixture<WelfareCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
