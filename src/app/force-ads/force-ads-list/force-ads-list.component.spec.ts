import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceAdsListComponent } from './force-ads-list.component';

describe('ForceAdsListComponent', () => {
  let component: ForceAdsListComponent;
  let fixture: ComponentFixture<ForceAdsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceAdsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceAdsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
