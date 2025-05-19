import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceAdsComponent } from './force-ads.component';

describe('ForceAdsComponent', () => {
  let component: ForceAdsComponent;
  let fixture: ComponentFixture<ForceAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
