import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceAdsCriteriaComponent } from './force-ads-criteria.component';

describe('ForceAdsCriteriaComponent', () => {
  let component: ForceAdsCriteriaComponent;
  let fixture: ComponentFixture<ForceAdsCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceAdsCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceAdsCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
