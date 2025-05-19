import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningCriteriaComponent } from './warning-criteria.component';

describe('WarningCriteriaComponent', () => {
  let component: WarningCriteriaComponent;
  let fixture: ComponentFixture<WarningCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
