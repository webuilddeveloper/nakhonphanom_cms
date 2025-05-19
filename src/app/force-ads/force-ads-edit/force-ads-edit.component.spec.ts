import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceAdsEditComponent } from './force-ads-edit.component';

describe('ForceAdsEditComponent', () => {
  let component: ForceAdsEditComponent;
  let fixture: ComponentFixture<ForceAdsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceAdsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceAdsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
